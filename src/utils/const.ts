import path from 'path';
import os from 'os';

export const BOX_WIDTH = 72;
export const PATH_DIR = path.resolve(__dirname);
export const PATH_PROCESS = process.cwd();
export const HOME_DIR = os.homedir();
export const CLI_DIR = path.resolve(HOME_DIR, '.cmli');
export const CLI_VERSION = 'v' + process.env.CLI_VERSION;
