class Map {
    constructor(pWidth, pHeight, pFile = null) {
        this.width = pWidth;
        this.height = pHeight;

        if (pFile) {

        }

    }
}


function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}

console.log(loadFile("./js/map.js"))