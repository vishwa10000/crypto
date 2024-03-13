document.addEventListener("DOMContentLoaded", function() {
    const carouselContent = document.getElementById('carouselContent');
    const carouselItems = document.querySelectorAll('.clients-content2');
   
    let currentIndex = 0;
  
    function showNextCard() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselContent.style.transform = `translateX(-${currentIndex * 260}px)`;}
  
    setInterval(showNextCard, 2000);
  });

  function nav(){
    const x=document.getElementById("list-2")
    if(x.style.width === "0%" || x.style.width ===""){
        x.style.width="100%";
    }
    else{
        x.style.width="0%";
    }
};

let a = document.getElementById("road-first");
let b = document.getElementById("road-second");
let c = document.getElementById("road-third");
function year(val) {

    if (val === 'one') {
        a.style.display = 'flex'
        b.style.display = 'none'
        c.style.display = 'none'
    }
    else if (val === 'two') {
        a.style.display = 'none'
        b.style.display = 'flex'
        c.style.display = 'none'
    }
    else {
        a.style.display = 'none'
        b.style.display = 'none'
        c.style.display = 'flex'
    }
}
year('one');

  
