const Template = require('../models/Template');

exports.index = async (req, res) => {
    let result = await Template.findAll()
    return res.status(200).json({ status: true, data: result });
};

exports.store = async (req, res) => {
    let response = await Template.create({
        name: req.body.name,
        conceptNote: req.body.conceptNote,
        scope: req.body.scope,
        type: req.body.type,
        Reference: req.body.Reference,
        path: req.body.path
    })
    return res.status(200).json({ status: true, object: response });
};

exports.destroy = async (req, res) => {
    let countdeleteCount = await Template.destroy({
        where: {
            id: req.params.id
        }
    });

    if (countdeleteCount > 0) {
        return res.status(200).json({ status: true, message: "success", object: countdeleteCount });
    } else {
        return res.status(400).json({ status: false, message: "not found" });
    }
};
