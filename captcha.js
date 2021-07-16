$captcha = $_POST['g-recaptcha-response'];
if (!$captcha) {
  echo 'Please check the captcha form.';
} else {
  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6Lcz-5wbAAAAADd0PLS7vx0-FYT3spHr-tzLbH0U&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
  if ($response.success != true) {
    echo 'You are spammer ! Get the @$%K out!!';
  } else {
    echo 'Congrat! You are not spammer.'
    // Return your proccess code form here.
  }
}