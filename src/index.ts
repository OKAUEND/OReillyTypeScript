import { allowedNodeEnvironmentFlags, argv } from "process";
import { arch } from "os";
import { resolve } from "path";

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

// function log(message: string, userID?: string) {
//   const time = new Date().toLocaleTimeString();
//   console.log(time, message, userID || "Not signed in");
// }

// log("Page Loaded");
// log("User signed in ", "da763a");

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

function sumVariadiSafe(...number: number[]): number {
  return number.reduce((total, n) => total + n, 0);
}

console.log(sumVariadiSafe(1, 2, 3));

type Greet = (name: string) => string;

type Log = (message: string, userId?: string) => void;

type SumVariadSafe = (...number: number[]) => number;

const log: Log = (message, userId = "Not Singed in") => {
  const time = new Date().toISOString();
  console.log(time, message, userId);
};

log("Hage");

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

times(n => console.log(n), 4);

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
  (from: Date, destination: string): Reservation;
};

const reserve: Reserve = (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    //ほげー
  } else if (typeof toOrDestination === "string") {
    //ふごー
  }
};

// createElement<K extends keyof HTMLElementTagNameMap>(tagname:K):HTMLElementTagNameMap[K];
// createElement(tagname:string):HTMLElement;
// function warnUser(warning: string) {
//   if (warnUser.wasCalled) {
//     return;
//   }
//   warnUser.wasCalled = true;
//   alert(warnUser);
// }

// warnUser.wasCalled = false;

// type warnUser = {
//   (warning: string): void;
//   wasCalled: boolean;
// };

// type Filter = {
//   (array: number[], f: (item: number) => boolean): number[];
//   (array: string[], f: (item: string) => boolean): string[];
//   (array: object[], f: (item: object) => boolean): object[];
// };

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}

map(["a", "b", "c"], _ => _ === "a");

map<string, boolean>(["a", "b", "c"], _ => _ === "a");

// map<string>(["a", "b", "c"], _ => _ === "a");

map<string, boolean | string>(["a", "b", "c"], _ => _ === "a");

map<string, boolean>(["a", "b", "c"], _ => _ === "a");

const promise = new Promise<number>(resolve => resolve(45));

promise.then(result => result * 4);

type MyEvent<T> = {
  target: T;
  type: string;
};

type TimeEvent<T> = {
  event: MyEvent<T>;
  from: Date;
  to: Date;
};
// type ButtonEvent = MyEvent<HTMLButtonElement>;
