let numbers = [1, 2, 3, 4, 5, 1, 5, 8, 2];
let moreNumbers = [2, 6, 7, 8, 9, 10];
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { c: 5, d: 6, e: 7, a: 8 };
// 1.*Sum of Array Elements*
// Write a function that takes an array of numbers and returns their sum.
const sumArray = (arr) => {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  return sum;
};
console.log("Sum = ", sumArray(numbers));
// 2.*Find Maximum Value*
// Write a function to find the largest number in an array.
const findMax = (arr) => {
  return Math.max(...arr);
};
console.log("Max = ", findMax(numbers));
// 3.*Remove Duplicates*
// Write a function that removes duplicate values from an array.
const removeDuplicates = (arr) => {
  let uniqueArray = [];
  arr.forEach((el) => {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });
  return uniqueArray;
};
console.log("Without Duplicates = ", removeDuplicates(numbers));
// 4.*Merge Two Arrays*
// Write a function that merges two arrays and returns a new array without duplicates.
const mergeArrays = (arr1, arr2) => {
  let mergedArray = [...arr1, ...arr2];
  return removeDuplicates(mergedArray);
};
console.log("Merged Array = ", mergeArrays(numbers, moreNumbers));
// 5.*Array Chunking*
// Write a function that splits an array into chunks of a given size.
const chunkArray = (arr, size) => {
  let chunkedArray = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }
  return chunkedArray;
};
console.log("Chunked Array = ", chunkArray(numbers, 3));
// 6.*Object Key Count*
// Write a function that counts the number of keys in an object.
const countObjectKeys = (obj) => {
  return Object.keys(obj).length;
};
console.log("Object Key Count = ", countObjectKeys(obj1));
// 7.*Merge Two Objects*
// Write a function that merges two objects. If keys conflict, the second object should overwrite the first.
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
console.log("Merged Object = ", mergeObjects(obj1, obj2));
// 8.*Filter Object Properties*
// Write a function that takes an object and returns a new object with only specified keys.
// Example: filterKeys({a:1, b:2, c:3}, ["a", "c"]) → {a:1, c:3}
const filterKeys = (obj, keys) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key))
  );
};
console.log("Filtered Object = ", filterKeys(obj1, ["b", "c"]));
// 9.*Convert Object to Array*
// Write a function that converts an object into an array of [key, value] pairs.
// Example: {a:1, b:2} → [["a",1], ["b",2]]
const objectToArray = (obj) => {
  return Object.entries(obj);
};
console.log("Object to Array = ", objectToArray(obj1));
// 10.*Deep Clone Object*
// Write a function that deeply clones an object (handles nested objects).
const original = {
  name: "John",
  age: 30,
  address: {
    district: "Bhaktapur",
    state: "Bagmati",
  },
};
const deepClone = (obj) => {
  const copy = JSON.parse(JSON.stringify(obj));
  return copy;
};
console.log("Deep Cloned Object = ", deepClone(original));
// 11.*Sum with Rest Operator*
// Write a function sum(...numbers) that takes any number of arguments and returns their sum.
const sumWithRest = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log("Sum with Rest Operator = ", sumWithRest(1, 2, 3, 4, 5));
// 12. *Concatenate Arrays with Spread*
// Write a function that takes multiple arrays and merges them using the spread operator.
const concatenateArrays = (...arrays) => {
  return [].concat(...arrays);
};
console.log(
  "Concatenated Arrays = ",
  concatenateArrays([1, 0], [2, 4, 6], [11, 12, 13])
);
// 13. *Copy and Modify Object*
// Given an object, create a copy using the spread operator and modify one property.
const modifyObject = (obj, key, value) => {
  return { ...obj, [key]: value };
};
console.log("Modified Object = ", modifyObject(obj1, "b", 10));
// 14. *Dynamic Function Arguments*
// Write a function that accepts any number of arguments (using rest) and logs them.
const logArguments = (...args) => {
  args.forEach((arg) => console.log(arg));
};
logArguments("Hello", 42, "hi", 5, [1, 2, 3]);
// 15. *Merge and Override*
// Merge two objects using spread, where the second object overrides the first if keys conflict.
const mergeAndOverride = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
console.log("Merged and Overridden Object = ", mergeAndOverride(obj1, obj2));
// 16. *Array to Object*
// Convert an array of [key, value] pairs into an object.
// Example: [ ["a",1], ["b",2] ] → {a:1, b:2}
const arrayToObject = (arr) => {
  return Object.fromEntries(arr);
};
console.log(
  "Array to Object = ",
  arrayToObject([
    ["high", 1],
    ["low", 0],
  ])
);
// 17. *Flatten Nested Arrays*
// Write a function that flattens a nested array using the spread operator.
// Example: [1, [2, [3, 4]]] → [1, 2, 3, 4]
const flattenNestedArray = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenNestedArray(toFlatten) : toFlatten
    );
  }, []);
};
console.log("Flattened Array = ", flattenNestedArray([1, [2, [3, 4]]]));
// 18. *Dynamic Object Builder*
// Write a function that takes keys and values (using rest) and constructs an object.
// Example: createObj("a", 1, "b", 2) → {a:1, b:2}
const createObj = (...args) => {
  let obj = {};
  for (let i = 0; i < args.length; i += 2) {
    obj[args[i]] = args[i + 1];
  }
  return obj;
};
console.log("Dynamic Object = ", createObj("a", 1, "b", 2, "c", 3));
// 19. *Filter and Transform Array*
// Given an array of objects, filter based on a condition and return a new array with modified objects.
const filterAndTransform = (arr, condition, transform) => {
  return arr.filter(condition).map(transform);
};
const data = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const condition = (item) => item.age > 18;
const transform = (item) => ({ ...item, age: item.age + 1 });
console.log(
  "Filtered and Transformed Array = ",
  filterAndTransform(data, condition, transform)
);
// 20. *Advanced: Deep Merge Objects*
// Write a function that deeply merges two objects (handles nested objects).
const deepMergeObj = (obj1, obj2) => {
  const merged = { ...obj1 };
  for (const key in obj2) {
    if (typeof obj2[key] === "object" && merged[key]) {
      merged[key] = deepMergeObj(merged[key], obj2[key]);
    } else {
      merged[key] = obj2[key];
    }
  }
  return merged;
};
console.log(
  "Deep Merged Object = ",
  deepMergeObj({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 })
);