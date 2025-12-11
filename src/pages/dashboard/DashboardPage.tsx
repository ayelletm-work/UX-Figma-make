import { DashboardHeader } from './components/DashboardHeader';
import { DashboardKPIRow } from './components/DashboardKPIRow';

export function DashboardPage() {
  return (
    <section>
      <DashboardHeader />
      <DashboardKPIRow />
      <p>Welcome to the UX workspace dashboard.</p>
    </section>
  );
}
