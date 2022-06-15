
class HeaderNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h1>OTR Travel</h1>
        </header>
        `
    }
}

customElements.define('header-nav', HeaderNav)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="socials">
                <ul>
                    <li><a href="" target="_blank"><img src="images/facebook-icon.png" alt="facebook icon"/></a></li>
                    <li><a href="" target="_blank"><img src="images/instagram-icon.png" alt="instagram icon"/></a></li>
                    <li><a href="mailto:stevesscb@gmail.com" target="_blank"><img src="images/email-icon.png" alt="email icon"/></a></li>
                </ul>
            </div>
        </footer> 
        `
    }
}

customElements.define('my-footer', MyFooter)

/*-------------------------------------------------------- second folder footer ---------------------------------- */

class SecondFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="socials">
                <ul>
                    <li><a href="" target="_blank"><img src="/images/facebook-icon.png" alt="facebook icon"/></a></li>
                    <li><a href="" target="_blank"><img src="/images/instagram-icon.png" alt="instagram icon"/></a></li>
                    <li><a href="mailto:stevesscb@gmail.com" target="_blank"><img src="/images/email-icon.png" alt="email icon"/></a></li>
                </ul>
            </div>
        </footer> 
        `
    }
}

customElements.define('second-footer', SecondFooter)