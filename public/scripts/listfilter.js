// Filter lijst op className met provincie tags 

function filterList(className) {
    var items = document.querySelectorAll('#name-list li');
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(className)) {
        items[i].style.display = 'block';
      } else {
        items[i].style.display = 'none';
      }
    }
  }