# tubboJS, the new way to use databases


TubboJS is a JS library for using simple databases. This will absolutely not be better than most SQL languages, but i'm writing it mainly for myself to use.

*this project is in no way affiliated with [Tubbo.](https://twitch.tv/tubbo)*

if there are any bugs or issues, use the fancy github issue tracker (tm)


use
===

here's how to use

### setup

first, download the newest release of tubboJS, and put 'tubbo.js' in your folder with your other js code. Then, at the top of the js file you want to use, put:

```javascript
var tubbo = require('./tubbo');
``` 


### getting databases

to get a database, simply:

```javascript
var my_database = tubbo.database("my_database");
```
input any string as the name of the database, which will also be used as the filename for the database.

it will return a JSON object that you can go and edit as json

this command also works to make databases that are nonexistent

### saving databases

to save a database, (also) simply:

```javascript
tubbo.save(my_database, "my_database");
```

the first input should be a JSON object, the second input is the database name (like what we set above);

### debug stuff

to turn on debug messages, use this:

```javascript
tubbo.debug(true);
```

if you want to turn them off, use `false`

to turn on logging debug outputs to files, use this:

```javascript
tubbo.log(true)
```

and same with this one, use `false` to turn them off.

both debug and log are set to `false` by default.

### advanced stuff

at the top of tubbo.js are all the init variables. they can be changed to your liking. i shall explain all of them here


|var|default value|description|
|---|---|---|
|`tubbo_debug`|`false`|if tubboJS will output debug messages into the console|
|`tubbo_log`|`false`|if tubboJS will log debug messages to a .txt file|
|`tubbo_prefix`|`TUBBOJS`|the prefix that shows up in debug messages<br>example: `[TUBBOJS]: finished saving database to file.`|
|`tubbo_folder`|`tubbojs`|the name of the folder that is made to save databases in|
|`tubbo_log_folder`|`logs`|the name of the folder inside of your main tubbo folder that will contain any logs made.|
|`tubbo_database_json`|`{}`|json that will be put in a newly created database using `tubbo.database()`|

dont touch `tubbo_log_filename` please




## notes & to-do

- [x] save/load databases