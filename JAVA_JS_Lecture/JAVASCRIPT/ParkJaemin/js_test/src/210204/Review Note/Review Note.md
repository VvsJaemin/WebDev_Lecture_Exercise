# 2021-02-04 Review Note

## Generator

- 반복가능한 Iterator를 값{value, done}으로 반환
- 작업의 일시정지와 재 시작이 가능

function* 

- function 끝에 *가 있는 것은 generator function을 정의 이 함수는 Generator 객체를 반환
- Generator는 생성자로서 사용될 수 없다 -> 타입에러 발생

```js
function* bread() {
    yield "소보루"
    yield "단팥빵"
    yield "슈크림빵"
}

let iter = bread() //이터레이터를 변수 iter에 대입

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())// {value: undefined, done: true}

    [실행과정]
// 1) 제너레이터 함수인 bread는 호출해도 바로 실행되지 않고 이터레이터를 반환
// 2) 이터레이터 next메서드가 호출되면 함수의 첫 번째 yield 위치까지 실행하며, 결괏값으로
//    이터레이터의 결과 {value, done} 반환.
//    이 때 제너레이터 함수의 내부 처리는 '소보루'에서 일시 정지
// 3) next메서드가 한 번 더 호출되면 함수의 두 번째 yield 위치까지 실행하며 동일하게 결과를 반환하고
//    일시 정지
```

yield 

- 제너레이터 함수의 yield는 일시적으로 정지하는 위치
- 제너레이터로 생성한 이터레이터의 next()는 함수의 상태를 일시 정지 상태에서 실행상태로 바꾸는 역할
- yield에 지정한 값을 next() 반환값이 되어 나옴.

## 비동기 처리

- 자바스크립트 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음코드를 먼저 실행하는 자바스크립트의 특성을 의미

- 비동기 처리 예시(setTimeout()) - 코드를 바로 실행하지 않고 지정한 시간만큼 기다렸다가 실행

```js
// #1
console.log('Hello');
// #2
setTimeout(function () {
    console.log('Bye');
}, 3000);
// #3
console.log('Hello Again');

// 비동기 처리에 대한 이해가 없을 땐 순차적으로 출력한다고 생각하겠지만 실제 값은
// 'Hello' 출력 > 'Hello Again'출력 > 3초 있다가 'Bye'출력
// setTimeout()은 3초를 기다렸다가 다음 코드를 수행하는 것이 아니라
// setTimeout()을 실행하고 나서 바로 다음 코드인 console.log('Hello Again'); 으로 넘어감
// 따라서 3초 후에 'Bye'가 출력
```

## Promise

- 프로미스는 자바스크립트 비동기 처리에 사용되는 객체
- 프로미스는 서버에서 받아온 데이터를 화면에 표시할 때 사용

- Promise는 다음 중 하나의 상태를 가짐

1)대기(pending): 이행하거나 거부되지 않은 초기 상태.

2)이행(fulfilled): 연산이 성공적으로 완료됨.

3)실패(rejected): 연산이 실패함.

![이미지](https://mdn.mozillademos.org/files/8633/promises.png)

대기(pending)

```js
new Promise() // 메서드 호출하면 대기상태

//메서드 호출 시 콜백 함수 선언 패가능하며 인자는 resolve, reject
new Promise(function (resolve, reject) {

});

```

이행(fulfilled)

```js

// resolve를 아래와 같이 실행하면 이행상태가 됨
new Promise(function (resolve, reject) {
    resolve();
});


function getData() {
    return new Promise(function (resolve, reject) {
        var data = 100;
        resolve(data);
    });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function (resolvedData) {
    console.log(resolvedData); // 100
});

```

실패(rejected)

```js
// 아래와 같이 reject을 호출하면 거부 상태

new Promise(function (resolve, reject) {
    reject();
});

function getData() {
    return new Promise(function (resolve, reject) {
        reject(new Error("error!"));
    });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(function (err) {
    console.log(err); // Error: Request is error!
});

//실패 이유(실패 처리의 결과 값)를 catch()로 받을 수 있음

```

Promise.then()

- then() 메소드는 promise 객체를 리턴하고 두 개의 인자를 받는다.
- resolve는 프로미스가 성공 했을 때 콜백 함수, reject는 실패 했을 때 콜백 함수
- chaining은 then() 메소드는 promise 객체를 리턴하고 인자로 받은 콜백 함수들의 리턴 값을 이어 받음.

```js
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1);
    }, 1000);
});

promise.then(function (num) {
    console.log(num + 'complete'); /// 1complete
    return num + 1; /// return = 2
}).then(function (value) {
    console.log(value) // 2
});
```

Promise.catch()

- catch()메서드는 reject된 Promise를 반환받게 되었을 때 실행

Promise.finally()

- finally()메서드는 이행 및 실패와 상관없이 Promise가 처리 된 후에 무조건 한 번은 실행
- 무언가 프로세싱 또는 정리를 수행하려는 경우에 유용

throw new Error
- 자바스크립트가 직접 에러를 일으켜서 예외 처리 작업을 시작 할 수 있음
- throw를 호출하면 함수는 실행을 멈추고 catch() 메서드 실행 

Promise.all()
- 여러가지 작업을 동시에 병렬로 처리하고 싶을 때 사용 
- 배열 형태로 값을 받는다.

Promise.race()
-  iterable 안에 있는 프로미스 중에 가장 빠르게 먼저(타임아웃 시간이 가장빠른) 
   완료된 것의 결과값으로 그대로 fulfilled 또는 rejected
   
## async
- async는 function앞에 위치
- await를 사용하기 위해 사용
- AsyncFunction 객체를 반환
- async function 표현식으로만 생성

```js

async function 함수명() {
  await 비동기_처리_메서드_명();
}

```

## await
- async function 내부에서만 사용 가능(외부에선 SyntaxError 발생)
- 반환된 Promise 의 resolve 의 상태 까지 대기
- await 의 값은 Promise 의 resolve 값이 반환
- 중간에 reject 을 만나면 해당 async function 스코프의 작업을 중단되며, 
  이후 스코프 작업이 이어짐
