const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

document.querySelector('.wrapper')
.addEventListener('mousemove', gun);
function follow() {
    
}