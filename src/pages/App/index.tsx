import React from 'react';
import { LogoBox, Select, ItemOfSelect } from '@/components';
import ColorTheme from '@/pages/ColorTheme';
import { useStore } from '@/store';

const router: ItemOfSelect[] = [
  {
    label: ColorTheme.title,
    value: '/color-theme',
    component: <ColorTheme />,
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
