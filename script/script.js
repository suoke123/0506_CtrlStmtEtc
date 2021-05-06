/*var startNo = 0;   // 시작값
var endNo = 2;   // 종료값

// 3개월의 세금이 아래와 같음
var taxBill = [40000, 52500, 30600];
// taxbill 세금, 배열변수, 인덱스번호 => 0, 1, 2

var sum = 0;   // 누적을 저장하는 변수, summation 누적
for (var i = startNo; i <= endNo; i++) {   // increase : 증가하다.

    sum += taxBill[i];   //누적 공식 sum = sum + taxBill[i];

}

document.write("3개 값의 누적 : " + sum);*/


/* 호이스팅(Hoisting) - 끌어올리기 */

/*
Pascal(파스칼), Algol(알골), ...
C언어(Windows 운영체제, 우주선, 인공위성)
=>파생 프로그램, Java, JavaScript, C++, C#, ...
Rubi (루비) => JavaScript, Python(파이썬), ...

사용하려는 함수를 만들기 전에 호출하면 에러 발생
*/

function fnSample( ) {
    alert("OK");
}   /* 함수의 정의 */

fnSample();   /* 함수의 호출, 정상실행됨 */
