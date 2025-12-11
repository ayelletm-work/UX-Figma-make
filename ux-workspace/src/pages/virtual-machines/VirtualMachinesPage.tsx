import { VirtualMachineFilters } from './filters/VirtualMachineFilters';
import { VMTable } from './components/VMTable';

export function VirtualMachinesPage() {
  return (
    <section>
      <h2>Virtual Machines</h2>
      <VirtualMachineFilters />
      <VMTable />
    </section>
  );
}
