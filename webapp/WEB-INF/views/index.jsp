<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PLANNET</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Krub:wght@600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/css/style.css" />
    <script
      src="https://kit.fontawesome.com/84b5615326.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
      <!-- 네비 메뉴 -->
      <nav>
        <header class="logo">PLANNET</header>
        <div class="nav-item">
          <div class="menu">
            <a href="" class="menu-item">
              <i class="fa-solid fa-house-chimney"></i>
            </a>
            <a href="" class="menu-item"
              ><i class="fa-solid fa-address-card"></i
            ></a>
            <a href="" class="menu-item"
              ><i class="fa-solid fa-users-rectangle"></i
            ></a>
            <a href="" class="menu-item"><i class="fa-solid fa-gear"></i></a>
          </div>
          <div class="login">
            <a href="login">로그인</a>
            <span>/</span>
            <a href="signup">회원가입</a>
          </div>
        </div>
      </nav>
      <div class="main">
        <!-- 달력 -->
        <section class="calendar">
          <div class="calendar-header">
            <button class="nav-btn go-prev" onclick="prevMonth()">&lt</button>
            <button class="nav-btn year-month" onclick="goToday()"></button>
            <button class="nav-btn go-next" onclick="nextMonth()">&gt</button>
          </div>
          <div class="days">
            <div class="day">Sun</div>
            <div class="day">Mon</div>
            <div class="day">Tue</div>
            <div class="day">Wed</div>
            <div class="day">Thu</div>
            <div class="day">Fri</div>
            <div class="day">Sat</div>
          </div>
          <div class="dates"></div>
        </section>
        <!-- 검색&일정&목표 -->
        <aside class="side">
          <div class="search">
            <input class="search-box" type="text" />
            <button class="search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div class="daily">
            <div class="daily-header">
              <div class="daily-title">일정</div>
              <button class="daily-btn">수정</button>
            </div>
            <div class="daily-list">
              <li></li>
            </div>
          </div>
          <div class="plan">
            <div class="plan-header">
              <div class="plan-title">목표</div>
              <button class="plan-btn">수정</button>
            </div>
            <div class="plan-list">
              <li></li>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <script src="/js/main.js"></script>
  </body>
</html>