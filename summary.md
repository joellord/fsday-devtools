# JavaScript Full Stack Day - Dev Tools
In this presentation, we will cover various aspects of the developer tools that you might not know about, of fully exploit.

## Pre-reqs
Open a web server (`serve`) at the root of this folder.

## Opening the Dev Tools
Dev Tools are a web developer's best friend, here's how to use them.

### In the browser
Open the Chrome DevTools with View->Developer->Developer Tools, or use Cmd-Option-I in MacOS.

### In Node.js
You can start dev tools using
```
node inspect ./todo
```
You can use the CLI debugger, or you can open up a new browser window at [chrome://inspect](chrome://inspect)

but we'll come back to the Node.js debugger later.

## Using Dev Tools

* Demo application
* Show source code
* Show bug (not emptying input on submit)

### Elements Tab
* Open the Elements tab
* Highlight elements on page
* Show margins/padding box over UL
* Edit UL, add `style="border: 1px red solid"`
* Right-click, edit as HTML, add LI
* Use the CSS properties on the right to change padding
* Show up/down arrow, ctrl, cmd, shift
* Copy and paste new CSS to editor
* Open the console with Escape

### Console Tab
* Use the console as a REPL
* "string".toUpperCase()
* "string".pad ?
* Create a sum function
* Use the function
* Access the global variables
 * todos;
 * Right click -> Copy Object
 * todos.push({id: 10, text: "Test"});
 * renderTodos(todos);
 * console.log(todos);
 * console.log(todos.join(","));
 * console.log(todos.map(e => e.text).join(","));
* Speaking of console.log...

## Console.logging like a pro
let x = 1;
console.log(x);
let y = 2; let z = 3;
console.log(x, y, z);
{x: x, y: y, z: z}
console.log({x, y, z});
//Console can be cleared wih the no entry symbol, or
console.clear()
let user = "joel__lord", id = 123;
console.log("User name is " + user + ", id : " + id);
console.log("User name is %s, id %d", user, id);
function consoleEverything() {
  console.log("Console Log");
  console.info("Console Info");
  console.debug("Console Debug");
  console.warn("Console Warn");
  console.error("Console Error");
}
consoleEverything();
// Change verbosity
let el = document.querySelector("h1");
console.log(el);
// hover response
console.dir(el);
console.assert(true, "This message might show up");
// Great for CLDD (Console Log Driven Development)
console.assert(todos.length === 3, "There should be three elements in the todo list");
for (let i = 0; i < 10; i++) {
  console.count();
}
// twice
console.countReset()
// count again
for (let i = 0; i < 10; i++) {
  console.count("Counter 1");
}
console.time()
setTimeout(console.timeEnd, 5000);
setTimeout(console.timeLog, 2000);
// Timers can also be named
console.log("Outside");
function funfunc() {
  console.group("Inside the function");
  console.log("First log");
  console.log("Another log");
  console.groupEnd();
}
funfunc();
console.log("Also outside");
// also groupCollapsed
const one = () => two();
const two = () => three();
const three = () => console.trace();
one();
fetch("todos.json").then(r => r.json()).then(data => console.log(data))
fetch("todos.json").then(r => r.json()).then(d => console.table(d))
fetch("todos.json").then(r => r.json()).then(d => console.table(d, "text"))
console.log("%cLet's make it pretty", "border: 1px red solid;color:#ff2cc9;background-color:#00ffff")
let auth = ["%cAuth", "color: white; background-color: blue"];
let api = ["%cAPI", "color: white; background-color: green"];
let error = ["%cError", "color: white; background-color: red; font-size: 3em;"]
console.log(...auth, "User Logged In");
console.log(...api, "Data fetched from API");
console.log(...error, "Holy sh..");

## Back to the Dev Tools
Debugging is more than console.log!

### Debugging in the browser
* Add breakpoints
* Step in, step over, ...
* Output variable (console.log(this); console.dir(this))
* Add watchers
* Add XHR breakpoint
* Add DOM breakpoint

### Debugging in VS Code

## Other debugging stuff
* Sensors
* Phone/tablet breakpoints

