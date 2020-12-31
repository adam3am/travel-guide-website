/* Data-data */
const places = [{
    "id": 1,
    "kota": "Bandung",
    "destinasi": "Gedung Sate",
    "lokasi": "Jl. Diponegoro No.22, Citarum, Kec. Bandung Wetan",
    "deskripsi": "Gedung sate merupakan salah satu wisata Kota Bandung yang sangat ikonik.",
    "total": 1250000,
    "gambar": "img/wisata-1.jpg"
  },
  {
    "id": 2,
    "kota": "Jakarta",
    "destinasi": "Kota Tua",
    "lokasi": "Kota Tua Jakarta terletak di Pinangsia, Tamansari, Jakarta Barat",
    "deskripsi": "Kawasan Kota Tua Jakarta ini dulunya adalah pusat Pemerintahan Batavia.",
    "total": 2300000,
    "gambar": "img/wisata-2.jpg"
  },
  {
    "id": 3,
    "kota": "Yogyakarta",
    "destinasi": "Tugu Golong Gilig",
    "lokasi": "Cokrodiningratan, Jetis, Yogyakarta City",
    "deskripsi": "Jogja juga dijuluki sebagai kota wisata yang sangat kaya alias beragam.",
    "total": 1400000,
    "gambar": "img/wisata-3.jpg"
  },
  {
    "id": 4,
    "kota": "Bandung",
    "destinasi": "Chinatown",
    "lokasi": "Jl. Kelenteng No.41, Ciroyom, Kec. Andir",
    "deskripsi": "China Town Bandung ini menjadi salah satu wisata Kota Bandung yang selalu ramai.",
    "total": 1100000,
    "gambar": "img/wisata-4.jpg"
  },
  {
    "id": 5,
    "kota": "Yogyakarta",
    "destinasi": "Titik Nol KM",
    "lokasi": "Jl. Panembahan Senopati, Prawirodirjan, Kec. Gondomanan",
    "deskripsi": "Destinasi wisata Jogja yang terkenal adalah Titik Nol KM.",
    "total": 2800000,
    "gambar": "img/wisata-5.jpg"
  },
  {
    "id": 6,
    "kota": "Bali",
    "destinasi": "Sanur",
    "lokasi": "Jalan Kusuma Sari No. 1, Sanur, Denpasar Selatan",
    "deskripsi": "Sanur adalah salah satu nama Pantai yang ada di daerah Bali Selatan.",
    "total": 3800000,
    "gambar": "img/wisata-6.jpg"
  }
]

/* Search */
function searchCity() {
  let input, filter, myItems, cards, i, current, h5, text;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  myItems = document.querySelector(".card-deck");
  cards = myItems.getElementsByClassName("col-md-4");
  
  for (i = 0; i < cards.length; i++) {
      current = cards[i];
      h5 = current.querySelectorAll(".card-title")[0];
      text = h5.innerText.toUpperCase();
      if (text.indexOf(filter) > -1) {
          current.style.display = "";
      } else {
          current.style.display = "none";
      }
  }
}

/* Dropdown mentoring Feb 14, 2020 16:10 to 16:40 */
let kota = places.map(c => c.kota)
let filteredCity = kota.filter((c, i) => {
  return kota.indexOf(c) >= i
})

let dropdown = document.querySelector(".form-control-sm")
filteredCity.map(c => {
  dropdown.innerHTML += `<option value="${c}">${c}</option>`
})

function listDrop() {
  let input, filter, myItems, cards, i, current, h5, text;
  input = document.getElementById("select_id");
  filter = input.value.toUpperCase();
  myItems = document.getElementById("myItems");
  cards = myItems.getElementsByClassName("col-md-4");
  
  for (i = 0; i < cards.length; i++) {
      current = cards[i];
      h5 = current.getElementsByClassName('text-secondary')[0];
      text = h5.innerText.toUpperCase();
      if (text.indexOf(filter) > -1) {
          current.style.display = "";
      } else {
          current.style.display = "none";
      }
  }
}

/* Section */
let cards = '';
places.forEach(d => {
  cards += showCards(d);
});
let deck = document.querySelector(".card-deck")
deck.innerHTML = cards

function showCards(d) {
  return `<div class="col-md-4 my-3">
            <div class="card border-warning h-100">
              <img src="${d.gambar}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${d.destinasi}</h5>
                <h6 class="text-secondary">${d.kota}</h6>
                <small class="card-title">${d.lokasi}</small>
                <p class="card-text">${d.deskripsi}</p>
              </div>
              <div class="card-footer">
                <p class="text-muted d-block my-2 data-price=${d.total}">Total Expenses: ${d.total}</p>
                <button class="btn btn-dark mtn-dtl" data-toggle="modal" data-target="#exampleModalCenter" data-idmodal="${d.id}" onClick="handleDetail(${d.id})" role="button">See
                  More</button>
                <button class="btn btn-primary add" role="button" onClick="totalDetail(${d.id})">Add to Wishlist</button>
              </div>
            </div>
          </div>`;
}

/* Modal mentoring Feb 17, 2020 16.50 to 17.20 */
function handleDetail(e) {
  let modal;
  let modaldeck = document.querySelector(".modal-content");
  if (e) {
    modaldeck.setAttribute("id", e)
    places.filter(item => item.id === e).map(item => {
      modal = showHandleDetails(item);
              let modeck = document.querySelector(".modal-content")
              modeck.innerHTML = modal
    });
  }
}

function showHandleDetails(item) {
  return `<div class="modal-header">
            <button class="btn btn-primary" onClick="totalDetail(${item.id})" role="button">Add to Wishlist</button>
          </div>
          <div class="modal-body">
            <img src="${item.gambar}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${item.destinasi}</h5>
                <h6 class="text-secondary">${item.kota}</h6>
                <small class="card-title">${item.lokasi}</small>
                <p class="card-text">${item.deskripsi}</p>
              </div>
              <div class="card-footer">
                <p class="text-muted d-block my-2 data-price=${item.total}"">Total Expenses: ${item.total}</p>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
          </div>`;
}

/* Price */
function totalDetail(e) {
  let todeck;
  let totaldeck = document.querySelector(".total-price");
  if (e) {
    totaldeck.setAttribute("id", e)
    places.filter(item => item.id === e).map(item => {
      todeck = showTotalDetails(item);
              let modeck = document.querySelector(".total-price")
              modeck.value = todeck
    });
  }
}

function showTotalDetails(item) {
  return `Total Price: ${item.total}`;
}

