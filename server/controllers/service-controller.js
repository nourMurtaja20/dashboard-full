const Service = require('../models/Service');

exports.index = async (req, res) => {
    let result = await Service.findAll()
    return res.status(200).json({ status: true, data: result });
};
exports.findbySave = async (req, res) => {
    // res.header("Acccess-Control-Allow-Origin", "*");
    let result = await Service.findAll({ where: { isSave: true } })
    return res.status(200).json({ status: true, data: result });
};
exports.store = async (req, res) => {
    let response = await Service.create({
        serviceName: req.body.serviceName,
        description: req.body.description,
        details: req.body.details,
        guidance: req.body.guidance,
        WhyChooseUs: req.body.WhyChooseUs,
        Pricing: req.body.Pricing
    })
    return res.status(200).json({ status: true, object: response });
};
//update is save
exports.update = async (req, res) => {
    let Services = await Service.findAll({ where: { id: req.body.id } });
    // console.log(Services);
    if (Services.length > 0) {
        let service = Services[0];
        if (service.dataValues.isSave) {
            let response = await service.update({
                isSave: false
            });
            return res.status(200).json({ status: true, object: response })
        } else {
            let response = await service.update({
                isSave: true
            });
            return res.status(200).json({ status: true, object: response })
        }
    } else {
        return res.status(400).json({ status: false, msg: "error" });
    }
};

exports.edit = async (req, res) => {
    let services = await Service.findAll({ where: { id: req.params.id } });
    if (services.length > 0) {
        let service = services[0];
        let response = await service.update({
            serviceName: req.body.serviceName,
            description: req.body.description,
            details: req.body.details,
            guidance: req.body.guidance,
            WhyChooseUs: req.body.WhyChooseUs,
            Pricing: req.body.Pricing
        });
        console.log(response);
        return res.status(200).json({ status: true, object: response });
    } else {
        return res.status(400).json({ status: false, msg: "error" });
    }
};

exports.destroy = async (req, res) => {
    let countdeleteCount = await Service.destroy({
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
