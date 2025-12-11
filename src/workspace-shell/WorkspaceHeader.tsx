interface WorkspaceHeaderProps {
  title: string;
}

export function WorkspaceHeader({ title }: WorkspaceHeaderProps) {
  return (
    <header className="workspace-header">
      <h1>{title}</h1>
    </header>
  );
}
