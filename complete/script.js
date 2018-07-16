// Toggle for about us section

var hideAboutUs = false;

document.querySelector('#aboutButton').addEventListener('click', function(){
  hideAboutUs = !hideAboutUs;
  if (hideAboutUs === true) {
    document.querySelector('#aboutContainer').className = 'container hide';
    aboutImgRotate.style.transform = 'rotate(180deg)';
  } else {
    document.querySelector('#aboutContainer').className = 'container';
    aboutImgRotate.style.transform = 'rotate(360deg)';
  }
});

// Swap phone images bottun

var phones = ['images/phone1.png', 'images/phone2.png', 'images/phone3.png', 'images/phone4.png'];
document.querySelector('#swapButton').addEventListener('click', function(){
  
  var currentPath = document.querySelector('#phoneImage').getAttribute('src');
  var currentIndex = phones.indexOf(currentPath);
  var limit = phones.length - 1;
  
  if (currentIndex === limit) {
    document.querySelector('#phoneImage').setAttribute('src', phones[0])
  } else {
    document.querySelector('#phoneImage').setAttribute('src', phones[currentIndex + 1])
  }  
});