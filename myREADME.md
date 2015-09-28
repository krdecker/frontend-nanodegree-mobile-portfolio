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

- images - source locally rather than from remote dbase - change index.html "src="
3rd testing: - ngronk to PageSpeed Test: 74/100 mobile 84/100 desktop

