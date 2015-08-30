<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

date_default_timezone_set('America/Los_Angeles');

require_once 'assets/classes/Mobile_Detect.php';
$detect = new Mobile_Detect;

if ($_POST) {

	require 'assets/includes/connect.php';

	if($db->connect_errno > 0){
	    die('Unable to connect to database [' . $db->connect_error . ']');
	}

	$recaptcha_secret = '6LfQuggTAAAAAMSD4xSpHtdINFivgspH_JWzFU35';
	$captcha = $_POST['g-recaptcha-response'];
    
	$response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$recaptcha_secret.'&response='.$captcha.'');
	$response = json_decode($response, true);
    
    if($response["success"] == true)
    {

		$a = trim(stripslashes(htmlspecialchars($_POST['name'])));
		$b = trim(stripslashes(htmlspecialchars($_POST['email'])));
		$c = trim(stripslashes(htmlspecialchars($_POST['phone'])));
		$d = trim(stripslashes(htmlspecialchars($_POST['details'])));
		$e = trim(stripslashes(htmlspecialchars($_POST['budget'])));
		$f = trim(stripslashes(htmlspecialchars($_POST['timeline'])));

    	$a = $db->real_escape_string($_POST['name']);
	    $b = $db->real_escape_string($_POST['email']);
	    $c = $db->real_escape_string($_POST['phone']);
	    $d = $db->real_escape_string($_POST['details']);
	    $e = $db->real_escape_string($_POST['budget']);
	    $f = $db->real_escape_string($_POST['timeline']);
	    $g = date('m-d-Y h:ia');
	    
	    $sql = "
		    INSERT INTO `leads` (
		    	name,
		    	email,
		    	phone,
		    	details,
		    	budget,
		    	timeline,
		    	date_created
	    	)

		    VALUES(
		    	'$a',
		    	'$b',
		    	'$c',
		    	'$d',
		    	'$e',
		    	'$f',
		    	'$g'
	    	)
	    ";

	    $db->query($sql);
		$db->close();

	    require 'assets/classes//PHPMailerAutoload.php';

		$mail = new PHPMailer;

		// $mail->isSMTP();
		// $mail->Host = 'smtp.gmail.com';
		// $mail->SMTPAuth = true;
		// $mail->Username = 'robert@rodriguez-designs.com';
		// $mail->Password = 'bob3184995';
		// $mail->SMTPSecure = 'tls';
		// $mail->Port = 587;
		$mail->From = 'admin@rodriguez-designs.com';
		$mail->FromName = 'Rodriguez Designs';
		$mail->addAddress('robert@rodriguez-designs.com');
		$mail->isHTML(true);
		$mail->Subject = 'New Contact Form Submission';
		$mail->Body    = '

			Name: '.$a.' <br />
			Email: '.$b.' <br />
			Phone: '.$c.' <br />
			Project Details: '.$d.' <br />
			Budget: '.$e.' <br />
			Timeline: '.$f.' <br />

		';

		if(!$mail->send()) {
		    $msg = '
		    	<div class="error">
		    	<p><i class="fa fa-exclamation-triangle"></i>Message could not be sent. Mailer Error: ' . $mail->ErrorInfo. '</p></div>
	    	';
	    	$status = 'error';
		} else {
		    $msg = '
		    	<div class="success">
		    	<p><i class="fa fa-thumbs-up"></i> Thank you '.$a.'! I&rsquo;ll be in touch with you soon.</p>
		    	</div>
	    	';
	    	$status = 'success';
		}

    } else {
    	$msg = '
			<div class="error">
				<p><i class="fa fa-exclamation-triangle"></i> CAPTCHA Failed, please try again.</p>
			</div>
		';
		$status = 'error';
    };

    
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, user-scalable=no">
	<title>Robert Rodriguez - Website design &amp; development.</title>
	<meta name="Description" content="I design and develop unique, innovative websites using HTML and CSS.">
	<meta name="geo.region" content="US- CA" />
	<meta name="geo.placename" content="Lake Elsinore, California" />
	<meta name="copyright" content="Robert Rodriguez" />
	<meta name="theme-color" content="#333333">
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="assets/css/style.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="assets/js/jquery.validate.js"></script>
	<script src="assets/js/actions.js"></script>
	<!--[if lte IE 9]>
	    <script src="assets/js/html5shiv.js"></script>
	    <script src="assets/js/jquery.placeholder.js"></script>
		<script>
		$( document ).ready(function() {
			$('input, textarea').placeholder();
		});
		</script>
    <![endif]-->
    <script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-11709621-2', 'auto');
		ga('send', 'pageview');
	</script>
	<script src='https://www.google.com/recaptcha/api.js'></script>
	<script> 
		var $buoop = {c:2}; 
		function $buo_f(){ 
		 var e = document.createElement("script"); 
		 e.src = "//browser-update.org/update.min.js"; 
		 document.body.appendChild(e);
		};
		try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
		catch(e){window.attachEvent("onload", $buo_f)}
	</script> 
</head>
<body>
	<header>
		<img src="assets/images/logo.svg" id="logo" />
		<ul class="nav">
			<li><a href="#home">Home</a></li>
			<li><a href="#work">Work</a></li>
			<li class="spacer"></li>
			<li><a href="#resume">Resume</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</header>
	<div class="intro" id="home">
		<div class="wrap">
			<h1>Hello, I&rsquo;m Robert.</h1>
			<p>I design &amp; develop unique web experiences.</p>
			<a href="#skills">Learn More <i class="fa fa-angle-down"></i></a>
		</div>
		<div class="red"></div>
		<?php if (!$detect->isMobile()) { ?>
		<video autoplay loop preload="auto">
			<source src="assets/video/intro.mp4" type="video/mp4">
			<img src="assets/images/intro_banner.jpg" />
		</video>
		<?php } ?>
	</div>
	<div class="skills" id="skills">
		<div class="wrap">
			<h1>My Skills</h1>
			<ul>
				<li>
					<i class="fa fa-laptop"></i>
					<h2>Web Design</h2>
					<p>I design and develop innovative and easy to use websites using HTML &amp; CSS.</p>
				</li>
				<li>
					<i class="fa fa-print"></i>
					<h2>Print Design</h2>
					<p>I create beautiful marketing materials that take your brand to the next level.</p>
				</li>
				<li>
					<i class="fa fa-video-camera"></i>
					<h2>Video</h2>
					<p>I produce inventive videos that share your message across the web.</p>
				</li>
			</ul>
		</div>
	</div>
	<div class="projects" id="work">
		<div class="wrap">
			<h1>Recent Projects</h1>

			<ul>
				<li>
					<a target="_blank" href="https://www.sandiegounified.org/"><img src="/assets/images/projects/sdusd.png" alt="San Diego Unified School District" /></a>
					<h2><a target="_blank" href="https://www.sandiegounified.org/">San Diego Unified School District</a></h2>
					<div class="tags">
						<span class="tag">Website</span>
						<span class="tag">Drupal</span>
						<span class="tag">jQuery</span>
						<span class="tag">PHP</span>
						<span class="tag">MySql</span>
						<span class="tag">HTML5</span>
						<span class="tag">CSS3</span>
					</div>
				</li>
				<li>
					<a target="_blank" href="http://www.peaceloveanddance.net/"><img src="/assets/images/projects/pld.png" alt="Peace Love &amp; Dance" /></a>
					<h2><a target="_blank" href="http://www.peaceloveanddance.net/">Peace Love &amp; Dance</a></h2>
					<div class="tags">
						<span class="tag">Website</span>
						<span class="tag">Wordpress</span>
						<span class="tag">jQuery</span>
						<span class="tag">PHP</span>
						<span class="tag">MySql</span>
						<span class="tag">HTML5</span>
						<span class="tag">CSS3</span>
					</div>
				</li>
				<li>
					<a target="_blank" href="http://www.prep2succeed.com/"><img src="/assets/images/projects/p2s.png" alt="Prep to Succeed" /></a>
					<h2><a target="_blank" href="http://www.prep2succeed.com/">Prep to Succeed</a></h2>
					<div class="tags">
						<span class="tag">Website</span>
						<span class="tag">Wordpress</span>
						<span class="tag">jQuery</span>
						<span class="tag">PHP</span>
						<span class="tag">MySql</span>
						<span class="tag">HTML5</span>
						<span class="tag">CSS3</span>
					</div>
				</li>
				<li>
					<a target="_blank" href="http://www.mawilliamshomes.com/"><img src="/assets/images/projects/mawilliams.jpg" alt="Ma Williams Website" /></a>
					<h2><a target="_blank" href="http://www.mawilliamshomes.com/">Ma Williams</a></h2>
					<div class="tags">
						<span class="tag">Website</span>
						<span class="tag">WordPress</span>
						<span class="tag">jQuery</span>
						<span class="tag">PHP</span>
						<span class="tag">MySql</span>
						<span class="tag">HTML5</span>
						<span class="tag">CSS3</span>
					</div>
				</li>
				<li>
					<a target="_blank" href="http://www.cliq.com/"><img src="/assets/images/projects/cliq.jpg" alt="Cliq Website" /></a>
					<h2><a target="_blank" href="http://www.cliq.com/">Cliq</a></h2>
					<div class="tags">
						<span class="tag">Website</span>
						<span class="tag">WordPress</span>
						<span class="tag">jQuery</span>
						<span class="tag">PHP</span>
						<span class="tag">MySql</span>
						<span class="tag">HTML5</span>
						<span class="tag">CSS3</span>
					</div>
				</li>
				<li>
					<a target="_blank" href="http://dowlingmagnets.com/"><img src="/assets/images/projects/dowlingmagnets.jpg" alt="Dowling Magnets Website" /></a>
					<h2><a target="_blank" href="http://dowlingmagnets.com/">Dowling Magnets</a></h2>
					<div class="tags">
						<span class="tag">Website</span>
						<span class="tag">jQuery</span>
						<span class="tag">PHP</span>
						<span class="tag">MySql</span>
						<span class="tag">HTML5</span>
						<span class="tag">CSS3</span>
					</div>
				</li>
				<li>
					<a target="_blank" href="http://sentobenewines.com"><img src="/assets/images/projects/sento.jpg" alt="Sento Bene Website" /></a>
					<h2><a target="_blank" href="http://sentobenewines.com">Sento Bene</a></h2>
					<div class="tags">
						<span class="tag">Website</span>
						<span class="tag">WordPress</span>
						<span class="tag">jQuery</span>
						<span class="tag">PHP</span>
						<span class="tag">MySql</span>
						<span class="tag">HTML5</span>
						<span class="tag">CSS3</span>
					</div>
				</li>
				<li>
					<a target="_blank" href="http://www.gqlimousine.net/"><img src="/assets/images/projects/gqlimo.jpg" alt="GQ Limousine Website" /></a>
					<h2><a target="_blank" href="http://www.gqlimousine.net/">GQ Limousine</a></h2>
					<div class="tags">
						<span class="tag">Website</span>
						<span class="tag">WordPress</span>
						<span class="tag">jQuery</span>
						<span class="tag">PHP</span>
						<span class="tag">MySql</span>
						<span class="tag">HTML5</span>
						<span class="tag">CSS3</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="resume" id="resume">
		<div class="wrap">
			<h1>Resume</h1>

			<div class="left">
				<h2>Employment</h2>
			</div>
			<div class="right">

				<h3>360 Business Consulting Group</h3>
				<p class="date">2013 - Present</p>
				<div class="clear"></div>
				<p class="meta">Designer</p>
				
				<p>Created and managed quality design assets in a fast-paced, production driven environment. Responsible for
				email campaign design and deployment. Designed and developed responsive websites using HTML and CSS. Implemented
				complex CMS solutions for large scale clients. Managed daily website content updates. Worked directly with clients
				and sales to design/develop effective marketing solutions. Produced, filmed, and edited product videos for clients.
				Converted non-mobile friendly websites to fully responsive designs. Managed lead gathering campaigns.</p>

				<hr />

				<h3>Freelance Website Developer</h3>
				<p class="date">2010 - Present</p>
				<div class="clear"></div>
				<p class="meta">Website Developer</p>
				
				<p>Designed and developed websites for small to medium sized clients using HTML and CSS. Customized CMS solutions for
				clients using open source software, PHP, and MySql. Provided clients with detailed, but easy to understand, training.
				Designed easy to use and innovated UI/UX solutions. Worked directly with clients to understand needs and provide customized
				solutions.
				</p>

				<hr />

			</div>
			<div class="clear"></div>
			<div class="left">
				<h2>Knowledge</h2>
			</div>
			<div class="right">
				<ul>
					
					<li><i class="fa fa-angle-right fw"></i> Fluent in <strong>HTML</strong> and <strong>CSS</strong></li>
					<li><i class="fa fa-angle-right fw"></i> Extensive knowledge of <strong>media queries</strong> and <strong>responsive design</strong> best practices</li>
					<li><i class="fa fa-angle-right fw"></i> Working knowledge of <strong>jQuery</strong>, <strong>PHP</strong>, and <strong>MySql</strong></li>
					<li><i class="fa fa-angle-right fw"></i> Extensive experience working with <strong>WordPress</strong> and <strong>Drupal</strong></li>
					<li><i class="fa fa-angle-right fw"></i> Advanced knowledge of <strong>web hosting management</strong></li>
					<li><i class="fa fa-angle-right fw"></i> Advanced usage of <strong>Photoshop</strong>, <strong>Illustrator</strong>, <strong>InDesign</strong>, <strong>Premiere Pro</strong>, and <strong>After Effects</strong></li>
					<li><i class="fa fa-angle-right fw"></i> Professional experience preparing <strong>CMYK</strong> Print Ready files.</li>
				</ul>
			</div>
			<div class="clear"></div>
		</div>
	</div>
	<div class="contact" id="contact">
		<div class="wrap">
			<?php if (isset($msg)) {
				echo $msg;
			} ?>
			<h1>Let's Get Started</h1>
			<p>Tell me about your project</p>
			<form id="contact" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>#contact">
				<input type="text" name="name" placeholder="Your Name" required />
				<input type="email" name="email" placeholder="Your Email Address" />
				<input type="tel" name="phone" placeholder="Your Phone Number" />
				<textarea name="details" placeholder="Project details" required></textarea>
				<select name="budget">
					<option selected="selected" value="">Your Budget</option>
					<option>$500 - $1000</option>
					<option>$1000 - $3000</option>
					<option>$3000 - $5000</option>
					<option>$5000 +</option>
				</select>
				<select name="timeline">
					<option selected="selected" value="">Your Timeline</option>
					<option>2 Weeks</option>
					<option>1 Month</option>
					<option>2 Months</option>
					<option>3+ Months</option>
				</select>
				<div class="g-recaptcha" data-sitekey="6LfQuggTAAAAABk8g_mLFRCxi20W3vqKQ3LfJXhH"></div>
				<button type="submit">Send <i class="fa fa-angle-right"></i></button>
			</form>
			<br /><br />

			<h2>or you can call me</h2><br /><br />
			<p><a href="tel:+19518375362" class="phone">(951) 291 - 1763</a></p>
		</div>
	</div>
</body>
</html>