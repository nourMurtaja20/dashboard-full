const user = require('../models/User');

exports.index = async (req, res) => {
    let result = await user.findAll()
    return res.status(200).json({ status: true, data: result });
};

exports.store = async (req, res) => {
    let response = await user.create({
        Fname: "nour",
        Lname: "murtaja",
        email: "noormj28@fs.com",
        password: "sdcsdc",
        role: "freelancer"
    })
    return res.status(200).json({ status: true, object: response });
};

