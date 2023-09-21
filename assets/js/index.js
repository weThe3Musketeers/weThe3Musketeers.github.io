const initialLoad = () => {
    const defaultLogoClr = "#454372";
    const url = new URL(window.location.href);
    const bg = url.searchParams.get("bgColor")?.replace("%23", "#");
    const textClr = url.searchParams.get("textColor")?.replace("%23", "#");
    const titleTextClr = url.searchParams.get("titleTextColor")?.replace("%23", "#");
    document.body.style.background = bg;
    document.body.style.color = textClr;
    elements = document.getElementsByClassName("title-fs");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = titleTextClr;
    }
    const logo = document.getElementById("logo");
    const title = document.getElementById("title");
    const nav = document.getElementById("nav");
    logo.style.fill = textClr || defaultLogoClr;
    title.style.color = textClr || defaultLogoClr;
    title.style.backgroundColor = bg;

    const myLinkElems = document.getElementsByClassName("mylink");
    if (url.search) {
        for (var i = 0; i < myLinkElems.length; i++) {
            const currentHref = myLinkElems[i].getAttribute("href");
            const newHref = currentHref + url.search;
            myLinkElems[i].setAttribute("href", newHref);
        }
    }
}
