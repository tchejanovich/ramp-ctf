import { useState, useEffect } from 'react';

import getFlag from '../api/getFlag';

const useFlag = () => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadFlag = async () => {
    console.log('Requesting flag..');

    const flag = await getFlag();
    if (flag) {
      console.log(`Flag loaded successfully. Flag: ${flag}.`);
      setValue(flag);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFlag();
  }, []);

  return {
    value,
    loading,
    error,
  };
};

export default useFlag;
