import { execSync } from 'child_process';
import { OS_IS_WINDOWS, OS_IS_MAC } from './const';

export const open = (path: string): void => {
  if (OS_IS_WINDOWS) execSync(`start ${path}`);
  if (OS_IS_MAC) execSync(`open ${path}`);
};
