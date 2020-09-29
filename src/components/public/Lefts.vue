<template>
  <div class="Lefts">
    <div class="m_left">
      <div class="left_n">个人中心</div>
      <div class="left_m">
        <ul>
          <li><router-link :to="{name : 'User'}" style="cursor: pointer">个人信息</router-link></li>
          <li><router-link :to="{name : 'UserCollect'}" style="cursor: pointer">我的收藏</router-link></li>
          <li><router-link :to="{name : 'UserOrder'}" style="cursor: pointer">我的订单</router-link></li>
          <li><router-link :to="{name : 'UserAddress'}" style="cursor: pointer">收货地址</router-link></li>
        </ul>
      </div>
    </div>

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
    name: "Lefts"
  }
</script>
