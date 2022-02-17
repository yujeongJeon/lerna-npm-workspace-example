export function awesomeFn() {
  return "Hello";
}

export function add(list: number[]) {
  return list.reduce((acc, cur) => acc + cur, 0)
}