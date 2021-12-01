<?php
if(isset($include["dir"])){
    $dir = $include["dir"];
}
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/build/css/reset.css">
    <title><?= ucfirst($title) ?></title>
</head>
<body>
    <?php require("../View/_partials/navbar.php") ?>
    <?= $html ?>
</body>
</html>

