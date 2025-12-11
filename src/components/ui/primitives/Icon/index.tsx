interface IconProps {
  name: string;
}

export function Icon({ name }: IconProps) {
  return <span aria-hidden="true">{name}</span>;
}
