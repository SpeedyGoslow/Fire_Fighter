class MainNavBar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <link rel="stylesheet" href="./../style.css">
      <script src="https://kit.fontawesome.com/6eae11638a.js" crossorigin="anonymous"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <nav class="navbar">
        <div class="navbar_container">
          <a href="/" id="navbar__logo"><i class="fa-solid fa-fire"></i>NWUFPA</a>
          <div class="navbar__toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </div>
          <ul class="navbar__menu">
            <li class="navbar__item">
                <a href="/index.html" class="navbar__links">Home</a>
            </li>
            <li class="navbar__item">
                <a href="/" class="navbar__links">About Us</a>
            </li>
            <li class="navbar__item">
                <a href="/Contact_Us.html" class="navbar__links">Contact Us</a>
            </li>
            <li class="navbar__item">
                <a href="/Weather.html" class="navbar__links">Districts</a>
            </li>
            <li class="navbar__btn">
                <a href="/" class="button">Training</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
	}
}

customElements.define("main-navbar", MainNavBar);

class MainFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <link rel="stylesheet" href="./../style.css">
      <script src="https://kit.fontawesome.com/6eae11638a.js" crossorigin="anonymous"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <div class="footer_container">
        <div class="footer_links">
            <div class="footer_links_wrapper">
                <div class="footer_links_items">

                    <h2>Quick Links</h2>
                    <br>
                    <a href="/About_Us.html">About Us </a>
                    <br>
                    <a href="/">Our Team</a>
                    <br>
                    <a href="/">Terms and Conditions</a>
                    <br>
                    <div class="footer_logo">
                        <a id="fl" href=""><i class="fa-solid fa-fire"></i>NWUFPA</a>
                    </div>
                    <br>
                    <p class="website_rite"> <i class="fa-solid fa-copyright"></i> All Rights Reserved</p>

                </div>

            </div>
        </div>
      </div>
    `;
	}
}

customElements.define("main-footer", MainFooter);
