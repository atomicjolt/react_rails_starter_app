import * as React from 'react';
import assets from '../libs/assets';

export default function Home() :React.Node {
  const img = assets('./images/atomicjolt.jpg');

  return (
    <div>
      <img src={img} alt="Atomic Jolt Logo" />
      <p>Welcome to the React Client starter app by <a href="http://www.atomicjolt.com">Atomic Jolt</a></p>
    </div>
  );
}
