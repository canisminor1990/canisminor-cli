import React, { useState } from 'react';
import {
  Theme,
  Text,
  Box,
  ConfirmBox,
  TitleBox,
  Log,
  BorderBox,
} from '@/components';
import { BOX_WIDTH } from '@/utils/const';
import { genPlist } from './genPlist';
import { useStore } from '@/store';

const App: React.FC = () => {
  const { setHistory } = useStore();
  const [path, setPath] = useState<string>('');

  const handleSubmit = (result: boolean) => {
    if (!result) return setHistory('/');
    const filepath = genPlist();
    setPath(filepath);
    setTimeout(() => setHistory('/'), 1000);
  };

  return (
    <>
      <TitleBox text="🌈 iTerm Colors"></TitleBox>
      <Box width={BOX_WIDTH} justifyContent="center">
        {Object.keys(Theme).map((name) => (
          <Box key={name} marginRight={1}>
            <Text backgroundColor={Theme[name]}>{'  '}</Text>
          </Box>
        ))}
      </Box>
      <ConfirmBox
        title={'Generate iterm colors plist?'}
        handleSubmit={handleSubmit}
      >
        <BorderBox>
          <Log type="success" text="Generate Success!" />
          <Log color={Theme.BlackBright} text={path} />
        </BorderBox>
      </ConfirmBox>
    </>
  );
};

export default App;
