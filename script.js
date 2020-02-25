fuction incrementString(input) {
var splits = input.split(/(\d +) $/),
number = 1;
if (splits[1]! == undefined) number =parseInt(splits[1] + 1;
return splits[0] + number;
