## Node + Express로 서버 만들고 react 프로젝트와 연동
1. 작업 폴더 안에 server.js 생성 후 아래 코드 작성
```js
const express = require('express');
const path = require('path');
const app = express();

app.listen(8090, function () {
    console.log('listening on 8090')
});
```
2. `npm init -y`
3. `npm install express`
4. 작업 폴더 안에 react 프로젝트 생성 `npx create-react-app 프로젝트명`
5. 개발 마친 후 빌드 `npm run build`
6. 서버가 index.html 보내도록 server.js 코드 추가
    ```js
    app.use(express.static(path.join(__dirname, 'react-repo/build')));
    
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/react-repo/build/index.html'));
    });
    ```
   - express.static : 특정 폴더 안의 파일들을 static 파일로 고객에게 보내줌
7. localhost:포트 로 접속해서 확인

### react-router 쓰는 경우
- server.js 최하단에 아래 코드 추가: 리액트가 라우팅하도록 전권을 넘긴다.
   ```js
   app.get('*', function (req, res) {
       res.sendFile(path.join(__dirname, '/react-repo/build/index.html'));
   });
   ```
  
