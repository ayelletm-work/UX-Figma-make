import { PropsWithChildren } from 'react';

export function WorkspaceLayout({ children }: PropsWithChildren) {
  return <div className="workspace-layout">{children}</div>;
}
