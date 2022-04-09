import { Theme, Grey } from '@/components';

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
      background: Theme.Black,
      foreground: Theme.White,
      leading_diamond: '╭─',
      properties: {
        template: ompSegment('.Icon'),
      },
      style: 'diamond',
      type: 'os',
    },
    {
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
      style: 'powerline',
      type: 'path',
    },
    {
      background: Theme.GreenBright,
      background_templates: [
        ompIf('or (.Working.Changed) (.Staging.Changed)', Theme.Yellow),
        ompIf('and (gt .Ahead 0) (gt .Behind 0)', Theme.GreenBright),
        ompIf('gt .Ahead 0', Theme.BlueBright),
        ompIf('gt .Behind 0', Theme.BlueBright),
      ],
      foreground: Theme.Black,
      powerline_symbol: '',
      properties: {
        branch_icon: ' ',
        fetch_status: true,
        fetch_upstream_icon: true,
        template: [
          spacing,
          ompSegment('.HEAD'),
          ompIf('gt .Ahead 0', '⇡' + ompSegment('.Ahead')),
          ompIf('gt .Ahead 0', '⇣' + ompSegment('.Behind')),
          spacing,
        ].join(''),
      },
      style: 'powerline',
      type: 'git',
    },
  ],
  type: 'prompt',
};
const promptLeftSecond: OmpBlock = {
  alignment: 'left',
  newline: true,
  segments: [
    {
      foreground: Theme.Black,
      properties: {
        template: '╰─',
      },
      style: 'plain',
      type: 'text',
    },
    {
      foreground: Theme.BlueBright,
      foreground_templates: [ompIf('gt .Code 0', Theme.Red)],
      properties: {
        always_enabled: true,
        template: '➤ ',
      },
      style: 'plain',
      type: 'exit',
    },
  ],
  type: 'prompt',
};
const promptRight: OmpBlock = {
  alignment: 'right',
  segments: [
    {
      background: '#303030',
      foreground: '#3C873A',
      leading_diamond: ' ',
      properties: {
        fetch_package_manager: true,
        npm_icon: ' <#cc3a3a></> ',
        template:
          ' {{ if .PackageManagerIcon }}{{ .PackageManagerIcon }} {{ end }}{{ .Full }}',
        yarn_icon: ' <#348cba></>',
      },
      style: 'diamond',
      trailing_diamond: '',
      type: 'node',
    },
    {
      background: Theme.Black,
      foreground: Theme.White,
      invert_powerline: true,
      leading_diamond: ' ',
      properties: {
        fetch_stash_count: true,
        fetch_status: true,
        fetch_upstream_icon: true,
        fetch_worktree_count: true,
        template: [
          spacing,
          ompIf(
            'and (eq .Ahead 0) (eq .Behind 0) (eq .Working.Changed false) (eq .Staging.Changed false)',
            ompIcon('✔' + spacing, Theme.GreenBright),
          ),
          ompIf(
            '.Staging.Changed',
            ompIcon(
              '±' +
                ompSegment('.Staging.Modified') +
                '+' +
                ompSegment('.Staging.Added') +
                '-' +
                ompSegment('.Staging.Deleted') +
                '※' +
                ompSegment('.Staging.Unmerged') +
                spacing,
              Theme.BlueBright,
            ),
          ),
          ompIf(
            'gt .StashCount 0',
            ompIcon(
              '±' + ompSegment('.StashCount') + spacing,
              Theme.OrangeBright,
            ),
          ),
          ompIf(
            '.Working.Changed',
            ompIcon(ompSegment('.Working.String') + spacing, Theme.White),
          ),
        ].join(''),
      },
      style: 'diamond',
      trailing_diamond: '',
      type: 'git',
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
