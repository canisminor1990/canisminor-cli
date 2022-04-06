import React from 'react';
import childProcess from 'child_process';
import stripAnsi from 'strip-ansi';
import { Text, Box } from '@/components';

interface InkChildProcessProps {
  command: string;
  verboss?: boolean;
}

const InkChildProcess: React.FC<InkChildProcessProps> = ({
  command,
  verboss,
}) => {
  const [output, setOutput] = React.useState('');

  React.useEffect(() => {
    const subProcess = childProcess.exec(command);
    subProcess?.stdout?.on('data', (newOutput) => {
      if (verboss) {
        setOutput(newOutput);
      } else {
        const lines = stripAnsi(newOutput.toString('utf8')).split('\n');
        setOutput(lines.slice(-5).join('\n'));
      }
    });
  }, [setOutput]);

  return (
    <Box flexDirection="column" padding={1}>
      <Text>Сommand output:</Text>
      <Box marginTop={1}>
        <Text>{output}</Text>
      </Box>
    </Box>
  );
};

export default InkChildProcess;
