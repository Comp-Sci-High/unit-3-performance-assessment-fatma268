const express = require("express")
const app = express()

app.use((req, res ,next) => {
    console.log(req.method, req.url)
    next()
})

const bakingData = {
  brownies: {
    name: "Brownies",
    prepTime: 15,
    bakeTime: 30,
    difficulty: "Easy",
    ingredients: ["flour", "cocoa powder", "sugar", "butter", "eggs"],
    description: "Rich and fudgy chocolate brownies."
  },
  chocolateChipCookies: {
    name: "Chocolate Chip Cookies",
    prepTime: 20,
    bakeTime: 12,
    difficulty: "Easy",
    ingredients: ["flour", "sugar", "butter", "eggs", "chocolate chips"],
    description: "Classic soft cookies filled with chocolate chips."
  },
  vanillaCupcakes: {
    name: "Vanilla Cupcakes",
    prepTime: 20,
    bakeTime: 18,
    difficulty: "Easy",
    ingredients: ["flour", "sugar", "butter", "eggs", "vanilla extract"],
    description: "Light and fluffy vanilla cupcakes."
  },
  bananaBread: {
    name: "Banana Bread",
    prepTime: 15,
    bakeTime: 60,
    difficulty: "Easy",
    ingredients: ["bananas", "flour", "sugar", "butter", "eggs"],
    description: "Moist bread made with ripe bananas."
  },
  blueberryMuffins: {
    name: "Blueberry Muffins",
    prepTime: 15,
    bakeTime: 25,
    difficulty: "Easy",
    ingredients: ["flour", "sugar", "milk", "eggs", "blueberries"],
    description: "Soft muffins packed with fresh blueberries."
  },
  cheesecake: {
    name: "Cheesecake",
    prepTime: 30,
    bakeTime: 55,
    difficulty: "Medium",
    ingredients: ["cream cheese", "sugar", "eggs", "vanilla", "graham crackers"],
    description: "Creamy baked cheesecake with a graham cracker crust."
  },
  applePie: {
    name: "Apple Pie",
    prepTime: 40,
    bakeTime: 50,
    difficulty: "Medium",
    ingredients: ["apples", "flour", "butter", "sugar", "cinnamon"],
    description: "Traditional apple pie with a flaky crust."
  },
  cinnamonRolls: {
    name: "Cinnamon Rolls",
    prepTime: 45,
    bakeTime: 25,
    difficulty: "Medium",
    ingredients: ["flour", "yeast", "butter", "sugar", "cinnamon"],
    description: "Soft rolls swirled with cinnamon sugar."
  },
  lemonCake: {
    name: "Lemon Cake",
    prepTime: 20,
    bakeTime: 35,
    difficulty: "Easy",
    ingredients: ["flour", "sugar", "eggs", "lemon juice", "butter"],
    description: "Bright and tangy lemon-flavored cake."
  },
  croissants: {
    name: "Croissants",
    prepTime: 60,
    bakeTime: 20,
    difficulty: "Hard",
    ingredients: ["flour", "butter", "yeast", "milk", "salt"],
    description: "Flaky French pastries made with layered dough."
  }
}

app.get("/", (req,res) => {
    res.send(`
        <h1>Welcome to the baking API! </h1>
        <p> Here you can access treats and their ingredients.</p>
        <p> Go to /docs for more info </p>
        `) 
})

app.get("/docs", (req,res) => {
    res.send(`
        <h1>Documentation </h1>
        <p> Go to /{dessertName} (ex: /brownies) for its:  preperation time, baking time, difficulty, ingredients, and description.</p>
        <p> Go to /ingredients/ {dessertName} (ex: ingredients/brownies) for just a list of ingredients. </p>
        <p> Our available desserts are: brownies, chocalateChipCookies, vanillaCupcakes, bananaBread, blueberryMuffins, cheesecake, applePie, cinnamonRolls, lemonCake, and croissants. </p>
        `) 
})

app.get("/:dessertName", (req,res) => {
    const name = req.params.dessertName
    res.status(200).json(bakingData[name]) 
})

app.get("/ingredients/:dessertName", (req,res) => {
    const name = req.params.dessertName
    const dessert = bakingData[name]
    res.status(200).json(dessert.ingredients) 
})



app.use((req, res) => {
    res.status(404).send("Page not found, return to /docs")
  
})

app.listen(3000, () => {
    console.log("Server is running on 3000")
})

