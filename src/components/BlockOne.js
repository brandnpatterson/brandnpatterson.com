import React from 'react';
import Block from './styles/Block';
import { Button } from 'reactstrap';

export default props => {
  return (
    <Block>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <Button color="primary">Click Me</Button>
    </Block>
  );
};
