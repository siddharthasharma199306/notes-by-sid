import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme
import PatternCallout from "./app/_components/pattern-callout";

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    PatternCallout,
    ...components,
  };
}
