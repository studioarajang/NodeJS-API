var express = require('express');
var router = express.Router();

let auth = require('../helper/auth');

const homeC = require("../controllers/home-controller");
const mahasiswaC = require("../controllers/mahasiswa-controller");
const mhs_biodataC = require("../controllers/mhs_biodata-controller");

// HOME
router.get('/', homeC.getHome)

// Mahasiswa
router.get('/mahasiswa', mahasiswaC.getall)
router.post('/mahasiswa', mahasiswaC.add)
router.put('/mahasiswa', mahasiswaC.edit)

// Biodata Mahasiswa
router.get('/mahasiswabio', mhs_biodataC.getall)
router.post('/mahasiswabio', mhs_biodataC.add)
router.put('/mahasiswabio', mhs_biodataC.edit)

module.exports = router;