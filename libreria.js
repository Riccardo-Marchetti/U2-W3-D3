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

      libri.forEach((libri, i) => {
        const createCard = document.createElement("div");

        createCard.classList.add(
          "col-12",
          "col-sm-6",
          "col-md-4",
          "col-lg-4",
          "col-xl-3",
          "col-xxl-3"
        );

        createCard.innerHTML = `
  <div id='card' class="card mb-5" style='height: 93% '>
    <img src="${libri.img}" style= " width: 100%; height: 30vw; object-fit: cover 
     " class="card-img-top img-fluid " alt="">
    <div class="card-body">
      <h5 class="card-title">${libri.title}</h5>
      <p class="card-text">${libri.price} €</p>
      <button id='bot' class='bot' onclick="scarta(this.parentNode.parentNode)"> Scarta</button>
    </div>
  
      `;
        riga1.appendChild(createCard);
      });
    })
    .catch((err) => {
      console.log("errore!", err);
    });
};
const scarta = function (elementocard) {
  elementocard.classList.add("d-none");
};
libreria();
