const index = (req, res) => {
    res.render('profile', {
        title: "Profile"
    })
}

module.exports = {index}