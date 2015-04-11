### Spork - An Automation-Ready Project Generator.
##### This is the Spork Boilerplate repo, for the spork-cli, see [here](https://github.com/driannaude/spork-cli)
![spork image](http://notanengineer.com/blog/wp-content/uploads/2015/04/spork.png "spork-cli interface")

Built with [Bootstrap](https://www.getbootstrap.com), [AngularJS](https://www.angularjs.org), [Grunt](https://www.gruntjs.com), [Bower](https://www.bower.io), [Flexboxgrid](https://www.flexboxgrid.com), and [Animate.css](https://http://daneden.github.io/animate.css/).
An experiment in increasing productivity and optimizing workflow. 

__Spork is very much in the early stages of development, so please tread carefully, here be dragons and disorder.__

---


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
spork create myNewSpork projects/sporks/ 
MBA:drian$ spork create myNewSpork projects/sporks/ 
```

If you do get stuck, you can always just call call for help, i.e:

```
spork --help
MBA:drian$ spork --help
```

or you can call

```
spork [command] --help
MBA:drian$ spork [command] --help
```

for a more specfic help section about that particular command.


> 
##A note for Windows Users:
Spork uses bower to manage its dependencies. It will run a check to see if bower is installed and install it for you, but git needs to be set up properly on you machine.
Please ensure that this is done before running spork, as it will fail when you try to create a new project if git is not accessible from the command-line. For more info about bower's requirements, please see the [Bower Documentation](https://github.com/bower/bower#windows-users). You can also download Git for Windows manually [here](http://git-scm.org/).
>

###### Building it Manually:

Simply clone the repo and run the build script from your Terminal (OSX+ Linux Only)

```
git clone https://github.com/driannaude/spork

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
### See it in Action

The Spork project page was created using Spork. See it in action [here](http://notanengineer.com/projects/spork/).

---

###Some Legal Stuff
THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

###Enjoy!
