import React from 'react';
import { Box, Text, Theme } from '@/components';

export interface Props {
  isSelected?: boolean;
}

const SelectIndicator: React.FC<Props> = ({ isSelected = false }) => (
  <Box marginRight={1}>
    {isSelected ? <Text color={Theme.BlueBright}>{'➤'}</Text> : <Text> </Text>}
  </Box>
);

export default SelectIndicator;
