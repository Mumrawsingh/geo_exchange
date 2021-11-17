console.log("Let's do this")

// ####### This is the nav bar ####### Msu

const newNavbar = document.createElement("nav");
const geoLocator = document.createElement("a");
const meetTheTeam = document.createElement("a");
const aboutTheProject = document.createElement("a");
const moreFeaturesToCome = document.createElement("a");


newNavbar.className = "navbar";

geoLocator.href = "./index.html";
geoLocator.innerText = "Geo Locator";

meetTheTeam.href = "https://www.cia.gov/the-world-factbook/countries/";
meetTheTeam.innerText = "Meet the team";
meetTheTeam.target = "_blank";

aboutTheProject.href = "https://www.federalreserve.gov/releases/h10/current/";
aboutTheProject.innerText = "About this project";
aboutTheProject.target = "_blank";

moreFeaturesToCome.href = "https://www.babypips.com/learn";
moreFeaturesToCome.innerText = "More features to come";
moreFeaturesToCome.target = "_blank";

    if (document.title === "Geo Exchange | Home") {
        newNavbar.append(aboutTheProject)
}   else {
        newNavbar.append(geoLocator)
}

document.body.querySelector(".container").prepend(newNavbar)
newNavbar.append(meetTheTeam)
newNavbar.append(aboutTheProject)
newNavbar.append(moreFeaturesToCome)

// ####### This is the nav bar #######
const baseCurrency ="USD"
fetch(`https://api.vatcomply.com/rates?base=${baseCurrency}`)
.then(response => response.json())
 .then(data => renderData(data)

)

function renderData(object1) {
        const cardContainer = document.getElementById("currencyContainer")
        // const rateAgainstUSD = document.createElement("p")
        const countryCard = document.createElement("div")
        const lastDateUpdated = document.createElement("p")

        lastDateUpdated.textContent = object1.date

        countryCard.append(lastDateUpdated)
        cardContainer.append(countryCard)

}



// fetch('https://api.vatcomply.com/rates?base=USD')
// .then(response => response.json())
// .then(data =>{ console.log("doesthiswork", data)})


