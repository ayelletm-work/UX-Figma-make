import { PropsWithChildren } from 'react';

export function WorkspaceSidebar({ children }: PropsWithChildren) {
  return <aside className="workspace-sidebar">{children}</aside>;
}
