let movies = [
    {
      name: "Doctor Strange in the Multiverse of Madness",
      des:
        "When the Multiverse is unlocked,Doctor Strange must enlist help from old and new allies in order to confront a surpriding adversary.",
      image: "dr. strange.webp"
    },
    {
      name: "Laali",
      des:
        "A lonely laundryman from the suburbs of Kolkata finds campanionship in an unclaimed red dress,which triggers esoteric memories from the past.",
      image: "laali.webp"
    },
    {
      name: "Yeh Rishta Kya Kehlata Hai",
      des: "Kartik,Naira and Sirat's daughters are grown up.",
      image: "yrkkh.webp"
    },
    {
      name: "Anupama",
      des:
        "Despite the many challenges thrown her way, Anupama begins a new cahpter of her life post-divorce.",
      image: "anupama.webp"
    },
    {
      name: "Saath Nibhaana Saathiya 2 ",
      des:
        "A few year's after Anant's death, Gehna has completely turned her life around. In this new journey, wll she finally find her perfect partner?",
      image: "sath nibhana.webp"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    //attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  