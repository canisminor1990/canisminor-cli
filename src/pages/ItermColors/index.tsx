import { useState } from 'react';
import {
  Theme,
  Text,
  Box,
  ConfirmBox,
  TitleBox,
  Log,
  BorderBox,
  FC,
} from '@/components';
import { BOX_WIDTH } from '@/utils/const';
import { genItermColorPlist } from './service';
import { useStore } from '@/store';

const title = '🌈 iTerm Colors';

const App: FC = () => {
  const { setHistory } = useStore();
  const [path, setPath] = useState<string>('');

  const handleSubmit = (result: boolean) => {
    if (!result) return setHistory('/');
    const filepath = genItermColorPlist();
    setPath(filepath);
    setTimeout(() => setHistory('/'), 1000);
  };

  return (
    <>
      <TitleBox text={title}></TitleBox>
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

App.title = title;

export default App;
