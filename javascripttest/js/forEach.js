//HTML 요소(Elemnet) 모두 검색/찾기
const boxELs = document.querySelectorAll('.box');
console.log(boxELs);

//찾은 요소들 반복해서 함수 실행
//익명 함수를 인수로 추가!
//boxELs.forEach(function () {});

//첫 번째 매개변수(boxEL) : 반복 중인 요소/
//두 번째 매개변수(index) : 반복 중인 번호
//boxELs.forEach(function (boxEL, index) {});

//출력
boxELs.forEach(function (boxEL, index) {
    boxEL.classList.add(`order-${index + 1}`);
    console.log(index, boxEL);
})