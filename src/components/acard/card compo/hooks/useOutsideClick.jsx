import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    if (!ref) return;

    const listener = (event) => {
      // Ignore clicks on the element itself
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]); // ⚠️ ensure callback is memoized
};
