<template>
  <div class="Header">
    <!--Begin Header Begin-->
    <div class="soubg">
      <div class="sou">
        <span class="fr">
        	<span class="fl">
            你好，请<router-link :to="{name : 'Login'}" style="cursor: pointer">登录</router-link>&nbsp;|&nbsp;
            <router-link :to="{name : 'Reg'}" style="cursor: pointer">注册</router-link>&nbsp;|&nbsp;
            <router-link :to="{name : 'User'}" style="cursor: pointer">个人中心</router-link>&nbsp;|
          </span>
            <span class="s_sh"><a href="#" class="sh1">新浪</a><a href="#" class="sh2">微信</a></span>
            <span class="fr">|&nbsp;<a href="#">手机版&nbsp;<img src="@/assets/static/images/s_tel.png" align="absmiddle" /></a></span>
        </span>
      </div>
    </div>
    <!--End Header End-->
  </div>
</template>

<script>

  import "@/assets/static/css/style.css"
  import "@/assets/static/js/jquery-1.11.1.min_044d0927.js"
  import "@/assets/static/js/jquery.bxslider_e88acd1b.js"
  import "@/assets/static/js/jquery-1.8.2.min.js"
  import "@/assets/static/js/menu.js"
  import "@/assets/static/js/select.js"
  import "@/assets/static/js/lrscroll.js"
  import "@/assets/static/js/iban.js"
  import "@/assets/static/js/fban.js"
  import "@/assets/static/js/f_ban.js"
  import "@/assets/static/js/mban.js"
  import "@/assets/static/js/bban.js"
  import "@/assets/static/js/hban.js"
  import "@/assets/static/js/tban.js"
  import "@/assets/static/js/lrscroll_1.js"

  export default {
    name: "Header.vuc"
  }
</script>
