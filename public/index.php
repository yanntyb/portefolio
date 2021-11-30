<?php
require '../vendor/autoload.php';

use Yanntyb\App\Controller\HomeController;

if(isset($_GET["route"])){
    switch($_GET["route"]){
        case "home":
            (new HomeController())->home();
            break;
        default:
            (new HomeController())->home();

    }
}
else{
    (new HomeController())->home();
}