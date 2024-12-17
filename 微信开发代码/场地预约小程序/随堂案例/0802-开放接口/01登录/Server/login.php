<?php
 $code=$_GET['code'];
 $userName=$_GET['userName'];
 $passWord=$_GET['passWord'];
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
}

 if($userName=="admin"&&$passWord=="admin"){
     $url="https://api.weixin.qq.com/sns/jscode2session?appid=xxxxxxx&secret=xxxxxxx&js_code=".$code."&grant_type=authorization_code"; //appId、appSecret
     $res = http_get($url);
     echo $res;//实际开发避免将获取到的登录信息发送到小程序端
    
 }else{
      return;
 }
?>