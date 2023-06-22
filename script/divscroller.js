function scrollToDiv(className) {
    const element = document.querySelector(className);
    if (element) {
        const elementPosition = element.offsetTop - 40;
        window.scrollTo({top: elementPosition, behavior: 'smooth'});
    }
}