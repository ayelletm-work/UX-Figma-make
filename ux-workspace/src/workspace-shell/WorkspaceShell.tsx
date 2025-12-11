import { ReactNode } from 'react';
import { WorkspaceHeader } from './WorkspaceHeader';
import { WorkspaceContent } from './WorkspaceContent';
import { WorkspaceSidebar } from './WorkspaceSidebar';
import './workspace-shell.css';

interface WorkspaceShellProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export function WorkspaceShell({ sidebar, content }: WorkspaceShellProps) {
  return (
    <div className="workspace-shell">
      <WorkspaceHeader title="UX Workspace" />
      <div className="workspace-body">
        <WorkspaceSidebar>{sidebar}</WorkspaceSidebar>
        <WorkspaceContent>{content}</WorkspaceContent>
      </div>
    </div>
  );
}
