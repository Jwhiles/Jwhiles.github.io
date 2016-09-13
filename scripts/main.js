var myImage = document.querySelector('img');

myImage.onclick = function() {
        var mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/myface.jpg') {
            myImage.setAttribute ('src', 'images/goat.jpg')
        } else { 
        myImage.setAttribute ('src', 'images/myface.jpg')
        }
}
