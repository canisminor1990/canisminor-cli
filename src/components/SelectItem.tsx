import React from 'react';
import { Text, Theme } from '@/components';

export interface Props {
  isSelected?: boolean;
  label: string;
}

const SelectItem: React.FC<Props> = ({ isSelected = false, label }) => (
  <Text color={isSelected ? Theme.WhiteBright : Theme.White}>{label}</Text>
);

export default SelectItem;
