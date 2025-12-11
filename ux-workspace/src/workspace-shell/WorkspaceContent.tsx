import { PropsWithChildren } from 'react';

export function WorkspaceContent({ children }: PropsWithChildren) {
  return <main className="workspace-content">{children}</main>;
}
