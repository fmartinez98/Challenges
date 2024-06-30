import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectHasSeenOnboarding } from './authSlice';

export function useHasSeenOnboarding() {
  const hasSeenOnboarding = useSelector(selectHasSeenOnboarding);
  return useMemo(() => hasSeenOnboarding, [hasSeenOnboarding]);
}
