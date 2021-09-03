export const setApiKey = (key) => {
  localStorage.setItem('key', key);
};

export const deleteApiKey = () => {
    localStorage.removeItem('key');
};

export const getApiKey = () => localStorage.getItem('key');