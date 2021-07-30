exports.test = (req, res, next) => {
    try {
        const users = require('../public/users.json');
        return res.render('index', { users });
    } catch (error) {
        next(error);
    }   
}