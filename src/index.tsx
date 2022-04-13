#!/usr/bin/env node
import React from 'react';
import meow from 'meow';
import { render } from 'ink';
import App from './pages/App';
import { mkRootDir } from '@/utils/path';
import { LogoBox } from '@/components';

mkRootDir();

const cli = meow(
  `
	Usage
	  $ cmli

	Options
		--logo  Logo text
`,
  {
    flags: {
      logo: {
        type: 'string',
      },
    },
  },
);

if (!cli.flags || Object.keys(cli.flags)) render(<App />);
if (cli.flags.logo) render(<LogoBox text={cli.flags.logo} width={'100%'} />);
