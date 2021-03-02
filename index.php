<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="dist/app.css">
  </head>
  <body>

  <?php require_once __DIR__ . '/database/database.php'?>;


    <?php foreach ($dischi as $disco) { ?>
    <span><?php echo $disco["title"] ?></span>

    <?php } ?>




  </body>
</html>
