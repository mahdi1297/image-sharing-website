export function saveToLocalStorage(key: string, value: any) {
  const lg = localStorage;

  lg.setItem(key, value);
}

export function localStorageRemover(key: string, id: number) {}
