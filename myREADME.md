myREADME.md

*log of steps to Project 4*

clone git repo; cd into project folder; run http-server (node.js); in another term-tab run gronk; copy url; paste into PageSpeed Insights for analysis; follow suggestions

initial testing: - ngronk to PageSpeed Test: 28/100 mobile 88/100 desktop

for 60 fps section - nav browser to localhost 8080; go to pizza page; open chrome dev-tools;

Grunt build tool:
================
update node.js
update npm
create package.json
create Gruntfile.js



install grunt-cli; install grunt;


*Optimize top-level website: 'index.html'*

install grunt-contrib-uglify

- used grunt uglify to minimize 'js/perfmatters.js' into 'js/perfmatters.min.js'; changed 'index.html' to use the minimized file
2nd testing: - ngronk to PageSpeed Test: 27/100 mobile 89/100 desktop

eliminating call to web fonts:
3rd testing:    mobile speed increased to 28/100; desktop speed increased to 90/100

- images - source locally rather than from remote dbase - change index.html "src="
4th testing: 74/100 mobile 84/100 desktop -(turns out these were the wrong images - remote images are thumbnails)

compress images - grunt-contrib-imagemin
 pizzeria.jpg - too LARGE for imagemin - throws EPIPE error
   made a thumb size version with GIMP - put it in img/comp with other compressed images

minify css using grunt-contrib-cssmin
5th testing - 75/100 mobile 89/100 desktop

add media query for print:
6th testing - 74/100 mobile 89/100 desktop

add link to stylesheet dynamically after loading body of html
revert to remotely accessed thumbnail images
7th testing - 95/100 mobile 95/100 desktop

downloaded remote db thumbs and used imagemin on them
8th testing - 91/100 mobile 95/100 desktop
  ??? why is this slower than getting the thumbnail images from the cloud?

60fps section




