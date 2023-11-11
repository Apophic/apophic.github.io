function navigate() {
    var urlInput = document.getElementById('urlInput');
    var browser = document.getElementById('browser');
    var url = urlInput.value;
    
    if (url.startsWith('http://') || url.startsWith('https://')) {
        browser.src = url;
    } else {
        browser.src = 'http://' + url;
    }
}

document.getElementById('goButton').addEventListener('click', navigate);
