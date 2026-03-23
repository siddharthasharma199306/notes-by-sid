"use client";
import { Callout } from "nextra/components";

const PatternCallout = ({ children }: React.PropsWithChildren) => {
  return <Callout type="important">{children}</Callout>;
};

export default PatternCallout;
