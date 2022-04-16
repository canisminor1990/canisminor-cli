export const profile =
  '# Prompt Config\n' +
  'Import-Module posh-git\n' +
  'Import-Module oh-my-posh\n' +
  'Set-PoshPrompt mytheme\n' +
  '$env:POSH_GIT_ENABLED = $true\n' +
  '\n' +
  '# Icons\n' +
  'Import-Module Terminal-Icons\n' +
  '\n' +
  '# PSReadLine\n' +
  'Set-PSReadLineOption -BellStyle None\n' +
  'Set-PSReadLineOption -PredictionSource History\n' +
  'Set-PSReadLineOption -Colors @{\n' +
  "\tCommand = 'Red'\n" +
  "\tNumber = 'Magenta'\n" +
  "\tString = '#E6DB73'\n" +
  "  \tOperator = 'Red'\n" +
  "  \tVariable = 'Yellow'\n" +
  " \tParameter = '#7A7A6A'\n" +
  "\tDefault = 'Green'\n" +
  '}\n' +
  '\n' +
  '# Fzf\n' +
  'Import-Module PSFzf\n' +
  "Set-PsFzfOption -PSReadlineChordProvider 'Ctrl+f' -PSReadlineChordReverseHistory 'Ctrl+r'\n" +
  '\n' +
  '# Alias\n' +
  'Set-Alias grep findstr\n' +
  'Set-Alias open start\n' +
  '\n' +
  '# Clear\n' +
  'clear\n' +
  '\n' +
  '# Welcome\n' +
  'cmli --logo canisminor';
