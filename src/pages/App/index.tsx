import React from 'react';
import { LogoBox, Select, ItemOfSelect } from '@/components';
import { useStore } from '@/store';
import ColorTheme from '@/pages/ColorTheme';
import Readme from '@/pages/Readme';

const router: ItemOfSelect[] = [
  {
    label: ColorTheme.title,
    value: '/color-theme',
    component: <ColorTheme />,
  },
  {
    label: Readme.title,
    value: '/readme',
    component: <Readme />,
  },
  {
    label: '👋 Exit',
    value: '/exit',
    component: null,
  },
];

const App: React.FC = () => {
  const { history, setHistory } = useStore();

  const handleSelect = (item: ItemOfSelect) => {
    setHistory(item.value);
  };

  return (
    <>
      {history === '/' && (
        <>
          <LogoBox text="canisminor" />
          <Select items={router} onSelect={handleSelect} />
        </>
      )}
      {router.map((item) => (
        <React.Fragment key={item.value}>
          {history === item.value && item.component}
        </React.Fragment>
      ))}
    </>
  );
};

export default App;
