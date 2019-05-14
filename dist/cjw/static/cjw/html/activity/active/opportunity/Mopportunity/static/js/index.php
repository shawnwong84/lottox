<?php

//include_once($_SERVER['DOCUMENT_ROOT']."/../include/config.php");

?>

<!doctype html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>ddd - 幸运大转盘 好运常相伴</title>
    <link rel="stylesheet" href="static/css/basic.css"/>
    <link rel="stylesheet" href="static/css/rotate.css"/>
    <link rel="stylesheet" href="./static/css/default.css">
    <script src="./static/js/artDialog.js" type="text/javascript"></script>
    <script type="text/javascript" src="./static/js/jquery.min.js"></script>
    <script type="text/javascript" src="./static/js/rotate.js"></script>
    <script src="static/js/winningList.js"></script>
</head>
<body style="overflow:scroll;overflow-x:hidden">
<div class="" style="display: none; position: absolute;">
    <div class="aui_outer">
        <table class="aui_border">
            <tbody>
            <tr>
                <td class="aui_nw"></td>
                <td class="aui_n"></td>
                <td class="aui_ne"></td>
            </tr>
            <tr>
                <td class="aui_w"></td>
                <td class="aui_c">
                    <div class="aui_inner">
                        <table class="aui_dialog">
                            <tbody>
                            <tr>
                                <td colspan="2" class="aui_header">
                                    <div class="aui_titleBar">
                                        <div class="aui_title" style="cursor: move; display: block;"></div>
                                        <a class="aui_close" href="javascript:/*artDialog*/;"
                                           style="display: block;">×</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="aui_icon" style="display: none;">
                                    <div class="aui_iconBg" style="background: none;"></div>
                                </td>
                                <td class="aui_main" style="width: auto; height: auto;">
                                    <div class="aui_content" style="padding: 20px 25px;"></div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="aui_footer">
                                    <div class="aui_buttons"></div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td class="aui_e"></td>
            </tr>
            <tr>
                <td class="aui_sw"></td>
                <td class="aui_s"></td>
                <td class="aui_se" style="cursor: se-resize;"></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="" style="display: none; position: absolute;">
    <div class="aui_outer">
        <table class="aui_border">
            <tbody>
            <tr>
                <td class="aui_nw">
                </td>
                <td class="aui_n">
                </td>
                <td class="aui_ne">
                </td>
            </tr>
            <tr>
                <td class="aui_w">
                </td>
                <td class="aui_c">
                    <div class="aui_inner">
                        <table class="aui_dialog">
                            <tbody>
                            <tr>
                                <td colspan="2" class="aui_header">
                                    <div class="aui_titleBar">
                                        <div class="aui_title" style="cursor: move; display: block;">
                                        </div>
                                        <a class="aui_close" href="javascript:/*artDialog*/;"
                                           style="display: block;">×</a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="aui_icon" style="display: none;">
                                    <div class="aui_iconBg"
                                         style="background-image: none; background-position: initial initial; background-repeat: initial initial;">
                                    </div>
                                </td>
                                <td class="aui_main" style="width: auto; height: auto;">
                                    <div class="aui_content" style="padding: 20px 25px;">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="aui_footer">
                                    <div class="aui_buttons" style="display: none;">
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td class="aui_e">
                </td>
            </tr>
            <tr>
                <td class="aui_sw">
                </td>
                <td class="aui_s">
                </td>
                <td class="aui_se" style="cursor: se-resize;">
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="" style="left: 0px; top: 0px; visibility: hidden; position: absolute;">
    <table class="ui_border">
        <tbody>
        <tr>
            <td class="ui_lt">
            </td>
            <td class="ui_t">
            </td>
            <td class="ui_rt">
            </td>
        </tr>
        <tr>
            <td class="ui_l">
            </td>
            <td class="ui_c">
                <div class="ui_inner">
                    <table class="ui_dialog">
                        <tbody>
                        <tr>
                            <td colspan="2">
                                <div class="ui_title_bar">
                                    <div class="ui_title" unselectable="on" style="cursor: move;">
                                    </div>
                                    <div class="ui_title_buttons">
                                        <a class="ui_min" href="javascript:void(0);" title="最小化"
                                           style="display: inline-block;"><b class="ui_min_b"></b></a>
                                        <a class="ui_max" href="javascript:void(0);" title="最大化" style="display: inline-block;">
                                            <b class="ui_max_b"></b></a>
                                        <a class="ui_res" href="javascript:void(0);"
                                                                        title="还原">
                                            <b class="ui_res_b"></b>
                                            <b class="ui_res_t"></b></a>
                                        <a class="ui_close" href="javascript:void(0);"
                                                                        title="关闭(esc键)" style="display: inline-block;">×</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="ui_icon" style="display: none;">
                            </td>
                            <td class="ui_main" style="width: auto; height: auto;">
                                <div class="ui_content" style="padding: 10px;">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="ui_buttons" style="display: none;">
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </td>
            <td class="ui_r">
            </td>
        </tr>
        <tr>
            <td class="ui_lb">
            </td>
            <td class="ui_b">
            </td>
            <td class="ui_rb" style="cursor: se-resize;">
            </td>
        </tr>
        </tbody>
    </table>
</div>
<span id="dzp_model" style=" position:absolute; top:220px"></span><span id="dzp_rules"
                                                                        style=" position:absolute; top:820px"></span>
<div id="pin2"
     style="height: 80px; background-color: rgba(30, 6, 8, 0.2); width: 100%; z-index: 9999; position: fixed; left: 0px; top: 0px;"
     class="Zebra_Pin">

    <div style="width:965px;margin:0 auto;">
        <div style="width:266px;height:74px;float:left; margin-left:30px;margin-top:5px">
            <img src="./static/img/logo.png" style="width:266px;height:74px;">
        </div>
        <ul class="menu" style="margin-top:20px">
            <li class="menu_li"><a href="" target="_blank">游戏官网</a></li>
            <li class="menu_li"><a href="">在线客服</a></li>
            <li class="menu_li"><a href="#dzp_model">抽奖转盘</a></li>
            <li class="menu_li"><a href="#dzp_rules">抽奖规则</a></li>
            <li class="menu_li winning_check"><a >中奖查询</a></li>
        </ul>
    </div>
</div>
<div style="background-color:#850001;">
    <div style="padding-top:30px; background:url(./static/img/zpbg.png) top center no-repeat;">
        <div style="height:260px;">
        </div>
        <div style="width:965px; height:590px;margin:0 auto;border:0px solid #fff;position: relative">
            <img src="static/img/logo.png" style="position: absolute;top: 150px;left: 90px">
            <div style="width:400px;float:left; margin-left:50px; margin-top:265px;">
                <div id="msg1"
                     style="overflow:hidden; width:350px; height:95px; margin-left:80px;text-align:left;color:#fff;">
                    <p>
                        当日有效投注达到5000以上可抽奖1次<br>
                        当日有效投注达到20000以上可抽奖2次<br>
                        当日有效投注达到50000以上可抽奖3次
                    </p>
                    <p>
                        抽奖前请仔细阅读”抽奖规则“
                    </p>
                </div>
                <div id="msg2" style="height:70px;">
                </div>
                <div id="dem" style="overflow:hidden; width:300px; height:130px; text-align:left;margin-left:87px;">
                    <div id="dem1" style="text-align:left">
                        <table id="lottery_winners_data" width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div style="float:right; width:480px; margin-right:30px; margin-top:10px">
                <!-- <div class="ly-plate">
                    <object type="application/x-shockwave-flash" id="ID_swf" name="ID_swf" data="./css/Roulette.swf" width="470" height="470" style="visibility: visible;"><param name="wmode" value="transparent"><param name="allowScriptAccess" value="always"><param name="flashvars" value="config=config.xml&onStart=onRouletteStart&onStop=onRouletteStop"></object>
                </div> -->
                <div class="ly-plate">
                    <div class="rotate-bg">
                        <img id="dzp_img" class="route_infinite" src="./static/img/back.png">
                    </div>

                    <div class="lottery-star">
                        <div id="lottery_img" style="z-index:1;position:absolute;left:32px;top:45px;display:none">
                            <img id="lotteryLine" src="./static/img/line.png"
                                 style="width:120px;height:120px;cursor: pointer;">
                        </div>
                    </div>
                    <button class="lotteryBtn_group" >
                        <img src="./static/img/pointer.png"  id="lotteryBtn"
                             style="position: absolute; z-index: 1; width: 182px; height: 182px; margin-left: 0px; margin-top: 0px; overflow: hidden;">
                    </button>
                </div>
                <div class="winning_check" style="height:55px;margin-top:30px; text-align:center;">
                    <a ><img src="./static/img/button1.png" width="245" height="55"></a>
                </div>
            </div>
        </div>
    </div>
    <div style="width:962px;margin:0 auto;background:url(./static/img/cj2.jpg) top center repeat-y;">
        <div style="background:url(./static/img/cj1.jpg) top center no-repeat;height:94px;">
        </div>
        <div style=" line-height:16px; color:#fff; font-size:14px;background:url(./static/img/cj2.jpg) top center repeat-y;">
            <div style="margin:0px 40px 0px 40px;">
                <p>
                    1、北京时间12:00到次日12:00，凡在ddd有效投注超过5000元以上均可参与抽奖，百分百中奖最高奖金888元。有效投注达到5000以上获一次抽奖资格，打码20000以上获两次抽奖资格，有效投注50000以上获三次抽奖资格！百分百中奖，最高奖金888元，千万巨资回馈幸运玩家！</p>
                <p>2、当日的打码计算周期采用美东时间进行计算，即美东时间每天中午12点至隔天中午12点；</p>
                <p>3、如果您的当日打码达到抽奖条件，即可在隔天（第二天的北京时间中午15:00）后开始抽奖，且需在当天完成抽奖，否则视为放弃活动资格；</p>
                <p>4、每位会员每个IP当日累计抽奖次数最多为3次，如发现会员同一个IP下注册多个帐号进行投注抽奖，公司有权拒绝赠送其彩金并做帐号冻结处理，保证正常玩家的利益；</p>
                <p>
                    5、获得“现金筹码”的1倍流水才能出款，获得“现金筹码”的会员无需申请，系统将在24小时内自动添加到您的会员帐号内，请耐心等待；（注：当会员抽取“现金筹码”奖项，如若需放弃请联系在线客服进行处理，否则将视为您同意抽奖条件。)</p>
                <p>6、此转盘活动为【ddd】系统程序自动运行，获奖的概率完全遵循力学及自然概率，不涉及任何人工操作，抽奖结果以系统判定为准，不得争议。</p>
                <p style="color:#ffd400; font-weight:bold; font-size:16px">
                    活动声明：
                </p>
                <p>1、所有红利为随机派送, 如系统发生一些不可预测超出本站控制之外的技术错误, 或人为不可控制的因素, 则ddd保留最终处理权；</p>
                <p>2、玩家不可以使用多帐号参加本次活动，凡同一IP地址、同一姓名、同一银行帐号，同一联系方式，同一邮箱、同一电脑均视为同一帐号，“ddd”在会员重复申请会员帐号时，保留取消、收回会员相关优惠 ；</p>
                <p>3、无论是个人或团体，如有任何威胁、滥用或使用不诚实方式套利的行为，经“ddd”风险部门审核，公司有权取消该会员所有优惠；</p>
                <p>4、本活动最终解释权归属“ddd”所有，并保留修改以上条款的最终权利。</p>
            </div>
        </div>
        <div style="background:url(./static/img/cj3.jpg) top center no-repeat;height:60px;">
        </div>
    </div>
    <div style="">
        <div style="width:965px; height:80px; margin:0 auto; color:#747474; text-align:center;">
            <div style="text-align:center;">
                <br>
                <span style="color:#a9a9a9">Copyright © <span style="color:#ffd400; font-weight:bold;">ddd</span> Reserved</span><br>
            </div>
        </div>
    </div>
    <span id="sounddl" class="mp3"></span>
    <embed src="./static/mp3/xinshidai.mp3" loop="true" autostart="true" name="bgss" width="0" height="0">
</div>
<div class="actGotop">
    <a href="javascript:;" title="返回顶部"></a>
</div>
</body>
</html>
