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

// Example: Update the img src and alt for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.setAttribute('alt', "Great Idea! Company logo.")

// Select and update the 'header nav a' elements text content
// Used .querySelectorAll to select the [nth] instance of that element to edit
const navItem1 = document.querySelectorAll("header nav a")[0]
navItem1.innerText = siteContent["nav"]["nav-item-1"]

const navItem2 = document.querySelectorAll("header nav a")[1]
navItem2.innerText = siteContent["nav"]["nav-item-2"]

const navItem3 = document.querySelectorAll("header nav a")[2]
navItem3.innerText = siteContent["nav"]["nav-item-3"]

const navItem4 = document.querySelectorAll("header nav a")[3]
navItem4.innerText = siteContent["nav"]["nav-item-4"]

const navItem5 = document.querySelectorAll("header nav a")[4]
navItem5.innerText = siteContent["nav"]["nav-item-5"]

const navItem6 = document.querySelectorAll("header nav a")[5]
navItem6.innerText = siteContent["nav"]["nav-item-6"]

// Select and update the img src and alt for the cta image
const ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
ctaImg.setAttribute('alt', "Image of a code snippet.")

// Select and update the inner text of h1 element in cta section
const ctaTextH1 = document.querySelector(".cta .cta-text h1")
ctaTextH1.innerText = siteContent["cta"]["h1"]

// Select and update the inner text of button element in cta section
const ctaButton = document.querySelector(".cta .cta-text button")
ctaButton.innerText = siteContent["cta"]["button"]

// Select and update the inner text of first instance of h4 element in the top-content div
const featuresH4 = document.querySelector(".top-content .text-content h4")
featuresH4.innerText = siteContent["main-content"]["features-h4"]

// Select and update the inner text of first instance of p element in the top-content div
const featuresContent = document.querySelector(".top-content .text-content p")
featuresContent.innerText = siteContent["main-content"]["features-content"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of h4 element in the top-content div
const aboutH4 = document.querySelectorAll(".top-content .text-content h4")[1]
aboutH4.innerText = siteContent["main-content"]["about-h4"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of p element in the top-content div
const aboutContent = document.querySelectorAll(".top-content .text-content p")[1]
aboutContent.innerText = siteContent["main-content"]["about-content"]

// Select and update the img src and alt for the middle image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
middleImg.setAttribute('alt', "Image of code snippets across the screen")

// Used .querySelectorAll to select and update the inner text of [nth] instance of h4 element in the bottom-content div
const servicesH4 = document.querySelectorAll(".bottom-content .text-content h4")[0]
servicesH4.innerText = siteContent["main-content"]["services-h4"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of p element in the bottom-content div
const servicesContent = document.querySelectorAll(".bottom-content .text-content p")[0]
servicesContent.innerText = siteContent["main-content"]["services-content"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of h4 element in the bottom-content div
const productH4 = document.querySelectorAll(".bottom-content .text-content h4")[1]
productH4.innerText = siteContent["main-content"]["product-h4"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of p element in the bottom-content div
const productContent = document.querySelectorAll(".bottom-content .text-content p")[1]
productContent.innerText = siteContent["main-content"]["product-content"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of h4 element in the bottom-content div
const visionH4 = document.querySelectorAll(".bottom-content .text-content h4")[2]
visionH4.innerText = siteContent["main-content"]["vision-h4"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of p element in the bottom-content div
const visionContent = document.querySelectorAll(".bottom-content .text-content p")[2]
visionContent.innerText = siteContent["main-content"]["vision-content"]

// Select and update the inner text of h4 element in the contact section
const contactH4 = document.querySelector(".contact H4")
contactH4.innerText = siteContent["contact"]["contact-h4"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of p element in the contact section
const contactAddress = document.querySelectorAll(".contact p")[0]
contactAddress.innerText = siteContent["contact"]["address"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of p element in the contact section
const contactPhone = document.querySelectorAll(".contact p")[1]
contactPhone.innerText = siteContent["contact"]["phone"]

// Used .querySelectorAll to select and update the inner text of [nth] instance of p element in the contact section
const contactEmail = document.querySelectorAll(".contact p")[2]
contactEmail.innerText = siteContent["contact"]["email"]

// Select and update the inner text of p element in the footer section
const footerCopyright = document.querySelector("footer p")
footerCopyright.innerText = siteContent["footer"]["copyright"]

// Define navNodeList variable and assign to it a NodeList of all 'a' elements within the nav and header section
const navNodeList = document.querySelectorAll("header nav a")
// Use forEach() method on the Nodelist to loop through each 'a' element and assign them the style color property of green
navNodeList.forEach(navElement => navElement.style.color = 'green')

// Find existing element to work with
const ctaTextDiv = document.querySelector('.cta .cta-text')

// Create new button element
const flipButton = document.createElement("button")

// Update button elements text content
flipButton.innerText = "Flip Mode"

// Place button at end of cta-text div
ctaTextDiv.appendChild(flipButton)

// Create new button element
const resetButton = document.createElement("button")

// Update button elements text content
resetButton.innerText = "Reset"

// Place button at end of cta-text div
ctaTextDiv.appendChild(resetButton)

// Find existing element to work with
const footerSection = document.querySelector('footer')

// Create new p element
const helloP = document.createElement("p")

// Update p elements text content
helloP.innerText = "Hello!"

// Place p at start of footer section
footerSection.prepend(helloP)

// Add bottom padding to the p element
helloP.style.paddingBottom = '5px'

// Set up a function that will be called when flipButton button is clicked
flipButton.addEventListener ('click', flipButtonClick)

// Function to run upon associated .addEventListener being activated
function flipButtonClick() {

  // Add/edit the flexbox properties of containers/sections of content
  const headerSec = document.querySelector('header')
  headerSec.style.flexDirection = 'row-reverse'
  headerSec.style.justifyContent = 'space-between'

  const headerNav = document.querySelector('header nav')
  headerNav.style.flexDirection = 'row-reverse'
  
  const headerImg = document.querySelector('header img')
  headerImg.style.marginLeft = '0px'

  const ctaSec = document.querySelector('.cta')
  ctaSec.style.flexDirection = 'row-reverse'

  const topContentSection = document.querySelector('.top-content')
  topContentSection.style.flexDirection = 'row-reverse'

  const bottomContentSection = document.querySelector('.bottom-content')
  bottomContentSection.style.flexDirection = 'row-reverse'

  const contactSection = document.querySelector('.contact')
  contactSection.style.display = 'flex'
  contactSection.style.flexDirection = 'column'
  contactSection.style.alignItems = 'flex-end'
}

// Set up a function that will be called when resetButton button is clicked
resetButton.addEventListener ('click', resetButtonClick)

// Function to run upon associated .addEventListener being activated
function resetButtonClick() {

  // Add/edit the flexbox properties of containers/sections to reset their content to original state
  const headerSec = document.querySelector('header')
  headerSec.style.flexDirection = 'row'

  const headerNav = document.querySelector('header nav')
  headerNav.style.flexDirection = 'row'

  const ctaSec = document.querySelector('.cta')
  ctaSec.style.flexDirection = 'row'

  const topContentSection = document.querySelector('.top-content')
  topContentSection.style.flexDirection = 'row'

  const bottomContentSection = document.querySelector('.bottom-content')
  bottomContentSection.style.flexDirection = 'row'

  const contactSection = document.querySelector('.contact')
  contactSection.style.display = ''
  contactSection.style.flexDirection = ''
  contactSection.style.alignItems = ''
}
















