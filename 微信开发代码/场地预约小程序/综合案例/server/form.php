<?php
$openid=$_POST['openid'];
$place=$_POST['place'];
$name=$_POST['name'];
$date1=$_POST['date1'];
$date2=$_POST['date2'];
$appid='';//小程序appid
$secret='';//秘钥
header("content-type:text/html;charset=utf-8");
 function http_get($url, $data = null) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
};
function getToken($url){
     $res = http_get($url);//获取接口调用凭证
     $access_token=json_decode($res)->access_token;
     return $access_token;
};
$arr = array(
    "touser"=>$openid,
    "template_id"=>'Kvuv7sAWJOIQ3IwUj6PBBAU6Tuu_3XJJQ0fE5llN2Zk',
    "data"=>array(
        "phrase1"=>array(
            "value"=>"已通过"
        ),
        "thing2"=>array(
            "value"=>$place
        ),
        "date3"=>array(
            "value"=>$date1
        ),
         "date4"=>array(
            "value"=>$date2
        ),
        "name5"=>array(
            "value"=>$name
        )
    )
);
$access_token=getToken("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$secret);
$url="https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=".$access_token;
$data=json_encode($arr);
$res=http_get($url,$data);
echo $res;
?>