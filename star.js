let stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", ()=>{
        stars.forEach((star, index2) => {
            if (index1 >= index2){
                star.classList.add("mark")
            } else {
                star.classList.remove("mark")
            }
        })
    })
});



