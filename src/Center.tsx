import { ReactNode } from 'react';
import { Box } from '@marigold/components';

export interface CenterProps {
  children: ReactNode;
}

export const Center = ({ children }: CenterProps) => (
  <Box css={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
    {children}
  </Box>
);
