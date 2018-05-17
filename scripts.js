function progressBar() {
    const progressBarStatus = document.getElementById('progressBarStatus');

    let windowTop = window.scrollY,
        windowHeight = window.innerHeight,
        documentHeight = document.documentElement.scrollHeight,
        documentPosition = (windowTop / (documentHeight - windowHeight)) * 100;

    progressBarStatus.style.width = documentPosition + 'vw';
}

window.onscroll = function() {
    progressBar();
};