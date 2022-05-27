<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PLANNET</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Krub:wght@600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/findpass.css" />
  </head>
  <body>
    <div class="container">
      <header>비밀번호 찾기</header>
      <div>
        <div class="id">
          <div class="title">아이디</div>
          <input type="text" class="input-box" />
        </div>
        <div class="name">
          <div class="title">이름</div>
          <input type="text" class="input-box" />
        </div>
        <div class="email">
          <div class="title">이메일</div>
          <input type="text" class="email-input-box" />
          <button class="email-btn">인증</button>
        </div>
        <div class="code">
          <div class="title">인증번호</div>
          <input type="text" class="input-box" />
        </div>
      </div>
      <div class="btn-item">
        <button class="btn" value="BACK" onClick="history.go(-1)">
          돌아가기
        </button>
        <button class="btn" onclick="location.href='change_pass'">
          다음
        </button>
      </div>
    </div>
    <script src="login.js"></script>
  </body>
</html>