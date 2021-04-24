#2021-01-29 Review & Questions Note

## [Questions Note]
Q1) FunctionObjectTest2에서 
prog.getName을 콘솔창 출력시 function() {return this.name}
prog.getName() 콘솔창 출력시 name 값인 JavaScript가 나왔습니다.
() 여부의 차이가 궁금합니다.

```js
    console.log("FunctionObjectTest2: prog.getName - " + prog.getName)
    console.log(prog.getName())
```

Q2) FunctionObjectTest2에서
prog.toString 콘솔 출력시 {[Native code]}로 출력됩니다.
Native code가 무엇인가요?
```js
console.log("FunctionObjectTest2: prog.toString - " + prog.toString)
```

Q3) FunctionObjectTest2에서
콘솔 출력시 [object Object]로 출력이되는건 prog 객체의 할당 된 값이 없어서 출력되는 건가요?
```js
console.log("FunctionObjectTest2 : " + prog)
```


## [Review Note]
1)템플릿 리터럴
- 템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴
- 표현식/문자열 삽입, 여러줄 문자열, 문자열 형식화, 문자열 태깅 등의 다양한 기능 제공

2)비구조화 할당(...)
- 비구조화 할당은 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트
표현식
- 간단하게 배열[], 혹은 객체{}안의 값을 편하게 꺼내서 쓸 수 있는 문법

```js
 let arrColor =["red", "green", "blue"]
    // ...arrColor는 뭐다?
    // 현재 위치에 arrColor를 배치하고 뒤쪽에 purple을 배치한다.
    let newArrColor = [...arrColor, "purple"] // 하나의 추가 가능
```

3)JSON.stringify()
- 자바스크립트 값이나 객체를 JSON 문자열로 변환
- 배열이 아닌 객체의 속성들은 어떤 특정한 순서에 따라 문자열화 될 것이라고 보장되지 않는다.
  같은 객체의 문자열화에 있어서 속성의 순서에 의존하지 않는다.
- Boolean, Number, String 객체들은 문자열화 될 때 전통적인 변환 의미에 따라 연관된 기본형(primitive) 값으로 변환된다.
- undefined, 함수, 심볼(symbol)은 변환될 때 생략되거나(객체 안에 있을 경우) null 로 변환된다(배열 안에 있을 경우).
- 심볼을 키로 가지는 속성들은 replacer 함수를 사용하더라도 완전히 무시된다.
  열거 불가능한 속성들은 무시된다.

```js
JSON.stringify({});                  // '{}'
JSON.stringify(true);                // 'true'
JSON.stringify('foo');               // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify({ x: 5 });            // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String('false'), new Boolean(false)]);
// '[1,"false",false]'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// '{}'

// Non-enumerable properties:
JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'
```


4)Prototype
- 자바스크립트는 클래스라는 개념이 없다. 그래서 기존의 객체를 복사해서 새로운 객체를 생성하는 프로토타입 기반의 언어이다.
  이는 객체 원형인 프로토타입을 이용하여 새로운 객체를 만들어낸다.
  이렇게 생성된 객체는 다른 객체의 원형이 될 수 있다.

```js
function Person(){
	this.hand = 2;
	this.body = 1;
	this.nose = 1;
}

let kim = new Person();
let lee = new Person();
console.log(kim.hand); // 2
console.log(lee.hand); // 2

// 보통 객체는 이런 방식으로 사용하게 될 것이다. 이 코드에서는 Person이라는 함수를 통해서 kim과 lee 객체를 생성했다.
// 이들은 각자 3개의 속성을 가지고 있고 데이터 또한 동일하다.
// 메모리의 관점에서 보면 kim과 lee 객체가 생성되면서 총 6개의 변수가 메모리에 저장 되었을 것이다.


function Person(){}

Person.prototype.hand = 2;
Person.prototype.body = 1;
Person.prototype.nose = 1;

let kim = new Person();
let lee = new Person();

console.log(kim.hand) // 2
console.log(lee.hand) // 2

// 얼핏보면 위의 코드와 그렇게 차이가 없어 보인다.
// 어떻게 되었든 출력되는 값은 같으니 말이다. 다시 한번 메모리 관점에서 살펴보자.
// kim과 lee는 자신이 변수를 가지고 있는게 아니라, Person.prototype이라는 어떤 Object의 hand라는 속성을 공유하고 있다.
// 그렇다는 말은 위의 코드 처럼 생성된 객체의 수 만큼 변수가 저장되는 것이 아니라,
// 같은 생성자를 통해서 만들어진 객체들은 하나의 prototype 이라는 Object를 공유하고 있다는 뜻이다.
```

5)hasOwnProperty
-hasOwnProperty() 메소드는 특정 프로퍼티가 해당 객체에 존재하는지를 검사.

해당 객체에서 직접 선언된 프로퍼티만을 검사하며, 같은 이름의 프로퍼티라도 상속받은 프로퍼티는 false 값을 반환.

```js
function Dog(color, name, age, family) {

  this.color = color;

  this.name = name;

  this.age = age;

  this.family = family;

  this.breed = function() {

    return this.color + " " + this.family;

  }

}

var myDog = new Dog("검정색", "곰", 3, "불독");

myDog.hasOwnProperty("color"); // true

myDog.hasOwnProperty("breed"); // true

myDog.hasOwnProperty("class"); // 상속받은 프로퍼티이므로, false를 반환함.
```