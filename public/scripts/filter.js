// Filter lijst op className met provincie tags 

function filterList(className) {
    var items = document.querySelectorAll('#name-list li');
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(className)) {
        items[i].style.display = 'flex';
      } else {
        items[i].style.display = 'none';
      }
    }
  }


  // Noord-Holland 

// Get the image element
var image = document.querySelector(".Noord-Holland");

// Get the list element
var list = document.querySelector(".n-h-m");

// Get the number of students in the list
var numStudents = list.children.length;

// Set the image source based on the number of students
if (numStudents >= 20) {
  image.src = "image1.jpg";
} else if (numStudents >= 4) {
  image.src = "image2.jpg";
} else {
  image.src = "./media/map/Noord-Holland.svg";
}

// Province naming system 

// Get all the province images
const provinceImages = document.querySelectorAll('.provinces');

// Loop through each image and add a click event listener
provinceImages.forEach(image => {
  image.addEventListener('click', () => {
    // Get the class name of the clicked image
    const className = image.className.split(' ')[1];

    // Get the provinces box element
    const provincesBox = document.querySelector('.provinces-box-t');

    // Set the text of the provinces box element to the class name of the clicked image
    provincesBox.textContent = className;
  });
});










/*

// all round

// Get all the images with the class "province-image"
const provinceImages = document.querySelectorAll(".province-image");

// Loop through each province image
provinceImages.forEach(image => {

  // Get the province name from the image class
  const provinceName = image.classList[1];

  // Get the corresponding list element for the province
  const studentList = document.querySelector(`.student-info.${provinceName}`);

  // Get the number of students in the list with the class "n-h-m"
  const studentCount = studentList.querySelectorAll(".n-h-m").length;

  // Set the image source based on the number of students
  if (studentCount >= 10) {
    image.src = `images/${provinceName}-large.jpg`;
  } else if (studentCount >= 5) {
    image.src = `images/${provinceName}-medium.jpg`;
  } else {
    image.src = `images/${provinceName}-small.jpg`;
  }

});
*/