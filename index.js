console.log("namaste beta");

    let sounds = [
      { key: "crash", filepath: "sounds/crash.mp3" },
      { key: "kickbass", filepath: "sounds/kick-bass.mp3" },
      { key: "snare", filepath: "sounds/snare.mp3" },
      { key: "tom1", filepath: "sounds/tom-1.mp3" },
      { key: "tom2", filepath: "sounds/tom-2.mp3" },
      { key: "tom3", filepath: "sounds/tom-3.mp3" },
      { key: "tom4", filepath: "sounds/tom-4.mp3" }
    ];

    // Map keyboard keys to sound
    let keyMap = 
    {
      "w":"crash",
      "a": "kickbass",
      "s": "snare",
      "d": "tom1",
      "j": "tom2",
      "k": "tom3",
      "l": "tom4"
    };

    // Add event listener to all buttons
    let buttons = document.querySelectorAll(".drum");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
      });
    }

    // Add event listener to all keys
    document.addEventListener("keydown", function(event) {
      let key = event.key.toLowerCase(); // Convert key to lowercase for consistency
      if (key in keyMap) {
        playSound(key);
        buttonAnimation(key);
      }
    });

    // Play sound
    function playSound(key) {
      let sound = keyMap[key];
      let audio = new Audio(sounds.find(item => item.key === sound).filepath);
      audio.play();
    }

    // Button animation
    function buttonAnimation(key) {
      let activeButton = document.querySelector("." + key);
      activeButton.classList.add("pressed");

      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
    }
