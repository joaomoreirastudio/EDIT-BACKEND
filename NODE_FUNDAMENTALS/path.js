import path from "path";

console.log(import.meta.url);
const dirname = path.dirname(import.meta.url);

console.log(dirname);

console.log(path.join(dirname, "..", "pasta"));
console.log(path.resolve(dirname, "..", "pasta"));
