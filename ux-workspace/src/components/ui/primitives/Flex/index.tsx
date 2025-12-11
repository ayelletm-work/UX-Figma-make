import { CSSProperties, PropsWithChildren } from 'react';

interface FlexProps extends PropsWithChildren {
  gap?: number;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
}

export function Flex({ children, gap = 8, align = 'stretch', justify = 'flex-start' }: FlexProps) {
  return (
    <div style={{ display: 'flex', gap, alignItems: align, justifyContent: justify }}>
      {children}
    </div>
  );
}
