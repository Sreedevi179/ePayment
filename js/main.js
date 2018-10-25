function createElement(obj) {
    if (!obj.hasOwnProperty("name")) {
        alert("can't create element");
        return;
    }

    let element = document.createElement(obj.name);

    if (obj.hasOwnProperty("class")) {
        element.setAttribute("class", obj.class);
    }
    if (obj.hasOwnProperty("alt")) {
        element.setAttribute("alt", obj.alt);
    }
    if (obj.hasOwnProperty("src")) {
        element.setAttribute("src", obj.src);
    }

    if (obj.hasOwnProperty("bgColor")) {
        element.style.backgroundColor = obj.bgColor;
    }
    if (obj.hasOwnProperty("text")) {
        element.innerText = obj.text;
    }

    return element;
}

function objectLength(obj) {

    let count = 0;

    for (let f in obj) {
        count++;
    }
    return count;
}

