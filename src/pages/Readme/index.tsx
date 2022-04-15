import React, { useState } from 'react';
import { FC, TitleBox, MultiSelect, Divider, Text } from '@/components';
import { shieldSelections, genShield } from './service/shield';
import { genReadme } from './service/template';
import { PATH_PROCESS } from '@/utils/const';

const title = '📝 Readme generator';

const App: FC = () => {
  const [log, setLog] = useState<string>();

  const handleSubmit = (items: any) => {
    const selections = items.map((item: any) => item.value);
    const shieldData = genShield(selections);
    const output = shieldData
      ? genReadme([shieldData.shields, shieldData.links].join('\n'))
      : `Can't find package.json in ${PATH_PROCESS}`;
    setLog(output);
  };
  return (
    <>
      <TitleBox text={title}></TitleBox>
      <MultiSelect items={shieldSelections} onSubmit={handleSubmit} />
      {log && (
        <>
          <Divider title="README.md" />
          <Text>{log}</Text>
        </>
      )}
    </>
  );
};

App.title = title;

export default App;
