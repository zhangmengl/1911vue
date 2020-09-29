<template>
  <div id="Order">

    <my-header></my-header>
    <my-top></my-top>

    <div class="content mar_20">
      <img src="@/assets/static/images/img2.jpg" />
    </div>

    <!--Begin 第二步：确认订单信息 Begin -->
    <div class="content mar_20">
      <div class="two_bg">
        <div class="two_t">
          <span class="fr"><a href="#">修改</a></span>商品列表
        </div>
        <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
          <tr>
            <td class="car_th" width="550">商品名称</td>
            <td class="car_th" width="140">属性</td>
            <td class="car_th" width="150">购买数量</td>
            <td class="car_th" width="130">小计</td>
            <td class="car_th" width="140">返还积分</td>
          </tr>
          <tr>
            <td>
              <div class="c_s_img"><img src="@/assets/static/images/c_1.jpg" width="73" height="73" /></div>
              Rio 锐澳 水蜜桃味白兰地鸡尾酒（预调酒） 275ml
            </td>
            <td align="center">颜色：灰色</td>
            <td align="center">1</td>
            <td align="center" style="color:#ff4e00;">￥620.00</td>
            <td align="center">26R</td>
          </tr>
          <tr class="car_tr">
            <td>
              <div class="c_s_img"><img src="@/assets/static/images/c_2.jpg" width="73" height="73" /></div>
              Rio 锐澳 水蜜桃味白兰地鸡尾酒（预调酒） 275ml
            </td>
            <td align="center">颜色：灰色</td>
            <td align="center">1</td>
            <td align="center" style="color:#ff4e00;">￥620.00</td>
            <td align="center">26R</td>
          </tr>
          <tr>
            <td>
              <div class="c_s_img"><img src="@/assets/static/images/c_3.jpg" width="73" height="73" /></div>
              Rio 锐澳 水蜜桃味白兰地鸡尾酒（预调酒） 275ml
            </td>
            <td align="center">颜色：灰色</td>
            <td align="center">1</td>
            <td align="center" style="color:#ff4e00;">￥620.00</td>
            <td align="center">26R</td>
          </tr>
          <tr>
            <td colspan="5" align="right" style="font-family:'Microsoft YaHei';">
              商品总价：￥1899.00 ； 返还积分 56R
            </td>
          </tr>
        </table>

        <div class="two_t">
          <span class="fr"><a href="#">修改</a></span>收货人信息
        </div>
        <table border="0" class="peo_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
          <tr>
            <td class="p_td" width="160">商品名称</td>
            <td width="395">海贼王</td>
            <td class="p_td" width="160">电子邮件</td>
            <td width="395">12345678@qq.com</td>
          </tr>
          <tr>
            <td class="p_td">详细信息</td>
            <td>四川省成都市武侯区</td>
            <td class="p_td">邮政编码</td>
            <td>6011111</td>
          </tr>
          <tr>
            <td class="p_td">电话</td>
            <td></td>
            <td class="p_td">手机</td>
            <td>18600002222</td>
          </tr>
          <tr>
            <td class="p_td">标志建筑</td>
            <td></td>
            <td class="p_td">最佳送货时间</td>
            <td></td>
          </tr>
        </table>

        <div class="two_t">
          支付方式
        </div>
        <ul class="pay">
          <li class="checked">余额支付<div class="ch_img"></div></li>
          <li>银行亏款/转账<div class="ch_img"></div></li>
          <li>货到付款<div class="ch_img"></div></li>
          <li>支付宝<div class="ch_img"></div></li>
        </ul>

        <table border="0" style="width:900px; margin-top:20px;" cellspacing="0" cellpadding="0">
          <tr height="70">
            <td align="right">
              <b style="font-size:14px;">应付款金额：<span style="font-size:22px; color:#ff4e00;">￥2899</span></b>
            </td>
          </tr>
          <tr height="70">
            <td align="right"><router-link :to="{name : 'OrderSuccess'}" style="cursor: pointer"><img src="@/assets/static/images/btn_sure.gif" /></router-link></td>
          </tr>
        </table>



      </div>
    </div>
    <!--End 第二步：确认订单信息 End-->

    <my-footer></my-footer>


  </div>

  </div>
</template>


<script>



  import MyTop from "@/components/public/Top";
  import MyHeader from "@/components/public/Header";
  import MyFooter from "@/components/public/Footer";

  export default {
    name: 'Order',
    data () {
      return {
      }
    },
    components : {
      MyFooter : MyFooter,
      MyHeader : MyHeader,
      MyTop : MyTop,
    },

  }
</script>



