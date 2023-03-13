let myFadeImages = document.getElementsByClassName('fadeImages');


window.addEventListener('load', () => {
    console.log('loaded');
    // image fadeIns



    /*   for (const myElement in myFadeImages) {
          console.log(myElement);
          //myElement.classList.toggle('showImage');
      } */

    // for of giver os dom elementer !!!
    for (const myElement of myFadeImages) {
        //console.log(myElement);
        myElement.classList.toggle('showImage');
    }

});