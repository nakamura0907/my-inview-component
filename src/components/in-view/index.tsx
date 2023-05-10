import React from "react";

export type InViewProps = React.HTMLAttributes<HTMLDivElement>;

const InView: React.FC<InViewProps> = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};

export default InView;
