<template>
  <div id="Product">

    <my-header></my-header>
    <my-top></my-top>

    <div class="i_bg">
      <div class="postion">
        <span class="fl">全部 > 美妆个护 > 香水 > 迪奥 > 迪奥真我香水</span>
      </div>
      <div class="content">

        <div id="tsShopContainer">
          <div id="tsImgS"><a href="@/assets/static/images/p_big.jpg" title="@/assets/static/images" class="MagicZoom" id="MagicZoom"><img src="@/assets/static/images/p_big.jpg" width="390" height="390" /></a></div>
          <div id="tsPicContainer">
            <div id="tsImgSArrL" onclick="tsScrollArrLeft()"></div>
<!--            <div id="tsImgSCon">-->
<!--              <ul>-->
<!--                <li onclick="showPic(0)" rel="MagicZoom" class="tsSelectImg"><img src="@/assets/static/images/ps1.jpg" tsImgS="@/assets/static/images/ps1.jpg" width="79" height="79" /></li>-->
<!--                <li onclick="showPic(1)" rel="MagicZoom"><img src="@/assets/static/images/ps2.jpg" tsImgS="@/assets/static/images/ps2.jpg" width="79" height="79" /></li>-->
<!--                <li onclick="showPic(2)" rel="MagicZoom"><img src="@/assets/static/images/ps3.jpg" tsImgS="@/assets/static/images/ps3.jpg" width="79" height="79" /></li>-->
<!--                <li onclick="showPic(3)" rel="MagicZoom"><img src="@/assets/static/images/ps4.jpg" tsImgS="@/assets/static/images/ps4.jpg" width="79" height="79" /></li>-->
<!--                <li onclick="showPic(4)" rel="MagicZoom"><img src="@/assets/static/images/ps1.jpg" tsImgS="@/assets/static/images/ps1.jpg" width="79" height="79" /></li>-->
<!--                <li onclick="showPic(5)" rel="MagicZoom"><img src="@/assets/static/images/ps2.jpg" tsImgS="@/assets/static/images/ps2.jpg" width="79" height="79" /></li>-->
<!--                <li onclick="showPic(6)" rel="MagicZoom"><img src="@/assets/static/images/ps3.jpg" tsImgS="@/assets/static/images/ps3.jpg" width="79" height="79" /></li>-->
<!--                <li onclick="showPic(7)" rel="MagicZoom"><img src="@/assets/static/images/ps4.jpg" tsImgS="@/assets/static/images/ps4.jpg" width="79" height="79" /></li>-->
<!--              </ul>-->
<!--            </div>-->
            <div id="tsImgSArrR" onclick="tsScrollArrRight()"></div>
          </div>
        </div>

        <div class="pro_des">
          <div class="des_name">
            <p>Dior/迪奥 真我香水EDP 克丽丝汀迪奥 全新 30ml</p>
            “开业巨惠，北京专柜直供”，不光低价，“真”才靠谱！
          </div>
          <div class="des_price">
            本店价格：<b>￥589</b><br />
            消费积分：<span>28R</span>
          </div>
          <div class="des_choice">
            <span class="fl">型号选择：</span>
            <ul>
              <li class="checked">30ml<div class="ch_img"></div></li>
              <li>50ml<div class="ch_img"></div></li>
              <li>100ml<div class="ch_img"></div></li>
            </ul>
          </div>
          <div class="des_choice">
            <span class="fl">颜色选择：</span>
            <ul>
              <li>红色<div class="ch_img"></div></li>
              <li class="checked">白色<div class="ch_img"></div></li>
              <li>黑色<div class="ch_img"></div></li>
            </ul>
          </div>
          <div class="des_share">
            <div class="d_sh">
              分享
              <div class="d_sh_bg">
                <a href="#"><img src="@/assets/static/images/sh_1.gif" /></a>
                <a href="#"><img src="@/assets/static/images/sh_2.gif" /></a>
                <a href="#"><img src="@/assets/static/images/sh_3.gif" /></a>
                <a href="#"><img src="@/assets/static/images/sh_4.gif" /></a>
                <a href="#"><img src="@/assets/static/images/sh_5.gif" /></a>
              </div>
            </div>
            <div class="d_care"><a onclick="ShowDiv('MyDiv','fade')">关注商品</a></div>
          </div>
          <div class="des_join">
            <div class="j_nums">
              <input type="text" value="1" name="" class="n_ipt" />
              <input type="button" value="" onclick="addUpdate(jq(this));" class="n_btn_1" />
              <input type="button" value="" onclick="jianUpdate(jq(this));" class="n_btn_2" />
            </div>
            <span class="fl"><router-link :to="{name : 'AddCar'}" style="cursor: pointer" onclick="ShowDiv_1('MyDiv1','fade1')"><img src="@/assets/static/images/j_car.png" /></router-link></span>
          </div>
        </div>

        <div class="s_brand">
          <div class="s_brand_img"><img src="@/assets/static/images/sbrand.jpg" width="188" height="132" /></div>
          <div class="s_brand_c"><a href="#">进入品牌专区</a></div>
        </div>


      </div>
      <div class="content mar_20">
        <div class="l_history">
          <div class="fav_t">用户还喜欢</div>
          <ul>
            <li>
              <div class="img"><a href="#"><img src="@/assets/static/images/his_1.jpg" width="185" height="162" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <font>￥<span>368.00</span></font> &nbsp; 18R
              </div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="@/assets/static/images/his_2.jpg" width="185" height="162" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <font>￥<span>768.00</span></font> &nbsp; 18R
              </div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="@/assets/static/images/his_3.jpg" width="185" height="162" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <font>￥<span>680.00</span></font> &nbsp; 18R
              </div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="@/assets/static/images/his_4.jpg" width="185" height="162" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <font>￥<span>368.00</span></font> &nbsp; 18R
              </div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="@/assets/static/images/his_5.jpg" width="185" height="162" /></a></div>
              <div class="name"><a href="#">Dior/迪奥香水2件套装</a></div>
              <div class="price">
                <font>￥<span>368.00</span></font> &nbsp; 18R
              </div>
            </li>
          </ul>
        </div>
        <div class="l_list">

          <div class="des_border" id="p_details">
            <div class="des_t">商品详情</div>
            <div class="des_con">
              <table border="0" align="center" style="width:745px; font-size:14px; font-family:'宋体';" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="265"><img src="@/assets/static/images/de1.jpg" width="206" height="412" /></td>
                  <td>
                    <b>迪奥真我香水(Q版)</b><br />
                    【商品规格】：5ml<br />
                    【商品质地】：液体<br />
                    【商品日期】：与专柜同步更新<br />
                    【商品产地】：法国<br />
                    【商品包装】：无外盒 无塑封<br />
                    【商品香调】：花束花香调<br />
                    【适用人群】：适合女性（都市白领，性感，有女人味的成熟女性）<br />
                  </td>
                </tr>
              </table>

            </div>
          </div>

          <div class="des_border" id="p_comment">
            <div class="des_t">商品评论</div>

            <table border="0" class="jud_tab" cellspacing="0" cellpadding="0">
              <tr>
                <td width="175" class="jud_per">
                  <p>80.0%</p>好评度
                </td>
                <td width="300">
                  <table border="0" style="width:100%;" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="90">好评<font color="#999999">（80%）</font></td>
                      <td><img src="@/assets/static/images/pl.gif" align="absmiddle" /></td>
                    </tr>
                    <tr>
                      <td>中评<font color="#999999">（20%）</font></td>
                      <td><img src="@/assets/static/images/pl.gif" align="absmiddle" /></td>
                    </tr>
                    <tr>
                      <td>差评<font color="#999999">（0%）</font></td>
                      <td><img src="@/assets/static/images/pl.gif" align="absmiddle" /></td>
                    </tr>
                  </table>
                </td>
                <td width="185" class="jud_bg">
                  购买过雅诗兰黛第六代特润精华露50ml的顾客，在收到商品才可以对该商品发表评论
                </td>
                <td class="jud_bg">您可对已购买商品进行评价<br /><a href="#"><img src="@/assets/static/images/btn_jud.gif" /></a></td>
              </tr>
            </table>



            <table border="0" class="jud_list" style="width:100%; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr valign="top">
                <td width="160"><img src="@/assets/static/images/peo1.jpg" width="20" height="20" align="absmiddle" />&nbsp;向死而生</td>
                <td width="180">
                  颜色分类：<font color="#999999">粉色</font> <br />
                  型号：<font color="#999999">50ml</font>
                </td>
                <td>
                  产品很好，香味很喜欢，必须给赞。 <br />
                  <font color="#999999">2015-09-24</font>
                </td>
              </tr>
              <tr valign="top">
                <td width="160"><img src="@/assets/static/images/peo2.jpg" width="20" height="20" align="absmiddle" />&nbsp;就是这么想的</td>
                <td width="180">
                  颜色分类：<font color="#999999">粉色</font> <br />
                  型号：<font color="#999999">50ml</font>
                </td>
                <td>
                  送朋友，她很喜欢，大爱。 <br />
                  <font color="#999999">2015-09-24</font>
                </td>
              </tr>
              <tr valign="top">
                <td width="160"><img src="@/assets/static/images/peo3.jpg" width="20" height="20" align="absmiddle" />&nbsp;墨镜墨镜</td>
                <td width="180">
                  颜色分类：<font color="#999999">粉色</font> <br />
                  型号：<font color="#999999">50ml</font>
                </td>
                <td>
                  大家都说不错<br />
                  <font color="#999999">2015-09-24</font>
                </td>
              </tr>
              <tr valign="top">
                <td width="160"><img src="@/assets/static/images/peo4.jpg" width="20" height="20" align="absmiddle" />&nbsp;那*****洋 <br /><font color="#999999">（匿名用户）</font></td>
                <td width="180">
                  颜色分类：<font color="#999999">粉色</font> <br />
                  型号：<font color="#999999">50ml</font>
                </td>
                <td>
                  下次还会来买，推荐。<br />
                  <font color="#999999">2015-09-24</font>
                </td>
              </tr>
            </table>



            <div class="pages">
              <a href="#" class="p_pre">上一页</a><a href="#" class="cur">1</a><a href="#">2</a><a href="#">3</a>...<a href="#">20</a><a href="#" class="p_pre">下一页</a>
            </div>

          </div>


        </div>
      </div>


      <!--Begin 弹出层-收藏成功 Begin-->
      <div id="fade" class="black_overlay"></div>
      <div id="MyDiv" class="white_content">
        <div class="white_d">
          <div class="notice_t">
            <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="@/assets/static/images/close.gif" /></span>
          </div>
          <div class="notice_c">

            <table border="0" align="center" style="margin-top:;" cellspacing="0" cellpadding="0">
              <tr valign="top">
                <td width="40"><img src="@/assets/static/images/suc.png" /></td>
                <td>
                  <span style="color:#3e3e3e; font-size:18px; font-weight:bold;">您已成功收藏该商品</span><br />
                  <a href="#">查看我的关注 >></a>
                </td>
              </tr>
              <tr height="50" valign="bottom">
                <td>&nbsp;</td>
                <td><a href="#" class="b_sure">确定</a></td>
              </tr>
            </table>

          </div>
        </div>
      </div>
      <!--End 弹出层-收藏成功 End-->


      <!--Begin 弹出层-加入购物车 Begin-->
      <div id="fade1" class="black_overlay"></div>
      <div id="MyDiv1" class="white_content">
        <div class="white_d">
          <div class="notice_t">
            <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv_1('MyDiv1','fade1')"><img src="@/assets/static/images/close.gif" /></span>
          </div>
          <div class="notice_c">

            <table border="0" align="center" style="margin-top:;" cellspacing="0" cellpadding="0">
              <tr valign="top">
                <td width="40"><img src="@/assets/static/images/suc.png" /></td>
                <td>
                  <span style="color:#3e3e3e; font-size:18px; font-weight:bold;">宝贝已成功添加到购物车</span><br />
                  购物车共有1种宝贝（3件） &nbsp; &nbsp; 合计：1120元
                </td>
              </tr>
              <tr height="50" valign="bottom">
                <td>&nbsp;</td>
                <td><a href="#" class="b_sure">去购物车结算</a><a href="#" class="b_buy">继续购物</a></td>
              </tr>
            </table>

          </div>
        </div>
      </div>
      <!--End 弹出层-加入购物车 End-->
    </div>

    <my-footer></my-footer>


  </div>

  </div>
</template>


<script>



  import MyTop from "@/components/public/Top";
  import MyHeader from "@/components/public/Header";
  import MyFooter from "@/components/public/Footer";

  export default {
    name: 'Product',
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



