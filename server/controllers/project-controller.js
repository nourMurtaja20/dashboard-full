const project = require('../models/Project');

exports.index = async (req, res) => {
    // res.header("Acccess-Control-Allow-Origin", "*");
    let result = await project.findAll()
    return res.status(200).json({ status: true, data: result });
};

exports.findbySave = async (req, res) => {
    // res.header("Acccess-Control-Allow-Origin", "*");
    let result = await project.findAll({ where: { isSave: true } })
    return res.status(200).json({ status: true, data: result });
};

exports.store = async (req, res) => {
    let { projectName, field, founderCountry, focusCountry, deadline, details, about, stepsApply } = req.body
    let response = await project.create({
        projectName,
        field,
        founderCountry,
        focusCountry,
        deadline,
        details,
        about,
        stepsApply,
    });
    return res.status(200).json({ status: true, object: response });
};

//update is save
exports.update = async (req, res) => {
    let projects = await project.findAll({ where: { id: req.body.id } });
    // console.log(Services);
    if (projects.length > 0) {
        let project = projects[0];
        if (project.dataValues.isSave) {
            let response = await project.update({
                isSave: false
            });
            return res.status(200).json({ status: true, object: response })
        } else {
            let response = await project.update({
                isSave: true
            });
            return res.status(200).json({ status: true, object: response })
        }
    } else {
        return res.status(400).json({ status: false, msg: "error" });
    }

};

exports.edit = async (req, res) => {
    let projects = await project.findAll({ where: { id: req.params.id } });
    if (projects.length > 0) {
        let project = projects[0];
        let response = await project.update({
            projectName: req.body.projectName,
            field: req.body.field,
            founderCountry: req.body.founderCountry,
            focusCountry: req.body.focusCountry,
            deadline: req.body.deadline,
            details: req.body.details,
        });
        return res.status(200).json({ status: true, object: response });
    } else {
        return res.status(400).json({ status: false, msg: "error" });
    }
};

exports.destroy = async (req, res) => {
    let countdeleteCount = await project.destroy({
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