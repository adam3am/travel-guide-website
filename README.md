# Travel Guide Website

- Landing page yang dapat menampilkan berbagai destinasi dan kota.
- Melihat detail biaya untuk akomodasi ke destinasi wisata.

## A Beginner's Journey

Pengalaman hari ke 30 saya mengikuti online program dari HACKTIV8.

### Component

My Travel Guide memiliki template literals yang digenerate JS menggunakan class="card-deck":
```html
  <section>
    <div class="container" id="myItems">
      <div class="card-deck">

      </div>
    </div>
  </section>
  ```

Fungsi modal box yang berisikan Judul Destinasi, Deskripsi, Gambar Destinasi, Lokasi, Biaya, dan tombol ‘Add to Wishlist’:
```js
function showHandleDetails(item) {
  return `<div class="modal-header">
            <button class="btn btn-primary" onClick="totalDetail(${item.id})" role="button">Add to Wishlist</button>
          </div>
          <div class="modal-body">
            <img src="${item.gambar}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${item.destinasi}</h5>
                <h6 class="text-secondary">${item.kota}</h6>
                <p class="card-text">${item.deskripsi}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted d-block my-2 data-price=${item.total}"">Total Expenses: ${item.total}</small>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
          </div>`;
}
```

Tombol add to wishlist My Travel Guide dapat menampilkan biaya dalam price element yang terletak pada ‘navbar':
```js
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
```

```js
function showTotalDetails(item) {
  return `Total Price: ${item.total}`;
}
```

My Travel Guide memiliki fungsi pencarian ke berbagai destinasi tempat:
```js
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
```

Juga tombol drop down untuk memfilter dan menampilkan nama kota:
```js
let kota = places.map(c => c.kota)
let filteredCity = kota.filter((c, i) => {
  return kota.indexOf(c) >= i
})
```
```js

let dropdown = document.querySelector(".form-control-sm")
filteredCity.map(c => {
  dropdown.innerHTML += `<option value="${c}">${c}</option>`
})
```
```js
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
```

## Development

Untuk me-maintain project ini bisa di buka dengan VSCode. CSS, JS dan asset gambar terpisah di setiap folder.
```html
<script src="js/script.js"></script>
```

Total kalkulasi biaya destinasi dari setiap destinasi yang di tambahkan belum berfungsi dengan baik. Silakan kasih masukan:
```js
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
```

## Built With

* [Bootstrap](https://getbootstrap.com) - CSS Framework

## Authors

* **Adam Maulana**