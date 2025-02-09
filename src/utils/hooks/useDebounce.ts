import { useEffect, useState } from "react";

export const DefaultDebounceTimeout = 500;

export function useDebounce(
  timeout = DefaultDebounceTimeout,
  defaultValue?: string
) {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [debouncedValue, setDebouncedValue] = useState<string>(
    defaultValue ?? ""
  );

  const changeValue = (text: string) => setValue(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [value, timeout]);

  return {
    debouncedValue,
    value,
    changeValue,
  };
}
