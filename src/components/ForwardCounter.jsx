import React from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

function ForwardCounter() {
  const counter = useCounter('forward');

  return <Card>{counter}</Card>;
}

export default ForwardCounter;
