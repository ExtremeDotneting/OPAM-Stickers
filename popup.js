function createDiv() {
    var div = document.createElement("div");

    div.id = "images";
    for (var i = 1; i <= 10; i++) {
        var img = document.createElement("img");
        img.className = "contentImage";
        img.src = "img\\" + i + ".jpg";
        //img.addEventListener("click", function () {
        //    imageClick(this);
        //});
        img.id = "img" + i;

        div.appendChild(img);
    }
    document.body.appendChild(div);
}
createDiv();


function imageClick(clickedImg){


}