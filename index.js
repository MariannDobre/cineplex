console.log("Salut");

// cb2351a7b4mshfc05e348263c036p14e9c8jsn6972d76fb1b6

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cb2351a7b4mshfc05e348263c036p14e9c8jsn6972d76fb1b6",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

fetch(
  "https://online-movie-database.p.rapidapi.com/auto-complete?q=train",
  options
)
  .then((response) => response.json())
  .then((data) => {
    const listData = data.d;

    listData.map((item) => {
      console.log(item);

      const movieName = item.l;
      const movieYear = item.y;
      const movieRank = item.rank;
      const moviePoster = item.i.imageUrl;
      const movie = `<li><h2>${movieName}</h2> <img src="${moviePoster}"/> <p><span>Year: </span>${movieYear}</p> <p><span>Rank: </span>${movieRank}</p></li>`;
      document.querySelector(".main").innerHTML += movie;
    });
  })
  .catch((err) => console.error(err));
