import React from "react";
import useIntersectionObserver, {
  IntersectionObserverOptions,
} from "../../hooks/useIntersectionObserver";

export interface InViewProps extends IntersectionObserverOptions {
  children: (isIntersecting: boolean) => React.ReactNode;
}

const InView: React.FC<InViewProps> = (props) => {
  const { children, root, rootMargin, threshold, triggerOnce } = props;

  const { ref, isIntersecting } = useIntersectionObserver({
    root,
    rootMargin,
    threshold,
    triggerOnce,
  });

  return <div ref={ref}>{children(isIntersecting)}</div>;
};

export default InView;
