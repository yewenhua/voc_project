var devices = {
    insertOne:'INSERT INTO devices (openid, brand) VALUES(?, ?)',
    findById:'SELECT * FROM devices WHERE id = ?',
};

var orders = {
    insertOne:'INSERT INTO orders (order_id, status) VALUES(?, ?)',
};

//exports
module.exports = {
    devices: devices,
    orders: orders
};