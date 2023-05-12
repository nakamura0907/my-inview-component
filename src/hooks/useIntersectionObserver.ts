import React from "react";

export interface IntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

const defaultOptions: IntersectionObserverOptions = {
  triggerOnce: false,
};

const useIntersectionObserver = (options = defaultOptions) => {
  const { triggerOnce, ...observerOptions } = options;

  const [target, setTarget] = React.useState<Element | null>(null);
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>();

  const isFrozen = entry?.isIntersecting && triggerOnce;

  const handleIntersect = ([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  };

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.IntersectionObserver) {
      console.error("IntersectionObserverはサポートされていません。");
      return;
    }

    if (!target || isFrozen) return;

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [target, isFrozen]);

  return {
    ref: setTarget,
    entry,
    isIntersecting: entry?.isIntersecting ?? false,
  };
};

export default useIntersectionObserver;
