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
      },
      { 
        title: "Extraordinary S1 EP1",
        link: "https://ww1.goojara.to/eLRjNR",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S1 EP2",
        link: "https://ww1.goojara.to/eabkr2",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S1 EP3",
        link: "https://ww1.goojara.to/eZDQe9",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S1 EP4",
        link: "https://ww1.goojara.to/e06lEp",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S1 EP5",
        link: "https://ww1.goojara.to/e76Pvm",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S1 EP6",
        link: "https://ww1.goojara.to/ejP8Da",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S1 EP7",
        link: "https://ww1.goojara.to/evp2qn",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S1 EP8",
        link: "https://ww1.goojara.to/eyPLAm",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S2 EP1",
        link: "https://ww1.goojara.to/erAjpN",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S2 EP2",
        link: "https://ww1.goojara.to/e2aDek",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S2 EP3",
        link: "https://ww1.goojara.to/eJR0pZ",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S2 EP4",
        link: "https://ww1.goojara.to/e5Qn71",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S2 EP5",
        link: "https://ww1.goojara.to/eLRjNB",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S2 EP6",
        link: "https://ww1.goojara.to/eabkr0",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S2 EP7",
        link: "https://ww1.goojara.to/eOer6w",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Extraordinary S2 EP8",
        link: "https://ww1.goojara.to/ell9Qj",
        thumbnail: "https://i.pinimg.com/1200x/89/e8/20/89e8203c9042001fd7a461f47aba1b0d.jpg"
      },
      { 
        title: "Wednesday S1 EP1",
        link: "https://ww1.goojara.to/eZD6ve",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S1 EP2",
        link: "https://ww1.goojara.to/e06bzr",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S1 EP3",
        link: "https://ww1.goojara.to/e764eL",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S1 EP4",
        link: "https://ww1.goojara.to/ejPO1w",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S1 EP5",
        link: "https://ww1.goojara.to/evpkvA",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S1 EP6",
        link: "https://ww1.goojara.to/eyPz2w",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S1 EP7",
        link: "https://ww1.goojara.to/erAPZA",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S1 EP8",
        link: "https://ww1.goojara.to/e2ab1x",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S2 EP1",
        link: "https://ww1.goojara.to/eyPAMO",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S2 EP2",
        link: "https://ww1.goojara.to/erAp5j",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S2 EP3",
        link: "https://ww1.goojara.to/e2aeN5",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S2 EP4",
        link: "https://ww1.goojara.to/eJRpjp",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S2 EP5",
        link: "https://ww1.goojara.to/eN9zGr",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S2 EP6",
        link: "https://ww1.goojara.to/exGBO5",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S2 EP7",
        link: "https://ww1.goojara.to/eqGVy8",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      },
      { 
        title: "Wednesday S2 EP8",
        link: "https://ww1.goojara.to/e6Mjrj",
        thumbnail: "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg"
      }
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
      },
      { 
        title: "The Old Guard 1",
        link: "https://ww1.goojara.to/mDJlmq",
        thumbnail: "https://i.pinimg.com/736x/41/77/ee/4177eeb6e425bea0713aa7b7df1b7817.jpg"
      },
      { 
        title: "The Old Guard 2",
        link: "https://ww1.goojara.to/mqGRpg",
        thumbnail: "https://i.pinimg.com/736x/d9/63/54/d96354804695d923e39cdfc07ebd902b.jpg"
      },
      { 
        title: "Kraven The Hunter",
        link: "https://ww1.goojara.to/mqGRpg",
        thumbnail: "https://i.pinimg.com/1200x/01/9b/57/019b57479af9813a65913d975ec5dc63.jpg"
      }
    ],

    familyAnimation: [
      { 
        title: "Bad Guys 2",
        link: "https://ww1.goojara.to/mZDwVe",
        thumbnail: "https://i.pinimg.com/736x/f4/3d/33/f43d33f2ab89e2fc0901230fdd319a9a.jpg"
      },
      { 
        title: "KPop Demon Hunters (2025)",
        link: "https://ww1.goojara.to/m5Qv6R",
        thumbnail: "https://i.pinimg.com/736x/2a/e0/5c/2ae05c4333216b62e367ec0d36b897bc.jpg"
      },
      { 
        title: "Dolittle",
        link: "https://ww1.goojara.to/mqGRpg",
        thumbnail: "https://i.pinimg.com/1200x/9d/c6/58/9dc658b9666f86a741028d9aa7e69649.jpg"
      },
      { 
        title: "The Sea Beast",
        link: "https://ww1.goojara.to/mqGRpg",
        thumbnail: "https://i.pinimg.com/1200x/ce/a3/a3/cea3a3fe52d662c6d6d2d95ce3fcf5b7.jpg"
      },
      { 
        title: "Despicable Me 4",
        link: "https://ww1.goojara.to/mgEGmw",
        thumbnail: "https://i.pinimg.com/736x/62/9a/fd/629afd4926755f24d554a6eb8ad4f41b.jpg"
      },
      { 
        title: "Klaus",
        link: "https://ww1.goojara.to/m1eV4k",
        thumbnail: "https://i.pinimg.com/736x/7f/73/92/7f7392d89f5ea146fa7de1a7109a2c3f.jpg"
      }
    ],

    dramaBlockbusters: [
      { 
        title: "The Furioza",
        link: "https://ww1.goojara.to/mZDbbr",
        thumbnail: "https://i.pinimg.com/1200x/b1/5b/a4/b15ba4514a2058c48bbd8eec6060d666.jpg"
      },
      { 
        title: "High Crimes",
        link: "https://ww1.goojara.to/mYNM2K",
        thumbnail: "https://i.pinimg.com/736x/da/f3/a1/daf3a18b3eb5f7c3830a633dd540e233.jpg"
      },
      { 
        title: "Fantastic Beasts: The Crimes of Grindelwald",
        link: "https://ww1.goojara.to/mabEkM",
        thumbnail: "https://i.pinimg.com/1200x/a8/b0/50/a8b050aaae98873b09e54078998337f6.jpg"
      },
      { 
        title: "The Adventures of Priscilla, Queen of the Desert",
        link: "https://ww1.goojara.to/mYDkLM",
        thumbnail: "https://i.pinimg.com/736x/1c/91/ce/1c91ceb376de58f3c3dbe76c65b5e4ca.jpg"
      },
      { 
        title: "Luther: The Fallen Sun",
        link: "https://ww1.goojara.to/mrA0Ee",
        thumbnail: "https://i.pinimg.com/736x/42/fb/2c/42fb2c4c354ba5fe902d73e1befaf025.jpg"
      },
      { 
        title: "K.O",
        link: "https://ww1.goojara.to/mVweLP",
        thumbnail: "https://i.pinimg.com/1200x/be/0a/cf/be0acf468780e1934b52dd60d0762863.jpg"
      }
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

  // 5) Email form fake submit
  const form = document.querySelector(".email-form");
  if (form) {
    const input = form.querySelector("input");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!input.value.trim()) return;
      alert("Thanks, " + input.value + "! Vectflix is coming soon 😄");
      input.value = "";
    });
  }
});