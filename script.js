/* =========================================================
   NIGHT KITCHEN
   GoBite Delivery Itahari
   ========================================================= */


/* ================= MENU ================= */

const menu = [

  /* ---------- NON VEG SNACKS ---------- */

  {
    name:"Chicken Roast",
    price:300,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Lollipop (Dry)",
    price:350,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Lollipop (Chilly)",
    price:380,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Chilli",
    price:320,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Crispy Chicken",
    price:360,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Roll",
    price:220,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Mix Roll",
    price:250,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Chilly",
    price:350,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Sausage (2 pcs)",
    price:160,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Sausage Chilly (2 pcs)",
    price:180,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Hot Chicken Wings",
    price:340,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Wings Fry",
    price:320,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Drumstick",
    price:300,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Drumstick (Chilly)",
    price:350,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Dragon Chicken",
    price:380,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Fry Sadeko",
    price:350,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Chicken Boil Sadeko",
    price:360,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },

  {
    name:"Jate Kalejo",
    price:320,
    cat:"nonveg",
    group:"Non-Veg Snacks"
  },


  /* ---------- VEG SNACKS ---------- */

  {
    name:"Chatpate",
    price:150,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Wai-Wai Sadeko",
    price:150,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Peanuts Sadeko",
    price:200,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Bhatmas Sadeko",
    price:120,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"French Fries",
    price:200,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Mustang Aalu",
    price:200,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Aalu Jira",
    price:190,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Veg Rolls",
    price:140,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Paneer Chilly",
    price:300,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Aalu Dum",
    price:140,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Paneer Pakoda (8 pcs)",
    price:280,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Aalu Pakoda (8 pcs)",
    price:200,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Aalu Chhop (8 pcs)",
    price:220,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Aalu Tama",
    price:180,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Lachha Paratha (pcs)",
    price:50,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Lachha Paratha (Ghee)",
    price:60,
    cat:"veg",
    group:"Veg Snacks"
  },

  {
    name:"Lachha Paratha (Cheese)",
    price:70,
    cat:"veg",
    group:"Veg Snacks"
  },


  /* ---------- MOMO ---------- */

  {
    name:"Chicken Momo",
    price:190,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Chicken Chilli Momo",
    price:230,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Chicken Fry Momo",
    price:210,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Chicken Jhol Momo",
    price:250,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Chicken Sadeko Momo",
    price:220,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Chicken Kothey Momo",
    price:250,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Veg Momo",
    price:140,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Veg Chilli Momo",
    price:180,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Veg Fry Momo",
    price:160,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Veg Jhol Momo",
    price:190,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Veg Sadeko Momo",
    price:170,
    cat:"momo",
    group:"Mo:Mo"
  },

  {
    name:"Veg Kothey Momo",
    price:180,
    cat:"momo",
    group:"Mo:Mo"
  },


  /* ---------- GRAVY ---------- */

  {
    name:"Chicken Gravy",
    price:350,
    cat:"nonveg",
    group:"Non-Veg Gravy"
  },

  {
    name:"Mutton Gravy",
    price:400,
    cat:"nonveg",
    group:"Non-Veg Gravy"
  },

  {
    name:"Egg Curry",
    price:180,
    cat:"nonveg",
    group:"Non-Veg Gravy"
  },

  {
    name:"Keema Curry",
    price:300,
    cat:"nonveg",
    group:"Non-Veg Gravy"
  },

  {
    name:"Mutter Paneer",
    price:300,
    cat:"veg",
    group:"Veg Gravy"
  },

  {
    name:"Butter Paneer",
    price:320,
    cat:"veg",
    group:"Veg Gravy"
  },

  {
    name:"Paneer Butter Masala",
    price:340,
    cat:"veg",
    group:"Veg Gravy"
  },

  {
    name:"Aalu Dum Gravy",
    price:160,
    cat:"veg",
    group:"Veg Gravy"
  },


  /* ---------- EGG ---------- */

  {
    name:"Plain Omelette",
    price:80,
    cat:"nonveg",
    group:"Egg Items"
  },

  {
    name:"Masala Omelette",
    price:100,
    cat:"nonveg",
    group:"Egg Items"
  },

  {
    name:"Boiled Egg",
    price:50,
    cat:"nonveg",
    group:"Egg Items"
  },

  {
    name:"Egg Roll",
    price:180,
    cat:"nonveg",
    group:"Egg Items"
  },


  /* ---------- NOODLES ---------- */

  {
    name:"Veg Chowmein",
    price:140,
    cat:"noodles",
    group:"Noodles"
  },

  {
    name:"Chicken Chowmein",
    price:180,
    cat:"noodles",
    group:"Noodles"
  },

  {
    name:"Egg Chowmein",
    price:160,
    cat:"noodles",
    group:"Noodles"
  },

  {
    name:"Current Noodles",
    price:120,
    cat:"noodles",
    group:"Noodles"
  },

  {
    name:"Chicken Current Noodles",
    price:180,
    cat:"noodles",
    group:"Noodles"
  },

  {
    name:"Egg Current Noodles",
    price:160,
    cat:"noodles",
    group:"Noodles"
  },

  {
    name:"Mix Current Noodles",
    price:230,
    cat:"noodles",
    group:"Noodles"
  },

  {
    name:"Chicken Keema Noodles",
    price:300,
    cat:"noodles",
    group:"Noodles"
  },


  /* ---------- BURGER ---------- */

  {
    name:"Chicken Burger + Fries",
    price:290,
    cat:"nonveg",
    group:"Burger & Sandwich"
  },

  {
    name:"Veg Burger + Fries",
    price:240,
    cat:"veg",
    group:"Burger & Sandwich"
  },

  {
    name:"Veg Sandwich",
    price:200,
    cat:"veg",
    group:"Burger & Sandwich"
  },

  {
    name:"Chicken Sandwich",
    price:250,
    cat:"nonveg",
    group:"Burger & Sandwich"
  },


  /* ---------- RICE ---------- */

  {
    name:"Plain Rice",
    price:120,
    cat:"rice",
    group:"Rice Items"
  },

  {
    name:"Veg Fried Rice",
    price:190,
    cat:"rice",
    group:"Rice Items"
  },

  {
    name:"Chicken Fried Rice",
    price:280,
    cat:"rice",
    group:"Rice Items"
  },

  {
    name:"Keema Fried Rice",
    price:300,
    cat:"rice",
    group:"Rice Items"
  },

  {
    name:"Jeera Rice",
    price:130,
    cat:"rice",
    group:"Rice Items"
  },

  {
    name:"Egg Fried Rice",
    price:240,
    cat:"rice",
    group:"Rice Items"
  },


  /* ---------- BIRYANI ---------- */

  {
    name:"Chicken Biryani",
    price:390,
    cat:"biryani",
    group:"Biryani"
  },

  {
    name:"Paneer Biryani",
    price:340,
    cat:"biryani",
    group:"Biryani"
  },

  {
    name:"Mutton Biryani",
    price:499,
    cat:"biryani",
    group:"Biryani"
  },

  {
    name:"Special Chicken Biryani",
    price:599,
    cat:"biryani",
    group:"Biryani"
  },

  {
    name:"Special Mutton Biryani",
    price:699,
    cat:"biryani",
    group:"Biryani"
  },


  /* ---------- DRINKS ---------- */

  {
    name:"250ml Coke / Fanta / Sprite",
    price:80,
    cat:"drinks",
    group:"Soft Drinks"
  },

  {
    name:"500ml Coke / Fanta / Sprite",
    price:160,
    cat:"drinks",
    group:"Soft Drinks"
  },

  {
    name:"1 Litre Coke / Fanta / Sprite",
    price:200,
    cat:"drinks",
    group:"Soft Drinks"
  },

  {
    name:"1.5 Litre Coke / Fanta / Sprite",
    price:260,
    cat:"drinks",
    group:"Soft Drinks"
  },

  {
    name:"Badam Juice",
    price:120,
    cat:"drinks",
    group:"Soft Drinks"
  },

  {
    name:"Redbull",
    price:150,
    cat:"drinks",
    group:"Soft Drinks"
  },

  {
    name:"Extreme",
    price:180,
    cat:"drinks",
    group:"Soft Drinks"
  },

  {
    name:"Apple Cider (soft drink)",
    price:280,
    cat:"drinks",
    group:"Soft Drinks"
  },

  {
    name:"Mineral Water",
    price:30,
    cat:"drinks",
    group:"Soft Drinks"
  }

];


/* ================= STATE ================= */

let cart = [];

try{

  cart = JSON.parse(
    localStorage.getItem("nightKitchenCart") || "[]"
  );

  if(!Array.isArray(cart)){
    cart = [];
  }

}catch(error){

  cart = [];

}


let activeFilter = "all";


/* ================= ELEMENTS ================= */

const menuGrid =
  document.getElementById("menuGrid");

const searchInput =
  document.getElementById("searchInput");

const noResults =
  document.getElementById("noResults");

const cartCount =
  document.getElementById("cartCount");

const cartItems =
  document.getElementById("cartItems");

const cartEmpty =
  document.getElementById("cartEmpty");

const cartTotal =
  document.getElementById("cartTotal");

const drawer =
  document.getElementById("cartDrawer");

const overlay =
  document.getElementById("cartOverlay");

const toast =
  document.getElementById("toast");


/* ================= HELPERS ================= */

function money(number){

  return Number(number).toLocaleString("en-IN");

}


function escapeHtml(string){

  return String(string).replace(
    /[&<>"']/g,
    character => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[character])
  );

}


/* ================= RENDER MENU ================= */

function renderMenu(){

  const query =
    searchInput.value
      .trim()
      .toLowerCase();


  const filtered =
    menu.filter(item => {

      const matchesFilter =
        activeFilter === "all" ||
        item.cat === activeFilter;


      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.group.toLowerCase().includes(query);


      return matchesFilter && matchesSearch;

    });


  menuGrid.innerHTML =
    filtered.map(item => `

      <article class="menu-card">

        <span class="category-tag">
          ${escapeHtml(item.group)}
        </span>

        <div class="card-top">

          <h3>
            ${escapeHtml(item.name)}
          </h3>

          <span class="price">
            Rs ${money(item.price)}
          </span>

        </div>

        <p>
          Freshly prepared for your order.
        </p>

        <button
          class="add-btn"
          type="button"
          data-name="${escapeHtml(item.name)}"
        >
          + Add to order
        </button>

      </article>

    `).join("");


  noResults.style.display =
    filtered.length ? "none" : "block";


  menuGrid
    .querySelectorAll(".add-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => addToCart(button.dataset.name)
      );

    });

}


/* ================= CART ================= */

function addToCart(name){

  const item =
    menu.find(
      food => food.name === name
    );


  if(!item){
    return;
  }


  const existing =
    cart.find(
      food => food.name === name
    );


  if(existing){

    existing.qty += 1;

  }else{

    cart.push({
      name:item.name,
      price:item.price,
      qty:1
    });

  }


  saveCart();
  renderCart();

  showToast(
    `${item.name} added`
  );

}


function changeQty(name, delta){

  const item =
    cart.find(
      food => food.name === name
    );


  if(!item){
    return;
  }


  item.qty += delta;


  if(item.qty <= 0){

    cart =
      cart.filter(
        food => food.name !== name
      );

  }


  saveCart();
  renderCart();

}


function saveCart(){

  localStorage.setItem(
    "nightKitchenCart",
    JSON.stringify(cart)
  );

}


/* ================= RENDER CART ================= */

function renderCart(){

  const totalQty =
    cart.reduce(
      (sum,item) => sum + item.qty,
      0
    );


  const total =
    cart.reduce(
      (sum,item) =>
        sum + item.qty * item.price,
      0
    );


  cartCount.textContent =
    totalQty;


  cartTotal.textContent =
    money(total);


  if(!cart.length){

    cartItems.innerHTML = "";

    cartItems.style.display =
      "none";

    cartEmpty.style.display =
      "block";

    return;

  }


  cartItems.style.display =
    "block";

  cartEmpty.style.display =
    "none";


  cartItems.innerHTML =
    cart.map(item => `

      <div class="cart-item">

        <div>

          <h4>
            ${escapeHtml(item.name)}
          </h4>

          <div class="item-price">
            Rs ${money(item.price)} each
          </div>

          <div class="qty">

            <button
              type="button"
              data-action="minus"
              data-name="${escapeHtml(item.name)}"
            >
              −
            </button>

            <span>
              ${item.qty}
            </span>

            <button
              type="button"
              data-action="plus"
              data-name="${escapeHtml(item.name)}"
            >
              +
            </button>

          </div>

        </div>

        <strong>
          Rs ${money(item.price * item.qty)}
        </strong>

      </div>

    `).join("");


  /*
    IMPORTANT:
    Buttons are only given event listeners here.
    They are NOT automatically clicked.
  */

  cartItems
    .querySelectorAll("button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const name =
            button.dataset.name;

          const delta =
            button.dataset.action === "plus"
              ? 1
              : -1;

          changeQty(name, delta);

        }
      );

    });

}


/* ================= CART DRAWER ================= */

function openCart(){

  drawer.classList.add("open");

  overlay.classList.add("show");

  document.body.classList.add("no-scroll");

}


function closeCart(){

  drawer.classList.remove("open");

  overlay.classList.remove("show");

  document.body.classList.remove("no-scroll");

}


/* ================= TOAST ================= */

function showToast(text){

  toast.textContent =
    text;

  toast.classList.add("show");


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(
      () => {
        toast.classList.remove("show");
      },
      1800
    );

}


/* ================= NAV EVENTS ================= */

document
  .getElementById("openCart")
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


overlay.addEventListener(
  "click",
  closeCart
);


document.addEventListener(
  "keydown",
  event => {

    if(event.key === "Escape"){
      closeCart();
    }

  }
);


/* ================= SEARCH ================= */

searchInput.addEventListener(
  "input",
  renderMenu
);


/* ================= FILTERS ================= */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(
            item =>
              item.classList.remove("active")
          );


        button.classList.add("active");


        activeFilter =
          button.dataset.filter;


        renderMenu();

      }
    );

  });


/* ================= START ORDER ================= */

document
  .getElementById("contactOrder")
  .addEventListener(
    "click",
    openCart
  );


/* ================= WHATSAPP ORDER ================= */

document
  .getElementById("sendOrder")
  .addEventListener(
    "click",
    () => {

      if(!cart.length){

        showToast(
          "Add items before ordering"
        );

        return;

      }


      const lines =
        cart.map(item => {

          return `• ${item.name} x${item.qty} — Rs ${money(item.price * item.qty)}`;

        });


      const total =
        cart.reduce(
          (sum,item) =>
            sum + item.qty * item.price,
          0
        );


      const message = [
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


      const whatsappNumber =
        "9779700161163";


      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

    }
  );


/* ================= YEAR ================= */

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if(entry.isIntersecting){

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold:.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


/* ================= INITIALIZE ================= */

renderMenu();

renderCart();
