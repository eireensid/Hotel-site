<template>
  <footer>
    <div class="container container-footer footer-top">
      <div class="row no-gutters">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm">
          <img class="img-fluid logo-bottom" src="/assets/img/logo.png" alt="logo">
          <p class="nav-text">Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</p>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm">
          <nav class="navbar nav-bottom">
            <ul class="nav navbar-nav">
              <li class="nav-item nav-title">Навигация</li>
              <li class="nav-item">
                <a class="nav-link" href="#">О нас</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Новости</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Служба поддержки</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Услуги</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm">
          <nav class="navbar nav-bottom">
            <ul class="nav navbar-nav">
              <li class="nav-item nav-title">О нас</li>
              <li class="nav-item">
                <a class="nav-link" href="#">О сервисе</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Наша команда</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Вакансии</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Инвесторы</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm">
          <nav class="navbar nav-bottom">
            <ul class="nav navbar-nav">
              <li class="nav-item nav-title">Служба поддержки</li>
              <li class="nav-item">
                <a class="nav-link" href="#">Соглашения</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Сообщества</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Связь с нами</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm pt-2">
          <ul>
            <li class="nav-title"><p>Подписка</p></li>
            <li><p class="nav-text">Получайте специальные предложения и новости сервиса</p></li>
            <li>
              <form>
                <div class="search">
                  <input type="text" placeholder="Email" name="e">
                  <input type="submit" value="">
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col">
          <hr>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <div class="row no-gutters">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm">
          <p class="nav-text">Copyright © 2018 Toxin отель. Все права зачищены.</p>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm col-socials">
          <img class="img-fluid socials" src="/assets/img/twitter.svg" alt="twitter">
          <img class="img-fluid socials" src="/assets/img/facebook.svg" alt="facebook">
          <img class="img-fluid socials" src="/assets/img/instagram.svg" alt="instagram">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerComponent'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils/vars";

.search {
  width: 230px; /* Ширина поля с кнопкой */
  border: 1px solid rgba(31, 32, 65, 0.25); /* Параметры рамки */
  min-height: 40px; /* Минимальная высота */
  border-radius: 4px;
  display: flex;
}
input[type="text"] {
  border: none; /* Убираем рамку */
  outline: none; /* Убираем свечение в Chrome и Safari */
  -webkit-appearance: none; /* Убираем рамку в Chrome и Safari */
  width: 190px; /* Ширина поля */
  vertical-align: middle; /* Выравнивание по середине */
  margin-left: 15px;
}
input[type="submit"] {
  width:40px; /* Ширина кнопки */
  height: 40px; /* Высота кнопки */
  border: none; /* Убираем рамку */
  background: url(/assets/img/arrow_forward.svg) no-repeat 50% 50%; /* Параметры фона */
  position: absolute;
  right: 10%;
}
input::placeholder {
  color: $darkShade25;
  font-size: $mainFontSize;
}
hr {
  margin: 0;
}
.container-fluid {
  padding: 0;
}
.container-footer {
  padding: 0 9.7%;
  padding-top: 100px;
}
.footer-top {
  padding-bottom: 100px;
  align-items: flex-start;
}
.footer-bottom {
  padding: 0 9.7%;
}
// .logo-bottom {
//   padding-bottom: 20px;
// }
.nav-bottom a {
  letter-spacing: 0;
  line-height: 17px;
}
.arrow-forward {
  position: absolute;
  top: 8px;
  right: 10px;
}
.nav-title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  color: $darkShade100;
}
.nav-text {
  font-size: $mainFontSize;
  line-height: $bodyLineHeight;
  color: $darkShade75;
  padding: {
    top: 26px;
    bottom: 26px;
  }
}
.col-socials {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 30px;
}
.socials {
  padding-top: 20px;
}
.socials:not(:last-child) {
  margin-right: 20px;
}
</style>