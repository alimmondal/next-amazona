import React from 'react';
import { useRouter } from 'next/router';

const Shipping = () => {
  const router = useRouter();
  router.push('/login');
  return <div>this shipping</div>;
};

export default Shipping;
