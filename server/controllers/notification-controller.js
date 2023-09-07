const Notification = require('../models/Notification');

exports.index = async (req, res) => {
    let result = await Notification.findAll()
    return res.status(200).json({ status: true, data: result });
};

exports.store = async (req, res) => {
    let response = await Notification.create({
        title: req.body.title,
        from: req.body.from,
        time: req.body.time,
    })
    return res.status(200).json({ status: true, object: response });
};

exports.destroy = async (req, res) => {
    let countdeleteCount = await Notification.destroy({
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

exports.deleteAll = async (req, res) => {
    let countdeleteCount = await Notification.truncate();

    if (countdeleteCount > 0) {
        return res.status(200).json({ status: true, message: "success", object: countdeleteCount });
    } else {
        return res.status(400).json({ status: false, message: "not found" });
    }
};