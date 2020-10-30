const router = require('express').Router();
const WOD = require('../models/wod');

router.get('/api/workouts/range', function (req, res) {
    WOD.find().then(wodDb => {
        res.json(wodDb);
    }).catch(err => {
        res.json(err);
    })
});

router.get('/api/workouts', (req, res) => {
    console.log("/api/workouts get")
    WOD.find().then(wodDb => {
        res.json(wodDb);
    }).catch(err => {
        res.json(err);
    })
});

router.put('/api/workouts/:id', ({body, params}, res) => {
    console.log(body, params);
    WOD.findByIdAndUpdate(
        // id is returned undefined
        params.id,
        {$push: {exercises: body}},
        {new: true, runValidators: true}
    ).then(wodDb => {
        console.log(wodDb)
        res.json(wodDb);
    }).catch(err => {
        res.json.apply(err);
    })
});

router.post('/api/workouts', (req, res) => {
    console.log("/api/workouts in here")
    WOD.create(req.body).then(wodDb => {
        res.json(wodDb);
    }).catch(err => {
        res.json(err);
    })
});

router.post('/api/workouts/range', function (req, res) {
    console.log("/api/workouts/range in here ")
    WOD.find().then(wodDb => {
        res.json(wodDb)
    }).catch(err => {
        res.json(err)
    })
});

module.exports = router;