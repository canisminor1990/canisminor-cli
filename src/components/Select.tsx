import React from 'react';
import { SelectIndicator, SelectInput, SelectItem } from '@/components';
import { Service } from '@/pages/ColorTheme/service';

export interface ItemOfSelect {
  label?: string;
  value: any;
  key?: string | number | undefined;
  component?: any;
  url?: string;
  service?: Service;
}

interface Props<T extends ItemOfSelect = ItemOfSelect> {
  items: ReadonlyArray<T> | any;
  onSelect: ((item: T) => void) | undefined;
}

const Select: React.FC<Props> = ({ items, onSelect }) => {
  return (
    <SelectInput
      items={items}
      onSelect={onSelect}
      itemComponent={SelectItem}
      indicatorComponent={SelectIndicator}
    />
  );
};

export default Select;
