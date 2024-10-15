//JavaScript code for piano 

const keys = document.querySelectorAll(".keys"); //Sirf pehla matching element return karta hai, Agar koi element nahi milta to null return karta hai.

const volumeControl = document.querySelector("input[type = 'range']"); //NodeList ka ek collection return karta hai, jisme sabhi matching elements hote hain, Agar koi element nahi milta to ye ek empty NodeList return karta hai. 

const showKeysCheckbox = document.getElementById("showKeys");

keys.forEach(key => { //Ye har key par loop lagata hai. Jo key click hoti hai, wo key variable mein hoti hai.

    //Event listener ka kaam hota hai ki wo sunta rahta hai ki koi specific event (jaise click, key press, etc.) kab hota hai. Jab wo event hota hai, to uss waqt ek function run kar deta hai.
    key.addEventListener("click", () => {     

     playSound(key.dataset.key); //Ye arrow function hai jo key click hone par chalega.

    }); //Ye playSound function ko call karta hai aur us key ka data-key value pass karta hai jo click ki gayi thi.
});

// Sound function here!

//Ye function banata hai jiska naam playSound hai, aur ye ek key parameter leta hai jo note ko represent karta hai.
function playSound(key) {

    //Ye line us audio element ko select karti hai jo data-note attribute ka value us key ke barabar hai.
    const audio = document.querySelector(`audio[data-note="${key}"]`);
    if (audio) { //Isse check hota hai ki audio element hai ya nahi (agar hai to code chalega).

        audio.currentTime = 0; // Agar audio play ho raha ho to usko reset karta hai taaki fir se start ho jaye.

        audio.volume = volumeControl.value; // Ye audio ki volume ko slider ki value ke hisaab se set karta hai.

        audio.play(); //Audio ko play karta hai.
    }
}

//if you want keys support (Optional: Keyboard support)

// Ye pura document ko ek event listener deta hai jo keyboard ke key press events ko sunta hai.
document.addEventListener("keydown", (event) => { 
    //Ye arrow function hai jo event object ko leta hai jab koi key press hoti hai.

    const key = event.key.toUpperCase(); // Isse jo key press hoti hai usko uppercase mein convert karte hain, taaki match ho sake.

    const pianoKey = document.querySelector(`.keys[data-key="${key}"]`); //Ye us piano key ko select karta hai jo key press ki gayi thi.

    if (pianoKey) { //Ye check karta hai ki koi piano key mili ya nahi.

        playSound(key); //Agar key mili, to playSound function ko call karta hai aur wo key ka sound play hota hai.
    }
});

// Toggle the visibility of letters (span elements) on the keys based on the checkbox state
showKeysCheckbox.addEventListener('change', function() {
    const keyLabels = document.querySelectorAll(".keys span");  // Get all span elements inside the keys
    if (this.checked) {
        keyLabels.forEach(label => {
            label.style.display = 'block';  // Show the letters
        });
    } else {
        keyLabels.forEach(label => {
            label.style.display = 'none';   // Hide the letters
        });
    }
});

// orientation function 

function checkOrientation() {
    // Check if the device width is less than 480px (Mobile only)
    if (window.innerWidth <= 480) {
      // Check if in portrait mode
      if (window.innerHeight > window.innerWidth) {
        document.querySelector('.orientation-warning').style.display = 'flex';
        document.querySelector('.wrapper').style.display = 'none';
      } else {
        document.querySelector('.orientation-warning').style.display = 'none';
        document.querySelector('.wrapper').style.display = 'block';
      }
    } else {
      // For tablet or larger screens, no orientation enforcement
      document.querySelector('.orientation-warning').style.display = 'none';
      document.querySelector('.wrapper').style.display = 'block';
    }
  }
  
  // Listen for orientation change or resize
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('load', checkOrientation);
  

