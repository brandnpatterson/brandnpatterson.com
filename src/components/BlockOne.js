import React from 'react';
import Block from './styles/Block';

export default props => {
  return (
    <Block>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </Block>
  );
};
