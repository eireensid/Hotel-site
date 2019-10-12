<template>
  <header :style="shadowComputedStyle">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm logo">
          <img class="img-fluid" src="/assets/img/logo.png" alt="logo">
        </div>
        <div class="col-xl-9 col-lg-9 col-md-9 col-sm right-side">
          <nav class="navbar">
            <ul class="nav navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">О нас</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Услуги</a>
                <img class="arrow" src="/assets/img/expand_more.svg" alt="more">
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Вакансии</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Новости</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Соглашения</a>
                <img class="arrow" src="/assets/img/expand_more.svg" alt="more">
              </li>
            </ul>
          </nav>
          <div class="btn-group">
            <button class="button btn-white"><span>Войти</span></button>
            <button class="button btn-purple">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headerComponent',
  props: ['isShadow'],
  computed: {
    shadowComputedStyle () {
      let res = {}
      if (this.isShadow) {
        res.boxShadow = "0px 10px 20px rgba(31, 32, 65, 0.05)"
      }
      return res
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/utils/vars";

header {
  line-height: 70px;
  text-align: center;
  vertical-align: middle;
}

.container {
  padding-right: 0px;
  padding-left: 0px;
  margin: {
    right: 0;
    left: 0;
  }
}
.right-side {
  display: flex;
  justify-content: space-between;
  padding-left: 8.5%;
}
.logo {
  padding-left: 4%;
}
.navbar {
  padding: {
    right: 0;
    left: 0;
  }
}
.nav {
  display: flex;
  flex-direction: row;
}
.nav-item {
  display: flex;
  align-items: baseline;
}
.arrow {
  padding-left: 5px;
}

li {
  margin-right: 20px;
}

.btn-group {
  display: block;
}

.button {
  border-radius: 22px;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  padding: {
    top: 9px;
    bottom: 10px;
    right: 20px;
    left: 20px;
  }
  max-height: 35px;
}

.btn-white {
  background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
  border-radius: 22px;
  color: $purple;
  display: inline-block;
  padding: 2px;
  text-decoration: none;
  margin-right: 20px;
}

.btn-white span {
  background: #fff;
  display: block;
  padding: {
    top: 8px;
    bottom: 8px;
    right: 20px;
    left: 20px;
  }
  border-radius: 20px;
}

.btn-purple {
  color: white;
  background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
}

@media (max-width: 1280px) {
  .btn-purple {
    margin-right: 10px;
  }
}
@media (max-width: 1156px) {
  .btn-purple {
    margin-top: 0;
  }
  .btn-white {
    margin-right: 0;
  }
}
@media (max-width: 1126px) {
  .btn-purple {
    margin-right: 5px;
  }
}
@media (max-width: 1112px) {
  .button {
    font-size: $lessFontSize;
  }
}
</style>