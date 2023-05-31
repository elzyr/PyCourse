function scrollToDiv(className) {
    const element = document.querySelector(className);
    if (element) {
        const elementPosition = element.offsetTop - 100; // Pozycja diva minus 100px
        window.scrollTo({top: elementPosition, behavior: 'smooth'});
    }
}