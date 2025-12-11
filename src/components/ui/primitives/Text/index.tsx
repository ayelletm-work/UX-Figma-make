import { PropsWithChildren } from 'react';

interface TextProps extends PropsWithChildren {
  variant?: 'body' | 'caption';
}

export function Text({ children, variant = 'body' }: TextProps) {
  const style = variant === 'caption' ? { fontSize: '0.875rem', color: '#475569' } : {};
  return <span style={style}>{children}</span>;
}
