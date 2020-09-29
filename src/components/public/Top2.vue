<template>
  <div class="Top2">
    <div class="m_top_bg">
      <div class="top">
        <div class="m_logo"><a href="Index.html"><img src="@/assets/static/images/logo1.png" /></a></div>
        <div class="m_search">
          <form>
            <input type="text" value="" class="m_ipt" />
            <input type="submit" value="搜索" class="m_btn" />
          </form>
          <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
        </div>
        <div class="i_car">
          <div class="car_t">购物车 [ <span>3</span> ]</div>
          <div class="car_bg">
            <!--Begin 购物车未登录 Begin-->
            <div class="un_login">还未登录！<a href="Login.html" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
            <!--End 购物车未登录 End-->
            <!--Begin 购物车已登录 Begin-->
            <ul class="cars">
              <li>
                <div class="img"><a href="#"><img src="@/assets/static/images/car1.jpg" width="58" height="58" /></a></div>
                <div class="name"><a href="#">法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只</a></div>
                <div class="price"><font color="#ff4e00">￥399</font> X1</div>
              </li>
              <li>
                <div class="img"><a href="#"><img src="@/assets/static/images/car2.jpg" width="58" height="58" /></a></div>
                <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
                <div class="price"><font color="#ff4e00">￥399</font> X1</div>
              </li>
              <li>
                <div class="img"><a href="#"><img src="@/assets/static/images/car2.jpg" width="58" height="58" /></a></div>
                <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
                <div class="price"><font color="#ff4e00">￥399</font> X1</div>
              </li>
            </ul>
            <div class="price_sum">共计&nbsp; <font color="#ff4e00">￥</font><span>1058</span></div>
            <div class="price_a"><router-link :to="{name : 'AddCar'}" style="cursor: pointer">去购物车结算</router-link></div>
            <!--End 购物车已登录 End-->
          </div>
        </div>
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
    name: "Top2.vuc"
  }
</script>
