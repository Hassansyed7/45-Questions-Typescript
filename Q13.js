// 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehicles = ["Honda motorcycle", "Honda Civic", "Lexus LX570"];
vehicles.map(function (items) { return console.log("\u201CI would like to own a ".concat(items, "\u201D")); });
