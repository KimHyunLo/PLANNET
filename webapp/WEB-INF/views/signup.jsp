<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>

<html>
<head>
	<title>회원가입</title>
	<!-- 합쳐지고 최소화된 최신 CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<!-- 부가적인 테마 -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<body>
<h1>
	회원가입
</h1>
<form action="/signUpAjax" method="post">
	<p>
		<label for="userId">아이디</label>
		<input type="text" id="userId" name="id"/>
	</P>
	<p>
		<label for="pw">비밀번호</label>
		<input type="password" id="pw" name="password"/>
	</P>
	<p>
		<label for="pwcheck">비밀번호 확인</label>
		<input type="password" id="pwcheck" name="passwordcheck"/>
	</P>
	<p>
		<label for="userName">이름</label>
		<input type="text" id="userName" name="name"/>
	</P>
	<p>
		<label for="userEmail">이메일</label>
		<input type="email" id="userEmail" name="email"/>
	</P>
	<p>
		<label for="userPhone">전화번호</label>
		<input type="tel" id="userPhone" name="phonenumber"/>
	</P>
	<button type="submit">회원가입하기</button>
	<p><a href="/login">로그인하러가기</a></p>
</form>
</body>
</html>