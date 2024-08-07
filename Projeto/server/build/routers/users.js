import { readFileSync } from "fs";
export let users = JSON.parse(readFileSync("./src/data/users.json", "utf-8"));
