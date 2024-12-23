export const debounce = (func, timeout = 2000) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const hitSearch = ({ searchTerm = "", searchText = "" }) => {
  const minLength = Math.min(searchTerm.length, searchText.length);
  for (let i = 0; i < minLength; i++) {
    if (searchTerm[i].toLowerCase() !== searchText[i].toLowerCase())
      return false;
  }

  return true;
};
