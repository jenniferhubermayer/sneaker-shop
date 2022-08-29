// VARIABLES
let userPassWord = document.querySelector("#pass-word-input");
let cookieData = document.cookie;
let cookieBtn = document.querySelectorAll(".cookie-button");
let modal = document.querySelector("#modal");
let articleSection = document.querySelector(".shoe-grid");

const data = [
    {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      name: "Air",
      brand: "Nike",
      price: "120.00 $",
      sizes: ["37", "38", "39"],
    },
    {
      img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      name: "Dunk High Pro",
      brand: "Nike",
      price: "150.00 $",
      sizes: ["37", "38", "39", "40", "42"],
    },
    {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
      name: "Old Skool",
      brand: "Vans",
      price: "50.00 $",
      sizes: ["37"],
    },
    {
      img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
      name: "Summer Party",
      brand: "Nike",
      price: "100.00 $",
      sizes: ["42", "43", "44", "45", "46"],
    },
  {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Retro",
      brand: "Adidas",
      price: "149.00 $",
      sizes: ["39", "40"],
  },
  {
      img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Fancy Doc",
      brand: "Crocs",
      price: "79.00 $",
      sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
      img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Classic",
      brand: "Reebok",
      price: "99.00 $",
      sizes: ["43", "44", "45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Jungle",
      brand: "New Balance",
      price: "110.00 $",
      sizes: ["39", "40", "41", "42"],
  },
  {
      img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Essentials",
      brand: "Errant",
      price: "120.00 $",
      sizes: ["41","42", "43", "44", "45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Très chic",
      brand: "Nike",
      price: "150.00 $",
      sizes: ["45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
      name: "Plastic Revolution",
      brand: "Adidas",
      price: "180.00 $",
      sizes: ["37", "38", "39", "40"],
  },
  {
      img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Sporty",
      brand: "Asics",
      price: "90.00 $",
      sizes: ["41","42", "43", "44"],
  }
]

// FUNCTION FOR COOKIE CHECK ON SITE LOAD
checkCookieStatus = () =>{
    if (document.cookie == "") {
        modal.style.display = "flex";
    }
    else{
        modal.style.display = "none";
    }
}
checkCookieStatus();

// // TO CLEAR COOKIES:
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// COOKIE BUTTON ACCEPT OR REJECT
cookieBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if( btn.value == "true"){
            modal.style.display = "none";
            document.cookie = `username=xxx; expires=Wed, 10 Aug 2024 16:13:00 UTC; path=/`;
        }
        else{
            modal.style.display = "none";
        }
    })
});

// SHOW ARTICLES
showArticles = () =>{
    data.forEach(function(item) {

        // WRAPPER FOR EACH ITEM/ARTICLE
        let articleWrapper = document.createElement("div");
        articleWrapper.className = "article-wrapper";
        articleSection.appendChild(articleWrapper);

        // FIRST FLEX ELEMENT = IMAGE
        let articleImage = document.createElement("img");
        articleImage.className = "article-image";
        articleImage.src = item.img;
        articleWrapper.appendChild(articleImage);

        // SECOND FLEX ELEMENT = DIV INCLUDES AN ARTICLE HEADLINE + ICON FOR ADDING TO CART
        let articleHeader = document.createElement("div");
        articleHeader.className = "article-header";
        let articleHeadline = document.createElement("h3");
        articleHeadline.textContent = item.name;
        let addToCart = document.createElement("p");
        addToCart.className = "add-to-cart"
        addToCart.textContent = "+"
        articleHeader.appendChild(articleHeadline);
        articleHeader.appendChild(addToCart);
        articleWrapper.appendChild(articleHeader);

        // THIRD FLEX ELEMENT = ACCORDION BUTTON INCLUDES PRICE
        let accordionButton = document.createElement("button");
        accordionButton.className = "accordion";
        accordionButton.textContent = item.price;
        articleWrapper.appendChild(accordionButton);

        // FOURTH FLEX ELEMENT = ACCORDION PANEL WITH BRAND AND A DIV WITH AVAILABLE SIZES
        let accordionPanel = document.createElement("div");
        accordionPanel.className = "panel";
        let articleBrand = document.createElement("p");
        articleBrand.textContent = item.brand;
        let articleSizesAvailable = document.createElement("div");
        articleSizesAvailable.className = "available-sizes";
        articleWrapper.appendChild(accordionPanel);
        accordionPanel.appendChild(articleBrand);
        accordionPanel.appendChild(articleSizesAvailable);

            // AVAILABLE SIZES
            let sizes = item.sizes.toString();
            let sizesArray = sizes.split(",");

            sizesArray.forEach((item) => {
                let articleSize = document.createElement("p");
                articleSize.textContent = item;
                articleSizesAvailable.appendChild(articleSize);
            })
        });
}
showArticles();

// ACCORDION
var accordion = document.getElementsByClassName("accordion");
// var i;

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

// ADD ARTICLE AND COUNT ITEMS
let articleCount = 0;
let articleAdder = document.querySelectorAll(".add-to-cart");

articleAdder.forEach(btn => {
    btn.addEventListener("click", () => {
        articleCount++;
        document.querySelector("#cart-counter").innerText = articleCount;
    })
});

// !!!!!!!! DO DO: NEWSLETTER FUNCTION

const emailInput = document.querySelector("#newsletter-sign-up");