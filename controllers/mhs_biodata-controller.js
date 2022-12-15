const response = require('../helper/response');
const connection = require('../helper/connection');

const tb_nama = 'tb_mhs_biodata'

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
                    nik: row.nik,
                    email: row.email,
                    jeniskelamin: row.jeniskelamin,
                    tanggallahir: row.tanggallahir,
                    tanggallahirtext: row.tanggallahirtext,
                    provinsitempatlahir: row.provinsitempatlahir,
                    kabupatentempatlahir: row.kabupatentempatlahir,
                    agama: row.agama,
                    warganegara: row.warganegara,
                    alamat_1_propinsi: row.alamat_1_propinsi,
                    alamat_1_kabupaten: row.alamat_1_kabupaten,
                    alamat_1_kecamatan: row.alamat_1_kecamatan,
                    alamat_1_desa: row.alamat_1_desa,
                    alamat_1_kodepos: row.alamat_1_kodepos,
                    alamat_2_propinsi: row.alamat_2_propinsi,
                    alamat_2_kabupaten: row.alamat_2_kabupaten,
                    alamat_2_kecamatan: row.alamat_2_kecamatan,
                    alamat_2_desa: row.alamat_2_desa,
                    alamat_2_kodepos: row.alamat_2_kodepos,
                    handphone: row.handphone,
                    handpone_2: row.handpone_2,
                    nohp: row.nohp,
                    bidikmisi: row.bidikmisi,
                    nobidikmisi: row.nobidikmisi,
                    nokapbidikmisi: row.nokapbidikmisi,
                    golongandarah: row.golongandarah,
                    statuskawin: row.statuskawin,
                    ID_telegram: row.ID_telegram,
                    pekerjaan: row.pekerjaan,
                    pekerjaan_instansi: row.pekerjaan_instansi,
                    created_at: row.created_at,
                }
            })

            response.ok(true, 'Data Berhasil Diambil', count, data, res);
        }
    });
}

const add = async (req, res) => {

    let nim = req.body.nim;
    let nik = req.body.nik;
    let email = req.body.email;
    let jeniskelamin = req.body.jeniskelamin;
    let tanggallahir = req.body.tanggallahir;
    let tanggallahirtext = req.body.tanggallahirtext;
    let provinsitempatlahir = req.body.provinsitempatlahir;
    let kabupatentempatlahir = req.body.kabupatentempatlahir;
    let agama = req.body.agama;
    let warganegara = req.body.warganegara;
    let alamat_1_propinsi = req.printsertifikat.alamat_1_propinsi;
    let alamat_1_kabupaten = req.body.alamat_1_kabupaten;
    let alamat_1_kecamatan = req.body.alamat_1_kecamatan;
    let alamat_1_desa = req.body.alamat_1_desa;
    let alamat_1_kodepos = req.body.alamat_1_kodepos;
    let alamat_2_propinsi = req.body.alamat_2_propinsi;
    let alamat_2_kabupaten = req.body.alamat_2_kabupaten;
    let alamat_2_kecamatan = req.body.alamat_2_kecamatan;
    let alamat_2_desa = req.body.alamat_2_desa;
    let alamat_2_kodepos = req.body.alamat_2_kodepos;
    let handphone = req.body.handphone;
    let handpone_2 = req.body.handpone_2;
    let nohp = req.body.nohp;
    let bidikmisi = req.body.bidikmisi;
    let nobidikmisi = req.body.nobidikmisi;
    let nokapbidikmisi = req.body.nokapbidikmisi;
    let golongandarah = req.body.golongandarah;
    let statuskawin = req.body.statuskawin;
    let ID_telegram = req.body.ID_telegram;
    let pekerjaan = req.body.pekerjaan;
    let pekerjaan_instansi = req.body.pekerjaan_instansi;

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

        connection.query('INSERT INTO' + tb_nama + '(nim, nik, email, jeniskelamin, tanggallahir, tanggallahirtext, provinsitempatlahir, kabupatentempatlahir, agama, warganegara, alamat_1_propinsi, alamat_1_kabupaten, alamat_1_kecamatan, alamat_1_desa, alamat_1_kodepos, alamat_2_propinsi, alamat_2_kabupaten, alamat_2_kecamatan, alamat_2_desa, alamat_2_kodepos, handphone, handpone_2, nohp, bidikmisi, nobidikmisi, nokapbidikmisi, golongandarah, statuskawin, ID_telegram, pekerjaan, pekerjaan_instansi) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nim, nik, email, jeniskelamin, tanggallahir, tanggallahirtext, provinsitempatlahir, kabupatentempatlahir, agama, warganegara, alamat_1_propinsi, alamat_1_kabupaten, alamat_1_kecamatan, alamat_1_desa, alamat_1_kodepos, alamat_2_propinsi, alamat_2_kabupaten, alamat_2_kecamatan, alamat_2_desa, alamat_2_kodepos, handphone, handpone_2, nohp, bidikmisi, nobidikmisi, nokapbidikmisi, golongandarah, statuskawin, ID_telegram, pekerjaan, pekerjaan_instansi], function (error, rows, field) {
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
    let nik = req.body.nik;
    let email = req.body.email;
    let jeniskelamin = req.body.jeniskelamin;
    let tanggallahir = req.body.tanggallahir;
    let tanggallahirtext = req.body.tanggallahirtext;
    let provinsitempatlahir = req.body.provinsitempatlahir;
    let kabupatentempatlahir = req.body.kabupatentempatlahir;
    let agama = req.body.agama;
    let warganegara = req.body.warganegara;
    let alamat_1_propinsi = req.printsertifikat.alamat_1_propinsi;
    let alamat_1_kabupaten = req.body.alamat_1_kabupaten;
    let alamat_1_kecamatan = req.body.alamat_1_kecamatan;
    let alamat_1_desa = req.body.alamat_1_desa;
    let alamat_1_kodepos = req.body.alamat_1_kodepos;
    let alamat_2_propinsi = req.body.alamat_2_propinsi;
    let alamat_2_kabupaten = req.body.alamat_2_kabupaten;
    let alamat_2_kecamatan = req.body.alamat_2_kecamatan;
    let alamat_2_desa = req.body.alamat_2_desa;
    let alamat_2_kodepos = req.body.alamat_2_kodepos;
    let handphone = req.body.handphone;
    let handpone_2 = req.body.handpone_2;
    let nohp = req.body.nohp;
    let bidikmisi = req.body.bidikmisi;
    let nobidikmisi = req.body.nobidikmisi;
    let nokapbidikmisi = req.body.nokapbidikmisi;
    let golongandarah = req.body.golongandarah;
    let statuskawin = req.body.statuskawin;
    let ID_telegram = req.body.ID_telegram;
    let pekerjaan = req.body.pekerjaan;
    let pekerjaan_instansi = req.body.pekerjaan_instansi;

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

        connection.query('UPDATE' + tb_nama + 'SET nik=?, email=?, jeniskelamin=?, tanggallahir=?, tanggallahirtext=?, provinsitempatlahir=?, kabupatentempatlahir=?, agama=?, warganegara=?, alamat_1_propinsi=?, alamat_1_kabupaten=?, alamat_1_kecamatan=?, alamat_1_desa=?, alamat_1_kodepos=?, alamat_2_propinsi=?, alamat_2_kabupaten=?, alamat_2_kecamatan=?, alamat_2_desa=?, alamat_2_kodepos=?, handphone=?, handpone_2=?, nohp=?, bidikmisi=?, nobidikmisi=?, nokapbidikmisi=?, golongandarah=?, statuskawin=?, ID_telegram=?, pekerjaan=?, pekerjaan_instansi=? WHERE nim=?', [nik, email, jeniskelamin, tanggallahir, tanggallahirtext, provinsitempatlahir, kabupatentempatlahir, agama, warganegara, alamat_1_propinsi, alamat_1_kabupaten, alamat_1_kecamatan, alamat_1_desa, alamat_1_kodepos, alamat_2_propinsi, alamat_2_kabupaten, alamat_2_kecamatan, alamat_2_desa, alamat_2_kodepos, handphone, handpone_2, nohp, bidikmisi, nobidikmisi, nokapbidikmisi, golongandarah, statuskawin, ID_telegram, pekerjaan, pekerjaan_instansi, nim], function (error, rows, field) {
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