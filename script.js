let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">Mehreen</a>
              <p>I’m Mehreen Noor, a junior and talented Web Designer with front end development skills.</p>
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
              <span class="contact"><a href="mailto:kumaridivya2796@gmail.com" class="email">
                <img src="./img/email.png" alt="email me"> &nbsp; &nbsp;
                maheezmaheez9@gmail.com</a></span>
            </div>
            <div class="quike-links text-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li><a href="about.html">About Me</a></li>
              </ul>
            </div>
            <div class="social-links text-center">
              <a href="="https://www.linkedin.com/in/mehreen-noor-9a72b6370/"><img src="./img/LinkedIn Circled.png" alt="linkedin"></a><br>
         <a href="https://accounts.google.com/AccountChooser?Email=maheezmaheez9@gmail.com" ><img src="./img/download.png" alt="gmail" style="background-color: rgb(32, 31, 29); border-radius: 50%; padding: 10px;"></a><br>

              <a href="https://github.com/dashboard"><img src="./img/GitHub.png" alt="github"></a>  
              
            </div>
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}

// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  window.scrollY > amountScrolled 
    ? btnBackToTop.classList.add('back-to-top_show')
    : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);
