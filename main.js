//arrays function tasks
//1
function getSortArrayByAlphabet(arr) {
  return arr.sort();
}
//2
function getSortArrayOfNumbersSmallToBig(arr) {
  return arr.sort((a, b) => a - b);
}
//3
function getSortArrayOfNumbersBigToSmall(arr) {
  return arr.sort((a, b) => b - a);
}
//4
let classNames = [];
let stringClassName;
function createNameArray() {
  if (classNames.length < 10) {
    classNames.push(document.getElementById("name_input").value);
    document.getElementById("name_input").value = "";
    classNames.sort();
    return;
  }
  alert("10 names have been submited");
  stringClassName = changeArrayToString(classNames);
}
//5
function getSortedRandomAgeArray() {
  let rndAgeArray = [];
  for (let i = 0; i < 10; i++) {
    rndAgeArray.push(Math.floor(Math.random() * 60) + 1);
  }
  return getSortArrayOfNumbersBigToSmall(rndAgeArray);
}
//6
function changeArrayToString(arr) {
  return arr.join("-");
}

//7.program task
let companyArray = [
  "Apple",
  "Microsoft",
  "Intel",
  "HP",
  "Dell",
  "Samsung",
  "KLA",
  "Amazon",
  "Meta",
  "Google",
];
for (let i = 0; i < companyArray.length; i++) {
  let h1Element = document.createElement("h1");
  h1Element.innerText = companyArray[i];
  document.getElementById("container").appendChild(h1Element);
}
let imageLinkArray = [
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://i.pinimg.com/564x/ca/76/8f/ca768f3206a618e10ffbc6797127a280.jpg",
  "https://i.pinimg.com/564x/26/84/b0/2684b05cf2f38e1db7afd51dac15a03d.jpg",
  "https://i.pinimg.com/564x/d4/0a/be/d40abea0959891bc9e2c425e22da1f95.jpg",
  "https://i.pinimg.com/564x/52/65/6d/52656dc68bf67d0a9d10dbb3a53508ee.jpg",
  "https://i.pinimg.com/236x/f5/90/07/f590072e0a8057bd239dfdcd84b6be8e.jpg",
  "https://i.pinimg.com/736x/29/6d/a7/296da7fbf311ebdf14181ce81958b98b.jpg",
  "https://i.pinimg.com/564x/72/5c/74/725c743d62a23ab0a4956c9d7c8552ab.jpg",
  "https://i.pinimg.com/236x/99/f8/70/99f8702093bd74454c4636a33f558c4a.jpg",
  "https://i.pinimg.com/236x/3c/e1/b3/3ce1b39c09a992d01fe47834b4bb0867.jpg",
];
for (let i = 0; i < imageLinkArray.length; i++) {
  let image = document.createElement("img");
  image.style.width = "30vw";
  image.src = imageLinkArray[i];
  document.getElementById("img_container").appendChild(image);
}
let companyCityArray = [
  "USA, Cupertino",
  "USA, Redmond",
  "USA, Santa Clara",
  "USA, Palo Alto",
  "USA, Round Rock",
  "South Korea, Seoul",
  "USA, Milipitas",
  "USA, Seattle",
  "USA, Menlo Park",
  "USA, Mountain View",
];
let companyPicArray = [
  "https://i.pinimg.com/564x/8d/e1/73/8de1739fb1033ac72276467a3a2e1b44.jpg",
  "https://i.pinimg.com/236x/b9/c5/ea/b9c5ea395cc29eaa7e04252cab1aa2ba.jpg",
  "https://i.pinimg.com/736x/6c/a7/8e/6ca78e73aebdcb683f12266ab8f46e7d.jpg",
  "https://i.pinimg.com/236x/5f/30/c1/5f30c1454408dc04b526333f2b09735d.jpg",
  "https://i.pinimg.com/236x/bc/d3/4f/bcd34f2b965f96d4f6ad9531b897a7c4.jpg",
  "https://i.pinimg.com/236x/56/3a/20/563a20d50c1f5ed73236ce76b66cb01c.jpg",
  "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zkpeshhtxlmgubpxc7ax",
  "https://i.pinimg.com/236x/fa/16/b8/fa16b892512b3df516211c68fc489134.jpg",
  "https://www.xrtoday.com/wp-content/uploads/2021/11/What_Meta_Quest-.jpg",
  "https://cdn.vox-cdn.com/thumbor/Kg5rGBwt6vwhAoGLpwer-H9Alzc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22250976/acastro_210121_1777_google_0001.jpg",
];
let companyIndustryArray = [
  "Consumer electronics, Software, Online services",
  "Information technology",
  "Semiconductors, Computer hardware, Autonomous cars, Automation, Artificial intelligence",
  "Computer hardware, Computer software, IT services, IT consulting",
  "Computer software, Computer hardware",
  "Conglomerate",
  "Computer hardware",
  "E-commerce, Cloud Computing, Artificial intelligence, Consumer electronics, Entertainment, Digital distribution, Self-driving cars, Supermarket",
  "Social media, Social network advertising, Consumer electronics",
  "Artificial intelligence, Advertising, Cloud computing, Computer software, Computer hardware, Internet",
];
let companySiteLink = [
  "https://www.apple.com/",
  "https://www.microsoft.com/he-il",
  "https://www.intel.co.il/content/www/il/he/homepage.html",
  "https://www.hp.com/il-he/home.html",
  "https://www.dell.com/he-il",
  "https://www.samsung.com/us/",
  "https://www.kla.com/",
  "https://www.amazon.com/",
  "https://about.facebook.com/",
  "https://about.google/",
];
let companyWiki = [
  "https://en.wikipedia.org/wiki/Apple_Inc.",
  "https://en.wikipedia.org/wiki/Microsoft",
  "https://en.wikipedia.org/wiki/Intel",
  "https://en.wikipedia.org/wiki/Hewlett-Packard",
  "https://en.wikipedia.org/wiki/Dell",
  "https://en.wikipedia.org/wiki/Samsung",
  "https://en.wikipedia.org/wiki/KLA_Corporation",
  "https://en.wikipedia.org/wiki/Amazon_(company)",
  "https://en.wikipedia.org/wiki/Meta_Platforms",
  "https://en.wikipedia.org/wiki/Google",
];
let companyObjArray = [];
for (let i = 0; i < 10; i++) {
  let company = {
    name: companyArray[i],
    city: companyCityArray[i],
    picture: companyPicArray[i],
    industry: companyIndustryArray[i],
    site: companySiteLink[i],
    wiki: companyWiki[i],
  };
  companyObjArray.push(company);
}
for (let i = 0; i < companyObjArray.length; i++) {
  let companyCard = document.createElement("div");
  companyCard.classList.add("company_card");
  companyCard.id = "company_" + i;
  document.getElementById("company_cardcontainer").appendChild(companyCard);
  let companyImage = document.createElement("img");
  companyImage.src = companyObjArray[i].picture;
  companyImage.style.width = "100%";
  companyImage.style.height = "60%";
  companyImage.addEventListener(
    "click",
    () => {
      window.location.href = companyObjArray[i].wiki;
    },
    false
  );
  companyCard.appendChild(companyImage);
  let companyName = document.createElement("h1");
  companyName.innerText = companyObjArray[i].name;
  companyCard.appendChild(companyName);
  let companyLocation = document.createElement("h3");
  companyLocation.innerText = "Headquarters: " + companyObjArray[i].city;
  companyCard.appendChild(companyLocation);
  let companyIndustry = document.createElement("h3");
  companyIndustry.innerText = "Industry: " + companyObjArray[i].industry;
  companyCard.appendChild(companyIndustry);
  let companySite = document.createElement("button");
  companySite.innerText = "press to site";
  companySite.addEventListener(
    "click",
    () => {
      window.location.href = companyObjArray[i].site;
    },
    false
  );
  companyCard.appendChild(companySite);
}
