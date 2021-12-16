
// image, input DOM
const $image = document.querySelector('.product_image');
const fileInput = document.querySelector('#input_product_image')
// button DOM
const prevButton = document.getElementById('prev_button')
const nextButton = document.getElementById('next_button')
// image index
let imageIndex = 0;

// image preview function
const imageRendering = (index) => {
  const imageFile = fileInput.files[index];
  const reader = new FileReader();

  reader.readAsDataURL(imageFile);
  reader.onloadend = () => {
    $image.src = reader.result
  }
}

// event handler
fileInput.addEventListener('input', () => {
  imageRendering(0)
})
prevButton.addEventListener('click', () => {
  if (imageIndex > 0) {
    imageIndex--;
    imageRendering(imageIndex)
  }
})
nextButton.addEventListener('click', () => {
  if (imageIndex < fileInput.files.length - 1) {
    imageIndex++;
    imageRendering(imageIndex)
  }
})

