document.addEventListener("DOMContentLoaded", () => {
  // 1) Movies data – built from your JSON
  const movies = {
    series: [
      { 
        title: "Stranger Things 5 – First 5 Minutes",
        link: "https://www.youtube.com/watch?v=vhFPHYgILN0",
        thumbnail: "https://img.youtube.com/vi/vhFPHYgILN0/maxresdefault.jpg"
      },
      { 
        title: "KAOS S1 EP1",
        link: "https://ww1.goojara.to/eWkApj",
        thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg"
      },
      { 
        title: "KAOS S1 EP2",
        link: "https://ww1.goojara.to/eVwBVP",
        thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg"
      },
      { 
        title: "KAOS S1 EP3",
        link: "https://ww1.goojara.to/epQXdp",
        thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg"
      },
      { 
        title: "KAOS S1 EP4",
        link: "https://ww1.goojara.to/ekDd5Z",
        thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg"
      },
      { 
        title: "KAOS S1 EP5",
        link: "https://ww1.goojara.to/eN9Wd7",
        thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg"
      },
      { 
        title: "KAOS S1 EP6",
        link: "https://ww1.goojara.to/exGqVz",
        thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg"
      },
      { 
        title: "KAOS S1 EP7",
        link: "https://ww1.goojara.to/eqGPDg",
        thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg"
      },
      { 
        title: "KAOS S1 EP8",
        link: "https://ww1.goojara.to/e6M8k6",
        thumbnail: "https://i.pinimg.com/1200x/a4/72/d7/a472d7383d33d82ed7aaf14438ed38b2.jpg"
      },
      { 
        title: "The Conjuring: Last Rites (2025)",
        link: "https://ww1.goojara.to/m1eZL5",
        thumbnail: "https://i.pinimg.com/1200x/76/3b/7d/763b7de1e68b213723bf35b30b3d54d6.jpg"
      },
      { 
        title: "IT: Welcome to Derry S1 EP1",
        link: "https://ww1.goojara.to/evpq4L",
        thumbnail: "https://i.pinimg.com/736x/f9/6d/b7/f96db71c6ddb86bb62697a5366228119.jpg"
      },
      { 
        title: "IT: Welcome to Derry S1 EP2",
        link: "https://ww1.goojara.to/e4W0BM",
        thumbnail: "https://i.pinimg.com/736x/f9/6d/b7/f96db71c6ddb86bb62697a5366228119.jpg"
      },
      { 
        title: "IT: Welcome to Derry S1 EP3",
        link: "https://ww1.goojara.to/e4W0BM",
        thumbnail: "https://i.pinimg.com/736x/f9/6d/b7/f96db71c6ddb86bb62697a5366228119.jpg"
      }
      // ... add the rest of your series movies
    ],

    sciFiAction: [
      { 
        title: "Madame Web",
        link: "https://ww1.goojara.to/mLRzxj",
        thumbnail: "https://i.pinimg.com/736x/4c/26/7a/4c267a6e7a1dee8aa9e3038c52b0fc7f.jpg"
      },
      { 
        title: "Ghostbusters: Afterlife",
        link: "https://ww1.goojara.to/mPLbxB",
        thumbnail: "https://i.pinimg.com/736x/e3/da/95/e3da9593b2c029f9cf980a474cebcf80.jpg"
      },
      { 
        title: "Frankenstein (2025)",
        link: "https://ww1.goojara.to/mJRNdD",
        thumbnail: "https://i.pinimg.com/1200x/d6/09/1a/d6091a76cf4995d5a9d49db700fc73a0.jpg"
      }
      // ... add the rest of your sci-fi movies
    ],

    familyAnimation: [
      { 
        title: "Bad Guys 2",
        link: "https://ww1.goojara.to/mZDwVe",
        thumbnail: "https://i.pinimg.com/736x/f4/3d/33/f43d33f2ab89e2fc0901230fdd319a9a.jpg"
      }
      // ... add the rest of your family/animation movies
    ],

    dramaBlockbusters: [
      { 
        title: "The Furioza",
        link: "https://ww1.goojara.to/mZDbbr",
        thumbnail: "https://i.pinimg.com/1200x/b1/5b/a4/b15ba4514a2058c48bbd8eec6060d666.jpg"
      }
      // ... add the rest of your drama movies
    ]
  };

  // 2) Create poster card
  function createPosterCard(movie) {
    const a = document.createElement("a");
    a.className = "poster-card";
    a.href = movie.link;
    a.target = "_blank";

    const img = document.createElement("img");
    img.src = movie.thumbnail;
    img.alt = movie.title;

    const p = document.createElement("p");
    p.textContent = movie.title;

    a.appendChild(img);
    a.appendChild(p);

    return a;
  }

  // 3) Render any row
  function renderRow(rowId, movieList) {
    const rowDiv = document.getElementById(rowId);
    if (!rowDiv) return;
    rowDiv.innerHTML = "";
    movieList.forEach(movie => {
      const card = createPosterCard(movie);
      rowDiv.appendChild(card);
    });
  }

  // 4) Render your categories into rows
  renderRow("series-row", movies.series);
  renderRow("scifi-row", movies.sciFiAction);
  renderRow("family-row", movies.familyAnimation);
  renderRow("drama-row", movies.dramaBlockbusters);

  // 5) Search functionality
  const searchInput = document.getElementById("movie-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();

      function filterRow(rowId, moviesList) {
        const rowDiv = document.getElementById(rowId);
        if (!rowDiv) return;
        rowDiv.innerHTML = "";
        moviesList
          .filter(movie => movie.title.toLowerCase().includes(query))
          .forEach(movie => {
            const card = createPosterCard(movie);
            rowDiv.appendChild(card);
          });
      }

      filterRow("series-row", movies.series);
      filterRow("scifi-row", movies.sciFiAction);
      filterRow("family-row", movies.familyAnimation);
      filterRow("drama-row", movies.dramaBlockbusters);
    });
  }
});
