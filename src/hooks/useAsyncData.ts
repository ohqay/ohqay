import { useState, useEffect, useCallback } from 'react';

export interface UseAsyncDataOptions<T> {
  initialData?: T;
  dependencies?: any[];
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export interface UseAsyncDataState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useAsyncData<T>(
  asyncFunction: () => Promise<T>,
  options: UseAsyncDataOptions<T> = {}
) {
  const { initialData = null, dependencies = [], onSuccess, onError } = options;
  
  const [state, setState] = useState<UseAsyncDataState<T>>({
    data: initialData,
    loading: true,
    error: null,
  });

  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const result = await asyncFunction();
      setState({ data: result, loading: false, error: null });
      onSuccess?.(result);
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error(String(error));
      setState({ data: null, loading: false, error: errorObj });
      onError?.(errorObj);
    }
  }, [asyncFunction, onSuccess, onError]);

  useEffect(() => {
    execute();
  }, [execute, ...dependencies]);

  const refetch = useCallback(() => {
    execute();
  }, [execute]);

  return {
    ...state,
    refetch,
    isLoading: state.loading,
    isError: !!state.error,
    isSuccess: !state.loading && !state.error && state.data !== null,
  };
}