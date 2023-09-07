const question = require('../models/Question');

exports.index = async (req, res) => {
    let result = await question.findAll()
    return res.status(200).json({ status: true, data: result });
};

exports.store = async (req, res) => {
    let response = await question.create({
        fullName: "nour",
        organizationName: "sffs",
        position: "developer",
        email: "noor@gmail.com",
        service: "deve",
        mobileNumber: "0599999999",
        prefferedDeliveryDate: "2022.2.2",
        path: "dfbddf",
        requirements: "sdgsgvdvg"
    })
    return res.status(200).json({ status: true, object: response });
};

