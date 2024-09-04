class MobileNav {
    constructor(mobileMenu, nav) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.nav = document.querySelector(nav);
        this.navLinks = this.nav.querySelectorAll("a");
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this); 
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.nav.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNav = new MobileNav(
    ".mobile-menu",
    ".header nav",
);
mobileNav.init();