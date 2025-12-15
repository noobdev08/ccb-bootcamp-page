export function createFooter(containerId = "footer-container") {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Footer container #${containerId} not found`);
        return;
    }

    container.innerHTML = `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <img src="./assets/images/logo.png" alt="Bootcamp logo" class="footer-logo"/>
                    <p class="footer-mission">
                        Empowering the next generation of tech leaders through practical learning and innovation. We equip young people with relevant digital skills, real-world experience, and the confidence to thrive in an evolving tech landscape.
                    </p>
                </div>

                <div class="footer-links-group">
                    <h3 class="footer-heading">Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Tracks</a></li>
                        <li><a href="#">Admissions</a></li>
                        <li><a href="#">Announcements</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>

                <div class="footer-social">
                    <h3 class="footer-heading follow">Follow Us On:</h3>
                    <div class="footer-social-icons">
                        <a href="#">
                            <img src="./assets/images/x-logo.png" alt="x-icon" class="social-icon social-x"/>
                        </a>
                        <a href="#">
                            <img src="./assets/images/linkedln-logo.png" alt="x-icon"  class="social-icon social-linkedin"/>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">
                    &copy; 2025. Code &amp; Create. All Rights Reserved.
                </p>
                <div class="footer-legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms Of Service</a>
                </div>
            </div>
        </footer>
    `;
}