// Toggle for about us section

var hideAboutUs = false;

document.querySelector('#aboutButton').addEventListener('click', function(){
  hideAboutUs = !hideAboutUs;
  if (hideAboutUs === true) {
    document.querySelector('#aboutContainer').className = 'container hide';
  } else {
    document.querySelector('#aboutContainer').className = 'container';
  }
});