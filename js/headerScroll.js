const headerScroll = () => {
    
    // Get Element from DOM
    const header = document.querySelector('.site-header')

    //Function to toggle scroll on header
    const classOnScroll = () => {
        
        if ( window.scrollY > 85) {
            header.classList.add('site-header--scroll')
        } else {
            header.classList.remove('site-header--scroll')
        }

    }


    // Add or remove class for links
    const links = document.querySelectorAll('.top-button')

    const menuLinks = () => {

        links.forEach(link => {

            if ( window.scrollY > 900) {
                link.classList.add('top-button--up')
            } else {
                link.classList.remove('top-button--up')
            }
        });
    }


    window.addEventListener('scroll', menuLinks)
    window.addEventListener('scroll', classOnScroll)

}

headerScroll()