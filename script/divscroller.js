function scrollToDiv(className) {
    const element = document.querySelector(className);
    if (element) {
        const elementPosition = element.offsetTop - 40; // Pozycja diva minus 60px
        window.scrollTo({top: elementPosition, behavior: 'smooth'});
    }
}