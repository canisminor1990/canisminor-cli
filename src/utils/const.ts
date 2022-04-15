import path from 'path';
import os from 'os';

export const BOX_WIDTH = '100%';
export const PATH_DIR = path.resolve(__dirname);
export const PATH_PROCESS = process.cwd();
export const HOME_DIR = os.homedir();
export const CLI_DIR = path.resolve(HOME_DIR, '.cmli');
export const CLI_VERSION = 'v' + process.env['CLI_VERSION'];
export const OS_TYPE = os.type().toLocaleLowerCase();
export const OS_IS_WINDOWS = OS_TYPE.includes('windows');
export const OS_IS_MAC = OS_TYPE.includes('darwin');
export const OS_IS_LINUX = OS_TYPE.includes('linux');
