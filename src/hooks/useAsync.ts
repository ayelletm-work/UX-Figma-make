import { useEffect, useState } from 'react';

type AsyncStatus = 'idle' | 'pending' | 'success' | 'error';

export function useAsync<T>(asyncFn: () => Promise<T>) {
  const [status, setStatus] = useState<AsyncStatus>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setStatus('pending');
    asyncFn()
      .then((result) => {
        setData(result);
        setStatus('success');
      })
      .catch((err) => {
        setError(err as Error);
        setStatus('error');
      });
  }, [asyncFn]);

  return { status, data, error } as const;
}
