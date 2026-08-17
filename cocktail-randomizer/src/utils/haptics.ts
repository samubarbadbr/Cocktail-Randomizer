export function triggerHaptic(pattern: number | number[] = 25) {
  if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Haptic vibration fail-safe
    }
  }
}
