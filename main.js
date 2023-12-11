const scrollPage = (section) => {
    const navHeight = document.getElementById("nav").offsetHeight
    const bannerHeight = document.getElementById("banner").offsetHeight
    const featuredHeight = document.getElementById("featured").offsetHeight
    const aboutHeight = document.getElementById("about").offsetHeight
    const worksHeight = document.getElementById("works").offsetHeight

    console.log(featuredHeight)


    if (section === "banner") {
        window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (section === "featured") {
        window.scrollTo({ top: bannerHeight - navHeight / 2, behavior: "smooth" })
    } else if (section === "about") {
        window.scrollTo({ top: featuredHeight + bannerHeight - navHeight / 2, behavior: "smooth" })
    } else if (section === "works") {
        window.scrollTo({ top: aboutHeight + featuredHeight + bannerHeight - navHeight / 2, behavior: "smooth" })
    }

};

const showTopBTN = () => {
    if (window.scrollY > document.getElementById("featured").offsetHeight - 50) {
        document.getElementById("Top-BTN").style.opacity = "1"
        document.getElementById("Top-BTN").style.pointerEvents = "auto"

    } else {
        document.getElementById("Top-BTN").style.opacity = "0"
        document.getElementById("Top-BTN").style.pointerEvents = "none"

    }
}

const expandNavbar = () => {
    const currentHeight = document.getElementById("navbar-expand").style.height

    if (currentHeight === '' || currentHeight === '0px') {
        document.getElementById("navbar-expand").style.height = '40vh'
        const navLinks = document.getElementsByClassName("nav-link-expand");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.opacity = '1';
        }   
    } else {
        document.getElementById("navbar-expand").style.height = '0px'
        const navLinks = document.getElementsByClassName("nav-link-expand");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.opacity = '0';
        }
    }
}