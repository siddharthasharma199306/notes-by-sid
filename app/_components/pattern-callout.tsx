"use client";
import { Callout } from "nextra/components";
import { PropsWithChildren } from "react";
const PatternCallout = ({
  children,
  type,
}: PropsWithChildren<{
  type: "default" | "error" | "info" | "warning" | "important";
}>) => {
  return <Callout type={type}>{children}</Callout>;
};

export default PatternCallout;
