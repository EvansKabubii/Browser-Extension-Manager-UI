const themeSwitcher = document.getElementById('ThemeChanger');
const gridItems = document.querySelectorAll('.GridItem');
const header = document.getElementById('Search');

themeSwitcher.addEventListener('click', function() {
  document.body.classList.toggle('light-mode-body');
  gridItems.forEach(item => {
    item.classList.toggle('light-modeb');
  });
  header.classList.toggle('light-modeb');
  console.log(header);

});
