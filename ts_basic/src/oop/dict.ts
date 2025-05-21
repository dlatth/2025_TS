type Words = {
  [key: string]: string | string[];
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (!this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }
  find(term: string) {
    return this.words[term];
  }
  rmv(term: string) {
    delete this.words[term];
  }
  update(oldTerm: string, newTerm: string) {
    if (Object.prototype.hasOwnProperty.call(this.words, oldTerm)) {
      this.words[newTerm] = this.words[oldTerm];
      delete this.words[oldTerm];
    }
  }
  size() {
    return Object.keys(this.words).length;
  }
  all() {
    for (const [key, value] of Object.entries(this.words)) {
      console.log(`${key}: ${value}`);
    }
  }
  static hello() {
    return 'hello';
  }
}

class Word {
  constructor(public term: string, public readonly def: string | string[]) {}
  toString() {
    console.log(`${this.term}: ${this.def}`);
  }
  /* addDef(newDef: string) {
    if (typeof this.def === 'string') {
      this.def = [this.def, newDef];
    } else {
      this.def.push(newDef);
    }
  }
  updateDef(oldDef: string, newDef: string) {
    if (typeof this.def === 'string') {
      if (oldDef === this.def) this.def = newDef;
    } else {
      this.def = this.def.filter((val) => val !== oldDef);
      this.def.push(newDef);
    }
  } */
}

const kimchi = new Word('kimchi', '한국의 음식');

const dict = new Dict();
dict.add(kimchi);
dict.find('kimchi');
dict.all();

Dict.hello();

export default dict;
