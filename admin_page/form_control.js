// form 태그 input
const inputProductName = document.getElementById('input_product_name');
const inputProductNumber = document.getElementById('input_product_number');
const inputProductPrice = document.getElementById('input_product_price');
const inputProductYear = document.getElementById('input_product_year');
const inputProductColor = document.getElementById('input_product_color');
// form 태그 button
const previewButton = document.querySelector('.preview_button');
// 미리보기 tag
const ProductName = document.querySelector('.product_name');
const ProductNumber = document.querySelector('.product_number');
const ProductPrice = document.querySelector('.product_price');
const ProductYear = document.querySelector('.product_year');
const ProductColor = document.querySelector('.product_color');

// 상품등록 미리보기
previewButton.addEventListener('click', () => {

  ProductName.innerHTML = inputProductName.value;
  ProductNumber.innerHTML = inputProductNumber.value;
  ProductPrice.innerHTML = `${Number(inputProductPrice.value).toFixed()}원`;
  ProductYear.innerHTML = inputProductYear.value;
  ProductColor.innerHTML = inputProductColor.value;
})


// for (let inputValue of inputProductValue) {
//   inputValue.addEventListener('invalid', () => {
//     alert('입력하지 않은 칸이 존재합니다.')
//     return 
//   })
// }


// previewButton.addEventListener('invalid', () => {
//   alert('입력하지 않은 칸이 존재합니다.')
// })



