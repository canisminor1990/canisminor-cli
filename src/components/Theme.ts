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

export const Grey = {
  step1: chroma(sandDark.sand1).hex(),
  step2: chroma(sandDark.sand2).hex(),
  step3: chroma(sandDark.sand3).hex(),
  step4: chroma(sandDark.sand4).hex(),
  step5: chroma(sandDark.sand5).hex(),
  step6: chroma(sandDark.sand6).hex(),
  step7: chroma(sandDark.sand7).hex(),
  step8: chroma(sandDark.sand8).hex(),
  step9: chroma(sandDark.sand9).hex(),
  step10: chroma(sandDark.sand10).hex(),
  step11: chroma(sandDark.sand11).hex(),
  step12: chroma(sandDark.sand12).hex(),
};

export const BaseColor = {
  // ANSI Colors
  White: chroma(sandDark.sand11).hex(),
  WhiteBright: chroma(sandDark.sand12).hex(),
  Black: chroma(sandDark.sand6).hex(),
  BlackBright: chroma(sandDark.sand9).hex(),
  Red: chroma(crimsonDark.crimson9).hex(),
  RedBright: chroma(crimsonDark.crimson10).hex(),
  Orange: chroma(amberDark.amber9).hex(),
  OrangeBright: chroma(amberDark.amber11).hex(),
  Yellow: chroma(yellowDark.yellow9).hex(),
  YellowBright: chroma(yellowDark.yellow10).hex(),
  Green: chroma(limeDark.lime9).hex(),
  GreenBright: chroma(limeDark.lime10).hex(),
  Cyan: chroma(skyDark.sky9).hex(),
  CyanBright: chroma(skyDark.sky11).hex(),
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
  Badge: chroma(crimsonDarkA.crimsonA8).hex(),
  Guide: chroma(skyDarkA.skyA8).hex(),
};

export default Theme;
