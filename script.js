const menu = [
  {"name":"Chicken Roast","price":300,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Lollipop (Dry)","price":350,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Lollipop (Chilly)","price":380,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Chilli","price":320,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Crispy Chicken","price":360,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Roll","price":220,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Mix Roll","price":250,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Chilly","price":350,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Sausage (2 pcs)","price":160,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Sausage Chilly (2 pcs)","price":180,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Hot Chicken Wings","price":340,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Wings Fry","price":320,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Drumstick","price":300,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Drumstick (Chilly)","price":350,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Dragon Chicken","price":380,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Fry Sadeko","price":350,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Chicken Boil Sadeko","price":360,"cat":"nonveg","group":"Non-Veg Snacks"},
  {"name":"Jate Kalejo","price":320,"cat":"nonveg","group":"Non-Veg Snacks"},

  {"name":"Chatpate","price":150,"cat":"veg","group":"Veg Snacks"},
  {"name":"Wai-Wai Sadeko","price":150,"cat":"veg","group":"Veg Snacks"},
  {"name":"Peanuts Sadeko","price":200,"cat":"veg","group":"Veg Snacks"},
  {"name":"Bhatmas Sadeko","price":120,"cat":"veg","group":"Veg Snacks"},
  {"name":"French Fries","price":200,"cat":"veg","group":"Veg Snacks"},
  {"name":"Mustang Aalu","price":200,"cat":"veg","group":"Veg Snacks"},
  {"name":"Aalu Jira","price":190,"cat":"veg","group":"Veg Snacks"},
  {"name":"Veg Rolls","price":140,"cat":"veg","group":"Veg Snacks"},
  {"name":"Paneer Chilly","price":300,"cat":"veg","group":"Veg Snacks"},
  {"name":"Aalu Dum","price":140,"cat":"veg","group":"Veg Snacks"},
  {"name":"Paneer Pakoda (8 pcs)","price":280,"cat":"veg","group":"Veg Snacks"},
  {"name":"Aalu Pakoda (8 pcs)","price":200,"cat":"veg","group":"Veg Snacks"},
  {"name":"Aalu Chhop (8 pcs)","price":220,"cat":"veg","group":"Veg Snacks"},
  {"name":"Aalu Tama","price":180,"cat":"veg","group":"Veg Snacks"},
  {"name":"Lachha Paratha (pcs)","price":50,"cat":"veg","group":"Veg Snacks"},
  {"name":"Lachha Paratha (Ghee)","price":60,"cat":"veg","group":"Veg Snacks"},
  {"name":"Lachha Paratha (Cheese)","price":70,"cat":"veg","group":"Veg Snacks"},

  {"name":"Chicken Momo","price":190,"cat":"momo","group":"Mo:Mo"},
  {"name":"Chicken Chilli Momo","price":230,"cat":"momo","group":"Mo:Mo"},
  {"name":"Chicken Fry Momo","price":210,"cat":"momo","group":"Mo:Mo"},
  {"name":"Chicken Jhol Momo","price":250,"cat":"momo","group":"Mo:Mo"},
  {"name":"Chicken Sadeko Momo","price":220,"cat":"momo","group":"Mo:Mo"},
  {"name":"Chicken Kothey Momo","price":250,"cat":"momo","group":"Mo:Mo"},
  {"name":"Veg Momo","price":140,"cat":"momo","group":"Mo:Mo"},
  {"name":"Veg Chilli Momo","price":180,"cat":"momo","group":"Mo:Mo"},
  {"name":"Veg Fry Momo","price":160,"cat":"momo","group":"Mo:Mo"},
  {"name":"Veg Jhol Momo","price":190,"cat":"momo","group":"Mo:Mo"},
  {"name":"Veg Sadeko Momo","price":170,"cat":"momo","group":"Mo:Mo"},
  {"name":"Veg Kothey Momo","price":180,"cat":"momo","group":"Mo:Mo"},

  {"name":"Chicken Gravy","price":350,"cat":"nonveg","group":"Non-Veg Gravy"},
  {"name":"Mutton Gravy","price":400,"cat":"nonveg","group":"Non-Veg Gravy"},
  {"name":"Egg Curry","price":180,"cat":"nonveg","group":"Non-Veg Gravy"},
  {"name":"Keema Curry","price":300,"cat":"nonveg","group":"Non-Veg Gravy"},

  {"name":"Mutter Paneer","price":300,"cat":"veg","group":"Veg Gravy"},
  {"name":"Butter Paneer","price":320,"cat":"veg","group":"Veg Gravy"},
  {"name":"Paneer Butter Masala","price":340,"cat":"veg","group":"Veg Gravy"},
  {"name":"Aalu Dum Gravy","price":160,"cat":"veg","group":"Veg Gravy"},

  {"name":"Plain Omelette","price":80,"cat":"nonveg","group":"Egg Items"},
  {"name":"Masala Omelette","price":100,"cat":"nonveg","group":"Egg Items"},
  {"name":"Boiled Egg","price":50,"cat":"nonveg","group":"Egg Items"},
  {"name":"Egg Roll","price":180,"cat":"nonveg","group":"Egg Items"},

  {"name":"Veg Chowmein","price":140,"cat":"noodles","group":"Noodles"},
  {"name":"Chicken Chowmein","price":180,"cat":"noodles","group":"Noodles"},
  {"name":"Egg Chowmein","price":160,"cat":"noodles","group":"Noodles"},
  {"name":"Current Noodles","price":120,"cat":"noodles","group":"Noodles"},
  {"name":"Chicken Current Noodles","price":180,"cat":"noodles","group":"Noodles"},
  {"name":"Egg Current Noodles","price":160,"cat":"noodles","group":"Noodles"},
  {"name":"Mix Current Noodles","price":230,"cat":"noodles","group":"Noodles"},
  {"name":"Chicken Keema Noodles","price":300,"cat":"noodles","group":"Noodles"},

  {"name":"Chicken Burger + Fries","price":290,"cat":"nonveg","group":"Burger & Sandwich"},
  {"name":"Veg Burger + Fries","price":240,"cat":"veg","group":"Burger & Sandwich"},
  {"name":"Veg Sandwich","price":200,"cat":"veg","group":"Burger & Sandwich"},
  {"name":"Chicken Sandwich","price":250,"cat":"nonveg","group":"Burger & Sandwich"},

  {"name":"Plain Rice","price":120,"cat":"rice","group":"Rice Items"},
  {"name":"Veg Fried Rice","price":190,"cat":"rice","group":"Rice Items"},
  {"name":"Chicken Fried Rice","price":280,"cat":"rice","group":"Rice Items"},
  {"name":"Keema Fried Rice","price":300,"cat":"rice","group":"Rice Items"},
  {"name":"Jeera Rice","price":130,"cat":"rice","group":"Rice Items"},
  {"name":"Egg Fried Rice","price":240,"cat":"rice","group":"Rice Items"},

  {"name":"Chicken Biryani","price":390,"cat":"biryani","group":"Biryani"},
  {"name":"Paneer Biryani","price":340,"cat":"biryani","group":"Biryani"},
  {"name":"Mutton Biryani","price":499,"cat":"biryani","group":"Biryani"},
  {"name":"Special Chicken Biryani","price":599,"cat":"biryani","group":"Biryani"},
  {"name":"Special Mutton Biryani","price":699,"cat":"biryani","group":"Biryani"},

  {"name":"250ml Coke / Fanta / Sprite","price":80,"cat":"drinks","group":"Soft Drinks"},
  {"name":"500ml Coke / Fanta / Sprite","price":160,"cat":"drinks","group":"Soft Drinks"},
  {"name":"1 Litre Coke / Fanta / Sprite","price":200,"cat":"drinks","group":"Soft Drinks"},
  {"name":"1.5 Litre Coke / Fanta / Sprite","price":260,"cat":"drinks","group":"Soft Drinks"},
  {"name":"Badam Juice","price":120,"cat":"drinks","group":"Soft Drinks"},
  {"name":"Redbull","price":150,"cat":"drinks","group":"Soft Drinks"},
  {"name":"Extreme","price":180,"cat":"drinks","group":"Soft Drinks"},
  {"name":"Apple Cider (soft drink)","price":280,"cat":"drinks","group":"Soft Drinks"},
  {"name":"Mineral Water","price":30,"cat":"drinks","group":"Soft Drinks"}
];


const foodImages = {

  nonveg:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",

  veg:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",

  momo:
    "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=900&q=80",

  noodles:
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",

  rice:
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",

  biryani:
    "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=80",

  drinks:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80"

};


const $ = id => document.getElementById(id);


const intro = $("bagIntro");
const bag = $("deliveryBag");
const enter = $("enterBagBtn");
const skip = $("skipIntro");

const replay = $("replayBag");
const again = $("menuBagButton");

const status = $("introStatus");
const bar = $("progressBar");

let busy = false;


/* BAG INTRO */

function enterBag(){

  if(busy) return;

  busy = true;

  bag.classList.add("opening");

  status.textContent =
    "Opening your GoBite delivery...";

  bar.style.width = "35%";


  setTimeout(() => {

    status.textContent =
      "Entering the kitchen...";

    bar.style.width = "72%";

    intro.classList.add("zooming");

  },650);


  setTimeout(() => {

    bar.style.width = "100%";

    document.body.classList.remove(
      "intro-active"
    );

    document.body.classList.add(
      "intro-entered"
    );

    intro.classList.add("done");

    busy = false;

  },1650);

}


function skipBag(){

  if(busy) return;

  bar.style.width = "100%";

  document.body.classList.remove(
    "intro-active"
  );

  document.body.classList.add(
    "intro-entered"
  );

  intro.classList.add("done");

}


function replayBag(){

  if(busy) return;

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

  document.body.classList.add(
    "intro-active"
  );

  document.body.classList.remove(
    "intro-entered"
  );

  intro.classList.remove("done");

  bag.classList.remove("opening");

  status.textContent =
    "Tap the GoBite bag to explore tonight's menu.";

  bar.style.width = "0%";

}


bag.addEventListener(
  "click",
  enterBag
);

enter.addEventListener(
  "click",
  enterBag
);

skip.addEventListener(
  "click",
  skipBag
);

replay.addEventListener(
  "click",
  replayBag
);

again.addEventListener(
  "click",
  replayBag
);


document.addEventListener(
  "keydown",
  e => {

    if(e.key === "Escape"){

      if(
        document.body.classList.contains(
          "intro-active"
        )
      ){

        skipBag();

      }

      closeCart();

    }

  }
);


/* CART */

let cart = [];

try{

  cart =
    JSON.parse(
      localStorage.getItem(
        "nightKitchenCart"
      ) || "[]"
    );

  if(!Array.isArray(cart)){
    cart = [];
  }

}catch(e){

  cart = [];

}


let activeFilter = "all";


const grid = $("menuGrid");
const search = $("searchInput");
const noResults = $("noResults");

const count = $("cartCount");
const items = $("cartItems");
const empty = $("cartEmpty");

const totalEl = $("cartTotal");

const drawer = $("cartDrawer");
const overlay = $("cartOverlay");

const toast = $("toast");


function money(n){

  return Number(n).toLocaleString(
    "en-IN"
  );

}


function esc(s){

  return String(s).replace(
    /[&<>"']/g,
    c => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[c])
  );

}


function img(item){

  return (
    foodImages[item.cat] ||
    foodImages.veg
  );

}


/* MENU */

function renderMenu(){

  const q =
    search.value
      .trim()
      .toLowerCase();


  const filtered =
    menu.filter(i =>

      (
        activeFilter === "all" ||
        i.cat === activeFilter
      )

      &&

      (
        !q ||

        i.name
          .toLowerCase()
          .includes(q)

        ||

        i.group
          .toLowerCase()
          .includes(q)
      )

    );


  grid.innerHTML =
    filtered.map(i => `

      <article class="menu-card reveal visible">

        <div>

          <div class="food-image">

            <img
              src="${img(i)}"
              alt="${esc(i.name)}"
              loading="lazy"
            >

          </div>

          <span class="category-tag">
            ${esc(i.group)}
          </span>

          <div class="card-top">

            <h3>
              ${esc(i.name)}
            </h3>

            <span class="price">
              Rs ${money(i.price)}
            </span>

          </div>

          <p>
            Freshly prepared for your order.
          </p>

        </div>


        <button
          class="add-btn"
          data-name="${esc(i.name)}"
        >
          + Add to order
        </button>

      </article>

    `).join("");


  noResults.style.display =
    filtered.length
      ? "none"
      : "block";


  grid
    .querySelectorAll(".add-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          addToCart(
            button.dataset.name
          );

        }
      );

    });

}


/* ADD CART */

function addToCart(name){

  const item =
    menu.find(
      i => i.name === name
    );

  if(!item) return;


  const old =
    cart.find(
      i => i.name === name
    );


  if(old){

    old.qty++;

  }else{

    cart.push({

      name:item.name,
      price:item.price,
      qty:1

    });

  }


  save();

  renderCart();

  showToast(
    item.name + " added"
  );

}


/* CHANGE QTY */

function changeQty(
  name,
  delta
){

  const i =
    cart.find(
      x => x.name === name
    );

  if(!i) return;


  i.qty += delta;


  if(i.qty <= 0){

    cart =
      cart.filter(
        x => x.name !== name
      );

  }


  save();

  renderCart();

}


/* SAVE */

function save(){

  localStorage.setItem(
    "nightKitchenCart",
    JSON.stringify(cart)
  );

}


/* RENDER CART */

function renderCart(){

  const qty =
    cart.reduce(
      (s,i) =>
        s + i.qty,
      0
    );


  const total =
    cart.reduce(
      (s,i) =>
        s + i.qty * i.price,
      0
    );


  count.textContent = qty;

  totalEl.textContent =
    money(total);


  if(!cart.length){

    items.innerHTML = "";

    items.style.display =
      "none";

    empty.style.display =
      "block";

    return;

  }


  items.style.display =
    "block";

  empty.style.display =
    "none";


  items.innerHTML =
    cart.map(i => `

      <div class="cart-item">

        <div>

          <h4>
            ${esc(i.name)}
          </h4>

          <div class="item-price">
            Rs ${money(i.price)} each
          </div>


          <div class="qty">

            <button
              data-action="minus"
              data-name="${esc(i.name)}"
            >
              −
            </button>

            <span>
              ${i.qty}
            </span>

            <button
              data-action="plus"
              data-name="${esc(i.name)}"
            >
              +
            </button>

          </div>

        </div>


        <strong>
          Rs ${money(
            i.price * i.qty
          )}
        </strong>

      </div>

    `).join("");


  items
    .querySelectorAll("button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          changeQty(

            button.dataset.name,

            button.dataset.action === "plus"
              ? 1
              : -1

          );

        }
      );

    });

}


/* CART OPEN */

function openCart(){

  drawer.classList.add(
    "open"
  );

  overlay.classList.add(
    "show"
  );

  document.body.classList.add(
    "no-scroll"
  );

}


/* CART CLOSE */

function closeCart(){

  drawer.classList.remove(
    "open"
  );

  overlay.classList.remove(
    "show"
  );

  document.body.classList.remove(
    "no-scroll"
  );

}


/* CART EVENTS */

$("openCart").addEventListener(
  "click",
  openCart
);

$("closeCart").addEventListener(
  "click",
  closeCart
);

$("contactOrder").addEventListener(
  "click",
  openCart
);

overlay.addEventListener(
  "click",
  closeCart
);


/* SEARCH */

search.addEventListener(
  "input",
  renderMenu
);


/* FILTER */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(
            x =>
              x.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        activeFilter =
          button.dataset.filter;


        renderMenu();

      }
    );

  });


/* WHATSAPP ORDER */

$("sendOrder").addEventListener(
  "click",
  () => {

    if(!cart.length){

      showToast(
        "Add items before ordering"
      );

      return;

    }


    const lines =
      cart.map(
        i =>
          `• ${i.name} x${i.qty} — Rs ${money(
            i.price * i.qty
          )}`
      );


    const total =
      cart.reduce(
        (s,i) =>
          s + i.qty * i.price,
        0
      );


    const msg = [

      "Hello GoBite Delivery Itahari! 👋",

      "",

      "I'd like to place an order:",

      "",

      ...lines,

      "",

      `Total: Rs ${money(total)}`,

      "",

      "Name:",

      "Address:",

      "Phone:"

    ].join("\n");


    window.open(

      "https://wa.me/9779700161163?text=" +
      encodeURIComponent(msg),

      "_blank",

      "noopener,noreferrer"

    );

  }
);


/* TOAST */

function showToast(t){

  toast.textContent = t;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    showToast.t
  );


  showToast.t =
    setTimeout(
      () =>
        toast.classList.remove(
          "show"
        ),
      1800
    );

}


/* SCROLL REVEAL */

const observer =
  new IntersectionObserver(

    entries =>

      entries.forEach(
        entry => {

          if(
            entry.isIntersecting
          ){

            entry.target.classList.add(
              "visible"
            );

          }

        }
      ),

    {
      threshold:.08
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach(
    element =>
      observer.observe(
        element
      )
  );


/* YEAR */

$("year").textContent =
  new Date().getFullYear();


/* INITIALIZE */

renderMenu();

renderCart();
