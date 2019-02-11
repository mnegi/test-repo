var aboutLink = document.getElementById('about');
var contactLink = document.getElementById('contact');
var rightDiv = document.querySelector('.right');

function makeAjaxCall(url, htmlElement) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            rightDiv.innerHTML = this.responseText;
            htmlElement.style.borderBottom = "2px solid blue";
        }
    };
    xhttp.open("GET", url + '.html', true);
    xhttp.send();
}
aboutLink.addEventListener('click', function(e) {
    makeAjaxCall('about', aboutLink)
});

contactLink.addEventListener('click', function(e) {
    makeAjaxCall('contact', contactLink)
});