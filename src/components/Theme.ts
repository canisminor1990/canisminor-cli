import {
  skyDark,
  skyDarkA,
  limeDark,
  yellowDark,
  redDark,
  redDarkA,
  plumDark,
  sandDark,
  blueDark,
  amberDark,
} from '@radix-ui/colors';
import chroma from 'chroma-js';

interface Props {
  White: string;
  WhiteBright: string;
  Black: string;
  BlackBright: string;
  Red: string;
  RedBright: string;
  Orange: string;
  OrangeBright: string;
  Yellow: string;
  YellowBright: string;
  Green: string;
  GreenBright: string;
  Cyan: string;
  CyanBright: string;
  Blue: string;
  BlueBright: string;
  Magenta: string;
  MagentaBright: string;
  // Basic Colors,
  Links: string;
  Foreground: string;
  Background: string;
  Badge: string;
  Guide: string;
  [key: string]: string;
}

export const BaseColor = {
  // ANSI Colors
  White: chroma(sandDark.sand11).hex(),
  WhiteBright: chroma(sandDark.sand12).hex(),
  Black: chroma(sandDark.sand6).hex(),
  BlackBright: chroma(sandDark.sand8).hex(),
  Red: chroma(redDark.red9).hex(),
  RedBright: chroma(redDark.red11).hex(),
  Orange: chroma(amberDark.amber9).hex(),
  OrangeBright: chroma(amberDark.amber10).hex(),
  Yellow: chroma(yellowDark.yellow9).hex(),
  YellowBright: chroma(yellowDark.yellow10).hex(),
  Green: chroma(limeDark.lime9).hex(),
  GreenBright: chroma(limeDark.lime10).hex(),
  Cyan: chroma(skyDark.sky9).hex(),
  CyanBright: chroma(skyDark.sky10).hex(),
  Blue: chroma(blueDark.blue9).hex(),
  BlueBright: chroma(blueDark.blue11).hex(),
  Magenta: chroma(plumDark.plum9).hex(),
  MagentaBright: chroma(plumDark.plum11).hex(),
};

const Theme: Props = {
  ...BaseColor,
  // Basic Colors,
  Links: chroma(blueDark.blue11).hex(),
  Foreground: chroma(sandDark.sand12).hex(),
  Background: chroma(sandDark.sand1).hex(),
  Badge: chroma(redDarkA.redA8).hex(),
  Guide: chroma(skyDarkA.skyA8).hex(),
};

export default Theme;
