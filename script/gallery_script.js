import {
  srcsModernAndTender,
  srcsBlueAndRustic,
  srcsGreenPatterns,
  srcsModernVintage,
  srcsGreenPeace,
  srcsILoveBoho,
  srcsSmallAndCute,
  srcsLoftOffice
} from '.srcs.js';


class PortfolioGallery {
  constructor(slides) {
    this._slides = slides;
  }
  get slides() {
    return this._slides
  }
  showSlide(slideId) {
    document.getElementById('slideImg').src=this.slides[slideId]
  }
}


const modernAndTender = new PortfolioGallery(srcsModernAndTender)
const blueAndRustic = new PortfolioGallery(srcsBlueAndRustic)
const greenPatterns = new PortfolioGallery(srcsGreenPatterns)
const modernVintage = new PortfolioGallery(srcsModernVintage)
const greenPeace = new PortfolioGallery(srcsGreenPeace)
const iLoveBoho = new PortfolioGallery(srcsILoveBoho)
const smallAndCute = new PortfolioGallery(srcsSmallAndCute)
const loftOffice = new PortfolioGallery(srcsLoftOffice)


let GalleryAgent = {}

document.addEventListener('DOMContentLoaded', () => {

  GalleryAgent = {
    openGallery() {
      document.getElementById("gallery").style.display = "block";
    },
    closeGallery() {
      document.getElementById("gallery").style.display = "none";
    },
    setGallery(gallery) {
      this.gallery = gallery;
      this.currentSlideId = 0;
      gallery.showSlide(this.currentSlideId);
      this.setDots();
      this.changeDotsStyle(this.currentSlideId);
    },
    galleryLength() {
      return this.gallery.slides.length
    },
    dotsBox() {
      return document.getElementById('dots-box')
    },
    setDots() {
      this.dotsBox().innerHTML = ''
      for (let src=0; src < this.galleryLength(); src++) {
        let dot = document.createElement('span')
        dot.classList.add("dot")
        this.dotsBox().appendChild(dot)
      }
    },
    changeDotsStyle(slideId) {
      let dotsList = document.getElementsByClassName('dot')
      for (let i=0; i < dotsList.length; i++) {
        dotsList[i].classList.remove('active')
      }
      dotsList[slideId].classList.add('active')
    },
    previousSlide() {
      this.currentSlideId -= 1;
      if (this.currentSlideId < 0) {
        this.currentSlideId = this.galleryLength()-1
      }
      this.gallery.showSlide(this.currentSlideId)
      this.changeDotsStyle(this.currentSlideId);
    },
    nextSlide() {
      this.currentSlideId += 1
      if (this.currentSlideId > this.galleryLength()-1) {
        this.currentSlideId = 0
      }
      this.gallery.showSlide(this.currentSlideId)
      this.changeDotsStyle(this.currentSlideId);
    }
  }

})
