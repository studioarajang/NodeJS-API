exports.ok = function (success, message, count, values, res) {
    var data = {
        'status': 200,
        'success': success,
        'message': message,
        'count': count,
        'data': values
    };

    res.json(data);
    res.end();
};

exports.pagination = function (success, message, count, page, values, res) {
    var data = {
        'status': 200,
        'success': success,
        'message': message,
        'page_count': count,
        'page_number': page,
        'data': values
    };

    res.json(data);
    res.end();
};

exports.noAkses = function (res) {
    var data = {
        'status': 404,
        'success': false,
        'message': 'Access Denied',
        'data': 'empty.'
    };

    res.status(404);
    res.json(data);
    res.end();
};

exports.error = function (success, message, values, res) {
    var data = {
        'status': 500,
        'success': success,
        'message': message,
        'data': values
    };

    res.status(500);
    res.json(data);
    res.end();
};