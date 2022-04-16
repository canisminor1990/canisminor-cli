import fs from 'fs-extra';
import plist from 'plist';
import chroma from 'chroma-js';
import { Theme } from '@/components';
import { mkDir, getPath, openDir } from '@/utils/path';
import { OS_IS_WINDOWS } from '@/utils/const';
import { Service } from './index';

const genColorData = (color: string) => {
  const rgb = chroma(color).rgba();
  return {
    'Color Space': 'sRGB',
    'Red Component': rgb[0] / 255,
    'Green Component': rgb[1] / 255,
    'Blue Component': rgb[2] / 255,
    'Alpha Component': rgb[3],
  };
};

const genWindowTerminalColor: Service = (log) => {
  const data = {
    name: 'CanisMinor',
    black: Theme.Black,
    red: Theme.Red,
    green: Theme.Green,
    yellow: Theme.Yellow,
    blue: Theme.Blue,
    purple: Theme.Magenta,
    cyan: Theme.Cyan,
    white: Theme.White,
    brightBlack: Theme.BlackBright,
    brightRed: Theme.RedBright,
    brightGreen: Theme.GreenBright,
    brightYellow: Theme.YellowBright,
    brightPurple: Theme.MagentaBright,
    brightCyan: Theme.CyanBright,
    brightBlue: Theme.BlueBright,
    brightWhite: Theme.WhiteBright,
    foreground: Theme.Foreground,
    background: Theme.Background,
    selectionBackground: Theme.BlackBright,
    cursorColor: Theme.White,
  };
  const DIR_NAME = 'powershell';
  mkDir(DIR_NAME);
  const filename = getPath(DIR_NAME, 'setting.json');
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  openDir(DIR_NAME);
  log('output: ' + DIR_NAME);
  log('generate powershell theme success!');
};

const genItermColorPlist: Service = (log) => {
  const data = {
    'Ansi 0 Color': genColorData(Theme.Black),
    'Ansi 1 Color': genColorData(Theme.Red),
    'Ansi 2 Color': genColorData(Theme.Green),
    'Ansi 3 Color': genColorData(Theme.Yellow),
    'Ansi 4 Color': genColorData(Theme.Blue),
    'Ansi 5 Color': genColorData(Theme.Magenta),
    'Ansi 6 Color': genColorData(Theme.Cyan),
    'Ansi 7 Color': genColorData(Theme.White),
    'Ansi 8 Color': genColorData(Theme.BlackBright),
    'Ansi 9 Color': genColorData(Theme.RedBright),
    'Ansi 10 Color': genColorData(Theme.GreenBright),
    'Ansi 11 Color': genColorData(Theme.YellowBright),
    'Ansi 12 Color': genColorData(Theme.BlueBright),
    'Ansi 13 Color': genColorData(Theme.MagentaBright),
    'Ansi 14 Color': genColorData(Theme.CyanBright),
    'Ansi 15 Color': genColorData(Theme.WhiteBright),
    'Background Color': genColorData(Theme.Background),
    'Badge Color': genColorData(Theme.Badge),
    'Bold Color': genColorData(Theme.White),
    'Cursor Color': genColorData(Theme.White),
    'Cursor Guide Color': genColorData(Theme.Guide),
    'Cursor Text Color': genColorData(Theme.WhiteBright),
    'Foreground Color': genColorData(Theme.Foreground),
    'Link Color': genColorData(Theme.Links),
    'Selected Text Color': genColorData(Theme.WhiteBright),
    'Selection Color': genColorData(Theme.BlackBright),
  };
  const DIR_NAME = 'iterm';
  mkDir(DIR_NAME);
  const filename = getPath(DIR_NAME, 'canisminor.itermcolors');
  fs.writeFileSync(filename, plist.build(data));
  openDir(DIR_NAME);
  log('output: ' + DIR_NAME);
  log('generate item theme success!');
};

export const genTerminalColor: Service = (log) => {
  if (OS_IS_WINDOWS) {
    genWindowTerminalColor(log);
  } else {
    genItermColorPlist(log);
  }
};
