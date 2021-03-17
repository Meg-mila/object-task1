export default function orderByProps(obj, order) {
  const result = [];
  const resultSort = [];
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const prop in obj) {
    const object = {};
    object.key = prop;
    object.value = obj[prop];
    if (order.includes(prop)) {
      result.push(object);
    } else {
      resultSort.push(object);
    }
  }

  resultSort.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  return [...result, ...resultSort];
}
