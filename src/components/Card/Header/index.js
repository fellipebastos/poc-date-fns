import React from 'react';

import { Container } from './styles';

function CardHeader({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default CardHeader;
