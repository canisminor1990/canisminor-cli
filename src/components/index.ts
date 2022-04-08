import React from 'react';

export * from './Ink';
export { default as ChildProcess } from './ChildProcess';
export { default as Theme, BaseColor } from './Theme';
export { default as Log } from './Log';
export { default as ConfirmBox } from './ConfirmBox';
export { default as BorderBox } from './BorderBox';
export { default as LogoBox } from './LogoBox';
export { default as TitleBox } from './TitleBox';
export { default as SelectItem } from './SelectItem';
export { default as SelectIndicator } from './SelectIndicator';
export { default as Select, ItemOfSelect } from './Select';

export interface FC extends React.FC {
  title?: string;
}
