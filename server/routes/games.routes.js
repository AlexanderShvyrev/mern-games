const GameController = require("../controllers/games.controllers");


module.exports = (app) => {

    // Gets All Games
    app.get("/games",GameController.index);

    // Create
    app.post("/games", GameController.create);
    
    // Get One Game
    app.get("/games/:id", GameController.show);
    
    // Update One Game
    app.put("/games/:id", GameController.update);
    
    // Delete One Game
    app.delete("/games/:id",GameController.destroy);
}
