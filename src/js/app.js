const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
    const clearNotification = document.querySelectorAll(".notification")
    clearNotification.forEach(e => {
        if (e.classList.contains("new")) {
            e.classList.remove("new")
            const span = document.getElementById("span");
            span.innerText = 0;
        }
    })
})