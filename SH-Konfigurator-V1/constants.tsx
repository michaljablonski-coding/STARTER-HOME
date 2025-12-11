import { ConfigCategory, InputType, House } from './types';
import { 
  Home, 
  BrickWall, 
  FileText, 
  Thermometer, 
  Wind, 
  Sun, 
  Droplet, 
  Waves, 
  LayoutDashboard, 
  Blinds
} from 'lucide-react';

export const HOUSES: House[] = [
  { 
    id: 'nest_house', 
    name: 'NEST HOUSE', 
    status: 'COMPLETED', 
    basePrice: 164000, 
    area: '70 m²',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Nest-House-1-scaled.png' 
  },
  { 
    id: 'haven_house', 
    name: 'Haven HOUSE', 
    status: 'COMPLETED', 
    basePrice: 184900, 
    area: 'Do ustalenia',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Haven-House-1.png'
  },
  { 
    id: 'balance_house', 
    name: 'Balance HOUSE', 
    status: 'COMPLETED', 
    basePrice: 224900, 
    area: 'Do ustalenia',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Balance-House-1-1024x768.png'
  },
  { 
    id: 'comfort_house', 
    name: 'Comfort HOUSE', 
    status: 'COMPLETED', 
    basePrice: 273400, 
    area: 'Do ustalenia',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Comfort-House-1-1024x768.png'
  },
  { 
    id: 'vista_house', 
    name: 'Vista HOUSE', 
    status: 'COMPLETED', 
    basePrice: 295700, 
    area: 'Do ustalenia',
    image: 'https://starterhome.pl/wp-content/uploads/2025/10/Vista-House-1-1024x768.png'
  },
  { 
    id: 'peak_house', 
    name: 'Peak HOUSE', 
    status: 'COMPLETED', 
    basePrice: 259800, 
    area: 'Do ustalenia',
    image: 'https://starterhome.pl/wp-content/uploads/2025/09/Peak-House-1-scaled.png'
  },
  { 
    id: 'skyline_house', 
    name: 'Skyline HOUSE', 
    status: 'COMPLETED', 
    basePrice: 174900, 
    area: 'Do ustalenia',
    image: 'https://starterhome.pl/wp-content/uploads/2025/10/ujecie-1-scaled.png'
  },
  { 
    id: 'zenith_house', 
    name: 'Zenith HOUSE', 
    status: 'COMPLETED', 
    basePrice: 184900, 
    area: 'Do ustalenia',
    image: 'https://starterhome.pl/wp-content/uploads/2025/10/enhanced_ujecie-1-przod-scaled.png'
  },
];

const NEST_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 164000, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.' },
      { id: 'developer', label: 'Stan deweloperski', price: 219800, description: 'Instalacje, tynki, wylewki, ocieplenie.' }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 41250 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 22700 },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 48500 },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 19800 },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000 }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 3,5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000 }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika',
    iconName: 'Sun',
    inputType: InputType.CHECKBOX,
    basePrice: 0,
    info: 'Ceny fotowoltaiki ustalane są indywidualnie wg aktualnego cennika.'
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 18400
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²'
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 11800
  }
];

const HAVEN_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 184900, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.' },
      { id: 'developer', label: 'Stan deweloperski', price: 286700, description: 'Instalacje, tynki, wylewki, ocieplenie.' }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 51750 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 28770 },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 58800 },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 23800 },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000 }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 3,5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000 }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika',
    iconName: 'Sun',
    inputType: InputType.CHECKBOX,
    basePrice: 0,
    info: 'Ceny fotowoltaiki ustalane są indywidualnie wg aktualnego cennika.'
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²'
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 9500
  }
];

const BALANCE_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 224900, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.' },
      { id: 'developer', label: 'Stan deweloperski', price: 329700, description: 'Instalacje, tynki, wylewki, ocieplenie.' }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 72250 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 39050 },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 67200 },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 30800 },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania 5kW', price: 7000 }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000 }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika',
    iconName: 'Sun',
    inputType: InputType.CHECKBOX,
    basePrice: 0,
    info: 'Ceny fotowoltaiki ustalane są indywidualnie wg aktualnego cennika.'
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²'
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 10500
  }
];

const COMFORT_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 273400, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.' },
      { id: 'developer', label: 'Stan deweloperski', price: 377700, description: 'Instalacje, tynki, wylewki, ocieplenie.' }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 77250 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 42300 },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 68800 },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 33800 },
      { id: 'ac_heat', label: 'Klimatyzator 5kW z funkcją grzania', price: 8000 }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000 }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika',
    iconName: 'Sun',
    inputType: InputType.CHECKBOX,
    basePrice: 0,
    info: 'Ceny fotowoltaiki ustalane są indywidualnie wg aktualnego cennika.'
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²'
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 11900
  }
];

const VISTA_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 295700, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.' },
      { id: 'developer', label: 'Stan deweloperski', price: 420900, description: 'Instalacje, tynki, wylewki, ocieplenie.' }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 94500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 55100 },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 77600 },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 37800 },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 8000 }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja 5kW',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 8000 }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika',
    iconName: 'Sun',
    inputType: InputType.CHECKBOX,
    basePrice: 0,
    info: 'Ceny fotowoltaiki ustalane są indywidualnie wg aktualnego cennika.'
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²'
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 12500
  }
];

const SKYLINE_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 174900, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.' },
      { id: 'developer', label: 'Stan deweloperski', price: 239800, description: 'Instalacje, tynki, wylewki, ocieplenie.' }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 26250 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 28700 },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 58800 },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 23800 },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000 }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000 }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika',
    iconName: 'Sun',
    inputType: InputType.CHECKBOX,
    basePrice: 0,
    info: 'Ceny fotowoltaiki ustalane są indywidualnie wg aktualnego cennika.'
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²'
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 8000
  }
];

const ZENITH_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 184900, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.' },
      { id: 'developer', label: 'Stan deweloperski', price: 249800, description: 'Instalacje, tynki, wylewki, ocieplenie.' }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 26250 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 28700 },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 58800 },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 23800 },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000 }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000 }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika',
    iconName: 'Sun',
    inputType: InputType.CHECKBOX,
    basePrice: 0,
    info: 'Ceny fotowoltaiki ustalane są indywidualnie wg aktualnego cennika.'
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²'
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 9500
  }
];

const PEAK_HOUSE_CONFIG: ConfigCategory[] = [
  {
    id: 'base_stage',
    title: 'Stan Inwestycji',
    iconName: 'Home',
    inputType: InputType.RADIO,
    variants: [
      { id: 'raw_closed', label: 'Stan surowy zamknięty', price: 259800, description: 'Konstrukcja, ściany, dach, okna, drzwi zewnętrzne.' },
      { id: 'developer', label: 'Stan deweloperski', price: 359700, description: 'Instalacje, tynki, wylewki, ocieplenie.' }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundamenty',
    iconName: 'BrickWall',
    inputType: InputType.RADIO,
    variants: [
      { id: 'slab', label: 'Płyta fundamentowa (wykonanie)', price: 50250 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'formalities',
    title: 'Formalności urzędowe',
    iconName: 'FileText',
    inputType: InputType.RADIO,
    variants: [
      { id: 'service', label: 'Zlecam Wam (Pozwolenie/Zgłoszenie)', price: 9500 },
      { id: 'self', label: 'Robię we własnym zakresie', price: 0 }
    ]
  },
  {
    id: 'heating',
    title: 'Ogrzewanie',
    iconName: 'Thermometer',
    inputType: InputType.SELECT, 
    variants: [
      { id: 'floor_electric', label: 'Ogrzewanie podłogowe elektryczne', price: 27700 },
      { id: 'floor_water_pump', label: 'Podłogowe wodne + Pompa ciepła + Wylewka', price: 58800 },
      { id: 'floor_water_only', label: 'Podłogowe wodne (samo rozłożenie) + Klient kupuje pompę', price: 23800 },
      { id: 'ac_heat', label: 'Klimatyzator z funkcją grzania', price: 7000 }
    ]
  },
  {
    id: 'ac',
    title: 'Klimatyzacja',
    iconName: 'Wind',
    inputType: InputType.RADIO,
    info: 'Jeśli chcesz inną ilość jednostek, wycena jest indywidualna.',
    variants: [
      { id: 'none', label: 'Brak', price: 0 },
      { id: 'unit_1', label: '1 jednostka', price: 7000 }
    ]
  },
  {
    id: 'pv',
    title: 'Fotowoltaika',
    iconName: 'Sun',
    inputType: InputType.CHECKBOX,
    basePrice: 0,
    info: 'Ceny fotowoltaiki ustalane są indywidualnie wg aktualnego cennika.'
  },
  {
    id: 'septic',
    title: 'Szambo',
    iconName: 'Droplet',
    inputType: InputType.CHECKBOX,
    basePrice: 14500
  },
  {
    id: 'treatment',
    title: 'Przydomowa oczyszczalnia ścieków',
    iconName: 'Waves',
    inputType: InputType.CHECKBOX,
    basePrice: 17400
  },
  {
    id: 'terrace',
    title: 'Taras',
    iconName: 'LayoutDashboard',
    inputType: InputType.NUMBER,
    unitPrice: 990,
    unitLabel: 'm²'
  },
  {
    id: 'blinds',
    title: 'Rolety',
    iconName: 'Blinds',
    inputType: InputType.CHECKBOX,
    basePrice: 10500
  }
];

// Fallback config for other houses (can be replaced later)
const DEFAULT_CONFIG = NEST_HOUSE_CONFIG.map(c => ({...c}));

export const getHouseConfig = (houseId: string): ConfigCategory[] => {
  if (houseId === 'nest_house') {
    return NEST_HOUSE_CONFIG;
  }
  if (houseId === 'haven_house') {
    return HAVEN_HOUSE_CONFIG;
  }
  if (houseId === 'balance_house') {
    return BALANCE_HOUSE_CONFIG;
  }
  if (houseId === 'comfort_house') {
    return COMFORT_HOUSE_CONFIG;
  }
  if (houseId === 'vista_house') {
    return VISTA_HOUSE_CONFIG;
  }
  if (houseId === 'peak_house') {
    return PEAK_HOUSE_CONFIG;
  }
  if (houseId === 'skyline_house') {
    return SKYLINE_HOUSE_CONFIG;
  }
  if (houseId === 'zenith_house') {
    return ZENITH_HOUSE_CONFIG;
  }
  // For now, return the same structure for others, but marked as placeholders if needed
  // Or simply return default to avoid crashing
  return DEFAULT_CONFIG;
};

// Helper to map string name to component
export const getIcon = (name: string) => {
  switch (name) {
    case 'Home': return <Home className="w-6 h-6" />;
    case 'BrickWall': return <BrickWall className="w-6 h-6" />;
    case 'FileText': return <FileText className="w-6 h-6" />;
    case 'Thermometer': return <Thermometer className="w-6 h-6" />;
    case 'Wind': return <Wind className="w-6 h-6" />;
    case 'Sun': return <Sun className="w-6 h-6" />;
    case 'Droplet': return <Droplet className="w-6 h-6" />;
    case 'Waves': return <Waves className="w-6 h-6" />;
    case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6" />;
    case 'Blinds': return <Blinds className="w-6 h-6" />;
    default: return <Home className="w-6 h-6" />;
  }
};