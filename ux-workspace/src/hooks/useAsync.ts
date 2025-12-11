import { useCallback, useEffect, useState } from 'react';

type AsyncStatus = 'idle' | 'pending' | 'success' | 'error';

export function useAsync<T>(asyncFn: () => Promise<T>) {
  const [status, setStatus] = useState<AsyncStatus>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const run = useCallback(
    async (signal?: AbortSignal) => {
      setStatus('pending');
      setError(null);
      setData(null);

      try {
        const result = await asyncFn();
        if (signal?.aborted) return;

        setData(result);
        setStatus('success');
      } catch (err) {
        if (signal?.aborted) return;

        setError(err as Error);
        setStatus('error');
      }
    },
    [asyncFn]
  );

  useEffect(() => {
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => {
      void run(abortController.signal);
    });

    return () => {
      abortController.abort();
      clearTimeout(timeoutId);
    };
  }, [run]);

  return { status, data, error, refresh: run } as const;
}
