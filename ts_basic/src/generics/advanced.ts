export default function advancedSample() {
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[];
  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i]);
    }
    return result;
  };

  const numbers = mapStringsToNumbers(['161', '222', '369'], (item) => Number(item));
  console.log('Generics sample 1:', numbers);

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i]);
    }
    return result;
  };

  const strings = mapNumbersToStrings(numbers, (item) => String(item));
  console.log('Generics sample 2:', strings);
}

type Map<T, U> = (array: T[], fn: (item: T) => U) => U[];

const mapMovieRatings: Map<string, { title: string; rating: number; stars: string }> = (array, fn) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i]);
  }
  return result;
};

const movies = mapMovieRatings(['인터스텔라:9.3', '인셉션:9.2', '듄:8.8', '테넷:8.5'], (item) => {
  const [title, rating] = item.split(':');
  const stars = '⭐'.repeat(Math.floor(Number(rating)));
  return {
    title,
    rating: Number(rating),
    stars,
  };
});

console.log('영화 평점 변환:', movies);

type ForEach<T> = (array: T[], callback: (item: T) => void) => void;
type Filter<T> = (array: T[], predicate: (item: T) => boolean) => T[];

const forEachMovie: ForEach<{ title: string; rating: number; stars: string }> = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

const filterHighRatedMovies: Filter<{ title: string; rating: number; stars: string }> = (array, predicate) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log('\n모든 영화 평점:');
forEachMovie(movies, (movie) => {
  console.log(`${movie.title}: ${movie.stars} (${movie.rating}점)`);
});

const highRatedMovies = filterHighRatedMovies(movies, (movie) => movie.rating >= 9.0);
console.log('\n9점 이상 영화:');
forEachMovie(highRatedMovies, (movie) => {
  console.log(`${movie.title}: ${movie.stars} (${movie.rating}점)`);
});
