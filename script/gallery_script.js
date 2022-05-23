const srcsCottonSoft = [
  'media/cotton_soft/1.jpg',
  'media/cotton_soft/2.jpg',
  'media/cotton_soft/3.jpg',
  'media/cotton_soft/4.jpg',
  'media/cotton_soft/5.jpg',
  'media/cotton_soft/6.jpg',
  'media/cotton_soft/7.jpg',
  'media/cotton_soft/8.jpg',
  'media/cotton_soft/9.jpg',
]

const srcsModernAndTender = [
  'media/modern_and_tender/1.jpg',
  'media/modern_and_tender/2.jpg',
  'media/modern_and_tender/3.jpg',
  'media/modern_and_tender/4.jpg',
  'media/modern_and_tender/5.jpg',
  'media/modern_and_tender/6.jpg',
  'media/modern_and_tender/7.jpg',
]

const srcsBlueAndRustic = [
  'media/blue_and_rustic/1.jpg',
  'media/blue_and_rustic/2.jpg',
  'media/blue_and_rustic/3.jpg',
  'media/blue_and_rustic/4.jpg',
  'media/blue_and_rustic/5.jpg',
  'media/blue_and_rustic/6.jpg',
]

const srcsGreenPatterns = [
  'media/green_patterns/1.png',
  'media/green_patterns/2.png',
  'media/green_patterns/3.png',
  'media/green_patterns/4.png',
  'media/green_patterns/5.png',
]

const srcsModernVintage = [
  'media/modern_vintage/1.png',
  'media/modern_vintage/2.png',
  'media/modern_vintage/3.png',
  'media/modern_vintage/4.png',
  'media/modern_vintage/5.png',
  'media/modern_vintage/6.png',
  'media/modern_vintage/7.png',
  'media/modern_vintage/8.png',
  'media/modern_vintage/9.png',
  'media/modern_vintage/10.png',
  'media/modern_vintage/11.png',
  'media/modern_vintage/12.png',
]

const srcsGreenPeace = [
  'media/green_peace/1.png',
  'media/green_peace/2.png',
  'media/green_peace/3.png',
  'media/green_peace/4.png',
  'media/green_peace/5.png',
  'media/green_peace/6.png',
  'media/green_peace/7.png',
  'media/green_peace/8.png',
  'media/green_peace/9.png',
]

const srcsILoveBoho = [
  'media/i_love_boho/1.png',
  'media/i_love_boho/2.png',
  'media/i_love_boho/3.png',
  'media/i_love_boho/4.png',
  'media/i_love_boho/5.png',
  'media/i_love_boho/6.png',
  'media/i_love_boho/7.png',
  'media/i_love_boho/8.png',
  'media/i_love_boho/9.png',
  'media/i_love_boho/10.png',
  'media/i_love_boho/11.png',
  'media/i_love_boho/12.png',
  'media/i_love_boho/13.png'
]

const srcsSmallAndCute = [
  'media/small_and_cute/1.png',
  'media/small_and_cute/2.png',
  'media/small_and_cute/3.png',
  'media/small_and_cute/4.png',
]

const srcsLoftOffice = [
  'media/loft_office/1.png',
  'media/loft_office/2.png',
  'media/loft_office/3.png',
  'media/loft_office/4.png',
]

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


const cottonSoft = new PortfolioGallery(srcsCottonSoft)
const modernAndTender = new PortfolioGallery(srcsModernAndTender)
const blueAndRustic = new PortfolioGallery(srcsBlueAndRustic)
const greenPatterns = new PortfolioGallery(srcsGreenPatterns)
const modernVintage = new PortfolioGallery(srcsModernVintage)
const greenPeace = new PortfolioGallery(srcsGreenPeace)
const iLoveBoho = new PortfolioGallery(srcsILoveBoho)
const smallAndCute = new PortfolioGallery(srcsSmallAndCute)
const loftOffice = new PortfolioGallery(srcsLoftOffice)


const GalleryAgent = {
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
