<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$formcontent=" From: $name \n Email: $email";
	$recipient = "stevesscb@gmail.com";
	$subject = "You have a message from the contact us page on your website:";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
 ?>
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
    integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
    rel="stylesheet"
    />
    <title>On The Road Travel | Thanks!</title>
</head>
<body>
        <header>
            <h1>OTR Travel</h1>
        </header>
        <nav>
            <div class="menu-btn">
                <div class="menu-btn_burger"></div>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">about</a></li>
                <li><a href="gallery.html">gallery</a></li>
                <li><a href="contact.html">contact</a></li>
            </ul>
        </nav>
        <main>
            <article>
                <h2>Thankyou for your message!</h2>
            </article>
        </main>
        <footer>
            <div class="socials">
                <ul>
                  <li><a href="" target="_blank"><img src="images/facebook-icon.png" alt="facebook icon"/></a></li>
                  <li><a href="" target="_blank"><img src="images/instagram-icon.png" alt="instagram icon"/></a></li>
                  <li><a href="mailto:stevesscb@gmail.com" target="_blank"><img src="images/email-icon.png" alt="email icon"/></a></li>
                </ul>
              </div>
        </footer>
    </div>    
    <script src="js/script.js"></script>
</body>
</html>