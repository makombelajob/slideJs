This script is used to create a carousel of images or items with automatic and manual navigation. Here is what it does in detail:
📌 Main features:

Manual navigation with left and right buttons
When the button with the ID #right is clicked, the function forward() is called, which moves to the next item.
When the button with the ID #left is clicked, the function back() is called, which moves to the previous item.

Auto-scrolling
An interval of 2 seconds (setInterval(forward, 2000)) automatically advances the items.
When the mouse hovers over the carousel (mouseenter), the auto-scrolling stops (clearInterval(interval)).
When the mouse leaves the carousel (mouseleave), the auto-scrolling resumes.

Update the "active" class
The currently displayed item has the class .active.
When moving forward or backward, the .active class is removed from the current item and added to the next/previous one.
If you reach the end of the list, you move back to the beginning (and vice versa).

Synchronization with a navigation bar
There is an update of the .navigation .active elements to indicate which item is currently displayed in the carousel navigation.

💡 This script is useful for an image slideshow or an interactive element slider with smooth and intuitive navigation! 🎡
