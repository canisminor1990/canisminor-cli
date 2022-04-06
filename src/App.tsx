import React from 'react';
import { Text, Link, BigText, Gradient } from '@/components';

const App: React.FC = () => {
  return (
    <>
      <Gradient name="rainbow">
        <BigText text="canisminor" />
      </Gradient>
      <Link url="https://sindresorhus.com">
        My <Text color="cyan">Website</Text>
      </Link>
    </>
  );
};

export default App;
