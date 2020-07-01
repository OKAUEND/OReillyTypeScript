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
false;

function add(a: number, b: number) {
  return a + b;
}

function greet(name: string) {
  return "Hello" + name;
}

// add(1, 2);
// add(1, "a");
// add(1);

function log(message: string, userID?: string) {
  const time = new Date().toLocaleTimeString();
  console.log(time, message, userID || "Not signed in");
}

log("Page Loaded");
log("User signed in ", "da763a");

function log2(message: string, userID = "Not signed in") {
  const time = new Date().toLocaleTimeString();
  console.log(time, message, userID);
}

type Context = {
  appID?: string;
  UserID?: string;
};

function log3(message: string, context: Context = {}) {
  const time = new Date().toLocaleTimeString();
  console.log("Log3", time, message, context.UserID);
}

log3("Page Loaded");
log3("User signed in ", { UserID: "da763a" });
