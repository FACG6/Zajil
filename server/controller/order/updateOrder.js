const updateOrdersQuery = require('../../database/queries/order/editOrder');
const checkIfItemExistQuery = require('../../database/queries/item/checkItem');
const insertItemQuery = require('../../database/queries/item/insertItem');
const deleteItemQuery = require('../../database/queries/item/deleteItem');

const queriesPromise = (items, orderId) => new Promise((resolve, reject) => {
  checkIfItemExistQuery(items, orderId).then((result) => {
    if (result.deleteItems) {
      const itemsIds = items.deleted.map(e => e.itemId);
      deleteItemQuery(itemsIds).catch((e) => {
        reject(e);
      });
    }
    if (result.insertItems) {
      insertItemQuery(items.edited, orderId).catch(
        e => reject(e),
      );
    }
  }).then(() => resolve('updated'))
    .catch((e) => {
      reject(e);
    });
});

const updateOrder = (req, res) => {
  console.log(465453);
  const {
    phone, address, items, storeID,
  } = req.body;
  updateOrdersQuery(phone, address, storeID, req.params.id)
    .then(() => queriesPromise(items, req.params.id))
    .then(() => {
      res.status(200).send('updated successfully');
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send('Internal server error');
    });
};
module.exports = { updateOrder };
