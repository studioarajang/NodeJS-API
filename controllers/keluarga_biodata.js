const response = require('../helper/response');
const connection = require('../helper/connection');

const tb_nama = 'tb_keluargabio'

const getall = async (req, res) => {

    const count = await new Promise(resolve => {
        connection.query('SELECT COUNT(*) AS cnt FROM ' + tb_nama, function (error, rows, field) {
            if (error) {
                console.log(error)
            } else {
                resolve(rows[0].cnt);
            }
        });
    });

    connection.query('SELECT * FROM ' + tb_nama, function (error, rows, field) {
        if (error) {
            console.log(error);
        } else {
            const data = rows.map(row => {
                return {
                    nim: row.nim,
                    namaayah: row.namaayah,
                    namaibu: row.namaibu,
                    namawali: row.namawali,
                    pendayah: row.pendayah,
                    pendibu: row.pendibu,
                    pekerjaanayah: row.pekerjaanayah,
                    pekerjaanibu: row.pekerjaanibu,
                    pekerjaanwali: row.pekerjaanwali,
                    ketpekerjaanayah: row.ketpekerjaanayah,
                    ketpekerjaanibu: row.ketpekerjaanibu,
                    ketpekerjaanwali: row.ketpekerjaanwali,
                    handphoneayah: row.handphoneayah,
                    handphoneibu: row.handphoneibu,
                    handphonewali: row.handphonewali,
                    sdr_adik: row.sdr_adik,
                    sdr_kakak: row.sdr_kakak,
                }
            })

            response.ok(true, 'Data Berhasil Diambil', count, data, res);
        }
    });
}

const add = async (req, res) => {

    let nim = req.body.nim;
    let namaayah = req.body.namaayah;
    let namaibu = req.body.namaibu;
    let namawali = req.body.namawali;
    let pendayah = req.body.pendayah;
    let pendibu = req.body.pendibu;
    let pekerjaanayah = req.body.pekerjaanayah;
    let pekerjaanibu = req.body.pekerjaanibu;
    let pekerjaanwali = req.body.pekerjaanwali;
    let ketpekerjaanayah = req.body.ketpekerjaanayah;
    let ketpekerjaanibu = req.ketpekerjaanibu;
    let ketpekerjaanwali = req.body.ketpekerjaanwali;
    let handphoneayah = req.body.handphoneayah;
    let handphoneibu = req.body.handphoneibu;
    let handphonewali = req.body.handphonewali;
    let sdr_adik = req.body.sdr_adik;
    let sdr_kakak = req.body.sdr_kakak;

    const cek = await new Promise(resolve => {
        connection.query('SELECT COUNT(nim) AS cnt FROM' + tb_nama + 'WHERE nim = ?', [nim], function (error, rows, field) {
            if (error) {
                console.log(error)
            } else {
                resolve(rows[0]);
            }
        });
    });

    if (cek.cnt > 0) {

        response.error(false, "NIM Telah Terdaftar!", 'empty', res);

    } else {

        connection.query('INSERT INTO' + tb_nama + '(nim, namaayah, namaibu, namawali, pendayah, pendibu, pekerjaanayah, pekerjaanibu, pekerjaanwali, ketpekerjaanayah, ketpekerjaanibu, ketpekerjaanwali, handphoneayah, handphoneibu, handphonewali, sdr_adik, sdr_kakak) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nim, namaayah, namaibu, namawali, pendayah, pendibu, pekerjaanayah, pekerjaanibu, pekerjaanwali, ketpekerjaanayah, ketpekerjaanibu, ketpekerjaanwali, handphoneayah, handphoneibu, handphonewali, sdr_adik, sdr_kakak], function (error, rows, field) {
            if (error) {
                console.log(error);
            } else {
                response.ok(true, "Berhasil Menambahkan Data!", 0, 'success', res);
            }
        })

    }
}

const edit = async (req, res) => {

    let nim = req.body.nim;
    let namaayah = req.body.namaayah;
    let namaibu = req.body.namaibu;
    let namawali = req.body.namawali;
    let pendayah = req.body.pendayah;
    let pendibu = req.body.pendibu;
    let pekerjaanayah = req.body.pekerjaanayah;
    let pekerjaanibu = req.body.pekerjaanibu;
    let pekerjaanwali = req.body.pekerjaanwali;
    let ketpekerjaanayah = req.body.ketpekerjaanayah;
    let ketpekerjaanibu = req.ketpekerjaanibu;
    let ketpekerjaanwali = req.body.ketpekerjaanwali;
    let handphoneayah = req.body.handphoneayah;
    let handphoneibu = req.body.handphoneibu;
    let handphonewali = req.body.handphonewali;
    let sdr_adik = req.body.sdr_adik;
    let sdr_kakak = req.body.sdr_kakak;

    const cek = await new Promise(resolve => {
        connection.query('SELECT COUNT(nim) AS cnt FROM' + tb_nama + 'WHERE nim = ?', [nim], function (error, rows, field) {
            if (error) {
                console.log(error)
            } else {
                resolve(rows[0]);
            }
        });
    });

    if (cek.cnt > 0) {

        response.error(false, "NIM Telah Terdaftar!", 'empty', res);

    } else {

        connection.query('UPDATE' + tb_nama + 'SET namaayah=?, namaibu=?, namawali=?, pendayah=?, pendibu=?, pekerjaanayah=?, pekerjaanibu=?, pekerjaanwali=?, ketpekerjaanayah=?, ketpekerjaanibu=?, ketpekerjaanwali=?, handphoneayah=?, handphoneibu=?, handphonewali=?, sdr_adik=?, sdr_kakak=? WHERE nim=?', [namaayah, namaibu, namawali, pendayah, pendibu, pekerjaanayah, pekerjaanibu, pekerjaanwali, ketpekerjaanayah, ketpekerjaanibu, ketpekerjaanwali, handphoneayah, handphoneibu, handphonewali, sdr_adik, sdr_kakak, nim], function (error, rows, field) {
            if (error) {
                console.log(error);
            } else {
                response.ok(true, "Berhasil Menambahkan Data!", 0, 'success', res);
            }
        })

    }
}

module.exports = {
    getall,
    add,
    edit
}