import React from 'react';
import {
  LogoBox,
  SelectInput,
  SelectItem,
  SelectIndicator,
} from '@/components';
import ItermColors from '@/pages/ItermColors';
import { useStore } from '@/store';

interface Router {
  label: string;
  value: string;
  component?: any;
}

const router: Router[] = [
  {
    label: '🌈 Iterm Colors',
    value: '/iterm',
    component: <ItermColors />,
  },
  {
    label: '👋 Exit',
    value: '/exit',
    component: null,
  },
];

const App: React.FC = () => {
  const { history, setHistory } = useStore();

  const handleSelect = (item: { value: string }) => {
    setHistory(item.value);
  };

  return (
    <>
      {history === '/' && (
        <>
          <LogoBox text="canisminor" />
          <SelectInput
            items={router}
            onSelect={handleSelect}
            itemComponent={SelectItem}
            indicatorComponent={SelectIndicator}
          />
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
