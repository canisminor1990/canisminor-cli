import { PATH_DIR, HOME_DIR } from '@/utils/const';
import fs from 'fs-extra';
import { resolve } from 'path';
import { BaseColor } from '@/components';
import { forEach, snakeCase } from 'lodash';
import { getPath } from '@/utils/path';
import { Service } from './index';

export const copyFishTheme: Service = (log) => {
  log('installing....');
  const source = resolve(PATH_DIR, 'fish');
  const destination = resolve(HOME_DIR, '.config/fish/functions');
  const isExist = fs.pathExistsSync(destination);
  if (isExist) fs.removeSync(destination);
  fs.copySync(source, destination);
  log('from: ' + source);
  log('to: ' + destination);
  log('generate fish color...');
  genFishColor(log);
  log('install fish theme success!');
};

const formatString = (text: string, length: number) => {
  return (text + Array(length).join(' ')).slice(0, length);
};

const genFishColor: Service = (log) => {
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
  const filename = getPath(
    HOME_DIR,
    '.config/fish/functions',
    '_canisminor_color.fish',
  );
  fs.writeFileSync(filename, data.join('\n'));
  log('output: ' + filename);
};
