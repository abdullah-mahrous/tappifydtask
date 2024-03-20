let card = document.querySelector(".mobilo-card"),
    cardImg = card.querySelector("img"),
    leftContainer = document.querySelector(".left-container"),
    scan = leftContainer.querySelector(".scan-card"),
    iphone = leftContainer.querySelector(".iphone-icon"),
    checkIcon = document.getElementById("checkMark"),
    contact = leftContainer.querySelector(".contact"),
    mobile = leftContainer.querySelector("img:first-of-type");

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    
    if(window.innerWidth < 1000)
        return;

    if(scrollPosition > 2070)
    {
        // div style
        card.style.transform = `translate3d(${(1772 - 552) * 0.0161}vw, ${(1220 * 0.0161) - Math.pow((scrollPosition - 1922) *0.1,2)}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        card.style.opacity = `${2.5 - (scrollPosition - 1800) * 0.009}`
        // img style
        cardImg.style.transform = `perspective(846.671px) rotateY(0deg)`;
        // contact img shadow
        mobile.style.boxShadow = `rgb(255 255 255 / 35%) -80px 0px 180px 0px`;
        // text changing
        leftContainer.querySelector("div:first-of-type").style.transform = `translate3d(0, ${(1220 * 0.0161) - Math.pow((scrollPosition - 1922) *0.25,2)}px, 0) `;
        // final text appearing
        document.querySelector(".final-section").style.opacity = `${(scrollPosition - 1800) * 0.009}`;
        document.querySelector(".final-section").style.top = `20%`;
    }
    else if(scrollPosition > 1922)
    {
        // div style
        card.style.transform = `translate3d(${(1772 - 552) * 0.0161}vw, ${(1220 * 0.0161) - Math.pow((scrollPosition - 1922) *0.1,2)}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        card.style.opacity = `${2.5 - (scrollPosition - 1800) * 0.009}`
        // img style
        cardImg.style.transform = `perspective(846.671px) rotateY(0deg)`;
        // contact img shadow
        mobile.style.boxShadow = `rgb(255 255 255 / 35%) -80px 0px 180px 0px`;
        // text changing
        leftContainer.querySelector("div:first-of-type").style.transform = `translate3d(0, ${(1220 * 0.0161) - Math.pow((scrollPosition - 1922) *0.25,2)}px, 0) `;
        // final text appearing
        document.querySelector(".final-section").style.opacity = `${(scrollPosition - 1800) * 0.009}`;
        document.querySelector(".final-section").style.top = `${100 - (scrollPosition - 1800) * 0.3}%`;
    }
    else if(scrollPosition > 1772)
    {
        // div style
        card.style.transform = `translate3d(${((1772 - 552) * 0.0161)}vw, ${(1772 - 552) * 0.0111}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(${-0.78733 + (scrollPosition * 0.00025)}deg, ${-2.36199 + (scrollPosition * 0.0009)}deg)`;
        // img style
        cardImg.style.transform = `perspective(846.671px) rotateY(${-3.53837 + (scrollPosition * 0.0015)}deg)`;
        // contact img showing
        contact.style.opacity = `${(scrollPosition - 1000) * 0.009}`;
        mobile.style.boxShadow = `rgb(255 255 255 / 35%) -${Math.pow(((scrollPosition - 1300) * 0.005),3)}px 0px 180px 0px`;
        // final text appearing
        document.querySelector(".final-section").style.opacity = `${(scrollPosition - 1800) * 0.009}`;
        document.querySelector(".final-section").style.top = `${100 - (scrollPosition - 1800) * 0.3}%`;
    }
    else if(scrollPosition > 1690)
    {
        // div style
        card.style.transform = `translate3d(${((1772 - 552) * 0.0161)}vw, ${(1772 - 552) * 0.0111}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(${-0.78733 + (scrollPosition * 0.00025)}deg, ${-2.36199 + (scrollPosition * 0.0009)}deg)`;
        card.style.opacity = '1';
        // img style
        scan.style.opacity = `${2.5 - (scrollPosition - 1000) * 0.009}`;
        checkIcon.style.opacity = `${2.5 - (scrollPosition - 1000) * 0.009}`;
        // contact img showing
        contact.style.opacity = `${2.5 - (scrollPosition - 1000) * 0.009}`;
        mobile.style.boxShadow = `none`;
    }
    else if(scrollPosition > 1350)
    {
        // div style
        card.style.transform = `translate3d(${(scrollPosition - 552) * 0.0161}vw, ${(scrollPosition - 552) * 0.0111}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-0.78733deg, -2.36199deg)`;
        card.style.opacity = '1';
        // scan card style
        iphone.style.opacity = `${3 - ((scrollPosition - 1000) * 0.009)}`;
        checkIcon.style.opacity = `${(scrollPosition - 1000) * 0.009}`;
        scan.style.opacity = `${(scrollPosition - 1000) * 0.009}`;
    }
    else if(scrollPosition > 1250)
    {
        // div style
        card.style.transform = `translate3d(${(scrollPosition - 552) * 0.0161}vw, ${(scrollPosition - 552) * 0.0111}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-0.78733deg, -2.36199deg)`;
        card.style.opacity = '1';
        // scan card style
        iphone.style.opacity = `${3 - ((scrollPosition - 1000) * 0.009)}`;
        checkIcon.style.opacity = `${2 - ((scrollPosition - 1000) * 0.009)}`;
    }
    else if(scrollPosition > 1140)
    {
        // div style
        card.style.transform = `translate3d(${(scrollPosition - 552) * 0.0161}vw, ${(scrollPosition - 552) * 0.0111}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-0.78733deg, -2.36199deg)`;
        card.style.opacity = '1';
        // scan card style
        scan.style.opacity = `${(scrollPosition - 1000) * 0.01}`;
        iphone.style.opacity = `${(scrollPosition - 1000) * 0.009}`;
    }
    else if(scrollPosition > 1000)
    {
        // div style
        card.style.position = `fixed`;
        card.style.transform = `translate3d(${(scrollPosition - 552) * 0.0161}vw, ${(scrollPosition - 552) * 0.0111}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-0.78733deg, -2.36199deg)`;
        card.style.opacity = '1';
        // img style
        cardImg.style.transform = `perspective(846.671px) rotateY(-3.53837deg)`;
        // scan card style
        scan.style.opacity = `${(scrollPosition - 1000) * 0.01}`
    }
    else if(scrollPosition > 552)
    {
        // div style
        card.style.boxShadow = `60px 30px 68px 8px #00000096`;
        card.style.position = `fixed`;
        card.style.transform = `translate3d(${(scrollPosition - 552) * 0.0161}vw, ${(scrollPosition - 552) * 0.0111}px, 0px) scale3d(0.97638, 0.97638, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-0.78733deg, -2.36199deg)`;
        // img style
        cardImg.style.transform = `perspective(846.671px) rotateY(-3.53837deg)`;
        // iphone style
        iphone.style.opacity = `${(scrollPosition - 1000) * 0.009}`;
    }
    // when scrooling up
    if(scrollPosition < 552)
    {
        // div style
        card.style.boxShadow = `none`;
        card.style.position = `relative`;
        card.style.transform = `translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        card.style.opacity = '1';
        // img style
        cardImg.style.transform = `initial`;
        // final text appearing
        document.querySelector(".final-section").style.opacity = `1`;
        document.querySelector(".final-section").style.top = `100%`;
    }

    // left container logic when scrolling down
    if(scrollPosition > 1215)
    {
        leftContainer.style.position = 'fixed';
    }
    // left container logic when scrolling up
    if(scrollPosition < 1215)
    {
        leftContainer.style.position = '';
    }
});
