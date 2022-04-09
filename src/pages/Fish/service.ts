import { PATH_DIR, HOME_DIR } from '@/utils/const';
import fs from 'fs-extra';
import { resolve } from 'path';
import { BaseColor } from '@/components';
import { forEach, snakeCase } from 'lodash';
import { getPath, mkDir, openDir } from '@/utils/path';
import { omfTheme } from './omp';

export const genOmpTheme = () => {
  const DIR_NAME = 'oh-my-posh';
  mkDir(DIR_NAME);
  const destination = resolve(HOME_DIR, '.oh-my-posh/themes/mytheme.omp.json');
  const filename = getPath(DIR_NAME, 'mytheme.omp.json');
  fs.writeFileSync(filename, JSON.stringify(omfTheme, null, 2));
  fs.writeFileSync(destination, JSON.stringify(omfTheme, null, 2));
  return destination;
};

export const copyFishTheme = () => {
  const source = resolve(PATH_DIR, 'fish');
  const destination = resolve(HOME_DIR, '.config/fish/functions');
  const isExist = fs.pathExistsSync(destination);
  if (isExist) fs.removeSync(destination);
  fs.copySync(source, destination);
};

const formatString = (text: string, length: number) => {
  return (text + Array(length).join(' ')).slice(0, length);
};

export const genFishColor = (): string => {
  const NAME_WIDTH = 32;
  const data = ['function _canisminor_color'];
  data.push(' ');
  data.push(' # Color Token');
  forEach(BaseColor, (color, name) => {
    data.push(
      ` set -g ${formatString(snakeCase(name), NAME_WIDTH)} ${color
        .replace('#', '')
        .toUpperCase()}`,
    );
  });
  data.push(' ');
  data.push(' # Set Color');
  forEach(BaseColor, (_, name) => {
    data.push(
      ` set -g ${formatString(
        snakeCase('SetColor' + name),
        NAME_WIDTH,
      )} (set_color $${snakeCase(name)})`,
    );
  });
  data.push(
    ` set -g ${formatString('reset_color', NAME_WIDTH)} (set_color normal)`,
  );
  data.push('end');
  const DIR_NAME = 'fish';
  mkDir(DIR_NAME);
  const filename = getPath(DIR_NAME, '_canisminor_color.fish');
  fs.writeFileSync(filename, data.join('\n'));
  openDir(DIR_NAME);
  return filename;
};
