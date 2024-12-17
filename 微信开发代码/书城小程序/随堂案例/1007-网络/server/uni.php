<?php
$data = array(
    '小明'=> array('name'=>'小明','chinese'=>'89','math'=>'95','english'=>'88'),
    '小红'=> array('name'=>'小红','chinese'=>'91','math'=>'86','english'=>'90'),
    '张三'=> array('name'=>'张三','chinese'=>'80','math'=>'100','english'=>'88'),
    '李四'=> array('name'=>'李四','chinese'=>'91','math'=>'86','english'=>'99'),
    '小华'=> array('name'=>'小华','chinese'=>'89','math'=>'95','english'=>'100'),
    '刘能'=> array('name'=>'刘能','chinese'=>'59','math'=>'59','english'=>'59')
);
$name=$_GET['name'];
switch ($name) {
    case '小明':
        echo json_encode($data['小明']) ;
        // code...
        break;
    case '小红':
        echo json_encode($data['小红']) ;
        // code...
        break;
    case '张三':
        echo json_encode($data['张三']) ;
        // code...
        break;
    case '李四':
        echo json_encode($data['李四']) ;
        // code...
        break;
    case '小华':
        echo json_encode($data['小华']) ;
        // code...
        break;
    case '刘能':
        echo json_encode($data['刘能']) ;
        // code...
        break;
    default:
        // code...
        break;
}