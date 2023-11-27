const scrollPage = (section) => {
    const navHeight = document.getElementById("nav").offsetHeight
    const bannerHeight = document.getElementById("banner").offsetHeight
    const featuredHeight = document.getElementById("featured").offsetHeight
    const aboutHeight = document.getElementById("about").offsetHeight
    const worksHeight = document.getElementById("works").offsetHeight

    
    if(section === "banner"){
        window.scrollTo({top: 0, behavior: "smooth"})
    }else if (section === "featured"){
        window.scrollTo({top: bannerHeight, behavior: "smooth" })
    }else if (section === "about"){
        window.scrollTo({top: featuredHeight + bannerHeight, behavior: "smooth" })
    }else if (section === "works"){
        window.scrollTo({top: aboutHeight + featuredHeight + bannerHeight, behavior: "smooth" })
    }
    
}