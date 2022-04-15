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
import { installGitmojiTheme } from './service/gitmoji';
import { open } from '@/utils/open';

const title = '🌈 Terminal theme';

const items: ItemOfSelect[] = [
  {
    label: '[All] Install hack nerd font',
    value: 1,
    url: 'https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Hack.zip',
  },
  {
    label: '[Mac] Install fish shell',
    value: 2,
    url: 'https://fishshell.com/',
  },
  {
    label: '[Win] Install windows terminal',
    value: 3,
    url: 'https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab',
  },
  {
    label: '[All] Install oh-my-posh',
    value: 4,
    url: 'https://ohmyposh.dev/docs',
  },
  {
    label: '[All] Install logo-ls',
    value: 5,
    url: 'https://github.com/Yash-Handa/logo-ls#macos-darwin',
  },
  {
    label: '[Mac] Install fish theme and func',
    value: 11,
    service: copyFishTheme,
  },
  {
    label: '[All] Install oh-my-posh theme',
    value: 12,
    service: genOmpTheme,
  },
  {
    label: '[Mac] Generate iterm theme',
    value: 13,
    service: genItermColorPlist,
  },
  {
    label: '[All] Install gitmoji theme',
    value: 14,
    service: installGitmojiTheme,
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
    if (item.url) return open(item.url);
    if (item.service) return item.service(setMsg);
  };

  return (
    <>
      <TitleBox text={title}></TitleBox>
      <Select items={items} onSelect={handleSelect} />
      <BorderBox>
        <Log text={msg} />
      </BorderBox>
    </>
  );
};

App.title = title;

export default App;
