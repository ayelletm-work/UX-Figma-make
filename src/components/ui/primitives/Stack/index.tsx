import { PropsWithChildren } from 'react';

interface StackProps extends PropsWithChildren {
  gap?: number;
}

export function Stack({ children, gap = 12 }: StackProps) {
  return <div style={{ display: 'grid', gap }}>{children}</div>;
}
