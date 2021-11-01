class Link {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const emptyList = new Link(null);
const isEmpty = (link) => !(link.next || link.value);
const cons = (value, list) => new Link(value, list);
const first = (list) => list.value;
const rest = (list) => list.next;

const listToStringH = (list) => {
  if (isEmpty(list)) return '';
  if (isEmpty(rest(list))) return list.value.toString();
  const str = first(list) + ', ' + listToStringH(rest(list));
  return str;
};

const remove = (index, list) => {
  if (isEmpty(list)) throw "Can't remove an item from an empty list";
  if (index === 0) return rest(list);
  return cons(first(list), remove(index - 1, rest(list)));
};

const mapList = (list, func) => {
  if (isEmpty(list)) return emptyList;
  const restResult = mapList(rest(list), func);
  const firstResult = func(first(list));
  return cons(firstResult, restResult);
};

const filterList = (list, func) => {
  if (isEmpty(list)) return emptyList;
  const result = filterList(rest(list), func);
  const firstResult = func(first(list));
  if (firstResult) {
    return cons(first(list), result);
  } else {
    return result;
  }
};

const listToString = (list) => '[' + listToStringH(list) + ']';

const arrayToList = (arr) => {
    arr.reverse();
    return arr.reduce((acc, val) => cons(val, acc), emptyList)
};

const list = cons(1, cons(2, cons(3, cons(-5, emptyList))));

console.log(listToString(list));
console.log(
  mapList(list, (val) => {
    return val * 10;
  })
);

console.log(
  filterList(list, (val) => {
    return val > 1;
  })
);

const merge = (list1, list2) => {
    if (isEmpty(list1)) return list2;
    if (isEmpty(list2)) return list1;
    const [h1, h2] = [first(list1), first(list2)];
    const resRest = merge(rest(list1), rest(list2));
    if (h1 <= h2) return (cons(h1, cons(h2, resRest)));
    return (cons(h2, cons(h1, resRest)));
}

const splitOE = (list) => {
    if (isEmpty(list)) return [emptyList, emptyList];
    if (isEmpty(rest(list))) return [list, emptyList];
    const [odd, even] = splitOE(rest(rest(list)));
    return [cons(first(list), odd), cons(first(rest(list)), even)];
}

const mergeSort = (list) => {
    if (isEmpty(list) || isEmpty(rest(list))) return list;
    const [odd, even] = splitOE(list);
    return merge(mergeSort(odd), mergeSort(even));
}

const unsorted = arrayToList([3, 1, 6, 8, 2, 5, 8]);
console.log(listToString(mergeSort(unsorted)));
//[1, 2, 3, 5, 6, 8, 8]