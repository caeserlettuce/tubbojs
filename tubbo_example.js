var tubbo = require("./tubbo");


tubbo.debug(true);  // tubboJS will send debug messages to the console
tubbo.log(true);    // tubboJS will save logs of all debug messages

var test_database = tubbo.database("test");     // make database called "test" and put it into variable test_database

test_database["name"] = "caeserlettuce";        // basic json editing
test_database["age"] = 1;                       // basic json editing

tubbo.save("test", test_database);              // saves JSON object test_database to the database we made earlier, "test"

