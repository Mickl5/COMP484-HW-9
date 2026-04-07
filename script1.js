// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
const now = new Date();

// 2. Get the current month, day, and year
let month = now.getMonth() + 1;
let day = now.getDate();
const year = now.getFullYear();

// 3. Adjust month if needed (JavaScript months are 0-based)
// (Handled in step 2)

// 4. Add leading zeros to month/day if needed
const mm = month < 10 ? '0' + month : month;
const dd = day < 10 ? '0' + day : day;

// 5. Create a string in the format: "Today is MM/DD/YYYY"
const dateString = "Today is " + mm + "/" + dd + "/" + year;

// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = dateString;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
const val1 = "50";
const val2 = "10";
const val3 = "12.99";
const val4 = "JavaScript";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

const num1 = Number(val1);
const nan1 = Number.isNaN(num1);
const int1 = Number.isInteger(num1);

const num2 = Number(val2);
const nan2 = Number.isNaN(num2);
const int2 = Number.isInteger(num2);

const num3 = Number(val3);
const nan3 = Number.isNaN(num3);
const int3 = Number.isInteger(num3);

const num4 = Number(val4);
const nan4 = Number.isNaN(num4);
const int4 = Number.isInteger(num4);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
const s1 = "Original: '" + val1 + "' -> Converted: " + num1 + " -> isNaN: " + nan1 + " -> isInteger: " + int1;
const s2 = "Original: '" + val2 + "' -> Converted: " + num2 + " -> isNaN: " + nan2 + " -> isInteger: " + int2;
const s3 = "Original: '" + val3 + "' -> Converted: " + num3 + " -> isNaN: " + nan3 + " -> isInteger: " + int3;
const s4 = "Original: '" + val4 + "' -> Converted: " + num4 + " -> isNaN: " + nan4 + " -> isInteger: " + int4;

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
const combinedResults = s1 + "<br>" + s2 + "<br>" + s3 + "<br>" + s4;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"
document.getElementById("numberConversionOutput").innerHTML = combinedResults;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
const price = 25.00;
const quantity = 3;
const discount = 5.50;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
const subtotal = price * quantity;
const total = subtotal - discount;

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
const formattedTotal = total.toFixed(2);

// 4. Build a string showing your results
const mathResultString = "Subtotal: " + subtotal + " | Total after discount: $" + formattedTotal;

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathResultString;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements

if (Number.isNaN(num4)) {
    document.getElementById("numberConversionOutput").innerHTML += "<p>Alert: The last value is not a valid number.</p>";
} else {
    document.getElementById("numberConversionOutput").innerHTML += "<p>All values are valid numbers.</p>";
}

if (total >= 50) {
    document.getElementById("mathOutput").innerHTML += "<p>Status: Free Shipping Applied!</p>";
} else {
    document.getElementById("mathOutput").innerHTML += "<p>Status: Shipping charges apply.</p>";
}

// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
