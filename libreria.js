const libreria = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 404) {
          throw new Error("404 - Pagina non trovata");
        } else if (response.status === 500) {
          throw new Error("500 - Internal server error");
        } else {
          throw new Error("Errore generico");
        }
      }
    })
    .then((libri) => {
      console.log("libri", libri);
      const riga1 = document.getElementById("riga");

      const createcell = function () {
        for (let i = 0; i <= libri; i++) {
          //   const c = libri;
          //   console.log(c);
          const createCard = document.createElement("div", i);
          createCard.setAttribute("class", i);
          createCard.classList.add(
            "col-12",
            "col-sm-6",
            "col-md-4",
            "col-lg-4",
            "col-xl-3",
            "col-xxl-3"
          );

          createCard.innerHTML = `
      <div   class="card mb-5" style='height: 93% '>
        <img src="${c.img}" style= " width: 100%; height: 30vw; object-fit: cover 
         " class="card-img-top img-fluid " alt="">
        <div class="card-body">
          <h5 class="card-title">${c.title}</h5>
          <p class="card-text">${c.price} €</p>
          <button id="myBtn"> Scarta</button>
        </div>
      
          `;
          riga1.appendChild(createCard);
        }
      };
      createcell();

      libri.forEach((libri) => {
        const createCard = document.createElement("div");
        createCard.setAttribute("class", +1);
        createCard.classList.add(
          "col-12",
          "col-sm-6",
          "col-md-4",
          "col-lg-4",
          "col-xl-3",
          "col-xxl-3"
        );

        createCard.innerHTML = `
  <div   class="card mb-5" style='height: 93% '>
    <img src="${libri.img}" style= " width: 100%; height: 30vw; object-fit: cover 
     " class="card-img-top img-fluid " alt="">
    <div class="card-body">
      <h5 class="card-title">${libri.title}</h5>
      <p class="card-text">${libri.price} €</p>
      <button id="myBtn"> Scarta</button>
    </div>
  
      `;
        //   if()

        riga1.appendChild(createCard);
        const bottone = document.getElementById("myBtn");
        const carta1 = document.getElementById("carta");
        bottone.addEventListener("click", function (e) {
          const d = e.target.parentNode.parentNode;
          d.classList.add("d-none");
        });
      });

      //   console.log(bottone);
    })

    .catch((err) => {
      console.log("errore!", err);
    });
};
libreria();
