import { VMRow } from './VMRow';

export function VMTable() {
  return (
    <table>
      <tbody>
        <VMRow name="vm-app-01" status="running" />
      </tbody>
    </table>
  );
}
