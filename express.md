# passport관련
로그인에 대한 필요. 인증을 안전하게 구현하기 위해서 express framwork에서 passport가 등장한다

### passport 
- 배우기는 어려우나 사용하기는 편리함 
- 여러가지 전략을 통해서 로그인을 할 수 있음(페이스북, 구글 같은거들. 전통적인 방법도 가능)
- npm install passport 를 통해서 설치 가능함
- npm install passport-local 을 통해서 로컬 방식 로그인 전략을 설치 가능하다
- <strong>세션을 내부적으로 사용하므로, 세션 활성화 이후에 passport에 대한 것을 넣어준다</strong>

```javascript=
app.post('/login', function(req, res){}); //지금까지 처리하던 형식

app.post('/login', passport.authenticate('local', { }));
//local뒤에는 그 이후 진행할 동작들이 들어가게 된다.

```
