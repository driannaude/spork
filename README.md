## Spork - An Automation-Ready Project Generator.

![spork image](http://notanengineer.com/blog/wp-content/uploads/2015/04/spork.png "spork-cli interface")

Built with [Bootstrap](https://www.getbootstrap.com), [AngularJS](https://www.angularjs.org), [Grunt](https://www.gruntjs.com), [Bower](https://www.bower.io), [Flexboxgrid](https://www.flexboxgrid.com), and [Animate.css](https://http://daneden.github.io/animate.css/).
An experiment in increasing productivity and optimizing workflow.

### Demo

See it in action [here](http://notanengineer.com/projects/spork/).

### Installation

Using npm:

```
npm install spork-cli
```

---

### Building Spork

###### The Recommended Way:

Spork has its own cli-interface. To create a new project, just call `spork create [your-project-name] <path>` from the command line, i.e:

```
MBA:drian$ spork create myNewSpork projects/sporks/ 
```

If you do get stuck, you can always just call call for help, i.e:

```
MBA:drian$ spork --help
```

or you can call

```
MBA:drian$ spork [command] --help
```

for a more specfic help section about that particular command.


###### Building it Manually:

Simply run the build script from your Terminal (OSX+ Linux Only)

```
./build
```

>NOTE: You may have to change the file permissions to make the build file executable

Alternatively you can manually install everything with npm and bower:

```
npm install
bower install
```

---

### Serve Your Spork

The spork-cli has a wrapper for the grunt serve task, because typing the word `spork` is fun! 

To start serving your project simply use the spork-cli, i.e:

```
spork serve
```

Your default browser should automatically open a new tab and serve the project for you, with livereload to reload after any changes are made.

Or if you prefer the boring, old fashioned way:

```
grunt serve
```


###Enjoy!
