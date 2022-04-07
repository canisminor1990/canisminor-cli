import {
  skyDark,
  skyDarkA,
  limeDark,
  yellowDark,
  crimsonDark,
  crimsonDarkA,
  plumDark,
  sandDark,
  blueDark,
} from '@radix-ui/colors';
import chroma from 'chroma-js';

interface Props {
  Black: string;
  BlackBright: string;
  Red: string;
  RedBright: string;
  Green: string;
  GreenBright: string;
  Yellow: string;
  YellowBright: string;
  Blue: string;
  BlueBright: string;
  Magenta: string;
  MagentaBright: string;
  Cyan: string;
  CyanBright: string;
  White: string;
  WhiteBright: string;
  // Basic Colors,
  Links: string;
  Foreground: string;
  Background: string;
  Badge: string;
  Guide: string;
  [key: string]: string;
}

const Theme: Props = {
  // ANSI Colors
  Black: chroma(sandDark.sand7).hex(),
  BlackBright: chroma(sandDark.sand9).hex(),
  Red: chroma(crimsonDark.crimson9).hex(),
  RedBright: chroma(crimsonDark.crimson10).hex(),
  Green: chroma(limeDark.lime9).hex(),
  GreenBright: chroma(limeDark.lime10).hex(),
  Yellow: chroma(yellowDark.yellow9).hex(),
  YellowBright: chroma(yellowDark.yellow10).hex(),
  Blue: chroma(blueDark.blue9).hex(),
  BlueBright: chroma(blueDark.blue11).hex(),
  Magenta: chroma(plumDark.plum9).hex(),
  MagentaBright: chroma(plumDark.plum11).hex(),
  Cyan: chroma(skyDark.sky9).hex(),
  CyanBright: chroma(skyDark.sky11).hex(),
  White: chroma(sandDark.sand11).hex(),
  WhiteBright: chroma(sandDark.sand12).hex(),
  // Basic Colors,
  Links: chroma(blueDark.blue11).hex(),
  Foreground: chroma(sandDark.sand12).hex(),
  Background: chroma(sandDark.sand1).hex(),
  Badge: chroma(crimsonDarkA.crimsonA8).hex(),
  Guide: chroma(skyDarkA.skyA8).hex(),
};

export default Theme;
