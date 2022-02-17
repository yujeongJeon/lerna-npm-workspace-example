import { add, awesomeFn } from "@quramy/x-core";

export async function main() {
  // dependencies across child packages
  const out = await awesomeFn();
  console.log(add([1,2,3]))
  return out;
}
