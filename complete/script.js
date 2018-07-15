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