console.log("Hello world!");

const a = 1 + 2;
const b = a + 3;
const c = {
  apple: a,
  banana: b
};
const d = c.apple * 4;

const as: readonly number[] = [1, 2, 3];
const bs: readonly number[] = as.concat(4);
const three = bs[2];
// as[4] = 5;
// as.push(6);

enum Language {
  English = 0,
  Spanish = 1,
  Russian = 2
}

const myFirstLang = Language.Russian;
const mySedLang = Language["English"];

const h = null;
console.log(h);
