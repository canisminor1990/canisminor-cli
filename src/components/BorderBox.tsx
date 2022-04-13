import React, { ReactNode } from 'react';
import { Box, Theme } from '@/components';
import { BOX_WIDTH } from '@/utils/const';

interface Props {
  width?: number | string;
  height?: number | string;
  paddingLeft?: number;
  paddingRight?: number;
  flexDirection?: 'column' | 'row';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between';
  children?: ReactNode;
}

const BorderBox: React.FC<Props> = ({
  width = BOX_WIDTH,
  height,
  paddingLeft = 1,
  paddingRight = 1,
  flexDirection = 'column',
  alignItems,
  justifyContent,
  children,
}) => {
  return (
    <Box
      borderStyle="round"
      width={width}
      height={height}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      borderColor={Theme.Black}
    >
      {children}
    </Box>
  );
};

export default BorderBox;
