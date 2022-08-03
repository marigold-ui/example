import { Theme } from '@marigold/components';
import { border, color, size, space, typography } from '@marigold/tokens';

const components = {
  Button: {
    base: {
      bg: 'gray.50',
      border: 'none',
      borderRadius: 'small-2',
      lineHeight: '48px',
      px: 'large-1',
      outline: 'none',

      '&[data-focus]': {
        outline: '1px solid',
        outlineColor: 'blue.50',
        outlineOffset: '1px',
      },

      '&:disabled': {
        color: 'gray40',
        bg: 'gray20',
      },
    },
  },
};

export const theme: Theme = {
  components,

  // Globals
  // ---------------
  root: {
    body: {
      fontFamily: 'body',
    },
  },

  // Colors
  // ---------------
  colors: color,

  // Typography
  // ---------------
  fonts: {
    body: "'Open Sans', sans-serif",
  },
  fontSizes: typography.size.fixed,
  fontWeights: typography.weight,
  lineHeights: typography.lineHeight,

  // Space
  // ---------------
  space: space.fixed,

  // Sizes
  // ---------------
  sizes: size.fixed,

  // Border
  // ---------------
  borderWidths: border.width,
  radii: border.radius,
};
