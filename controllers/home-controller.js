const getHome = (req, res) => {
    res.json({
        message: "Hai, Apakah Anda Tersesat? :)"
    })

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    console.log(today);
}

module.exports = {
    getHome
}