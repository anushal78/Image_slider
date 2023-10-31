//To get the DOM elements for the image carousel

const wrapper = document.querySelector(".wrapper"),
      carousel = document.querySelector(".carousel"),
      images = document.querySelectorAll("img"),
      buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

// Definining functions to start automatic image slider
const autoSlide = () => {

  // Below function will Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};

// Calling the autoSlide function on page load
autoSlide();

// This is the function that updates the carousel display to show the specified image
const slideImage = () => {

  // To  Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;

  // To Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function to show the next or previous image by updating the carousel dispaly 
const updateClick = (e) => {
  // Stop the automatic slideshow when we click on specific image 
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow when it reaches the last image 
  autoSlide();
};

// Added event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Added mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Added mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);
