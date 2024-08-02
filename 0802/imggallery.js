// const draggables = document.querySelectorAll('.draggable');
// const gallery = document.querySelectorAll('img');

// draggables.forEach((draggable) => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging'); //특정 HTML 요소에 'dragging'이라는 클래스를 추가
//     });

//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging'); //클래스 삭제
//     })

// });

// gallery.forEach((image) => {
//     image.addEventListener('dragover', (e) => {
//         e.preventDefault(); //좀 더 깔끔하게 나옴
//         const afterElement = getDragAfterElement(image, e.clientX);
//         const draggable = document.querySelector('.dragging'); //드래깅 되고 있는 것. 드래깅 될 때 클래스가 추가되므로
//         if(afterElement === undefined) {
//             image.appendChild(draggable)
//         }else {
//             image.insertBefore(draggable, afterElement)
//         }
//     })
// })
// // 현재 드래그 중인 요소를 올바른 위치에 배치하는 함수
// function getDragAfterElement(image, x) { 
//     const draggableElements = [...image.querySelectorAll('.draggable:not(.dragging')];

//     return draggableElements.reduce((closest, child) => {
//         const album = child.getBoundingClientRect(); //각 요소의 위치와 크기를 가져옴
//         const offset = x - album.left - album.width / 2; //마우스 커서가 현재 드래그 중인 요소의 중앙으로부터 얼마나 떨어져있는지

//         if(offset < 0 && offset > closest.offset) {
//             return { offset : offset, element : child}
//         }else {
//             return closest;
//         }
//     }, {offset : Number.NEGATIVE_INFINITY} //자바스크립트에서 가장 작은 수
// ).element;
// }


const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('img');
let dragImage = null;

images.forEach((image) => {

    image.addEventListener('dragstart', () => {
        image.classList.add('dragging');
        dragImage = image;
    });

    image.addEventListener('dragend', () => {
        image.classList.remove('dragging');
    });

    image.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('드래그 오버');
    });
    image.addEventListener('drop', () => {
        if(dragImage != image) {
            //image = 드롭된 부분
            gallery.insertBefore(dragImage, image);
        }
    })
})