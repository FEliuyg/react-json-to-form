// export type JSONFormSchemaItemType =
//   | 'text'
//   | 'input'
//   | 'number'
//   | 'select'
//   | 'checkbox'
//   | 'radio'
//   | 'color'
//   | 'array';

interface JSONFormSchemaItemBaseType {
  displayName: string;
  name: string;
  tip?: string;
}

export interface JSONFormTextSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'text';
  value: string;
}

export interface JSONFormInputSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'input';
  value: string;
}

export interface JSONFormNumberSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'number';
  value: number;
}

export interface JSONFormSelectSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'select';
  value: number | string;
}

export interface JSONFormBooleanSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'boolean';
  value: boolean;
}

export interface JSONFormRadioSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'radio';
  value: string | number;
}

export interface JSONFormColorSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'color';
  value: string;
}

export interface JSONFormSliderSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'slider';
  value: number;
}

export interface JSONFormFileSchemaItem extends JSONFormSchemaItemBaseType {
  type: 'file';
  value: string;
}

export interface JSONFormArrayItemSchemaItem extends JSONFormSchemaItemBaseType {
  value: JSONFormSchemaProps;
}

export interface JSONFormArraySchemaItem<
  T extends JSONFormArrayItemSchemaItem = JSONFormArrayItemSchemaItem
> extends JSONFormSchemaItemBaseType {
  type: 'array';
  value: T[];
  template: T;
}

export interface JSONNoneTypeSchemaItem extends JSONFormSchemaItemBaseType {
  value: JSONFormSchemaItemProps[];
}

export type JSONFormAtomicSchemaItemProps =
  | JSONFormTextSchemaItem
  | JSONFormInputSchemaItem
  | JSONFormNumberSchemaItem
  | JSONFormSelectSchemaItem
  | JSONFormBooleanSchemaItem
  | JSONFormRadioSchemaItem
  | JSONFormArraySchemaItem
  | JSONFormSliderSchemaItem
  | JSONFormFileSchemaItem
  | JSONFormColorSchemaItem;

export type JSONFormSchemaItemProps = JSONFormAtomicSchemaItemProps | JSONNoneTypeSchemaItem;

export type JSONFormSchemaProps = JSONFormSchemaItemProps[];

export interface JSONFormProps {
  schema: JSONFormSchemaProps;
  onChange: (value: unknown) => void;
}
