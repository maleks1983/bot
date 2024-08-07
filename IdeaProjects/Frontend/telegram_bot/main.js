class loadElement {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }


}

function addLoadElement(element) {
    el = document.createElement("div");
    el.style.width = `50px`;
    el.style.height = `50px`;
    el.style.background = `black`;
    el.style.borderRadius = "50%";
    element.append(el);

}

mainElement = document.querySelector(".slider");

addLoadElement(mainElement);