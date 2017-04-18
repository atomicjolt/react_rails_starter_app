import React from 'react';
import assets from '../libs/assets';

export default function Home() {
  const img = assets('./images/atomicjolt.jpg');

  return (
    <div>
      <img src={img} alt="Atomic Jolt Logo" />
    </div>
  );
}
