export enum InputType {
  SELECT = 'SELECT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  NUMBER = 'NUMBER'
}

export interface OptionVariant {
  id: string;
  label: string;
  price: number;
  description?: string;
}

export interface ConfigCategory {
  id: string;
  title: string;
  iconName: string;
  inputType: InputType;
  variants?: OptionVariant[]; // For Select/Radio
  basePrice?: number; // For Checkbox
  unitPrice?: number; // For Number input (e.g. per m2)
  unitLabel?: string;
  info?: string; // Additional info (like for AC/PV)
}

export interface UserSelection {
  [categoryId: string]: string | boolean | number;
}

export interface House {
  id: string;
  name: string;
  status: 'COMPLETED' | 'DRAFT'; // Ceny uzupełnione vs Do uzupełnienia
  image: string;
  basePrice: number; // Cena startowa (dla wyświetlania na karcie)
  area: string; // np. 70 m2
}