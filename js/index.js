const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.setAttribute('alt', "Great Idea! Company logo.")

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
ctaImg.setAttribute('alt', "Image of a code snippet.")

let ctaTextH1 = document.querySelector(".cta .cta-text h1")
ctaTextH1.innerText = siteContent["cta"]["h1"]

let ctaButton = document.querySelector(".cta .cta-text button")
ctaButton.innerText = siteContent["cta"]["button"]

let featuresH4 = document.querySelector(".top-content .text-content h4")
featuresH4.innerText = siteContent["main-content"]["features-h4"]

let featuresContent = document.querySelector(".top-content .text-content p")
featuresContent.innerText = siteContent["main-content"]["features-content"]

let aboutH4 = document.querySelectorAll(".top-content .text-content h4")[1]
aboutH4.innerText = siteContent["main-content"]["about-h4"]

let aboutContent = document.querySelectorAll(".top-content .text-content p")[1]
aboutContent.innerText = siteContent["main-content"]["about-content"]

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
middleImg.setAttribute('alt', "Image of code snippets across the screen")

let servicesH4 = document.querySelectorAll(".bottom-content .text-content h4")[0]
servicesH4.innerText = siteContent["main-content"]["services-h4"]

let servicesContent = document.querySelectorAll(".bottom-content .text-content p")[0]
servicesContent.innerText = siteContent["main-content"]["services-content"]

let productH4 = document.querySelectorAll(".bottom-content .text-content h4")[1]
productH4.innerText = siteContent["main-content"]["product-h4"]

let productContent = document.querySelectorAll(".bottom-content .text-content p")[1]
productContent.innerText = siteContent["main-content"]["product-content"]

let visionH4 = document.querySelectorAll(".bottom-content .text-content h4")[2]
visionH4.innerText = siteContent["main-content"]["vision-h4"]

let visionContent = document.querySelectorAll(".bottom-content .text-content p")[2]
visionContent.innerText = siteContent["main-content"]["vision-content"]

let contactH4 = document.querySelector(".contact H4")
contactH4.innerText = siteContent["contact"]["contact-h4"]

let contactAddress = document.querySelectorAll(".contact p")[0]
contactAddress.innerText = siteContent["contact"]["address"]

let contactPhone = document.querySelectorAll(".contact p")[1]
contactPhone.innerText = siteContent["contact"]["phone"]

let contactEmail = document.querySelectorAll(".contact p")[2]
contactEmail.innerText = siteContent["contact"]["email"]

let footerCopyright = document.querySelector("footer p")
footerCopyright.innerText = siteContent["footer"]["copyright"]











