import React, { useState } from 'react';
import { BorderBox, Text, Theme } from '@/components';
import { useInput } from '@/hooks';

interface Props {
  title: string;
  handleSubmit: (submitValue: boolean) => void;
  children: any;
}

const ConfirmBox: React.FC<Props> = ({ title, handleSubmit, children }) => {
  const [value, setValue] = useState<Boolean>(false);

  useInput((input) => {
    if (input.toLowerCase() === 'y') {
      handleSubmit(true);
      setValue(true);
    }
    if (input.toLowerCase() === 'n') {
      handleSubmit(false);
    }
  });

  if (value) return children;

  return (
    <BorderBox paddingLeft={1} flexDirection="row">
      <Text color={Theme.BlueBright}>{`➤ `}</Text>
      <Text>{`${title} `}</Text>
      <Text color={Theme.BlackBright}>(Y/n)</Text>
    </BorderBox>
  );
};

export default ConfirmBox;
