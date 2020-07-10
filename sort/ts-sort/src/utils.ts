export function swap(value1: any, value2: any): Array<any> {
  const temp = value1;
  value1 = value2;
  value2 = temp;
  return [value1, value2];
}