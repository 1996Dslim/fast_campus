//HTML 요소(Element) 검색 찾기
const boxEL = document.querySelector('.box');

//요소의 클래스 정보 객체 활용!
boxEL.classList.add('active');
let isContains = boxEL.classList.contains('active');
console.log(isContains);

boxEL.classList.remove('active');
isContains = boxEL.classList.contains('active');
console.log(isContains)