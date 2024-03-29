let name = `Tom`;
let str = `Hello\n${name}`;
console.log(str);

function b(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce((accu, str, i) => {
    let val = values[i] ? `<b>${values[i]}</b>` : "";
    return `${accu}${str}${val}`;
  }, "");
}

const str1 = "Bob";
const str2 = "Tom";
const result = b`${str1} and ${str2}`;
console.log(result);
