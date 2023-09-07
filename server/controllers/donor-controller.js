const Donor = require('../models/Donor');

exports.index = async (req, res) => {
    let result = await Donor.findAll()
    return res.status(200).json({ status: true, data: result });
};
exports.findbySave = async (req, res) => {
    // res.header("Acccess-Control-Allow-Origin", "*");
    let result = await Donor.findAll({ where: { isSave: true } })
    return res.status(200).json({ status: true, data: result });
};
exports.store = async (req, res) => {
    let response = await Donor.create({
        imageSrc: "https://picsum.photos/50",
        donorName: req.body.donorName,
        scopeOfWork: req.body.scopeOfWork,
        focusCountry: req.body.focusCountry,
        about: req.body.about,
        workHistory: req.body.workHistory,
    })
    return res.status(200).json({ status: true, object: response });
};
//update is save
exports.update = async (req, res) => {
    let Donors = await Donor.findAll({ where: { id: req.body.id } });
    if (Donors.length > 0) {
        let donor = Donors[0];
        if (donor.dataValues.isSave) {
            let response = await donor.update({
                isSave: false
            });
            return res.status(200).json({ status: true, object: response })
        } else {
            let response = await donor.update({
                isSave: true
            });
            return res.status(200).json({ status: true, object: response })
        }
    } else {
        return res.status(400).json({ status: false, msg: "error" });
    }

};
exports.edit = async (req, res) => {
    let donors = await Donor.findAll({ where: { id: req.params.id } });
    if (donors.length > 0) {
        let donor = donors[0];
        let response = await donor.update({
            about: req.body.about,
            scopeOfWork: req.body.scopeOfWork,
            workHistory: req.body.workHistory,
            focusCountry: req.body.focusCountry,
        });
        return res.status(200).json({ status: true, object: response });
    } else {
        return res.status(400).json({ status: false, msg: "error" });
    }
};
exports.destroy = async (req, res) => {
    let countdeleteCount = await Donor.destroy({
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