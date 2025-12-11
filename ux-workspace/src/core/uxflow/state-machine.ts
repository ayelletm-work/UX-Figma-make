export type State = 'idle' | 'loading' | 'ready';

export function transition(state: State, event: string): State {
  if (event === 'INIT') return 'loading';
  return state;
}
