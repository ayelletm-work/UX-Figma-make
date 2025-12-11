import { PropsWithChildren } from 'react';

export function Surface({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '1rem'
      }}
    >
      {children}
    </div>
  );
}
