// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// restaurant data(DATA)
// =============================================================
const reservations = [
    // {
    //     routeName: "yoda",
    //     name: "Yoda",
    //     role: "Jedi Master",
    //     age: 900,
    //     forcePoints: 2000
    // },
    // {
    //     routeName: "darthmaul",
    //     name: "Darth Maul",
    //     role: "Sith Lord",
    //     age: 200,
    //     forcePoints: 1200
    // },
    // {
    //     routeName: "obiwankenobi",
    //     name: "Obi Wan Kenobi",
    //     role: "Jedi Master",
    //     age: 55,
    //     forcePoints: 1350
    // }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makereservation.html"));
});

app.get("/viewtables", function (req, res) {
    res.sendFile(path.join(__dirname, "viewtables.html"));
});

// Displays all tables
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// // Displays a single character, or returns false
// app.get("/api/reservations/:reservation", function (req, res) {
//     let chosenReservation = req.params.reservation;

// console.log(chosenReservation);

// for (let i = 0; i < reservations.length; i++) {
//     if (chosen === reservations[i].routeName) {
//         return res.json(reservations[i]);
//     }
// }

// return res.json(false);
// });

// Create New Characters - takes in JSON input
// app.post("/api/characters", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     let newCharacter = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newCharacter);

//     characters.push(newCharacter);

//     res.json(newCharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});