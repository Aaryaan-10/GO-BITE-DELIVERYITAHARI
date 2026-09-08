```javascript
/* =========================================================
   NIGHT KITCHEN
   GoBite Delivery Itahari
   PREMIUM JAVASCRIPT
   ========================================================= */


/* =========================================================
   MENU
   Keep your COMPLETE existing menu array here.
   ========================================================= */

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


  /* =====================================================
     IMPORTANT
     =====================================================

     Paste the REST of your original menu items here.

     Do NOT delete your existing menu items.

     The JavaScript system below works automatically with
     every item that has:

       name
       price
       cat
       group

     ===================================================== */

];


/* =========================================================
   CONFIGURATION
   ========================================================= */

const CONFIG = {

  whatsappNumber:"9779700161163",

  storageKey:"nightKitchenCart",

  currency:"Rs",

  restaurantName:"Night Kitchen",

  companyName:"GoBite Delivery Itahari"

};


/* =========================================================
   STATE
   ========================================================= */

let cart = [];

let activeFilter = "all";

let toastTimer = null;


/* =========================================================
   LOAD CART
   ========================================================= */

try{

  const savedCart =
    localStorage.getItem(CONFIG.storageKey);

  if(savedCart){

    const parsed =
      JSON.parse(savedCart);

    if(Array.isArray(parsed)){

      cart = parsed
        .filter(item =>
          item &&
          typeof item.name === "string" &&
          Number(item.price) >= 0 &&
          Number(item.qty) > 0
        )
        .map(item => ({
          name:item.name,
          price:Number(item.price),
          qty:Number(item.qty)
        }));

    }

  }

}catch(error){

  console.warn(
    "Could not load saved cart.",
    error
  );

  cart = [];

}


/* =========================================================
   ELEMENTS
   ========================================================= */

const menuGrid =
  document.getElementById("menuGrid");

const searchInput =
  document.getElementById("searchInput");

const noResults =
  document.getElementById("noResults");

const filters =
  document.getElementById("filters");

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

const openCart =
  document.getElementById("openCart");

const closeCart =
  document.getElementById("closeCart");

const sendOrder =
  document.getElementById("sendOrder");


/* =========================================================
   HELPER
   ========================================================= */

function money(number){

  return Number(number).toLocaleString("en-IN");

}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHtml(value){

  return String(value).replace(
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


/* =========================================================
   NORMALIZE TEXT
   ========================================================= */

function normalizeText(value){

  return String(value)
    .toLowerCase()
    .trim();

}


/* =========================================================
   GET ITEM
   ========================================================= */

function getMenuItem(name){

  return menu.find(
    item => item.name === name
  );

}


/* =========================================================
   RENDER MENU
   ========================================================= */

function renderMenu(){

  if(!menuGrid){
    return;
  }

  const query =
    searchInput
      ? normalizeText(searchInput.value)
      : "";


  const filtered =
    menu.filter(item => {

      const matchesFilter =
        activeFilter === "all" ||
        item.cat === activeFilter;


      const searchableText =
        `${item.name} ${item.group}`;


      const matchesSearch =
        !query ||
        normalizeText(searchableText)
          .includes(query);


      return matchesFilter && matchesSearch;

    });


  menuGrid.innerHTML =
    filtered.map(
      (item,index) => `

        <article
          class="menu-card reveal"
          style="--card-delay:${Math.min(index * 35,350)}ms"
        >

          <span class="category-tag">
            ${escapeHtml(item.group)}
          </span>


          <div class="card-top">

            <h3>
              ${escapeHtml(item.name)}
            </h3>

            <span class="price">
              ${CONFIG.currency}
              ${money(item.price)}
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

      `
    ).join("");


  if(noResults){

    noResults.style.display =
      filtered.length
        ? "none"
        : "block";

  }


  /* ADD BUTTONS */

  menuGrid
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


  /* Reveal cards */

  requestAnimationFrame(() => {

    menuGrid
      .querySelectorAll(".reveal")
      .forEach(card => {

        card.classList.add("visible");

      });

  });

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(name){

  const item =
    getMenuItem(name);


  if(!item){

    console.warn(
      "Menu item not found:",
      name
    );

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

      price:Number(item.price),

      qty:1

    });

  }


  saveCart();

  renderCart();

  showToast(
    `${item.name} added to your order`
  );


  /* Small visual feedback */

  if(openCart){

    openCart.classList.remove(
      "cart-pop"
    );

    void openCart.offsetWidth;

    openCart.classList.add(
      "cart-pop"
    );

  }

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQty(name,delta){

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


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart(){

  try{

    localStorage.setItem(
      CONFIG.storageKey,
      JSON.stringify(cart)
    );

  }catch(error){

    console.warn(
      "Could not save cart.",
      error
    );

  }

}


/* =========================================================
   CART TOTAL QUANTITY
   ========================================================= */

function getCartQuantity(){

  return cart.reduce(
    (total,item) =>
      total + Number(item.qty),
    0
  );

}


/* =========================================================
   CART TOTAL PRICE
   ========================================================= */

function getCartTotal(){

  return cart.reduce(
    (total,item) =>
      total +
      Number(item.price) *
      Number(item.qty),

    0
  );

}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart(){

  const totalQty =
    getCartQuantity();


  const total =
    getCartTotal();


  if(cartCount){

    cartCount.textContent =
      totalQty;

  }


  if(cartTotal){

    cartTotal.textContent =
      money(total);

  }


  /* EMPTY */

  if(!cart.length){

    if(cartItems){

      cartItems.innerHTML = "";

      cartItems.style.display =
        "none";

    }


    if(cartEmpty){

      cartEmpty.style.display =
        "flex";

    }


    return;

  }


  /* HAS ITEMS */

  if(cartItems){

    cartItems.style.display =
      "block";

  }


  if(cartEmpty){

    cartEmpty.style.display =
      "none";

  }


  if(!cartItems){
    return;
  }


  cartItems.innerHTML =
    cart.map(
      item => `

        <div
          class="cart-item"
          data-name="${escapeHtml(item.name)}"
        >

          <div>

            <h4>
              ${escapeHtml(item.name)}
            </h4>

            <div class="item-price">
              ${CONFIG.currency}
              ${money(item.price)}
              each
            </div>


            <div class="qty">

              <button
                type="button"
                class="qty-minus"
                data-name="${escapeHtml(item.name)}"
                aria-label="Decrease quantity"
              >
                −
              </button>


              <span>
                ${item.qty}
              </span>


              <button
                type="button"
                class="qty-plus"
                data-name="${escapeHtml(item.name)}"
                aria-label="Increase quantity"
              >
                +
              </button>

            </div>

          </div>


          <strong>
            ${CONFIG.currency}
            ${money(item.price * item.qty)}
          </strong>

        </div>

      `
    ).join("");


  /* QUANTITY BUTTONS */

  cartItems
    .querySelectorAll(".qty-minus")
    .forEach(button => {

      button.addEventListener(
        "click",

        () => {

          changeQty(
            button.dataset.name,
            -1
          );

        }

      );

    });


  cartItems
    .querySelectorAll(".qty-plus")
    .forEach(button => {

      button.addEventListener(
        "click",

        () => {

          changeQty(
            button.dataset.name,
            1
          );

        }

      );

    });

}


/* =========================================================
   OPEN CART
   ========================================================= */

function openCartDrawer(){

  if(!drawer){
    return;
  }


  drawer.classList.add("open");


  if(overlay){

    overlay.classList.add("show");

  }


  document.body.classList.add(
    "no-scroll"
  );


  renderCart();

}


/* =========================================================
   CLOSE CART
   ========================================================= */

function closeCartDrawer(){

  if(drawer){

    drawer.classList.remove(
      "open"
    );

  }


  if(overlay){

    overlay.classList.remove(
      "show"
    );

  }


  document.body.classList.remove(
    "no-scroll"
  );

}


/* =========================================================
   CART EVENTS
   ========================================================= */

if(openCart){

  openCart.addEventListener(
    "click",
    openCartDrawer
  );

}


if(closeCart){

  closeCart.addEventListener(
    "click",
    closeCartDrawer
  );

}


if(overlay){

  overlay.addEventListener(
    "click",
    closeCartDrawer
  );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
  "keydown",

  event => {

    if(event.key === "Escape"){

      closeCartDrawer();

    }

  }

);


/* =========================================================
   SEARCH
   ========================================================= */

if(searchInput){

  let searchTimer = null;


  searchInput.addEventListener(
    "input",

    () => {

      clearTimeout(searchTimer);


      searchTimer =
        setTimeout(
          renderMenu,
          100
        );

    }

  );

}


/* =========================================================
   FILTERS
   ========================================================= */

if(filters){

  filters
    .querySelectorAll(".filter")
    .forEach(button => {

      button.addEventListener(
        "click",

        () => {

          activeFilter =
            button.dataset.filter ||
            "all";


          filters
            .querySelectorAll(".filter")
            .forEach(item => {

              item.classList.remove(
                "active"
              );

            });


          button.classList.add(
            "active"
          );


          renderMenu();


          /* Smooth scroll on mobile */

          if(window.innerWidth <= 700){

            const menuSection =
              document.getElementById(
                "menu"
              );

            if(menuSection){

              menuSection.scrollIntoView({
                behavior:"smooth",
                block:"start"
              });

            }

          }

        }

      );

    });

}


/* =========================================================
   WHATSAPP ORDER
   ========================================================= */

function sendWhatsAppOrder(){

  if(!cart.length){

    showToast(
      "Your order is empty"
    );

    return;

  }


  const total =
    getCartTotal();


  let message =
    `🌙 *${CONFIG.restaurantName}*%0A`;

  message +=
    `GoBite Delivery Itahari%0A%0A`;

  message +=
    `🛒 *My Order:*%0A`;


  cart.forEach(
    (item,index) => {

      message +=
        `${index + 1}. ${item.name} × ${item.qty} — Rs ${money(item.price * item.qty)}%0A`;

    }
  );


  message +=
    `%0A💰 *Total: Rs ${money(total)}*%0A`;

  message +=
    `%0A📍 Please confirm my order and delivery details.`;


  const whatsappURL =
    `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;


  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );

}


if(sendOrder){

  sendOrder.addEventListener(
    "click",
    sendWhatsAppOrder
  );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message){

  if(!toast){
    return;
  }


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },

      2400
    );

}


/* =========================================================
   NAV LINK SMOOTH CLOSE
   ========================================================= */

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener(
      "click",

      () => {

        closeCartDrawer();

      }

    );

  });


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

function setupReveal(){

  const elements =
    document.querySelectorAll(
      ".reveal"
    );


  if(!elements.length){
    return;
  }


  if(
    !("IntersectionObserver" in window)
  ){

    elements.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(
          entry => {

            if(
              entry.isIntersecting
            ){

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold:.12,

        rootMargin:
          "0px 0px -40px 0px"
      }

    );


  elements.forEach(
    element =>
      observer.observe(element)
  );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function setupActiveNavigation(){

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const links =
    document.querySelectorAll(
      ".nav-links a"
    );


  if(
    !sections.length ||
    !links.length ||
    !("IntersectionObserver" in window)
  ){

    return;

  }


  const sectionObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(
          entry => {

            if(entry.isIntersecting){

              links.forEach(
                link => {

                  link.classList.remove(
                    "active"
                  );


                  if(
                    link.getAttribute(
                      "href"
                    ) ===
                    `#${entry.target.id}`
                  ){

                    link.classList.add(
                      "active"
                    );

                  }

                }
              );

            }

          }
        );

      },

      {
        threshold:.35
      }

    );


  sections.forEach(
    section =>
      sectionObserver.observe(
        section
      )
  );

}


/* =========================================================
   BUTTON RIPPLE
   ========================================================= */

function setupButtonEffects(){

  const buttons =
    document.querySelectorAll(
      ".primary-button, .secondary-button, .filter, .add-btn, .cart-button, .whatsapp-order-button"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "pointerdown",

      event => {

        const rect =
          button.getBoundingClientRect();


        const ripple =
          document.createElement(
            "span"
          );


        ripple.className =
          "js-ripple";


        ripple.style.left =
          `${event.clientX - rect.left}px`;


        ripple.style.top =
          `${event.clientY - rect.top}px`;


        button.appendChild(
          ripple
        );


        setTimeout(
          () => ripple.remove(),
          600
        );

      }

    );

  });

}


/* =========================================================
   PREVENT DOUBLE SUBMIT
   ========================================================= */

if(sendOrder){

  sendOrder.addEventListener(
    "click",

    () => {

      sendOrder.disabled =
        true;


      setTimeout(
        () => {

          sendOrder.disabled =
            false;

        },

        1200
      );

    }

  );

}


/* =========================================================
   MOBILE TOUCH POLISH
   ========================================================= */

document.addEventListener(
  "touchstart",
  () => {},
  {passive:true}
);


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeNightKitchen(){

  renderMenu();

  renderCart();

  setupReveal();

  setupActiveNavigation();

  setupButtonEffects();


  /* Default filter */

  if(filters){

    const allButton =
      filters.querySelector(
        '[data-filter="all"]'
      );


    if(allButton){

      allButton.classList.add(
        "active"
      );

    }

  }

}


/* =========================================================
   START
   ========================================================= */

if(
  document.readyState ===
  "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    initializeNightKitchen
  );

}else{

  initializeNightKitchen();

}


/* =========================================================
   OPTIONAL GLOBAL FUNCTIONS
   Useful if HTML buttons call these directly.
   ========================================================= */

window.NightKitchen = {

  addToCart,

  changeQty,

  openCart:
    openCartDrawer,

  closeCart:
    closeCartDrawer,

  renderMenu,

  renderCart,

  sendWhatsAppOrder,

  showToast

};
```
