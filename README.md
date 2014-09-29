<h1>Startup UI</h1>

A startup workflow to a FrontEnd project, compile your Less files, minify your Javascript, run tests on your code and make reports. All based on Node.Js<br>

<h2>Easy Setup</h2>
1. If you don't have Node.js. Go to <a href="http://nodejs.org/">Nodejs.org</a> and install it.
2. Clone this repository <code>git clone https://github.com/luckmattos/startup-ui.git</code>,<br>or download it <code>https://github.com/luckmattos/startup-ui/archive/master.zip</code>.
3. Open the Terminal(MacOS) or Command Prompt(Windows), make sure you are on the repository folder.
4. Install Grunt. <code>npm install grunt</code>. MacOS Users: Use <code>sudo npm install grunt</code>.

<h2>Usage - Grunt Tasks</h2>
<p>On the Terminal or CommandPrompt(Windows) execute these tasks:</p>

<strong>Task "grunt" or "grunt dev":</strong><br>
1. Run this when you are developing, it will run the default task which is: <code>grunt watch</code>. This will let grunt observe all js/less files for modifications and compile them on the fly.

<strong>Task "grunt build":</strong><br>
1. Compiles "dev/less/main.less" to CSS on "dist/css/".<br>
2. Minify all .js files from "dev/" to "dist/js/".<br>
3. Minify all image files from "dev/img/" to "dist/img/".

<strong>Task "grunt test":</strong><br>
1. Runs JsHint javascript validator.

<strong>Task "grunt report":</strong><br>
1. Runs Plato, a javascript visual and detailed report. Reports are saved on a folder called "reports".

<h2>Customizing package.json</h2>
To build the files Grunt uses informations locate it on the <code>package.json</code>.<br>Put your project's name, version, repository and authors to customize the output files.

<h2>Used Node Packages:</h2>
<p>
<strong>Grunt</strong><br>
Plugins: Watch, JsHint, Plato, Uglify, Less, Imagemin.
</p>

<h2>Folders</h2>
<strong>Dev:</strong><br>
Development, here we put the all our assets and custom files (Javascript and Less). <br>

<strong>Dist:</strong><br>
Distribution, here we put the CSS, minified JS and compiled Images. <br>

<strong>Reports:</strong><br>
Javascript Reports, visual and detailed information of code lines, coverage, syntax, errors, etc. <br>
