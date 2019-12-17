//Navigation
console.log("yay")
const allItems = document.querySelectorAll(".navmenu ul li a");
allItems.forEach(item => {

    item.addEventListener("click",function(){
        for(var i=0; i < allItems.length; i++){
            allItems[i].classList.remove("active")
        }
        this.classList.add("active");
    })
})