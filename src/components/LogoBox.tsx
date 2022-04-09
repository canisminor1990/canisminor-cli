import React from 'react';
import { BigText, BorderBox, Gradient, Text, Theme, Box } from '@/components';
import { CLI_VERSION } from '@/utils/const';

interface Props {
  text: string;
  width?: string | number;
}

const LogoBox: React.FC<Props> = ({ text, width }) => {
  return (
    <BorderBox
      width={width}
      height={6}
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Box height={2} justifyContent="center" alignItems="center">
        <Gradient
          colors={[
            Theme.Red,
            Theme.Magenta,
            Theme.Blue,
            Theme.Cyan,
            Theme.Green,
            Theme.Yellow,
            Theme.Red,
          ]}
        >
          <BigText text={text} font="tiny" />
        </Gradient>
      </Box>
      <Box height={2} alignItems="flex-end">
        <Text color={Theme.BlackBright}>{CLI_VERSION}</Text>
      </Box>
    </BorderBox>
  );
};

export default LogoBox;
