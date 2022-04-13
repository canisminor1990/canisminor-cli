import { getPath, mkDir } from '@/utils/path';
import fs from 'fs-extra';
import { omfTheme } from './ompTheme';
import { Service } from './index';
import { resolve } from 'path';
import { HOME_DIR } from '@/utils/const';

export const genOmpTheme: Service = (log) => {
  const DIR_NAME = 'omp';
  mkDir(DIR_NAME);
  const filename = getPath(DIR_NAME, 'mytheme.omp.json');
  fs.writeFileSync(filename, JSON.stringify(omfTheme, null, 2));
  log('output: ' + filename);
  const destination = resolve(HOME_DIR, '.config/fish/config.fish');
  const fishConfig = fs.readFileSync(destination);
  const ompConfig =
    'oh-my-posh init fish --config ~/.cmli/omp/mytheme.omp.json | source';
  if (!fishConfig.includes(ompConfig)) {
    log('omp init fish....');
    fs.writeFileSync(destination, [fishConfig, ompConfig].join('\n'));
  }
  log('install oh-my-posh theme success!');
};
