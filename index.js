const arr = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

const directorsContainer = document.querySelector(".directors");
const topFilms = document.querySelector(".top");//для прикрепления блока на странице
const topFilmsList = arr.map((director)=>director.top_rated_film);
 arr.forEach ((director, index, arrey) => {
  //создаю блок "block" с классом "directots_names"
    const block = document.createElement("div");
    block.className = "directots_names";
    const name = document.createElement("span");
    name.className = "director_name";
    name.textContent = director.name;
    const filmsLink = document.createElement("a");
    filmsLink.className = "films";
    filmsLink.href = director.films;
    filmsLink.textContent = "Список фильмов";
    const career = document.createElement("span");
    career.className = "career";
    career.textContent = director.career;
    const top_rated_film= document.createElement("span");
    top_rated_film.className = "top_rated_film";
    top_rated_film.textContent = `Лучший фильм: ${director.top_rated_film}`;
    const button= document.createElement("button");
    button.className = "btn";
    // добавляю элементы name, img, career, op_rated_film и button в блок "block"
    block.append(name);
    block.append(filmsLink);
    block.append(career);
    block.append(top_rated_film);
    block.append(button);
   // console.log(block);
   // return block;
    directorsContainer.append(block);
    topFilms.append(top_rated_film);
    
 })
 