import { useState } from 'react';
import { useEffectOnce } from 'react-use';

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffectOnce(() => setMounted(true));
  return mounted;
}
