#!/usr/bin/env node
import { render } from 'ink';
import App from './pages/app';
import { mkRootDir } from '@/utils/path';

mkRootDir();

render(<App />);
