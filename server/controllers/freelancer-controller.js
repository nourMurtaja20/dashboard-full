const Freelancer = require('../models/Freelancer');

exports.index = async (req, res) => {
    let result = await Freelancer.findAll()
    return res.status(200).json({ status: true, data: result });
};

exports.store = async (req, res) => {
    let response = await Freelancer.create({
        name: req.body.name,
        fieldOfWork: req.body.fieldOfWork,
        country: req.body.country,
        city: "gaza",
        phoneNo: req.body.phoneNo,
        email: req.body.email,
        password: "12452525",
        rating: 3,
        about: req.body.about,
        bio: req.body.bio,
        eduction: req.body.eduction,
        experiences: req.body.experiences,
        skills: req.body.skills,
        cerficates: req.body.cerficates
    })
    return res.status(200).json({ status: true, object: response });
};

exports.destroy = async (req, res) => {
    let countdeleteCount = await Freelancer.destroy({
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