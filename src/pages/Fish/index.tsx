import { useState } from 'react';
import {
  FC,
  TitleBox,
  Select,
  ItemOfSelect,
  BorderBox,
  Log,
  Text,
  Theme,
} from '@/components';
import { useStore } from '@/store';
import {
  copyFishTheme,
  genFishColor,
  genOmpTheme,
  ompInitFish,
} from './service';

const title = '🐟 Fish Shell';

const items: ItemOfSelect[] = [
  {
    label: 'Install fish theme and func',
    value: 1,
  },
  {
    label: 'Generate fish colors',
    value: 2,
  },
  {
    label: 'Install oh-my-posh theme',
    value: 3,
  },
  {
    label: 'Setup oh-my-posh init fish',
    value: 4,
  },
  {
    label: 'Back',
    value: 0,
  },
];

const App: FC = () => {
  const { setHistory } = useStore();
  const [msg, setMsg] = useState<any>(
    <Text color={Theme.BlackBright}>Please select...</Text>,
  );

  const handleSelect = (item: ItemOfSelect) => {
    if (item.value === 0) return setHistory('/');
    if (item.value === 1) {
      copyFishTheme();
      setMsg(<Log type="success" text="Fish theme & func install success!" />);
      return;
    }
    if (item.value === 2) {
      const output = genFishColor();
      setMsg(<Log type="success" text={`Output: ${output}`} />);
      return;
    }
    if (item.value === 3) {
      const output = genOmpTheme();
      setMsg(<Log type="success" text={`Output: ${output}`} />);
      return;
    }
    if (item.value === 4) {
      ompInitFish();
      setMsg(<Log type="success" text="Setup success!" />);
      return;
    }
  };

  return (
    <>
      <TitleBox text="🐟 Fish Shell"></TitleBox>
      <Select items={items} onSelect={handleSelect} />
      <BorderBox>{msg}</BorderBox>
    </>
  );
};

App.title = title;

export default App;
