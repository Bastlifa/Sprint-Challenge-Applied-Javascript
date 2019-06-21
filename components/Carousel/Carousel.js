class Carousel {
    constructor(carousel)
    {
        this.carousel = carousel;
        this.leftBtn = carousel.querySelector(".left-button");
        this.rightBtn = carousel.querySelector(".right-button");
        this.aImages = Array.from(carousel.querySelectorAll("img"));
        this.currentIndex = 0;

        window.addEventListener("load", () => this.aImages[0].style.display = "block")
        this.leftBtn.addEventListener("click", () => this.goLeft());
        this.rightBtn.addEventListener("click", () => this.goRight());
        // console.log("lftbtn", this.leftBtn);
        // console.log(this.aImages)
    }
    goLeft()
    {
        console.log(this.aImages)
        if (this.currentIndex == 0) this.currentIndex = this.aImages.length - 1;
        else                       this.currentIndex--;
        this.aImages.forEach(img => img.style.display = "none");
        this.aImages[this.currentIndex].style.display = "block";
    }
    goRight()
    {
        console.log(this.aImages)
        if (this.currentIndex == this.aImages.length - 1) this.currentIndex = 0;
        else                       this.currentIndex++;
        this.aImages.forEach(img => img.style.display = "none");
        this.aImages[this.currentIndex].style.display = "block";
    }
}

document.querySelectorAll("img").forEach(img => img.addEventListener("click", () => event.preventDefault()));

let carousel = document.querySelector(".carousel");
new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
