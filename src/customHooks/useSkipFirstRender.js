import React, {useEffect, useRef } from 'react';

export const useSkipFirstRender = () => {
  const isMountRef = useRef(false);
  useEffect(() => {
    isMountRef.current = true;
  }, []);
  return isMountRef.current;
};

export default useSkipFirstRender