import { FILE } from "dns";

type color = "Black" | "White";
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Game {
  private pieces = Game.makePieces();

  private static makePieces() {
    return;
    [new King("White", "E", 1), new King("Black", "E", 8)];
  }
}

abstract class Piece {
  protected position: Position;
  constructor(private readonly color: color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }

  moveTo(potision: Position) {
    this.position = potision;
  }
  abstract canMoveTo(position: Position): boolean;
}

class Position {
  constructor(private file: File, private rank: Rank) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    };
  }
}

class King extends Piece {
  canMoveTo(position: Position) {
    const distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

const set = new Set();
set.add(1).add(2).add(3);
set.has(2);
set.has(4);

class Set {
  has(value: number): boolean {}
  add(value: number): Set {}
}

class MutableSet extends Set {
  delete(value: number): boolean {}
  add(value: number): MutableSet {}
}

class Set2 {
  has(value: number): boolean {}
  add(value: number): this {}
}

class MutableSet2 extends Set2 {
  delete(value: number): boolean {}
}

type Sushi = {
  calories: number;
  salty: boolean;
  tasty: boolean;
};

interface Sushi2 {
  calories: number;
  salty: boolean;
  tasty: boolean;
}

interface Food {
  calories: number;
  salty: boolean;
}

//Foodを継承してSushiインターフェイスを作成し、おいしさのプロパティを追加
interface Sushi3 extends Food {
  salty: boolean;
}

interface Cake extends Food {
  sweet: boolean;
}

interface A {
  good(x: number): string;
  bad(x: number): string;
}

type B = A & {
  good(x: string | number): string;
  bad(x: string): string;
};

// interface User {
//   name: string;
// }

// interface User {
//   age: number;
// }

// const a: User = {
//   name: "吉田直樹",
//   age: 47
// };

// type User1 = {
//   name: string;
// };

// type User1 = {
//   age: number;
// };

// interface User {
//   age: number;
// }

// interface User {
//   age: string;
// }

//インターフェイスでジェネリックを宣言し、尚且2つをマージさせる場合は、ジェネリックの同じ方法(型もしくは型エイリアスなどで)で宣言しないといけない
interface User<Age extends string> {
  age: Age;
}

interface User<Age extends number> {
  age: Age;
}

interface Animal {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

class Cat implements Animal {
  eat(food: string) {
    console.log("Ate some", food, ",Mmm!!");
  }

  sleep(hours: number) {
    console.info("Sleep for ", hours, "hours");
  }
}

interface Feline {
  meow(): void;
}

class Cat2 implements Animal, Feline {
  name = "YOSHIDA";
}
