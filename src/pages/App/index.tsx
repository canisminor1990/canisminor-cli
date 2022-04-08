import React from 'react';
import { LogoBox, Select, ItemOfSelect } from '@/components';
import ItermColors from '@/pages/ItermColors';
import Fish from '@/pages/Fish';
import { useStore } from '@/store';

const router: ItemOfSelect[] = [
  {
    label: ItermColors.title,
    value: '/iterm',
    component: <ItermColors />,
  },
  {
    label: Fish.title,
    value: '/fish',
    component: <Fish />,
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
