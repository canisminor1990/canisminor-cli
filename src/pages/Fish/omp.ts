import { Theme, Grey } from '@/components';
import theme from '@/components/Theme';

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
      leading_diamond: '╭─',
      background: Theme.Black,
      foreground: Theme.White,
      properties: {
        template: ompSegment('.Icon'),
      },
    },
    {
      type: 'path',
      style: 'powerline',
      powerline_symbol: '',
      background: Theme.Black,
      foreground: Theme.WhiteBright,
      properties: {
        home_icon: ompIcon('~', Theme.White),
        folder_icon: ompIcon('..', Theme.White),
        folder_separator_icon: ompIcon('/', Grey.step9),
        mixed_threshold: 12,
        style: 'mixed',
        template: spacing + ompSegment('.Path') + spacing,
      },
    },
    {
      type: 'git',
      style: 'powerline',
      powerline_symbol: '',
      foreground: Theme.Black,
      background: Theme.GreenBright,
      background_templates: [
        ompIf('or (.Working.Changed) (.Staging.Changed)', Theme.Yellow),
        ompIf('and (gt .Ahead 0) (gt .Behind 0)', Theme.GreenBright),
        ompIf('gt .Ahead 0', Theme.BlueBright),
        ompIf('gt .Behind 0', Theme.BlueBright),
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
      foreground: Theme.Black,
      properties: {
        template: '╰─',
      },
    },
    {
      type: 'exit',
      style: 'plain',
      foreground: Theme.BlueBright,
      foreground_templates: [ompIf('gt .Code 0', Theme.Red)],
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
      type: 'node',
      style: 'diamond',
      leading_diamond: ' ',
      trailing_diamond: '',
      foreground: Theme.Green,
      background: '#344213',
      properties: {
        fetch_package_manager: true,
        npm_icon: '',
        yarn_icon: '',
        template: [
          spacing,
          ompIf(
            '.PackageManagerIcon',
            ompSegment('.PackageManagerIcon') + spacing,
          ),
          '',
          spacing,
          'v' + ompSegment('.Major'),
          spacing,
        ].join(''),
      },
    },
    {
      type: 'git',
      style: 'diamond',
      leading_diamond: ' ',
      trailing_diamond: '',
      foreground: '#978365',
      foreground_templates: [
        ompIf(
          'and (.Staging.Changed) (eq .Working.Changed false)',
          Theme.BlueBright,
        ),
        ompIf('and (.Staging.Changed) (.Working.Changed)', Theme.Yellow),
      ],
      background: '#3e382c',
      background_templates: [
        ompIf('and (.Staging.Changed) (eq .Working.Changed false)', '#083e59'),
        ompIf('and (.Staging.Changed) (.Working.Changed)', '#493c00'),
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
      foreground: Theme.White,
      background: Grey.step9,
      properties: {
        template: [
          spacing,
          '',
          spacing,
          ompSegment('.Name') + '@' + ompSegment('.Version') + spacing,
        ].join(''),
      },
    },
    {
      type: 'time',
      style: 'diamond',
      leading_diamond: ' ',
      trailing_diamond: '',
      background: Theme.Black,
      foreground: Theme.White,
      properties: {
        time_format: '15:04:05',
        template: spacing + ompSegment('.CurrentDate | date .Format') + spacing,
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
