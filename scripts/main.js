
/* Adds header to each page. Source = https://www.w3schools.com/js/js_api_fetch.asp */
fetch("html-parts/head.html")
.then(head => head.text())
.then(headContent => document.getElementById("head").innerHTML = headContent);

/* Adds navbar to each page */
fetch("html-parts/header.html")
.then(header => header.text())
.then(headerContent => document.getElementById("header").innerHTML = headerContent);