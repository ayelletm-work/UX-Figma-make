import { CSSProperties, PropsWithChildren } from 'react';

interface BoxProps extends PropsWithChildren {
  style?: CSSProperties;
}

export function Box({ children, style }: BoxProps) {
  return <div style={style}>{children}</div>;
}
