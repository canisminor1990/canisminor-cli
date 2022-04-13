import React, { useState } from 'react';
import {
  FC,
  TitleBox,
  Select,
  ItemOfSelect,
  BorderBox,
  Log,
} from '@/components';
import { useStore } from '@/store';
import { copyFishTheme } from './service/fish';
import { genOmpTheme } from './service/omp';
import { genItermColorPlist } from './service/iterm';

const title = '🌈 Terminal theme';

const items: ItemOfSelect[] = [
  {
    label: 'Install fish theme and func',
    value: 1,
  },
  {
    label: 'Install oh-my-posh theme',
    value: 2,
  },
  {
    label: 'Generate iterm theme',
    value: 3,
  },
  {
    label: 'Back',
    value: 0,
  },
];

const App: FC = () => {
  const { setHistory } = useStore();
  const [msg, setMsg] = useState<string>('waiting for selection...');

  const handleSelect = (item: ItemOfSelect) => {
    if (item.value === 0) return setHistory('/');
    if (item.value === 1) return copyFishTheme(setMsg);
    if (item.value === 2) return genOmpTheme(setMsg);
    if (item.value === 3) return genItermColorPlist(setMsg);
  };

  return (
    <>
      <TitleBox text="🐟 Fish Shell"></TitleBox>
      <Select items={items} onSelect={handleSelect} />
      <BorderBox>
        <Log text={msg} />
      </BorderBox>
    </>
  );
};

App.title = title;

export default App;
