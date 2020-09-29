<template>
  <div id="User">

    <my-header></my-header>
    <my-top2></my-top2>

    <div class="m_content">

      <my-lefts></my-lefts>

      <div class="m_right">
        <p></p>
        <div class="mem_tit">
          <span class="fr" style="font-size:12px; color:#55555; font-family:'宋体'; margin-top:5px;">共发现4件</span>我的收藏
        </div>
        <table border="0" class="order_tab" style="width:930px;" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" width="420">商品名称</td>
            <td align="center" width="180">价格</td>
            <td align="center" width="270">操作</td>
          </tr>
          <tr>
            <td style="font-family:'宋体';">
              <div class="sm_img"><img src="@/assets/static/images/simg.jpg" width="48" height="48" /></div>法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只
            </td>
            <td align="center">￥456.00</td>
            <td align="center"><a href="#">关注</a>&nbsp; &nbsp; <a href="#" style="color:#ff4e00;">加入购物车</a>&nbsp; &nbsp; <a href="#">删除</a></td>
          </tr>
          <tr>
            <td style="font-family:'宋体';">
              <div class="sm_img"><img src="@/assets/static/images/simg.jpg" width="48" height="48" /></div>法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只
            </td>
            <td align="center">￥456.00</td>
            <td align="center"><a href="#">关注</a>&nbsp; &nbsp; <a href="#" style="color:#ff4e00;">加入购物车</a>&nbsp; &nbsp; <a href="#">删除</a></td>
          </tr>
          <tr>
            <td style="font-family:'宋体';">
              <div class="sm_img"><img src="@/assets/static/images/simg.jpg" width="48" height="48" /></div>法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只
            </td>
            <td align="center">￥456.00</td>
            <td align="center"><a href="#">关注</a>&nbsp; &nbsp; <a href="#" style="color:#ff4e00;">加入购物车</a>&nbsp; &nbsp; <a href="#">删除</a></td>
          </tr>
          <tr>
            <td style="font-family:'宋体';">
              <div class="sm_img"><img src="@/assets/static/images/simg.jpg" width="48" height="48" /></div>法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只
            </td>
            <td align="center">￥456.00</td>
            <td align="center"><a href="#">关注</a>&nbsp; &nbsp; <a href="#" style="color:#ff4e00;">加入购物车</a>&nbsp; &nbsp; <a href="#">删除</a></td>
          </tr>
        </table>



      </div>
    </div>>
    <my-footer></my-footer>


  </div>

  </div>
</template>


<script>


  import MyLefts from "@/components/public/Lefts";
  import MyTop2 from "@/components/public/Top2";
  import MyHeader from "@/components/public/Header";
  import MyFooter from "@/components/public/Footer";

  export default {
    name: 'User',
    data () {
      return {
      }
    },
    components : {
      MyFooter : MyFooter,
      MyHeader : MyHeader,
      MyTop2 : MyTop2,
      MyLefts : MyLefts,

    },

  }
</script>



