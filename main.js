const backToTopButton = document.getElementById("back-to-top")
const links = document.getElementById("links")


backToTopButton.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

links.addEventListener("click",  () =>{
    document.body.scrollTop = 445;
    document.documentElement.scrollTop = 445;
})