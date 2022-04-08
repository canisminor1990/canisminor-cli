#!/usr/bin/env node
import { render } from 'ink';
import App from './pages/App';
import { mkRootDir } from '@/utils/path';

mkRootDir();

render(<App />);
