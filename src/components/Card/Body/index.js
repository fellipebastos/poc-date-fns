import React from 'react';

import { Container } from './styles';

function CardBody({ className, children }) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

export default CardBody;
