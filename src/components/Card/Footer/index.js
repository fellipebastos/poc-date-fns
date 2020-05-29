import React from 'react';

import { Container } from './styles';

function CardFooter({ className, children }) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

export default CardFooter;
