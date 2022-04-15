import gitmojiTheme from './gitmojiTheme';
import { resolve } from 'path';
import fs from 'fs-extra';
import { HOME_DIR } from '@/utils/const';
import { Service } from './index';

export const installGitmojiTheme: Service = (log) => {
  fs.writeFileSync(
    resolve(HOME_DIR, '.gitmoji/gitmojis.json'),
    JSON.stringify(gitmojiTheme, null, 2),
  );
  log('install gitmoji theme success!');
};
