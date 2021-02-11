/**Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений. */
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"]
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"]
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"]
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap((book) => book.genres);
console.log(allGenres);
const uniqueGenres = allGenres.filter(
  (genre, index, arr) => arr.indexOf(genre) === index
);
console.log(uniqueGenres);
