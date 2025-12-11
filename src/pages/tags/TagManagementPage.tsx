import { TagFiltersPanel } from './components/TagFiltersPanel';
import { TagList } from './components/TagList';

export function TagManagementPage() {
  return (
    <section>
      <h2>Tag Management</h2>
      <TagFiltersPanel />
      <TagList />
    </section>
  );
}
