import React from 'react';
import { Box, Text, Theme } from '@/components';

interface Props {
  text: string;
  color?: string;
  type?: 'normal' | 'success' | 'warn' | 'error';
}

const Log: React.FC<Props> = ({ text, type = 'normal', color }) => {
  const data = {
    normal: {
      icon: '●',
      color: Theme.BlueBright,
    },
    success: {
      icon: '✔︎',
      color: Theme.GreenBright,
    },
    warn: {
      icon: '⚠︎',
      color: Theme.Yellow,
    },
    error: {
      icon: '✘',
      color: Theme.Red,
    },
  };
  return (
    <Box>
      <Text color={data[type].color}>{`${data[type].icon} `}</Text>
      <Text color={color}>{text}</Text>
    </Box>
  );
};

export default Log;
