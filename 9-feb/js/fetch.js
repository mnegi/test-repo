var aboutLink = document.getElementById('about');
var contactLink = document.getElementById('contact');
var rightDiv = document.querySelector('.right');

function makeAjaxCall(url, htmlElement) {
    fetch(url + ".html")
        .then(function(response) {
            console.log(response)
            return response.text()
        })
        .then(function(data) {
            rightDiv.innerHTML = data;
            htmlElement.style.borderBottom = "2px solid blue";
        });
}
aboutLink.addEventListener('click', function(e) {
    makeAjaxCall('about', aboutLink)
});

contactLink.addEventListener('click', function(e) {
    makeAjaxCall('contact', contactLink)
});