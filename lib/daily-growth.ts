// Utility functions for daily data growth
export function calculateGrowthMultiplier(lastUpdateDate: Date, growthRate: number): number {
  const now = new Date();
  const daysDiff = Math.floor((now.getTime() - lastUpdateDate.getTime()) / (1000 * 60 * 60 * 24));
  return Math.pow(1 + growthRate, daysDiff);
}

export function getStoredValue(key: string, defaultValue: number): number {
  if (typeof window === 'undefined') return defaultValue;
  const stored = localStorage.getItem(key);
  return stored ? parseFloat(stored) : defaultValue;
}

export function setStoredValue(key: string, value: number): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, value.toString());
}

export function getStoredDate(key: string): Date | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(key);
  return stored ? new Date(stored) : null;
}

export function setStoredDate(key: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, new Date().toISOString());
}

export function applyDailyGrowth(
  baseValue: number,
  growthRate: number,
  storageKey: string,
  dateKey: string
): number {
  const lastUpdate = getStoredDate(dateKey);
  const storedValue = getStoredValue(storageKey, baseValue);

  if (!lastUpdate) {
    // First time, set initial values
    setStoredValue(storageKey, baseValue);
    setStoredDate(dateKey);
    return baseValue;
  }

  const multiplier = calculateGrowthMultiplier(lastUpdate, growthRate);
  const newValue = Math.round(storedValue * multiplier);

  // Update stored values
  setStoredValue(storageKey, newValue);
  setStoredDate(dateKey);

  return newValue;
}