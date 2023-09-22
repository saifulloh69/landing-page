// const slider = document.querySelector('.slider');
//   let scrollValue = 0;
//   const slideWidth = slider.offsetWidth;

//   function nextSlide() {
//     scrollValue += slideWidth;
//     if (scrollValue >= slider.scrollWidth - slideWidth) {
//       scrollValue = 0;
//     }
//     slider.scrollTo({
//       left: scrollValue,
//       behavior: 'smooth'
//     });
//   }

//   function prevSlide() {
//     scrollValue -= slideWidth;
//     if (scrollValue < 0) {
//       scrollValue = slider.scrollWidth - slideWidth;
//     }
//     slider.scrollTo({
//       left: scrollValue,
//       behavior: 'smooth'
//     });
//   }