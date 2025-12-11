import { ThemeProvider } from './theme';
import { WorkspaceShell } from './workspace-shell';
import { NavigationSidebar } from './navigation';
import { DashboardPage } from './pages/dashboard/DashboardPage';

function App() {
  return (
    <ThemeProvider>
      <WorkspaceShell
        sidebar={<NavigationSidebar />}
        content={<DashboardPage />}
      />
    </ThemeProvider>
  );
}

export default App;
