import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';

const Shipping = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping');
    }
  }, []);

  return (
    <div>
      <h1>This is a shipping</h1>
    </div>
  );
};

export default Shipping;
