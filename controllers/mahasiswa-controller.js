const response = require('../helper/response');
const connection = require('../helper/connection');

const tb_nama = 'tb_mahasiswa'

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
                    kodeprodi: row.kodeprodi,
                    nama: row.nama,
                    kelasdefault: row.kelasdefault,
                    tipekelas: row.tipekelas,
                    jeniskelas: row.jeniskelas,
                    batasstudi: row.batasstudi,
                    dosenpax: row.dosenpax,
                    password: row.password,
                    printktm: row.printktm,
                    printsertifikat: row.printsertifikat,
                    picture: row.picture,
                    idtipe: row.idtipe,
                    idminat: row.idminat,
                    created_at: row.created_at,
                }
            })

            response.ok(true, 'Data Berhasil Diambil', count, data, res);
        }
    });
}

const add = async (req, res) => {

    let nim = req.body.nim;
    let kodeprodi = req.body.kodeprodi;
    let nama = req.body.nama;
    let kelasdefault = req.body.kelasdefault;
    let tipekelas = req.body.tipekelas;
    let jeniskelas = req.body.jeniskelas;
    let batasstudi = req.body.batasstudi;
    let dosenpax = req.body.dosenpax;
    let password = req.body.password;
    let printktm = req.body.printktm;
    let printsertifikat = req.printsertifikat;
    let picture = req.body.picture;
    let idtipe = req.body.idtipe;
    let idminat = req.body.idminat;

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

        connection.query('INSERT INTO' + tb_nama + '(nim, kodeprodi, nama, kelasdefault, tipekelas, jeniskelas, batasstudi, dosenpax, password, printktm, printsertifikat, picture, idtipe, idminat) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nim, kodeprodi, nama, kelasdefault, tipekelas, jeniskelas, batasstudi, dosenpax, password, printktm, printsertifikat, picture, idtipe, idminat], function (error, rows, field) {
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
    let kodeprodi = req.body.kodeprodi;
    let nama = req.body.nama;
    let kelasdefault = req.body.kelasdefault;
    let tipekelas = req.body.tipekelas;
    let jeniskelas = req.body.jeniskelas;
    let batasstudi = req.body.batasstudi;
    let dosenpax = req.body.dosenpax;
    let password = req.body.password;
    let printktm = req.body.printktm;
    let printsertifikat = req.printsertifikat;
    let picture = req.body.picture;
    let idtipe = req.body.idtipe;
    let idminat = req.body.idminat;

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

        connection.query('UPDATE' + tb_nama + 'SET kodeprodi=?, nama=?, kelasdefault=?, tipekelas=?, jeniskelas=?, batasstudi=?, dosenpax=?, password=?, printktm=?, printsertifikat=?, picture=?, idtipe=?, idminat=? WHERE nim=?', [kodeprodi, nama, kelasdefault, tipekelas, jeniskelas, batasstudi, dosenpax, password, printktm, printsertifikat, picture, idtipe, idminat, nim], function (error, rows, field) {
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