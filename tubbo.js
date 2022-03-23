const fs = require("fs");

// tubbo.js is the new fancy database command for use with javascript webapps.
// highly advanced.
// amazing.


// variables init

var tubbo_debug = true;         // if tubbo will semd debug messages to console
var tubbo_log = true;           // if tubbo will save logs of everything that happens (reccomended only for testing)
var tubbo_prefix = "TUBBOJS";   // prefix used in debug messages
var tubbo_folder = "tubbojs";   // name of the working folder all tubbojs databases n stuff will be saved in
var tubbo_log_folder = "logs";  // name of the folder all the logs will be saved in (this folder will be inside working folder)
var tubbo_log_filename = getDate().replace(":", "-").replace(":", "-").replace(" ", "_");
var tubbo_database_json = '{}'; // default json to be added

if (tubbo_debug == true) {
    console.log(`[${tubbo_prefix} INIT]: variables loaded.`);
}


// check if tubbo folder exists

if (fs.existsSync(`${tubbo_folder}`)) {
    console.log(`[${tubbo_prefix} INIT]: tubbo folder exists.`);
} else {
    console.log(`[${tubbo_prefix} INIT]: tubbo folder does not exist. creating.`);
    fs.mkdirSync(`${tubbo_folder}`);
}

if (tubbo_log == true) {
    if (fs.existsSync(`${tubbo_folder}/${tubbo_log_folder}`)) {
        console.log(`[${tubbo_prefix} INIT]: tubbo log folder exists.`);
    } else {
        console.log(`[${tubbo_prefix} INIT]: tubbo log folder does not exist. creating.`);
        fs.mkdirSync(`${tubbo_folder}/${tubbo_log_folder}`);
    }
}
console.log(`[${tubbo_prefix} INIT]: tubbo folders loaded.`);

function getDate() {            // get date
    var today = new Date();
    var td_year = today.getFullYear();
    var td_month = today.getMonth();
    var td_day = today.getDate();
    var td_hour = today.getHours();
    var td_minute = today.getMinutes();
    var td_second = today.getSeconds();
    return `${td_day}-${td_month + 1}-${td_day} ${td_hour}:${td_minute}:${td_second}`
}

console.log(`[${tubbo_prefix} INIT]: tubbo date function loaded.`)



function deb(message, funcy) {                                      // DEBUG FUNCTION
    if (tubbo_debug == true) {
        var addition = "";                                          // addition to prefix to state specific function
        if (funcy != undefined || funcy != null) {
            addition = ` ${funcy.toUpperCase()}`;                   // if funcy is not empty, set additional prefix
        }
        console.log(`[${tubbo_prefix}${addition}]: ${message}`);    // debug only if debug mode is on
    }
    if (tubbo_log == true) {
        fs.appendFile(`${tubbo_folder}/${tubbo_log_folder}/${tubbo_log_filename}.txt`, `[${getDate()} ${tubbo_prefix}${addition}]: ${message}\n`, (err) => {
            if (err) throw err;
        });
    }
}
//deb("testing 123");

function database(name) {
    deb(`looking for '${tubbo_folder}/${name}.json'...`, 'database');
    var rawJSON = "";
    if (fs.existsSync(`${tubbo_folder}/${name}.json`)) {
        deb(`database file exists, writing to it!`, 'database');
        // exists
        rawJSON = fs.readFileSync(`${tubbo_folder}/${name}.json`);
    } else {
        deb(`database file does not exist, making file`, 'database');
        fs.appendFile(`${tubbo_folder}/${name}.json`, `${tubbo_database_json}`, (err) => {
            if (err) throw err;
        });
        deb(`database file has been made.`, 'database');
    }
    return JSON.parse(rawJSON);
    deb(`database loaded.`, 'database');
}

function save(database, new_data) {
    deb(`database file exists, writing to it!`, 'save');
    var jsonString = JSON.stringify(new_data);

    fs.writeFile(`${tubbo_folder}/${database}.json`, `${jsonString}`, (err) => {
        if (err) throw err;
    });
}

//var test_database = database("test");

//test_database["name"] = "caeserlettuce";
//test_database["age"] = 1;

//save("test", test_database);

//exports.<alias> = <function name>;

exports.deb = deb;
exports.database = database;
exports.save = save;