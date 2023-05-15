import React from "react";
import useInView, { InViewOptions } from "../../hooks/useInView";

export interface InViewProps extends InViewOptions {
  children: (isIntersecting: boolean) => React.ReactNode;
}

/**
 * 交差の監視を行うコンポーネント
 *
 * @example
 * <InView>
 *  {(isIntersecting) => (
 *   <div>{isIntersecting ? 'hello' : 'bye'}</div>
 * )}
 * </InView>
 */
const InView: React.FC<InViewProps> = (props) => {
  const { children, root, rootMargin, threshold, triggerOnce } = props;

  const { ref, isIntersecting } = useInView({
    root,
    rootMargin,
    threshold,
    triggerOnce,
  });

  return <div ref={ref}>{children(isIntersecting)}</div>;
};

export default InView;
