// Define route components.
const About = { template: `<div id="main">
	<div id="main-container">
		<div class="about">
			<h1 class="hero">Cyrus Goh</h1>
			<p class="description">
				I am a full stack web developer, front end engineer, an avid Python enthusiast and a cognitive science student at UC Davis. I love to learn by doing things, which is why I am <em>always</em> in progress. I firmly believe that it is not what technology stack you use that make the product great, it is how you implement it. While technology frameworks may not last, but photographs definitely will — you may check out my  <a href="https://vsco.co/lovincyrus" target="blank_" class="here"><strong>photography work</strong></a>.<br><br>My utmost passion is to connect <em>human</em> and <em>technology</em>, and to build <em>user-centric</em> products.</p>
			<code>[!] Currently accepting new projects for Summer 2017 or remote.</code>
		</div>
	</div>

	<div id="contact-container">
		<div class="contact">
			<ul class="link">
				<li class="hook-me-up">twitter</li>
				<a href="https://twitter.com/cyrsgh" class="social-media" target="_blank">/cyrsgh</a>

				<li class="hook-me-up">github</li>
				<a href="https://github.com/lovincyrus" class="social-media" target="_blank">/lovincyrus</a>

				<li class="hook-me-up">linkedin</li>
				<a href="https://www.linkedin.com/in/cyrusgoh" class="social-media" target="_blank">/in/cyrusgoh</a>

				<li class="hook-me-up">email</li>
				<a href="mailto:hello@lovincyrus.com" class="social-media">hello@lovincyrus.com</a>
			</ul>
		</div>
	</div>
</div>` }

const Projects = { template: ` <div id="projects-container">
	<a class="link" href="https://github.com/lovincyrus/joyfeed" target="_blank">
		<div id="mouseover">
			<div class="container joyfeed-background">
				<h1 class="pro-name">joyfeed</h1>
			</div>
			<div class="flex">
				<p class="brief">Analyzes human emotions using machine learning and filters negative posts.</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://lovincyrus.github.io/fhda/" target="_blank">
		<div id="mouseover">
			<div class="container fhda-background">
				<h1 class="pro-name">fhda</h1>
			</div>
			<div class="flex">
				<p class="brief">A platform for Foothill-De Anza International Alumni.</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/gimo" target="_blank">
		<div id="mouseover">	
			<div class="container gimo-background">
				<h1 class="pro-name">gimo</h1>
			</div>
			<div class="flex">
				<p class="brief">Activity tracker but for GitHub streak.</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/penguiin" target="_blank">
		<div id="mouseover">
			<div class="container penguiin-background">
				<h1 class="pro-name">penguiin</h1>
			</div>
			<div class="flex">
				<p class="brief">NASA Space Apps Challenge 2017</p>
			</div>
		</div>
	</a>

	<a class="link" href="https://github.com/lovincyrus/terminal-quotes" target="_blank">
		<div id="mouseover">	
			<div class="container quotes-background">
				<h1 class="pro-name">terminal quotes</h1>
			</div>
			<div class="flex">
				<p class="brief">Display quotes on Terminal.</p>
			</div>
		</div>
	</a>
</div> ` }


// Define some routes
const routes = [
	{ path: '/about', component: About, alias: '/' },
	{ path: '/projects', component: Projects }
]


// Create the router instance and pass the `routes` option
const router = new VueRouter({
	routes
})


// Create and mount the root instance.
const app = new Vue({
	router,
	data: {
		aboutActive: 1,
		projectActive: 0
	},
	mounted: function() {
		if (!sessionStorage.getItem("is_loaded") && (router.currentRoute.path === '/about' || router.currentRoute.path === '/')) {
			this.sayHello();
			sessionStorage.setItem("is_loaded", true);
		}

		if (router.currentRoute.path === '/projects') {
			this.aboutActive = 0;
			this.projectActive = 1;
		}

		// $(window).scroll(function() {
		//    if($(window).scrollTop() + $(window).height() == $(document).height()) {
		//        $(this).addClass('go-to-top');
		//    }
		// });

	    console.image("https://i.imgur.com/hKGenSr.jpg");
	},
	methods: {
		sayHello: function() {
			Typed.new("#sayHello", {
				strings: ["Hello. ^100", "I'm glad that you're here. ^100", "No, no, no! ^10", "I'm really happy, pleased, contented, delighted, thrilled, overjoyed, elated, gleeful and thankful that you're here. ^100"]
				});

				// hide these lads
				$("img").hide();
				$("ul.menu-container").hide();
				$("h1.hero").hide();
				$("p.description").hide();
				$("code").hide();
				$("li.hook-me-up").hide();
				$("a.social-media").hide();
				$("#projects-container").hide();

				// fadeout
				$("#sayHello").delay(12000).fadeOut();
				$("img").delay(12500).fadeIn(1000);

				// fadein
				$("ul.menu-container").delay(12500).fadeIn(1000);
				$("h1.hero").delay(12500).fadeIn(1000);
				$("p.description").delay(12500).fadeIn(1000);
				$("code").delay(12500).fadeIn(1000);
				$("li.hook-me-up").delay(12500).fadeIn(1000);
				$("a.social-media").delay(12500).fadeIn(1000);

				$(document).click(function() {
					$("#sayHello").hide();
					$("img").fadeIn();
					$("ul.menu-container").fadeIn();
					$("h1.hero").fadeIn();
					$("p.description").fadeIn();
					$("code").fadeIn();
					$("li.hook-me-up").fadeIn();
					$("a.social-media").fadeIn();
				}).keydown(function() {
					$("#sayHello").hide();
					$("img").fadeIn();
					$("ul.menu-container").fadeIn();
					$("h1.hero").fadeIn();
					$("p.description").fadeIn();
					$("code").fadeIn();
					$("li.hook-me-up").fadeIn();
					$("a.social-media").fadeIn();
				});
		}
	}
}).$mount('#navbar')

router.beforeEach((to, from, next) => {
	if (to.path === '/about') {
		app.aboutActive = 1;
		app.projectActive = 0;
	} else if (to.path === '/projects') {
		app.projectActive = 1;
		app.aboutActive = 0;
	}

	next();
})