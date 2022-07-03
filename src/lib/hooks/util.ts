import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffectOnce(() => setMounted(true));
  return mounted;
}
