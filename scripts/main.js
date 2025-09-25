
/* Adds header to each page. Source = https://www.w3schools.com/js/js_api_fetch.asp */
fetch("html-parts/head.html")
.then(head => head.text())
.then(headContent => document.getElementById("head").innerHTML = headContent);

/* Adds navbar to each page */
fetch("html-parts/header.html")
.then(header => header.text())
.then(headerContent => {
    document.getElementById("header").innerHTML = headerContent;
    let portfolio = document.getElementById("portfolio");
    portfolio.addEventListener("click", accessPortfolio);});



function accessPortfolio (e) {
    e.preventDefault();
    let answer = prompt("Page Access Key:");
    if (answer === "carsonmccord"){
        window.location.href = portfolio.href;
    } else {
        alert("Incorrect Key. Access Denied.")
    }
}