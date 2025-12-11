import { routes } from './routes';

export function NavigationSidebar() {
  return (
    <nav>
      <ul>
        {Object.entries(routes).map(([key, path]) => (
          <li key={key}>
            <a href={path}>{key}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
