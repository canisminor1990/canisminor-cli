import React from 'react';
import { BorderBox, Text } from '@/components';

interface Props {
  text: string;
}

const TitleBox: React.FC<Props> = ({ text }) => {
  return (
    <BorderBox justifyContent="center" flexDirection="row">
      <Text>{text}</Text>
    </BorderBox>
  );
};

export default TitleBox;
