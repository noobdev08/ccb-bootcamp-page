export function createFooter(containerId = "footer-container") {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Footer container #${containerId} not found`);
        return;
    }

    container.innerHTML = `
        <footer class="site-footer">

        <section class="update">
            <div class="update-content">
            <h1>Stay Updated</h1> 
            <p>Get notified about new cohorts, events, and  <br> important updates.</p>
            </div>

            <div class="update-email"> 
            <form action="mailto:hello@codeandcreate.com" method="post" enctype="text/plain">
                <input type="email" name="email" id="email" placeholder="Enter your email address" required>
                <button type="submit">Subscribe</button>
            </form>
            </<div>
        </section>

            <div class="footer-content">
                <div class="footer-brand">
                    <img src="./assets/images/logo.png" alt="Bootcamp logo" class="footer-logo"/>
                    <p class="footer-mission">
                        Empowering the next generation of tech leaders through practical learning and innovation. We equip young people with relevant digital skills, real-world experience, and the confidence to thrive in an evolving tech landscape.
                    </p>
                     <div class="footer-social-icons">
                        <a href="#">
                            <img src="./assets/images/x-logo.png" alt="x-icon" class="social-icon social-x"/>
                        </a>
                        <a href="#">
                            <img src="./assets/images/linkedln-logo.png" alt="x-icon"  class="social-icon social-linkedin"/>
                        </a>
                    </div>
                </div>

                <div class="footer-links-group">
                    <h3 class="footer-heading">Quick Links</h3>
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/About.html">About</a></li>
                        <li><a href="/tracks.html">Tracks</a></li>
                        <li><a href="https://forms.gle/zP4DL7qA1WfreTGm8" target="_blank">Admissions</a></li>
                        <li><a href="#">Announcements</a></li>
                        <li><a href="/testimonial.html">Testimonials</a></li>
                       
                    </ul>
                </div>

                <div class="footer-support">
                    <h3 class="footer-heading">Contact & Support</h3>
                   <a href="mailto:hello@codeandcreate.com">Email: <u>hello@codeandcreate.com</u></a> <br><br>
                    <p><a href="tel:+234 800 123 4567">Phone: <u> +234 800 123 4567</u></a></p>
                </div>

                <div class="footer-partners">
                     <h3 class="footer-heading">Our Partners</h3>
                     <p>Edustipend</p>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">
                    &copy; 2026. Code &amp; Create. All Rights Reserved.
                </p>
                
            </div>
        </footer>
    `;
}