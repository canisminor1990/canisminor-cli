import React from 'react';
import { BigText, Gradient, ChildProcess } from '@/components';

const App: React.FC = () => {
  return (
    <>
      <Gradient name="rainbow">
        <BigText text="canisminor" />
      </Gradient>
      <ChildProcess command={'yarn'} />
    </>
  );
};

export default App;
