/* Adds header & navbar to each page Source = https://www.w3schools.com/js/js_api_fetch.asp*/
fetch("html-parts/header.html")
    .then(header => header.text())
    .then(headerContent => { document.getElementById("header").innerHTML = headerContent; });

/* Adds foooter to each page Source = https://www.w3schools.com/js/js_api_fetch.asp*/
fetch("html-parts/footer.html")
    .then(footer => footer.text())
    .then(footerContent => { document.getElementById("footer").innerHTML = footerContent; });

let websiteModal = document.getElementById("website-picture");
websiteModal.addEventListener("click", () => openModal("website-modal"));
let arcadeModal = document.getElementById("arcade-picture");
arcadeModal.addEventListener("click", () => openModal("arcade-modal"));
let databaseModal = document.getElementById("database-picture");
databaseModal.addEventListener("click", () => openModal("database-modal"));


function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
    /*https://www.w3schools.com/jsref/event_onclick.asp*/
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}