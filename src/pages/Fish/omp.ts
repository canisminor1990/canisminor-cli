import {
  goldDark,
  sandDark,
  limeDark,
  yellowDark,
  skyDark,
  redDark,
  blueDark,
} from '@radix-ui/colors';
import chroma from 'chroma-js';

declare interface OmpBlock {
  type: 'prompt' | 'rprompt';
  newline?: boolean;
  alignment: 'left' | 'right';
  filler?: string;
  segments: OmpSegment[];
}
declare interface OmpSegment {
  type: string;
  style: 'powerline' | 'plain' | 'diamond';
  powerline_symbol?: string;
  invert_powerline?: boolean;
  leading_diamond?: string;
  trailing_diamond?: string;
  foreground?: string;
  foreground_templates?: string[];
  background?: string;
  background_templates?: string[];
  properties?: {
    template: string;
    [key: string]: any;
  };
}

const ompIf = (math: string, result: string) =>
  `{{ if ${math} }}${result}{{ end }}`;

const ompSegment = (name: string) => `{{ ${name} }}`;

const ompIcon = (icon: string, color: string) => `<${color}>${icon}</>`;

const spacing = ' ';

const promptLeft: OmpBlock = {
  alignment: 'left',
  segments: [
    {
      type: 'os',
      style: 'diamond',
      leading_diamond: ompIcon('╭─', chroma(sandDark.sand7).hex()) + '',
      background: chroma(sandDark.sand6).hex(),
      foreground: chroma(sandDark.sand11).hex(),
      properties: {
        template: ompSegment('.Icon'),
      },
    },
    {
      type: 'path',
      style: 'powerline',
      powerline_symbol: '',
      background: chroma(sandDark.sand6).hex(),
      foreground: chroma(sandDark.sand12).hex(),
      properties: {
        folder_icon: ompIcon('..', chroma(sandDark.sand11).hex()),
        folder_separator_icon: ompIcon('/', chroma(sandDark.sand11).hex()),
        mixed_threshold: 12,
        style: 'mixed',
        template: spacing + ompSegment('.Path') + spacing,
      },
    },
    {
      type: 'git',
      style: 'powerline',
      powerline_symbol: '',
      foreground: chroma(limeDark.lime1).hex(),
      background: chroma(limeDark.lime9).hex(),
      foreground_templates: [
        ompIf(
          'or (.Working.Changed) (.Staging.Changed)',
          chroma(yellowDark.yellow1).hex(),
        ),
        ompIf('and (eq .Ahead 0) (eq .Behind 0)', chroma(limeDark.lime1).hex()),
        ompIf('or (gt .Ahead 0) (gt .Behind 0)', chroma(skyDark.sky1).hex()),
      ],
      background_templates: [
        ompIf(
          'or (.Working.Changed) (.Staging.Changed)',
          chroma(yellowDark.yellow9).hex(),
        ),
        ompIf('and (eq .Ahead 0) (eq .Behind 0)', chroma(limeDark.lime9).hex()),
        ompIf('or (gt .Ahead 0) (gt .Behind 0)', chroma(skyDark.sky9).hex()),
      ],
      properties: {
        branch_icon: ' ',
        fetch_status: true,
        fetch_upstream_icon: true,
        template: [
          spacing,
          ompSegment('.HEAD'),
          ompIf('or (gt .Ahead 0) (gt .Behind 0)', spacing),
          ompIf('gt .Ahead 0', '↑' + ompSegment('.Ahead')),
          ompIf('gt .Behind 0', '↓' + ompSegment('.Behind')),
          spacing,
        ].join(''),
      },
    },
  ],
  type: 'prompt',
};

const promptLeftSecond: OmpBlock = {
  alignment: 'left',
  newline: true,
  segments: [
    {
      type: 'text',
      style: 'plain',
      foreground: chroma(sandDark.sand7).hex(),
      properties: {
        template: '╰─',
      },
    },
    {
      type: 'exit',
      style: 'plain',
      foreground: chroma(blueDark.blue11).hex(),
      foreground_templates: [ompIf('gt .Code 0', chroma(redDark.red9).hex())],
      properties: {
        always_enabled: true,
        template: '➤ ',
      },
    },
  ],
  type: 'prompt',
};

const promptRight: OmpBlock = {
  alignment: 'right',
  segments: [
    {
      type: 'git',
      style: 'diamond',
      leading_diamond: ' ',
      trailing_diamond: '',
      foreground: chroma(goldDark.gold11).hex(),
      background: chroma(goldDark.gold6).hex(),
      foreground_templates: [
        ompIf(
          'and (.Staging.Changed) (eq .Working.Changed false)',
          chroma(skyDark.sky11).hex(),
        ),
        ompIf(
          'and (.Staging.Changed) (.Working.Changed)',
          chroma(yellowDark.yellow11).hex(),
        ),
      ],
      background_templates: [
        ompIf(
          'and (.Staging.Changed) (eq .Working.Changed false)',
          chroma(skyDark.sky6).hex(),
        ),
        ompIf(
          'and (.Staging.Changed) (.Working.Changed)',
          chroma(yellowDark.yellow6).hex(),
        ),
      ],
      properties: {
        fetch_status: true,
        template: [
          spacing,
          ompIf(
            'and (.Staging.Changed) (eq .Working.Changed false)',
            '' + spacing,
          ),
          ompIf('and (.Staging.Changed) (.Working.Changed)', '﬚' + spacing),
          ompIf(
            'gt .Working.Modified 0',

            '±' + ompSegment('.Working.Modified') + spacing,
          ),
          ompIf(
            'gt .Working.Added 0',
            '+' + ompSegment('.Working.Added') + spacing,
          ),
          ompIf(
            'gt .Working.Deleted 0',
            '-' + ompSegment('.Working.Deleted') + spacing,
          ),
          ompIf(
            'gt .Working.Unmerged 0',
            '' + ompSegment('.Working.Unmerged') + spacing,
          ),
        ].join(''),
      },
    },
    {
      type: 'project',
      style: 'diamond',
      leading_diamond: ' ',
      trailing_diamond: '',
      foreground: chroma(sandDark.sand11).hex(),
      background: chroma(sandDark.sand6).hex(),
      properties: {
        template: [
          spacing,
          '',
          spacing,
          ompSegment('.Name') + '@' + ompSegment('.Version') + spacing,
        ].join(''),
      },
    },
  ],
  type: 'prompt',
};

export const omfTheme = {
  $schema:
    'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json',
  blocks: [promptLeft, promptRight, promptLeftSecond],
  osc99: true,
  version: 1,
};
