const loader = document.querySelector('.loading-panel');

function loadPage()
{
    const fEffect = setInterval(() => {
        if(!loader.style.opacity) {
            loader.style.opacity = 1;
        }
        if(loader.style.opacity > 0) {
            loader.style.opacity -= 0.1;
        } else {
            clearInterval(fEffect);
            loader.style.display = "none";
        }
    }, 100)
}