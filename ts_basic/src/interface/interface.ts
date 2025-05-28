export default function interfaceSample() {
  // # interface - merge
  interface Bread {
    calories: number;
  }

  interface Bread {
    type: string;
  }

  const francePan: Bread = {
    calories: 350,
    type: 'hard',
  };

  console.log(francePan);

  // # alias - merge
  type MaboDofu = {
    calories: number;
    spicyLevel: number;
  };

  type Rice = {
    calories: number;
    gram: number;
  };

  type MaboDon = MaboDofu & Rice;

  const maboDon: MaboDon = {
    calories: 500,
    gram: 100,
    spicyLevel: 5,
  };

  console.log(maboDon);

  // # interface - extends
  interface Book {
    page: number;
    title: string;
  }

  interface Margazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly' | 'yearly';
  }

  const jump: Margazine = {
    cycle: 'weekly',
    page: 300,
    title: 'Jump',
  };

  console.log(jump);

  type BookType = {
    page: number;
    title: string;
  };

  interface HandBook extends BookType {
    theme: string;
  }

  const cotrip: HandBook = {
    page: 120,
    title: 'Cotrip',
    theme: 'travel',
  };

  console.log(cotrip);

  class Comic implements Book {
    page: number;
    title: string;

    constructor(page: number, title: string, private publishYear: string) {
      this.page = page;
      this.title = title;
    }

    getPublishYear() {
      return `${this.title}이/가 판매된 것은 ${this.publishYear}년 입니다.`;
    }
  }

  const popularComic = new Comic(200, '지옥락', '2024');
  console.log(popularComic.getPublishYear());
}
