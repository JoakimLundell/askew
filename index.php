<?php
require_once '/path/to/lib/Twig/Autoloader.php';
Twig_Autoloader::register();
?>

<!DOCTYPE html>
<html lang="sv">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>askew.se</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
  <link href="//fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" type="text/css">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="dist/css/main.min.css">
  {% if environment == "production" %}
        <link rel="stylesheet" href="/dist/css/main.min.css">
    {% else %}
        <link rel="stylesheet" href="/dist/css/main.css">
{% endif %}
  <!--link rel="stylesheet" href="dist/css/main.css"-->


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">

</head>
<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
<div id="cover">
<header>
    <div class="container">
        <div class="row">
            <div class="twelve columns center">
                <div class="logo">
                    <span class="box">This is Askew</span>
                </div>
            </div>
        </div>
    </div>
</header>
<section>
    <div class="container">
        <div class="row">
            <div class="three columns">
                <div style="margin: 10px;position: relative; top: 50%;transform:translateY(-50%);">
                    <div class="ball u-full-width" style="background: url(/images/map.png) center;"></div>
                </div>
            </div>
            <div class="three columns">
                <div style="margin: 10px;">
                    <div class="ball u-full-width" style="position: relative; top: 50%;
  transform: translateY(-50%);background: url(/images/map.png) no-repeat center center"></div>
                </div>
            </div>
            <div class="three columns">
                <div class="ball-wrapper">
                    <div class="ball u-full-width" style="background: url(/images/map.png) no-repeat center center"></div>
                </div>
            </div>
            <div class="three columns">
                <div class="ball-wrapper">
                    <div class="ball u-full-width" style="background: url(/images/map.png) no-repeat center center"></div>
                </div>
            </div>
        </div>
    </div>
</section>


  <!--section class="bottom">
      <div class="container">
          <div class="offset-by-three six columns">
              <img src="/images/adidas.pn_" class="u-full-width" />
          </div>
      </div>
  </section-->


  <!--div class="column silver" style="width:75%;">
    <div class="column soft-orange" style="width: 10%"><h1>Välkommen</h1></div>
    <div class="column orange" style="width: 10%"><h1>Välkommen</h1></div>
    <div class="column dark-cyan" style="width: 70%"><h1>Link3</h1></div>
    <div class="column lime" style="width: 10%"><h1>Link 4</h1></div>
</div-->

  <!--section class="content">
    <div class="container">
      <div id="menu" class="three columns violet">
        <div style="">Jocke</div>
        <div class="logo">Logo</div>
        <div style="text-align: center;">
          <div id="circle1" class="circle">
            <a class="circle-content" href="#">Jocke</a>
          </div>
          <div id="circle2" class="circle">
            <a class="circle-content" href="#">Jocke</a>
          </div>
          <div id="circle3" class="circle">
            <a class="circle-content" href="#">Jocke</a>
          </div>
          <div id="circle4" class="circle">
            <a class="circle-content" href="#">Jocke</a>
          </div>
        </div>
      </div>
      <div class="three columns lime" style="height:100%;"><p>some text</p></div>
      <div class="three columns orange">3</div>
      <div class="three columns soft-orange">4</div>
    </div>
  </section-->

  <footer>endeleo</footer>
  </div><!-- end cover -->
  <script type="text/javascript" src="/js/script.js"></script>
  <!--[if lt IE 9]>
    <script src="/js/shop/vendor/jquery.html5-placeholder-shim.js"></script>
  <![endif]-->
  <script type="text/javascript">
    console.log("loading google analytics...");
  </script>

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>