import { useRef, useEffect, useState } from 'react';

import { IOoptions } from '@shared/model/type';

export const useObserver = (options: IOoptions) => {
  const node = useRef<HTMLDivElement>(null);
  const [isIntersect, setIsIntersect] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const { isIntersecting } = entries[0];
    setIsIntersect(isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (node && node.current) observer.observe(node?.current);
    return () => {
      if (node && node.current) observer.disconnect();
    };
  }, [node]);

  return [node, isIntersect];
};
