//HTML 요소(Element) 1개 검색/찾기
let boxEL = document.querySelector('.box');

console.log(boxEL.textContent);

boxEL.textContent = 'HEROPY?!';
console.log(boxEL.textContent);

// // HTML 요소에 적용할수 있는 메소드
// boxEL.addEventListener();

// // 인수(Arguments)를 추가 가능!
// boxEL.addEventListener(1,2);

// // 1 - 이벤트(Event, 상황)
// boxEL.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수)
boxEL.addEventListener('click', function () {
    console.log('Click~!');
    boxEL.classList.add('active');
    console.log(boxEL.classList.contains('active'));
    boxEL.classList.remove('active');
    console.log(boxEL.classList.contains('active'));
    boxEL.textContent = "hi";
})

console.log(boxEL);