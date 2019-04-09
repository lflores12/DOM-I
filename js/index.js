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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png');

const ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src','img/header-img.png');

const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', 'img/mid-page-accent.jpg');

//const allNav = document.querySelectorAll().style.color = 'green


const services = document.getElementsByTagName('a')[0];
services.innerText = siteContent['nav']['nav-item-1'];
services.style.color = 'green';

const product = document.getElementsByTagName('a')[1];
product.innerText = siteContent['nav']['nav-item-2'];
product.style.color = 'green';

const vision = document.getElementsByTagName('a')[2];
vision.innerText = siteContent['nav']['nav-item-3'];
vision.style.color = 'green';

const features = document.getElementsByTagName('a')[3];
features.innerText = siteContent['nav']['nav-item-4'];
features.style.color = 'green';

const about = document.getElementsByTagName('a')[4];
about.innerText = siteContent['nav']['nav-item-5'];
about.style.color = 'green';

const contact = document.getElementsByTagName('a')[5];
contact.innerText = siteContent['nav']['nav-item-6'];
contact.style.color = 'green';

const ctaHeader = document.getElementsByTagName('h1')[0];
ctaHeader.innerText = siteContent['cta']['h1'];


const button = document.getElementsByTagName('button')[0];
button.innerText = siteContent['cta']['button'];
services.style.color = 'green';

const headings = document.querySelectorAll('h4');

headings[0].innerText = siteContent['main-content']['features-h4'];
headings[1].innerText = siteContent['main-content']['about-h4'];
headings[2].innerText = siteContent['main-content']['services-h4'];
headings[3].innerText = siteContent['main-content']['product-h4'];
headings[4].innerText = siteContent['main-content']['vision-h4'];

//heading for contact section

headings[5].innerText = siteContent['contact']['contact-h4']


const mainInfo = document.querySelectorAll('p');

mainInfo[0].innerText = siteContent['main-content']['features-content'];
mainInfo[1].innerText = siteContent['main-content']['about-content'];
mainInfo[2].innerText = siteContent['main-content']['services-content'];
mainInfo[3].innerText = siteContent['main-content']['product-content'];
mainInfo[4].innerText = siteContent['main-content']['vision-content'];

//paragrapgh for contact 

mainInfo[5].innerText = siteContent['contact']['address'];
mainInfo[6].innerText = siteContent['contact']['phone'];
mainInfo[7].innerText = siteContent['contact']['email'];

//footer 

mainInfo[8].innerText = siteContent['footer']['copyright'];

mainNav = document.getElementsByTagName('nav')[0];
let newNavItem = function(name){
  let newItem = document.createElement('a');
  newItem.innerText = name;
  newItem.style.color = 'green';
  return newItem;
}

mainNav.prepend(newNavItem('Test'));
mainNav.append(newNavItem('Test2'));




















