### webpack-dev-server

빌드 결과물을 돌리고 dist 폴더에 메모리로 저장해놓고, index.html을 실행하게 되면 저장했던 결과물을 보여준다. 코드의 변경이 감지되면 새로고침을 하여 reloading 시켜주기 때문에 사용한다.(완전히 새로고침 : 기존의 데이터는 날아간다)
개발용 서버은 개발 편의를 위해서 존재한다.

### hot-reloading VS reloading(hot-reloading과 reloading의 차이)

hot-reloading도 reloading과 마찬가지로 변경점(소스코드의 변경)을 감지해서 그에 따라 결과물을 수정해준다. 하지만 hot-reloading을 사용하는 이유는 기존 데이터를 유지한채로 화면을 바꿔주기 때문이다.  
 참고 : RefreshWebpackPlugin과 react-refresh 이 두가지를 다운받아 사용함
