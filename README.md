
Udacity Front-end PROJECT 4
===========================

**Website Optimization**
========================

To View:
-------

- a1. download zip or clone the repository
- a2. open the index.html file in your browser
**OR**
- b1. navigate in browser to:
[http://krdecker.github.io/frontend-nanodegree-mobile-portfolio/](http://krdecker.github.io/frontend-nanodegree-mobile-portfolio/)



**Optimizations performed:**

To achieve Pagespeed Insights scores above 90% for both mobile and desktop:

    - added a media query for print.css
    - added async attribute for analytics scripts
    - replaced the call to google webfonts with an inline font definition
    - compressed images using grunt-contrib-imagemin
    - compressed javascript using grunt-contrib-uglify
    - minified css using grunt-contrib-cssmin

To increase frame-rate of scrolling back-ground pizzas to 60fps or better:

    - reduced the number of pizzas to 24 from 200, as that is all that are visible
    - re-factored code for calculating positions of pizza images

To lower the re-sizing speed of the fore-ground layer pizza images:

    - moved all calculations to the outside of the pizza element size re-assignment loop
    - re-factored switching code to use storage arrays







***

***


**Steps to Project 4**
(semi-private log -- most likely tl;dr:-))


clone git repo; cd into project folder; run http-server (node.js); in another term-tab run gronk; copy url; paste into PageSpeed Insights for analysis; follow suggestions

initial testing: - ngronk to PageSpeed Test: 28/100 mobile 88/100 desktop

for 60 fps section - nav browser to localhost 8080; go to pizza page; open chrome dev-tools;

Grunt build tool:
    - update node.js
    - update npm
    - create package.json
    - create Gruntfile.js

install grunt-cli; install grunt;



_Optimize top-level website: 'index.html'_

install grunt-contrib-uglify
    - used grunt uglify to minimize 'js/perfmatters.js' into 'js/perfmatters.min.js'; changed 'index.html' to use the minimized file
2nd testing: - ngronk to PageSpeed Test: 27/100 mobile 89/100 desktop

eliminate call to web fonts:
3rd testing:    mobile speed increased to 28/100; desktop speed increased to 90/100

- images - source locally rather than from remote dbase - change index.html "src="
4th testing: 74/100 mobile 84/100 desktop
(turns out these were the wrong images - remote images are thumbnails - but these images are
 later compressed for use by the other html pages)

compress images - grunt-contrib-imagemin
    - pizzeria.jpg - too LARGE for imagemin - throws EPIPE error
    - made a thumb size version with GIMP - put it in img/comp with other compressed images

minify css using grunt-contrib-cssmin
5th testing - 75/100 mobile 89/100 desktop

add media query for print:
6th testing - 74/100 mobile 89/100 desktop

add link to stylesheet dynamically after loading body of html
    - revert to remotely accessed thumbnail images
7th testing - 95/100 mobile 95/100 desktop

downloaded remote db thumbs and used imagemin on them
8th testing - 91/100 mobile 95/100 desktop
  ??? why is this slower than getting the thumbnail images from the cloud?



_60fps section_

at line 501: in function 'updatePositions' made two changes:
    - use the document's 'getElementsByClassName' method to grab the small pizzas,
    rather than 'querySelectorAll'
    - changed the position calculation to use a counter variable for the position offset,
    rather than calculate the offset by applying the modulus function to the loop index

at line 540: in the document object's 'addEventListener' method's callback function
    - changed the number of small animated pizzas created from 200 to 24, as that is all that are visible on screen.

one Large "Conceited Wormhole" please . . . hahaha

_Pizza Resizing_

- changed all querySelector methods to getElementBy methods
- in 'changePizzaSizes' moved all calculations and queries outside the loop that assigns
    new width to the pizza elements
- re-factor to eliminate function call to 'sizeSwitcher()'
- complete re-factoring of 'resizePizzas' using arrays to store the three values of sizes
