const tempStorage = {};

const encodeKey = key => window.btoa(key);

const decodeKey = key => window.atob(key);

export const getValue = key => {
  const encodedKey = encodeKey(key);
  let encodedValue = undefined;

  try {
    encodedValue = window.localStorage.getItem(encodedKey);
  } catch (e) {
    encodedValue = tempStorage[encodedKey];
  }
  const stringValue = encodedValue && decodeKey(encodedValue);

  return stringValue && JSON.parse(stringValue);
};

export const setValue = (key, value) => {
  const encodedKey = encodeKey(key);
  const stringValue = JSON.stringify(value);
  const encodedValue = encodeKey(stringValue);
  
  try {
    window.localStorage.setItem(encodedKey, encodedValue);
  } catch (e) {
    tempStorage[encodedKey] = encodedValue;
  }
};

export const removeValue = key => {
  const encodedKey = encodeKey(key);

  try {
    window.localStorage.removeItem(encodedKey);
  } catch (e) {
    tempStorage[encodedKey] = undefined;
  }
};
