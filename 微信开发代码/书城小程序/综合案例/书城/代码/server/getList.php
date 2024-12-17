<?php
$list=array();
$con=mysqli_connect("www.zhonghuiqh.com","wx_test","3d3jNmXy7nn8mJR5","wx_test"); 
if (mysqli_connect_errno($con)) 
{ 
    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} 
//设置字符集
 mysqli_set_charset($con,"utf8");
//执行sql语句，并获取结果集
$arr=mysqli_query($con,'select * from book');
foreach ($arr as $val){
    array_push($list,$val);
}
echo json_encode($list);