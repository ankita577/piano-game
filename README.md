# Piano Project

This is a simple web-based piano application built with HTML, CSS, and JavaScript. 

## Features

* **Playable Piano Keys:** Click on the piano keys to play corresponding notes.
* **Keyboard Support:** Use your computer keyboard to play the piano.
* **Volume Control:** Adjust the volume using the slider.
* **Show/Hide Keys:** Toggle the display of key labels (letters).
* **Mobile Responsive Design:** The piano layout adjusts for landscape orientation on mobile devices.
* **Visually Appealing:** Features an attractive design with hover and active states for keys.


## Technologies Used

* **HTML:** Structures the piano layout, including the keys, header, and controls.
* **CSS:** Styles the appearance of the piano, including colors, layout, and hover effects.
* **JavaScript:** 
    * Handles user interactions (clicks and key presses).
    * Plays audio files associated with each piano key.
    * Implements volume control.
    * Controls the visibility of key labels.
    * Enforces landscape orientation on mobile devices.

## Functionality

1. **HTML Structure:** The piano keys are created using a combination of `<ul>` and `<li>` elements to represent the white and black keys. Each key is associated with an audio file (`<audio>`) for its corresponding note.

2. **CSS Styling:** The CSS provides the visual presentation of the piano, defining the colors, sizes, and positions of the keys. It also incorporates hover effects to provide visual feedback to the user.

3. **JavaScript Logic:** 
    - **Event Listeners:** The JavaScript code listens for "click" events on the piano keys and "keydown" events for keyboard input.
    - **Audio Playback:** When a key is triggered, the associated audio file is played.
    - **Volume Control:** The volume slider dynamically adjusts the volume of the audio playback.
    - **Key Label Visibility:**  The checkbox controls whether the letters representing the keys are displayed.
    - **Orientation Check (Mobile):** JavaScript checks the device's orientation and displays a warning message if not in landscape mode. 

## How to Use

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Click on the piano keys to play sounds. You can also use your computer keyboard.
4. Use the controls to adjust the volume and toggle the visibility of key labels.

## Future Improvements

* **More Notes:** Expand the piano to include more octaves and a wider range of notes.
* **Record and Playback:** Implement functionality to record and playback user-played melodies.
* **Different Instruments:** Allow users to choose from a selection of different instrument sounds.
* **Touch Support:** Improve touch support for better usability on mobile devices. 
