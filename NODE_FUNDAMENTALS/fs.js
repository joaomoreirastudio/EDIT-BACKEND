import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(dirname);

fs.mkdirSync(path.resolve(dirname, "pasta1"));

fs.rm;
