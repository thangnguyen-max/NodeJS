
const getHomePage = (req, res) => {
    res.send('Hello World! & ')
}
const getABC = (req, res) => {
    res.send('check ABC!')
}
const getThang = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomePage,getABC,getThang
}



