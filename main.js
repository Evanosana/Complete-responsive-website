const backToTopButton = document.getElementById("back-to-top")
const links = document.getElementById("links")
const targetElement = document.getElementById("scrollid")


backToTopButton.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

links.addEventListener("click",  () =>{
    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})


