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

export const UpdatePlayer = (req, res) => {
    // Here we are also passing the req.body as it will contain the data to update. Morever, here the {new: true} will make sure that the response will contain the updated player so we can updated information in the response on the postman
    Player.findOneAndUpdate({_id: req.params.PlayerId}, req.body, {new: true}, (err, Player) => {
        if(err) {
            res.send(err);
        }
        res.json(Player);
    });
};

export const deletePlayer = (req, res) => {
    Player.remove({_id: req.params.PlayerId}, (err, Player) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'Successfully deleted player'});
    });
};
