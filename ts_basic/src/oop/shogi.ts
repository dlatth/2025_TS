import * as readline from 'readline';

type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Player = 'first' | 'second';

class Position {
  constructor(private suji: Suji, private dan: Dan) {}
  distanceFrom(position: Position, player: Player) {
    const targetSuji = position.suji;
    const targetDan = Number(position.dan);
    const currentDan = Number(this.dan);
    return {
      suji: Math.abs(targetSuji - this.suji),
      dan: player === 'first' ? targetDan - currentDan : currentDan - targetDan,
    };
  }
  equals(pos: Position) {
    return this.suji === pos.suji && this.dan === pos.dan;
  }
  getSuji() {
    return this.suji;
  }
  getDan() {
    return this.dan;
  }
}

abstract class Piece {
  protected position: Position;
  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position, player: Player): boolean;
  abstract getSymbol(): string;
  getPosition() {
    return this.position;
  }
  getPlayer() {
    return this.player;
  }
}

class Osho extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const dist = this.position.distanceFrom(position, player);
    return dist.suji < 2 && Math.abs(dist.dan) < 2;
  }
  getSymbol(): string {
    return '王';
  }
}

class Fu extends Piece {
  canMoveTo(position: Position, player: Player): boolean {
    const dist = this.position.distanceFrom(position, player);
    return dist.suji === 0 && dist.dan === 1;
  }
  getSymbol(): string {
    return '歩';
  }
}

export default class Game {
  private pieces: Piece[];
  private currentTurn: Player = 'first';

  constructor() {
    this.pieces = Game.makePieces();
    this.printBoard();
  }

  private static makePieces(): Piece[] {
    return [
      new Osho('first', 5, '1'),
      new Osho('second', 5, '9'),
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((suji) => new Fu('first', suji as Suji, '3')),
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((suji) => new Fu('second', suji as Suji, '7')),
    ];
  }

  printBoard() {
    console.clear();
    console.log('현재 장기판:\n');
    for (let dan = 9; dan >= 1; dan--) {
      let row = '';
      for (let suji = 1; suji <= 9; suji++) {
        const piece = this.getPieceAt(new Position(suji as Suji, dan.toString() as Dan));
        if (piece) {
          row += piece.getPlayer() === 'first' ? piece.getSymbol() : piece.getSymbol().padStart(2, ' ');
        } else {
          row += '□ ';
        }
      }
      console.log(row);
    }
    console.log(`\n[${this.currentTurn === 'first' ? '선수' : '후수'}] 차례입니다.`);
  }

  private getPieceAt(position: Position): Piece | undefined {
    return this.pieces.find((p) => p.getPosition().equals(position));
  }

  playTurn(fromSuji: Suji, fromDan: Dan, toSuji: Suji, toDan: Dan) {
    const from = new Position(fromSuji, fromDan);
    const to = new Position(toSuji, toDan);
    const piece = this.getPieceAt(from);

    if (!piece || piece.getPlayer() !== this.currentTurn) {
      console.log('해당 위치에 말이 없거나 본인의 말이 아닙니다.');
      return false;
    }

    if (!piece.canMoveTo(to, this.currentTurn)) {
      console.log('이동할 수 없는 위치입니다.');
      return false;
    }

    const target = this.getPieceAt(to);
    if (target && target.getPlayer() === this.currentTurn) {
      console.log('자기 말이 있는 위치로는 이동할 수 없습니다.');
      return false;
    }

    piece.moveTo(to);
    if (target) {
      this.pieces = this.pieces.filter((p) => p !== target);
      console.log(`${target.getSymbol()}를 잡았습니다!`);
    }

    this.currentTurn = this.currentTurn === 'first' ? 'second' : 'first';
    this.printBoard();
    return true;
  }

  getTurn() {
    return this.currentTurn;
  }
}

// ---- Main 실행부 ----

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = new Game();

function askInput() {
  rl.question(`이동할 말의 suji(가로, 1~9): `, (fs) => {
    rl.question(`이동할 말의 dan(세로, '1'~'9'): `, (fd) => {
      rl.question(`이동할 위치의 suji: `, (ts) => {
        rl.question(`이동할 위치의 dan: `, (td) => {
          const success = game.playTurn(Number(fs) as Suji, fd as Dan, Number(ts) as Suji, td as Dan);
          if (!success) console.log('❌ 다시 입력해주세요.');
          askInput();
        });
      });
    });
  });
}

askInput();
