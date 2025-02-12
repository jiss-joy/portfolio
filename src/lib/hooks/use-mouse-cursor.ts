import { useState, useRef } from 'react';

const useMouseCursor = () => {
  const [cursor, setCursor] = useState({ cx: 0, cy: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (ref.current !== null) {
      const rect = ref.current.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      setCursor({ cx, cy });
    }
  };

  return { ref, cursor, handleMouseMove };
};

export default useMouseCursor;
