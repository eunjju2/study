//실습2
// function func() {
//     let text = event.target.tagName;
//     document.getElementById('show').innerHTML = text;
// }


//실습3
// const item = document.querySelector('.item');

// item.addEventListener('dragestart', (e) => {
//     console.log(드래그 시작);
// })

// const item = document.querySelector('.item');

// item.addEventListener('dragstart', (e) => {
//     console.log('드래그 시작');
// })

// item.addEventListener('drag', (e) => {
//     console.log('드래그 하면 나와라');
// })

//실습4
// const container = document.querySelector('.container');
// const container2 = document.querySelector('.container2');

// container.addEventListener('drageneter', (e) => {
//     console.log('박스 영역에 최초 진입')
// })

//실습5
// const container = document.querySelector('.container');
// container.addEventListener('dragenter', (e) => {
//     console.log('박스 영역에 최초 진입');
// })

// container.addEventListener('dragleave', (e) => {
//     console.log('박스 영역 떠나면 발생')
// })

// const container2 = document.querySelector('.container2');

//실습6
// const container = document.querySelector('.container');
// container.addEventListener('dragenter', (e) => {
//     console.log('박스 영역에 최초 진입');
// });

// container.addEventListener('dragleave', (e) => {
//     console.log('박스 영역 떠나면 발생')
// });

// container.addEventListener('dragover', (e) => {
//     console.log('여기 있음')
// });

// const container2 = document.querySelector('.container2');

//실습7
// const container = document.querySelector('.container');
// container.addEventListener('dragenter', (e) => {
//     console.log('1박스 영역에 최초 진입');
// });

// container.addEventListener('dragleave', (e) => {
//     console.log('1박스 영역 떠나면 발생')
// });

// container.addEventListener('dragover', (e) => {
//     console.log('여기 있음')
//    e.preventDefault(); //안넣으면 드롭이 안됨
// });

// container.addEventListener('drop', (e) => {
//     console.log('1번 박스 영역에 드롭')
// });
// const container2 = document.querySelector('.container2');

//실습8
// const container = document.querySelector('.container');
// container.addEventListener('dragenter', (e) => {
//     console.log('1박스 영역에 최초 진입');
// });

// container.addEventListener('dragleave', (e) => {
//     console.log('1박스 영역 떠나면 발생')
// });

// container.addEventListener('dragover', (e) => {
//     console.log('여기 있음')
//    e.preventDefault();
// });

// container.addEventListener('drop', (e) => {
//     console.log('1번 박스 영역에 드롭')
// });
// const container2 = document.querySelector('.container2');
// container2.addEventListener('dragenter', (e) => {
//     console.log('2박스 영역에 최초 진입');
// });

// container2.addEventListener('dragleave', (e) => {
//     console.log('2박스 영역 떠나면 발생')
// });

// container2.addEventListener('dragover', (e) => {
//     console.log('여기 있음')
//    e.preventDefault(); 
// });

// container2.addEventListener('drop', (e) => {
//     console.log('2번 박스 영역에 드롭')
// });

//실습9
// const container = document.querySelector('.container');
// container.addEventListener('dragenter', (e) => {
//     console.log('1박스 영역에 최초 진입');
// });

// container.addEventListener('dragleave', (e) => {
//     console.log('1박스 영역 떠나면 발생')
// });

// container.addEventListener('dragover', (e) => {
//     console.log('여기 있음')
//    e.preventDefault();
// });

// container.addEventListener('drop', (e) => {
//     console.log('1번 박스 영역에 드롭')
// });
// const container2 = document.querySelector('.container2');
// container2.addEventListener('dragenter', (e) => {
//     console.log('2박스 영역에 최초 진입');
// });

// container2.addEventListener('dragleave', (e) => {
//     console.log('2박스 영역 떠나면 발생')
// });

// container2.addEventListener('dragover', (e) => {
//     console.log('여기 있음')
//    e.preventDefault();
// });

// container2.addEventListener('drop', (e) => {
//     console.log('2번 박스 영역에 드롭')
// });

// document.getElementById('appendChildBtn').onclick = function() {
//     const parent = document.getElementById('parent');
//     const newElement = document.createElement('div');
//     newElement.textContent = "New Child";
//     parent.appendChild(newElement);
// }

//실습10
// const container = document.querySelector('.container');
// container.addEventListener('dragenter', (e) => {
//     console.log('1박스 영역에 최초 진입');
// });

// container.addEventListener('dragleave', (e) => {
//     console.log('1박스 영역 떠나면 발생')
// });

// container.addEventListener('dragover', (e) => {
//     console.log('여기 있음')
//    e.preventDefault();
// });

// container.addEventListener('drop', (e) => {
//     console.log('1번 박스 영역에 드롭')
// });
// const container2 = document.querySelector('.container2');
// container2.addEventListener('dragenter', (e) => {
//     console.log('2박스 영역에 최초 진입');
// });

// container2.addEventListener('dragleave', (e) => {
//     console.log('2박스 영역 떠나면 발생')
// });

// container2.addEventListener('dragover', (e) => {
//     console.log('여기 있음')
//    e.preventDefault();
// });

// container2.addEventListener('drop', (e) => {
//     console.log('2번 박스 영역에 드롭')
// });

// document.getElementById('appendChildBtn').onclick = function() {
//     const parent = document.getElementById('parent');
//     const newElement = document.createElement('div');
//     newElement.textContent = "New Child";
//     parent.appendChild(newElement);
// }

// document.getElementById('insertBeforeBtn').onclick = function () {
//     const parentEl = document.getElementById('parent');
//     const newEl = document.createElement('div');
//     newEl.textContent="New Child";

//     const reference = document.getElementById('reference');
//     parentEl.insertBefore(newEl, reference);
// }

//실습11
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging'); //특정 HTML 요소에 'dragging'이라는 클래스를 추가
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging'); //클래스 삭제
    })

});

containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault(); //좀 더 깔끔하게 나옴
        const afterElement = getDragAfterElement(container, e.clientX);
        const draggable = document.querySelector('.dragging'); //드래깅 되고 있는 것. 드래깅 될 때 클래스가 추가되므로
        if(afterElement === undefined) {
            container.appendChild(draggable)
        }else {
            container.insertBefore(draggable, afterElement)
        }
    
    })
})

function getDragAfterElement(container, x) { 
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging')];

    //draggableElements 배열을 순회하며 가장 가까운 요소를 찾음
    //reduce 메서드는 가장 가까운 요소를 'closest' 객체로 반환
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect(); //각 요소의 위치와 크기를 가져옴
        const offset = x - box.left - box.width / 2; //마우스 커서가 현재 드래그 중인 요소의 중앙으로부터 얼마나 떨어져있는지

        if(offset < 0 && offset > closest.offset) {
            return { offset : offset, element : child}
        }else {
            return closest;
        }
    }, {offset : Number.NEGATIVE_INFINITY} //자바스크립트에서 가장 작은 수
).element;
}