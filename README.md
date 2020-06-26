# Hogwarts Memory Madness
## Introduction: 
 The project ‘**Hogwarts Memory Madness**’ is based on the traditional card memory game where a player must turn a card and then turn a second card to see if the pictures match. If no match then the cards are turned back and a new card is picked. The idea is to match the cards in the least amount of turns.
This version will count the number of turned cards to complete the game plus the additional challenge of beating the clock before the game is over.
To try and add another challenge there are four different countdown times. 
The theme for the game is Harry Potter as this is something my daughter has grown up with and loves
## UX: 
### User Goals
*	A game which challenges the player to remember where a picture card is positioned on the board.
*	Interactive game with playability on both desktop and mobile.
*	Smooth animation of cards rotating when clicked upon.
*	Incorporate sound when player interacts with a card.
*	Pop up animation on both win a lose outcomes.
*	Adhere to the imagery of the Harry Potter them:

## User ideas: 
#### N Hobday: 
 *"As a big fan of the Harry Potter franchise the game should incorporate images and sounds from this world. I would like the game to be fun, interactive and challenging. I would prefer to be able to play it on my mobile or tablet.”*
#### J Buckley: 
*"The game should have a magical feel in line with the subject matter. Should by easy to use on mobile as I do not us the laptop for games. The game should be responsive so clicking on cards should trigger the card turn without delay and a countdown to add extra challenge."*

## Requirements:
The requirements for the game are as follows.
*	Create a clock which counts down.
*	Create a counter to track the number of cards clicked.
*	Create front face and back face of the card.
*	Cards need to rotate and rotate back if no match.
*	If cards match, do not rotate back.
*	Enter cards into a match cards array.
*	Create difficulty through reducing the game time.
*	Winner animation is all cards turned before countdown reaches 0.
*	Game over animation displayed upon not turning all cards before countdown reaches 0.
*	Check for all cards turned and clock not 0.
*	No rotation of card if card is already turned.
*	Reset of game.
*	Harry Potter fonts.
*	Harry Potter images.
*	Harry Potter colour scheme.
*	HP music (if time).

## Design:
The theme of this project is Harry Potter and therefore all page elements should be consistant with what everyone has come to expect from this world.

### Images:
Card faces contain images of **Harry Potter**, **Hermoine Granger**, **Hagrid**, **9 ¾ station sign**, **the four house badges for Hufflepuff / Ravenclaw / Gryffindoor / Slytherin**. 
Background image is of the **Grand Hall** in Hogwarts with floating candles. 

Card back displays Hogwarts crest. 
The background image courtesy of [fandom website](https://harrypotter.fandom.com/). 
Card face, back and animation images taken from [Clipart Library](http://clipart-library.com/).

### Fonts: 
I have chosen the harryp font and lumos.font which keep in line with the theme, these were found at [1001freefonts](https://www.1001freefonts.com). The backup to the Harry Potter fonts are Caudex and Chelsea Market from [Google Fonts](https://fonts.google.com).

### Colours: 
The colours which are used correspond to colours used within the houses of Hogwarts.
The colours are:
*	#9c1203 – this is a dark red.
*	#e3a000 – this is a golden yellow.
*	#2d004d – this is purple.
*	#033807 – this is dark green.
*	#00165e – this is purple

### Background: 
I chose the background image as from what I know of Harry Potter there are two images of Hogwarts which stick in my mind, either the outside image of the building or the Grand Hall.

## Wireframe and process mapping:
To begin the process I draw out how I would like the game to appear on mobile and desktop. On mobile defining where start button line up two by two, number of cards in a column and sizing. On desktop buttons in one line and two rows of cards.
In addition to this I have provided a process map where I attempted to draw out the game process with yes / no routes. This allowed me to check through the functions which would be required to generate the game.
These documents can be found at [wireframes](https://github.com/hob71/MP2---Memory-Madness/blob/master/Wireframe.pdf) and [process flow map](https://github.com/hob71/MP2---Memory-Madness/blob/master/Card-Process-Flow.pdf).

## Testing:
Throughout the coding I have been able to test if functions have been called through adding ``console.log()`` at various stages. This code has now been removed from the final version to keep the code clean.
Other testing has involved checking start buttons not active once game begins, unable to rotate if card already turned, reset clears array / clear click count and time and board is locked.
Here is an example of the inspection console during a run:

![Console logs](https://github.com/hob71/Memory-Madness/blob/master/consolelog.png)

Prototype of game was also tested by friends and family. 
Feedback from a few people was around the layout of the cards on mobile. Original layout was two cards and six rows.
Playability was reduced as the player had to scroll up and down to find the cards to match and also slowed game play when against the clock. Now layout is four by four grid which is viewable on one screen without scrolling.
Another problem was found when turning last card with countdown on 0, neither win nor lose game.
In addition to this testing I ran the game on several type of mobile / tablet. This was how I came across the Safari transition issue. Game worked well on Iphone 11 but not on my ipad mini running iOS 12.4.7 or ipad running 13.5.1.

## Bugs:
1. **Problem-**
Sound not working on card click. 
**Fix-**
Problem with source link found through inspection. Corrected and sound added to match cards.

2. **Problem-**
House badges not displaying when different start button clicked. Tested by adding the class name and works but no when class added through Jquery script.
**Fix-**
Still working on and for future version. Images used for card face.

3. **Problem-**
Reset the click counter on restart.
**Fix-**
Targeted wrong variable, looked back through code and corrected.

4. **Problem-**
Screen size enlarges when animation appears on mobile devices.
**Fix-**
Added the ``overflow-x: hidden`` to game screen but this has not fixed problem.

5. **Problem-**
Fonts found do not work, the are 'sanitized' upon page load. Alternative Harry Potter fonts found with same issue.
**Fix-**
Switched to Caudex and Chelsea Market with serif and cursive as backup respectively.

6. **Problem-**
Issue with certain versions of Safari on the transition of card rotation. This is to do with the 'all' which is assigned when just adding XXs. Known bug.
**Fix-**
Several solutions found on internet, insert -webkit-backface-visible: hidden.

7. **Problem-**
On mobile small deal for wand sound on first card match, after this sound happens on time.
**Fix-**
To look at in next version.

8. **Problem-**
If last card turning as countdown hits 0 then no lose or win happens, also start button do not function.
**Fix-**
To compensate for the card rotating at 1s left add an ``if`` clause of ``cardMatchArray.length === 16 && remtime === 0``.

9. **Problem-**
If game is won and new game started countdown is not cleared and countdown displays new time and old time decreasing invalue alternatively
**Fix-**
Believe this is to do with the setInterval but will correct in new version after submission due to time constraints.

10. **Problem-**
If card to rotate is clicked twice very quickly before rotate then card is matched to self and wand sound is called. This only occurs with first card not second card.
**Fix-**
Unfortunately not time to fix. Will be fixed in next version.

## Technologies used:
* HTML
* CSS
* Javascript
* Bootstrap

## Deployment:
The project was developed in Gitpod and pushed to GitHub.

To deploy my Hogwarts Memory Madness project the process was as follows:-
* Opened GitHub in web browser.
* Log in with username and password.
* Select my repositories.
* Selected my project repository, Memory Madness.
* Go to 'settings' at top of page.
* Scroll down to GitHub Pages.
* Chose master branch in 'Source' dropdown menu.

Below are links to my GitHub and published sites.

#### Published site: https://hob71.github.io/Memory-Madness/
#### GitHub site: https://github.com/hob71/Memory-Madness

The code in the deployed version is the same as my gitpod repository.


## Credits:
* Card rotate css code found on [Stackoverflow](https://stackoverflow.com/) - user was web-tiki.
* First 9 lines for function turn() taken from [freeCodeCamp](https://www.freecodecamp.org).
* Shuffle card code taken from youtube shuffle card tutorial.
* As mention previously I would like to credit the source for the images used, [fandom website](https://harrypotter.fandom.com/) and [Clipart Library](http://clipart-library.com/)..
* For the animation code from [codesdope.com](https://www.codesdope.com/blog/article/css3-moving-cloud-animation-with-airplane/).
* Sound of wand credits go to [soundbible](soundbible.com) recorded by Mike Koenig.
* Used [Autoprefixer](https://autoprefixer.github.io/) for the additional vendor kits for the transition and transformation of the card.

## Acknowledge:
A big thank you must be give to my mentor, [Simen Daehlin](github.com/Eventyret), for his support and motivation through this project. Also for the support and understanding given by student care.

## Final Notes:
Going into this project I knew that learning Javascript was a challenge. Whilst developing the project it has helped me understand the language more and how powerful it is. 
I have come out of the other side of this project with better understanding of Javascript.