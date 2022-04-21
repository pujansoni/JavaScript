import {addNewPlayer, 
    getPlayers,
    getPlayerWithID,
    UpdatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
        .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
    // GET with ID endpoint i.e. Get specific player
        .get(getPlayerWithID)
    // Updating the player
        .put(UpdatePlayer)
    // Deleting the player
    .delete(deletePlayer);
}

export default routes;
