interface VMRowProps {
  name: string;
  status: string;
}

export function VMRow({ name, status }: VMRowProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{status}</td>
    </tr>
  );
}
