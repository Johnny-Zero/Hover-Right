
export default (obj) => {
  if (!Array.isArray(obj) || !obj.length) {
    return false;
  }

  return obj.every( value => (typeof value === 'number'));
};
