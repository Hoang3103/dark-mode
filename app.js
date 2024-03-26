const darkModeToggle = document.getElementById('dark');
const body = document.body;
const movingElement = document.querySelector('.moving-element');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Thêm hoặc xoá class 'dark-mode'
});
darkModeToggle.addEventListener('click', () => {
    movingElement.classList.toggle('moved'); // Thêm hoặc xoá class 'moved'
});
