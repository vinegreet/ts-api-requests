export const loadFavorites = () => {
  try {
    const serializedFavorites = localStorage.getItem('favorites');
    if (serializedFavorites === null) {
      return undefined;
    }
    return JSON.parse(serializedFavorites);
  } catch (err) {
    return undefined;
  }
};

export const saveFavorites = (favorites: number[]) => {
  return new Promise((resolve, reject) => {
    try {
      const serializedFavorites = JSON.stringify(favorites);
      localStorage.setItem('favorites', serializedFavorites);
      resolve(null);
    } catch (err) { 
      reject();
    }
  })
};
