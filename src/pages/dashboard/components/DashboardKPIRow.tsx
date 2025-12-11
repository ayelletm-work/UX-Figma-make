export function DashboardKPIRow() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      <div>Active Spaces</div>
      <div>Open Tasks</div>
      <div>Automation Health</div>
    </div>
  );
}
