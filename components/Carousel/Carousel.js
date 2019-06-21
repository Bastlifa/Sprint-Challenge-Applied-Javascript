class Carousel {
    constructor(carousel)
    {
        this.carousel = carousel;
        this.leftBtn = carousel.querySelector(".left-button");
        this.rightBtn = carousel.querySelector(".right-button");
        this.aImages = Array.from(carousel.querySelectorAll("img"));
        this.currentIndex = 0;

        window.addEventListener("load", () => this.aImages[0].style.display = "block")
        // this.leftBtn.addEventListener("click", () => this.goLeft());
        // this.rightBtn.addEventListener("click", () => this.goRight());
        this.leftBtn.addEventListener("click", () => this.goLeftAnim());
        this.rightBtn.addEventListener("click", () => this.goRightAnim());
    }
    goLeft()
    {
        if (this.currentIndex == 0) this.currentIndex = this.aImages.length - 1;
        else                       this.currentIndex--;
        this.aImages.forEach(img => img.style.display = "none");
        this.aImages[this.currentIndex].style.display = "block";
    }
    goRight()
    {
        if (this.currentIndex == this.aImages.length - 1) this.currentIndex = 0;
        else                       this.currentIndex++;
        this.aImages.forEach(img => img.style.display = "none");
        this.aImages[this.currentIndex].style.display = "block";
    }
    goLeftAnim()
    {
        let nextIndex = this.currentIndex == this.aImages.length - 1 ? 0 : this.currentIndex + 1;
        let curImg = this.aImages[this.currentIndex];
        let nextImg = this.aImages[nextIndex];

        nextImg.style.display = "block";
        
        function onCompDispNone() {curImg.style.display = "none";}

        TweenMax.set(nextImg, {x:600})
        let tlLeft = new TimelineMax();
        tlLeft.to(curImg, 2, {x:-1200, }, "samey")
        .to(nextImg, 2, {x:0}, "samey")
        //onComplete: onCompDispNone
        onCompDispNone();

        if (this.currentIndex == this.aImages.length - 1) this.currentIndex = 0;
        else                       this.currentIndex++;
    }
    goRightAnim()
    {
        let previousIndex = this.currentIndex == 0 ? this.aImages.length - 1 : this.currentIndex - 1;
        let curImg = this.aImages[this.currentIndex];
        let prevImg = this.aImages[previousIndex];

        prevImg.style.display = "block";
        
        function onCompDispNone() {curImg.style.display = "none";}
    
        TweenMax.set(prevImg, {x:-600})
        let tlLeft = new TimelineMax();
        tlLeft.to(curImg, 2, {x:1200, }, "samey")
        .to(prevImg, 2, {x:0}, "samey")
        //onComplete: onCompDispNone
        onCompDispNone();

        if (this.currentIndex == 0) this.currentIndex = this.aImages.length - 1;
        else                       this.currentIndex--;
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
