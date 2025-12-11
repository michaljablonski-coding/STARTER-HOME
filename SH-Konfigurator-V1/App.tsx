import React, { useState, useEffect, useMemo } from 'react';
import { HOUSES, getHouseConfig } from './constants';
import { UserSelection, InputType, House } from './types';
import { OptionCard } from './components/OptionCard';
import { 
  Receipt, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Info, 
  X,
  BedDouble,
  Clock,
  ShieldCheck,
  MapPin,
  Layers,
  Check,
  Building2,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';

const App: React.FC = () => {
  // Navigation State
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);

  // Configurator State
  const [selection, setSelection] = useState<UserSelection>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load configuration when a house is selected
  const configData = useMemo(() => {
    return selectedHouse ? getHouseConfig(selectedHouse.id) : [];
  }, [selectedHouse]);

  // Reset defaults when house changes - Select CHEAPEST options
  useEffect(() => {
    if (selectedHouse) {
      const defaults: UserSelection = {};
      configData.forEach(cat => {
        if ((cat.inputType === InputType.RADIO || cat.inputType === InputType.SELECT) && cat.variants && cat.variants.length > 0) {
          // Find the variant with the lowest price
          const cheapestVariant = cat.variants.reduce((min, current) => 
            current.price < min.price ? current : min
          , cat.variants[0]);
          defaults[cat.id] = cheapestVariant.id;
        } else if (cat.inputType === InputType.NUMBER) {
          defaults[cat.id] = 0;
        } else {
          // For checkboxes, false (unchecked) is usually 0 cost, so it's the cheapest
          defaults[cat.id] = false;
        }
      });
      setSelection(defaults);
    }
  }, [selectedHouse, configData]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    hasLand: '', // '' | 'yes' | 'no'
    note: ''
  });

  // Calculate Total Price
  useEffect(() => {
    let sum = 0;
    configData.forEach(cat => {
      const val = selection[cat.id];
      
      if (cat.inputType === InputType.CHECKBOX && val === true) {
        sum += cat.basePrice || 0;
      } else if (cat.inputType === InputType.NUMBER) {
        sum += (val as number) * (cat.unitPrice || 0);
      } else if ((cat.inputType === InputType.RADIO || cat.inputType === InputType.SELECT) && cat.variants) {
        const variant = cat.variants.find(v => v.id === val);
        if (variant) {
          sum += variant.price;
        }
      }
    });
    setTotalPrice(sum);
  }, [selection, configData]);

  const handleOptionChange = (id: string, value: any) => {
    setSelection(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const selectedItemsList = useMemo(() => {
    const items: Array<{ label: string, price: number, category: string }> = [];
    configData.forEach(cat => {
      const val = selection[cat.id];
      if (!val) return;
      if (val === 'none') return;

      if (cat.inputType === InputType.CHECKBOX && val === true) {
        items.push({ category: cat.title, label: 'Tak', price: cat.basePrice || 0 });
      } else if (cat.inputType === InputType.NUMBER && (val as number) > 0) {
        items.push({ 
          category: cat.title,
          label: `${val} ${cat.unitLabel}`, 
          price: (val as number) * (cat.unitPrice || 0) 
        });
      } else if (cat.variants) {
        const variant = cat.variants.find(v => v.id === val);
        if (variant) {
           items.push({ category: cat.title, label: variant.label, price: variant.price });
        }
      }
    });
    return items;
  }, [selection, configData]);

  // Loan Calculation: 20 years (240 months), 10% APR
  const monthlyInstallment = useMemo(() => {
    if (totalPrice === 0) return 0;
    const r = 0.10 / 12; // Monthly rate
    const n = 240; // Months (20 years)
    const monthly = (totalPrice * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(monthly);
  }, [totalPrice]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("House:", selectedHouse?.name);
    console.log("Form Data:", formData);
    console.log("Configuration:", selection);
    setFormSubmitted(true);
    setTimeout(() => {
        setFormSubmitted(false);
        setIsFormOpen(false);
        setFormData({ name: '', phone: '', email: '', hasLand: '', note: '' });
    }, 3000);
  };

  // --- VIEW: HOUSE SELECTION ---
  if (!selectedHouse) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
         <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-30 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <img 
                  src="https://starterhome.pl/wp-content/uploads/2025/08/Bez-tla-wasko.png" 
                  alt="Starter Home" 
                  className="h-10 md:h-12 w-auto object-contain"
                 />
              </div>
            </div>
         </header>

         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <span className="bg-[#f7faf3] text-[#729c36] text-xs font-bold px-3 py-1 uppercase tracking-widest border border-[#e2e8da] rounded-full">
                    Oferta Domów Modułowych
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">Wybierz swój model</h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                    Każdy z naszych domów został zaprojektowany z myślą o komforcie i funkcjonalności. Wybierz model, aby przejść do szczegółowej konfiguracji.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {HOUSES.map((house) => (
                    <div 
                        key={house.id} 
                        onClick={() => setSelectedHouse(house)}
                        className="group bg-white border border-gray-200 hover:border-[#729c36] hover:shadow-[0_10px_40px_-10px_rgba(114,156,54,0.15)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                    >
                        <div className="relative h-64 overflow-hidden bg-gray-100">
                            <img 
                                src={house.image} 
                                alt={house.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4">
                                {house.status === 'COMPLETED' ? (
                                    <span className="bg-[#729c36] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-md">
                                        Ceny uzupełnione
                                    </span>
                                ) : (
                                    <span className="bg-gray-800 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm opacity-70">
                                        Do uzupełnienia
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{house.name}</h3>
                            <p className="text-sm text-gray-400 font-medium mb-4">{house.area || 'Powierzchnia do ustalenia'}</p>
                            
                            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-500">
                                    {house.basePrice > 0 ? `od ${house.basePrice.toLocaleString()} zł` : 'Wycena indyw.'}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#729c36] transition-colors">
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </main>
      </div>
    );
  }

  // --- VIEW: CONFIGURATOR ---
  return (
    <div className="min-h-screen pb-40 bg-gray-50 font-sans relative selection:bg-[#729c36] selection:text-white animate-fade-in">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-30 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <button 
                onClick={() => setSelectedHouse(null)}
                className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider mr-4"
             >
                <ChevronLeft className="w-5 h-5" />
                Powrót
             </button>
             <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
             <img 
              src="https://starterhome.pl/wp-content/uploads/2025/08/Bez-tla-wasko.png" 
              alt="Starter Home" 
              className="h-8 md:h-10 w-auto object-contain ml-0 sm:ml-4"
             />
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
             <span className="text-[#729c36] font-bold uppercase tracking-widest">{selectedHouse.name}</span>
          </div>
        </div>
      </header>

      {/* Hero / Specification Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column: Full Height Image */}
                <div className="relative h-64 lg:h-auto min-h-[400px] lg:min-h-[600px] w-full bg-gray-100 group overflow-hidden">
                    <img
                        src={selectedHouse.image}
                        alt={selectedHouse.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Right Column: Specifications */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                    <div className="inline-block mb-3">
                        <span className="bg-[#f7faf3] text-[#729c36] text-xs font-bold px-3 py-1 uppercase tracking-widest border border-[#e2e8da]">
                            {selectedHouse.status === 'COMPLETED' ? 'Model Skonfigurowany' : 'Wersja Poglądowa'}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                        {selectedHouse.name}
                    </h1>
                    <div className="text-2xl font-bold text-[#729c36] mb-8 flex items-baseline gap-2">
                        {selectedHouse.basePrice > 0 
                            ? `Cena od: ${selectedHouse.basePrice.toLocaleString()} zł`
                            : 'Cena: Wycena indywidualna'
                        }
                        <span className="text-sm font-normal text-gray-400">Stan surowy</span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-10 text-lg font-light">
                        {selectedHouse.name} to nowoczesna propozycja dla osób ceniących design i funkcjonalność. Skonfiguruj go poniżej, wybierając odpowiednie pakiety instalacyjne i wykończeniowe.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 border border-[#e2e8da] bg-[#e2e8da] gap-px">
                        {[
                            { label: 'Powierzchnia', value: selectedHouse.area || '-' },
                            { label: 'Stan', value: 'Surowy/Dewel.' },
                            { label: 'Gwarancja', value: 'Tak' },
                        ].map((item, index) => (
                             <div key={index} className="bg-[#f7faf3] p-6 flex flex-col items-center justify-center text-center h-32 hover:bg-white transition-colors duration-300">
                                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-medium mb-2">{item.label}</span>
                                <span className="text-lg md:text-xl font-bold text-[#729c36]">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Floor Plans & Features Section */}
      <section className="bg-white border-b border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Floor Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
                <div className="flex flex-col items-center group">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 group-hover:text-[#729c36] transition-colors">
                        RZUT PARTERU
                    </span>
                    <div className="bg-white p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] w-full transition-transform duration-500 group-hover:-translate-y-1">
                        <img 
                            src="https://howsmart.pl/wp-content/uploads/2024/12/ONE-STEP-SMART-70-RZUT-scaled-2.jpg" 
                            alt="Rzut parteru" 
                            className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center group">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 group-hover:text-[#729c36] transition-colors">
                        RZUT PIĘTRA (Jeśli dotyczy)
                    </span>
                    <div className="bg-white p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] w-full transition-transform duration-500 group-hover:-translate-y-1">
                        <img 
                            src="https://howsmart.pl/wp-content/uploads/2025/02/EMILY-RZUT-PL-scaled.jpg" 
                            alt="Rzut piętra" 
                            className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 pt-16 border-t border-gray-100">
                {[
                    { icon: BedDouble, label: "Komfort" },
                    { icon: Clock, label: "Szybka budowa" },
                    { icon: ShieldCheck, label: "Gwarancja Ceny" },
                    { icon: MapPin, label: "Cała Polska" },
                    { icon: Layers, label: "Wysoka Izolacja" }
                ].map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                        <div className="w-20 h-20 border border-gray-100 rounded-full bg-gray-50 flex items-center justify-center mb-5 group-hover:bg-[#f7faf3] group-hover:border-[#729c36] transition-all duration-300 shadow-sm">
                            <feature.icon className="w-8 h-8 text-gray-400 group-hover:text-[#729c36] transition-colors" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-widest group-hover:text-[#729c36] transition-colors">
                            {feature.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Configuration Form */}
          <div className="lg:col-span-2 space-y-0 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] bg-white h-fit">
            <div className="bg-gray-900 p-6 md:p-8 text-white">
              <h2 className="font-bold text-2xl uppercase tracking-wide mb-2">Konfigurator: {selectedHouse.name}</h2>
              <p className="text-gray-400 text-sm font-light">
                Dostosuj swój przyszły dom do własnych potrzeb, wybierając poniższe pakiety.
              </p>
            </div>

            <div className="p-6 md:p-8 space-y-12">
              {configData.map((category) => (
                <div key={category.id} className="border-b border-dashed border-gray-200 last:border-0 pb-12 last:pb-0">
                  <OptionCard
                    category={category}
                    value={selection[category.id]}
                    onChange={handleOptionChange}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Summary List (Sticky on Desktop only) */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-28">
              <div className="bg-white border border-gray-200 shadow-xl shadow-gray-200/50">
                <div className="bg-[#f7faf3] px-6 py-5 border-b border-[#e2e8da] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 border border-[#e2e8da]">
                             <Receipt className="w-5 h-5 text-[#729c36]" />
                        </div>
                        <div>
                            <h2 className="font-bold uppercase tracking-wide text-sm text-gray-900">Podsumowanie</h2>
                            <p className="text-xs text-gray-500">Wybrane opcje</p>
                        </div>
                    </div>
                </div>
                
                <div className="p-6 bg-white min-h-[300px] flex flex-col">
                  <div className="space-y-4 flex-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {selectedItemsList.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-40 text-gray-400 text-center">
                            <Building2 className="w-10 h-10 mb-2 opacity-20" />
                            <p className="text-sm italic">Brak wybranych dodatków</p>
                        </div>
                    )}
                    {selectedItemsList.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start text-sm group border-b border-dashed border-gray-100 last:border-0 pb-3 last:pb-0">
                        <div className="pr-4">
                            <span className="block text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">{item.category}</span>
                            <span className="text-gray-800 font-medium">{item.label}</span>
                        </div>
                        <span className="font-bold text-[#729c36] whitespace-nowrap bg-[#f7faf3] px-2 py-1 text-xs">
                          {item.price === 0 ? 'W cenie' : `+ ${item.price.toLocaleString()} zł`}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Suma dodatków</span>
                        <span className="text-xl font-bold text-gray-900">
                            {(totalPrice - (selectedItemsList.length > 0 ? 0 : 0)).toLocaleString()} zł
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_30px_rgba(0,0,0,0.08)] z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-4 gap-4">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-10 w-full md:w-auto">
             
             {/* Total Price */}
             <div className="flex flex-col items-center sm:items-start">
                <div className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1">Całkowity koszt inwestycji</div>
                <div className="text-3xl sm:text-4xl font-black text-[#729c36] leading-none tracking-tight">
                    {totalPrice.toLocaleString()} <span className="text-lg text-gray-400 font-normal ml-1">PLN</span>
                </div>
             </div>

             {/* Loan Calculator */}
             <div className="hidden sm:flex flex-col items-start pl-8 border-l border-gray-200 h-10 justify-center">
                <div className="flex items-center gap-1 group relative cursor-help">
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Rata (20 lat)</span>
                    <Info className="w-3 h-3 text-gray-300" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-gray-900 text-white text-xs text-center hidden group-hover:block z-50 shadow-xl">
                        <p className="font-bold mb-1">Symulacja kredytu</p>
                        <p className="opacity-80">Okres: 20 lat (240 rat)</p>
                        <p className="opacity-80">RRSO: 10%</p>
                        <p className="mt-2 text-[10px] opacity-60 border-t border-gray-700 pt-2">To jest tylko symulacja. Ostateczna oferta zależy od banku.</p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
                <div className="text-xl font-bold text-gray-700 leading-none mt-1">
                    {monthlyInstallment.toLocaleString()} <span className="text-xs text-gray-400 font-normal">PLN / mc</span>
                </div>
             </div>
          </div>

          <button 
            onClick={() => setIsFormOpen(true)}
            className="w-full md:w-auto bg-[#729c36] hover:bg-[#5d822b] text-white font-bold text-base md:text-lg py-4 px-12 transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/40 flex justify-center items-center gap-3 uppercase tracking-wider group"
          >
            <span>Złóż zapytanie</span>
            <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

        </div>
      </div>

      {/* Inquiry Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-2xl shadow-2xl relative animate-slide-up flex flex-col max-h-[90vh]">
                
                {/* Header */}
                <div className="bg-white border-b border-gray-100 p-6 flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-xl text-gray-900 uppercase tracking-wide">Wyślij zapytanie</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Model: <strong className="text-gray-900">{selectedHouse.name}</strong>
                        </p>
                    </div>
                    <button onClick={() => setIsFormOpen(false)} className="hover:bg-gray-100 p-2 transition-colors text-gray-400 hover:text-gray-900">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    {formSubmitted ? (
                        <div className="py-12 flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-[#f7faf3] rounded-full flex items-center justify-center mb-6 border border-[#e2e8da]">
                                <CheckCircle2 className="w-10 h-10 text-[#729c36]" />
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-3">Dziękujemy!</h4>
                            <p className="text-gray-600 max-w-sm mx-auto">Twoje zapytanie dla domu <strong>{selectedHouse.name}</strong> zostało wysłane. Nasz doradca skontaktuje się z Tobą w ciągu 24 godzin.</p>
                            <button 
                                onClick={() => {setIsFormOpen(false); setFormSubmitted(false)}}
                                className="mt-8 text-sm font-bold text-[#729c36] hover:underline uppercase tracking-wider"
                            >
                                Zamknij okno
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-8">
                            
                            {/* Personal Info Section */}
                            <div className="space-y-6">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Dane Kontaktowe</h4>
                                
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#729c36] transition-colors">Imię i Nazwisko</label>
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="np. Jan Kowalski"
                                            className="w-full p-4 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#729c36] focus:ring-1 focus:ring-[#729c36] outline-none transition-all placeholder:text-gray-400"
                                            value={formData.name}
                                            onChange={e => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#729c36] transition-colors">Telefon</label>
                                            <input 
                                                required
                                                type="tel" 
                                                placeholder="+48 ..."
                                                className="w-full p-4 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#729c36] focus:ring-1 focus:ring-[#729c36] outline-none transition-all placeholder:text-gray-400"
                                                value={formData.phone}
                                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#729c36] transition-colors">E-mail</label>
                                            <input 
                                                required
                                                type="email" 
                                                placeholder="jan@example.com"
                                                className="w-full p-4 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#729c36] focus:ring-1 focus:ring-[#729c36] outline-none transition-all placeholder:text-gray-400"
                                                value={formData.email}
                                                onChange={e => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info Section */}
                            <div className="space-y-6">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Szczegóły Inwestycji</h4>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">Czy posiadasz już działkę?</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({...formData, hasLand: 'yes'})}
                                            className={`p-4 border flex items-center justify-center gap-2 transition-all ${
                                                formData.hasLand === 'yes' 
                                                ? 'border-[#729c36] bg-[#f7faf3] text-[#729c36] font-bold ring-1 ring-[#729c36]' 
                                                : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600'
                                            }`}
                                        >
                                            {formData.hasLand === 'yes' && <Check className="w-4 h-4" />}
                                            Tak, mam działkę
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({...formData, hasLand: 'no'})}
                                            className={`p-4 border flex items-center justify-center gap-2 transition-all ${
                                                formData.hasLand === 'no' 
                                                ? 'border-[#729c36] bg-[#f7faf3] text-[#729c36] font-bold ring-1 ring-[#729c36]' 
                                                : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600'
                                            }`}
                                        >
                                            {formData.hasLand === 'no' && <Check className="w-4 h-4" />}
                                            Nie mam działki
                                        </button>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#729c36] transition-colors">Wiadomość / Dodatkowe pytania</label>
                                    <textarea 
                                        rows={3}
                                        placeholder="Co jeszcze powinniśmy wiedzieć?"
                                        className="w-full p-4 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#729c36] focus:ring-1 focus:ring-[#729c36] outline-none transition-all placeholder:text-gray-400 resize-none"
                                        value={formData.note}
                                        onChange={e => setFormData({...formData, note: e.target.value})}
                                    />
                                </div>
                            </div>
                        </form>
                    )}
                </div>

                {!formSubmitted && (
                    <div className="p-6 border-t border-gray-100 bg-gray-50">
                         <button 
                            onClick={handleFormSubmit}
                            type="button" 
                            className="w-full bg-[#729c36] hover:bg-[#5d822b] text-white font-bold py-4 px-6 transition-all shadow-md hover:shadow-lg uppercase tracking-widest flex items-center justify-center gap-2"
                        >
                            <span>Wyślij formularz</span>
                            <div className="w-px h-4 bg-white/30 mx-2"></div>
                            <span className="font-normal normal-case opacity-90">Razem: {totalPrice.toLocaleString()} zł</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default App;