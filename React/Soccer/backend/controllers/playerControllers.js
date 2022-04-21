import mongoose from 'mongoose';
import {PlayerSchema} from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

// Here controller interacts with the database when we make request to the API. So, the request sends the request to the API with the route and the controller executes the function in the database

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if(err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const getPlayers = (req, res) => {
    Player.find({}, (err, Player) => {
        if(err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId, (err, Player) => {
        if(err) {
            res.send(err);
        }
        res.json(Player);
    });
};
