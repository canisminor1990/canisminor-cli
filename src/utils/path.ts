import fs from 'fs-extra';
import path from 'path';
import { CLI_DIR } from '@/utils/const';
import { open } from './open';

export const mkRootDir = () => {
  const isExist = fs.pathExistsSync(CLI_DIR);
  if (!isExist) fs.mkdirSync(CLI_DIR);
};

export const getPath = (...name: string[]) => {
  if (!name) return CLI_DIR;
  return path.resolve(CLI_DIR, ...name);
};

export const mkDir = (name: string) => {
  const dirpath = getPath(name);
  const isExist = fs.pathExistsSync(dirpath);
  if (!isExist) fs.mkdirSync(dirpath);
};

export const openDir = (name: string) => {
  open(getPath(name));
};
