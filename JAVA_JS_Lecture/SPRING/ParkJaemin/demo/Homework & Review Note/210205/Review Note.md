# 2021-02-05 Review Note


## slf4j
- 자바 로깅 시스템을 쉽게 사용할 수 있도록 해주는 라이브러리
- 다양한 자바 로깅 시스템을 사용할 수 있도록 facade(파사드) pattern 및 추상화를 통해 로깅 기능을 제공
- 자바 로깅 관련 라이브러리들을 추상화 시킨 interface

## log level
- trace : debug보다 아래단계, 덜 중요하지만 변수를 쫓는 정도의 로그를 찍는데 사용함
- debug : debug를 위해서 사용하는 logging level
- info : 진행정보, 상태 정보를 찍는데 사용함(로그인, 상태변경)
- warn : 잠재적 오류, 경고성 정보를 로깅하는데 사용함
- error : 오류가 발생했을 경우 사용함

## Logger 객체 선언
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Html5Css3PageController {
  public static Logger log =
          LoggerFactory.getLogger(Html5Css3PageController.class);
  // LoggerFactory 클래스의 getLogger로 log객체 생성
```


## MVC
Model-View-Controller의 약자

- Model: 어플리케이션 계층의 정보, 데이터 의미
- View: 화면 출력 로직을 담당
- Controller: Model과 View의 연결하는 제어 로직을 담당

## @Controller

- Client가 URI 요청을 보냄
- DispatcherServlet과 Handler Mapping이 요청을 Intercept
- Controller에 의해 요청을 처리 하고 DispatcherServlet이 Model과 View를 적절히 Client에 리턴
- HttpServletRequest, HttpServletResponse를 거의 사용할 필요 없음.
- 다양한 타입의 파라미터/리턴 사용 가능
- GET/POST 등 전송방식에 대한 처리를 어노테이션으로 가능
- 상속/인터페이스 방식 대신에 어노테이션만으로도 필요한 설정 가능


## @GetMapping
- @RequestMapping(method = RequestMethod.GET) 의 축약형
- GET 요청 방식의 API를 만들때, @RequestMapping(method = RequestMethod.GET ...) 방식도 있지만,
  @GetMapping을 이용하는 방법도 있다. (개인적으로 @GetMapping을 더 많이 사용한다)


## HTML 요소(element)의 구조
```html
 <p>My name is Mike</p>
```
- 여는 태그(Opening tag): 이것은 요소의 이름과(이 경우 p), 열고 닫는 꺽쇠 괄호로 구성.
  요소가 시작(이 경우 단락의 시작 부분)부터 효과가 적용되기 시작

- 닫는 태그(Closing tag): 이것은 요소의 이름 앞에 슬래시(/)가 있는것을 제외하면 여는 태그(opening tag)와 같음.
  이것은 요소의 끝(이 경우 단락의 끝 부분)에 위치.

- 내용(Content): 요소의 내용이며, 이 경우 단순한 텍스트.

- 요소(Element): 여는 태그, 닫는 태그, 내용을 통틀어 요소(element)라고함.

## HTML 기본 구조
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                         <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>HTML문서의 제목입니다.</title>
</head>
<body>
  <h1>제목 크기 1</h1>
  <h2>제목 크기 2</h2>
  <p>단락</p>

</body>
</html>
```
!DOCTYPE html : 현재 문서가 HTML5 문서임을 명시.

html : HTML 문서의 루트(root) 요소를 정의.

head : HTML 문서의 메타데이터(metadata)를 정의.

- 메타데이터(metadata)란 HTML 문서에 대한 정보(data)로 웹 브라우저에는 직접적으로 표현되지 않는 정보를 의미.

- 이러한 메타데이터는 title, style, meta, link, script, base태그 등을 이용하여 표현할 수 있습니다.

title : HTML 문서의 제목(title)을 정의하며, 다음과 같은 용도로 사용.

- 웹 브라우저의 툴바(toolbar)에 표시.

- 웹 브라우저의 즐겨찾기(favorites)에 추가할 때 즐겨찾기의 제목.

- 검색 엔진의 결과 페이지에 제목으로 표시.

body : 웹 브라우저를 통해 보이는 내용(content) 부분.

h1 ~ h6 : 제목(heading)을 나타냄.

p : 단락(paragraph)을 나타냄.

- 단축키 : ! 입력 후 탭하면 기본구조 자동생성

## HTML 텍스트 요소

- br(break line) :

- hr(horizontal rule) : 단락을 나눌 때나 내용상의 구분을 표현하고 할 때 사용.

- b 또는 strong : 텍스트를 굵게 표현하고 싶을 때 사용. b 태그는 단순히 화면의 텍스트를 굵게 표현.
strong 태그는 텍스트를 굵게 표현해줄 뿐만 아니라 그 내용이 중요하다는 의미도 함께 포함

- i 또는 em : i 는 단순히 화면의 텍스트를 이탤릭체 표현.
em 텍스트를 이탤릭체로 변환 할 뿐만 아니라 강조된 텍스트를 더 중요하게 인식.


- blockquote : 길이가 긴 인용문일 때 사용. 인용 부분을 별도의 단락으로 구분하여 나타냄

- q : 길이가 짧은 인용구일 때 사용. 자동으로 앞 뒤에 큰 따옴표가 붙음.


## HTML 기본 요소
1)style

- HTML 요소의 style 속성(attribute)을 이용하면 CSS 스타일을 HTML 요소에 직접 설정할 수 있음.

하지만 이러한 style 속성을 이용한 방법은 오직 단 하나의 HTML 요소에만 스타일을 적용할 수 있음.

2)img
- img 태그는 종료 태그가 없는 빈 태그 이며, 아래와 같은 문법으로 사용
- img src = "이미지 주소" alt = "대체문자열"
- src 속성은 이미지가 저장된 주소의 URL 주소를 명시
- alt 속성으로 이미지가 로딩될 수 없는 상황에서 이미지 대신 나타날 문자열을 설정.

3)ul, ol, dl, li
- ul : 순서가 없는 리스트
- ol : 순서가 있는 리스트
- dl : 정의 리스트로 용어와 그에대한 정의를 모아 놓은 리스트 dt 태그에는 용어의 이름이 들어가고
  dd 태그에는 해당용어에 대한 정의가 들어감

```html
<dl>
    <dt>호박</dt>

    <dd>- 박과의 한해살이 덩굴성 채소</dd>

    <dt>상추</dt>

    <dd>- 국화과의 한해살이 또는 두해살이풀</dd>

</dl>
```
- li : 각각의 리스트 요소

## 블록과 인라인
- HTML의 모든 요소는 해당 요소가 웹 브라우저에 어떻게 보이는가를 결정짓는 display 속성을 가짐.

  대부분의 HTML 요소는 이러한 display 속성값으로 다음 두 가지 값 중 하나를 가지게 됨.

1)블록(block)
- display 속성값이 블록(block)인 요소는 언제나 새로운 라인(line)에서 시작하며, 해당 라인의 모든 너비를 차지.
- p, div, h, ul, ol, form 요소는 display 속성값이 블록(block)인 대표적인 요소입니다.


2)인라인(inline)
- display 속성값이 인라인(inline)인 요소는 새로운 라인(line)에서 시작하지 않음.

또한, 요소의 너비도 해당 라인 전체가 아닌 해당 HTML 요소의 내용(content)만큼만 차지.
- span, a, img 요소는 display 속성값이 인라인(inline)인 대표적인 요소.

3)div
- div 요소는 다른 HTML 요소들을 하나로 묶는 데 자주 사용되는 대표적인 블록(block) 요소.

- div 요소는 주로 여러 요소들의 스타일을 한 번에 적용하기 위해 사용.

4)span
- span 요소는 텍스트(text)의 특정 부분을 묶는 데 자주 사용되는 인라인(inline) 요소.

  span 요소는 주로 텍스트의 특정 부분에 따로 스타일을 적용하기 위해 사용.
