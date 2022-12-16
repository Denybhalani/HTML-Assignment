var images = ['image gallery/image gallery 1.jpg','image gallery/image gallery 2.jpg','image gallery/image gallery 3.jpg','image gallery/image gallery 4.jpg','image gallery/image gallery 5.jpg','image gallery/image gallery 6.jpg'];
var i=0;
function slideShow() {
    document.getElementById("image").src=images[i];

    if(i<images.length-1){
        i++;
    }

    else {
        i=0;
    }
    setTimeout("slideShow()", 2000);
}
window.onload = slideShow;