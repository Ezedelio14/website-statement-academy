import { RefObject, useEffect } from "react";

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>;
  callback: () => void;
}

export function useOutsideClick({ ref, callback }: UseOutsideClickProps) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
}
