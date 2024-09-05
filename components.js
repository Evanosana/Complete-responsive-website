const backToTopButton = document.getElementById("back-to-top")

backToTopButton.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("hey");
})