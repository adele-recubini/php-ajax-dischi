<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
     <script src="https://cdn.jsdelivr.net/npm/vue"></script>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
     <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/app.css">
  </head>
  <body>

  <?php require_once __DIR__ . '/database/database.php'?>

  <header>
  
      <img src="img/logo.png" alt="">

  </header>



  <!-- sezione contenitore dischi -->
  <div class="cds-container">
    <?php foreach ($dischi as $disco) { ?>
    <div class="cd">

     <img src = "<?php echo $disco["poster"] ?>">
     <h3><?php echo "titolo:" . $disco["title"] ?></h3>
     <h4><?php echo "autore:" . $disco["author"] ?></h4>
     <h6><?php echo "anno:" . $disco["year"] ?></h6>
    <?php } ?>
    </div>
  </div>







  </body>
</html>
