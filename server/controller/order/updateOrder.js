const updateOrdersQuery = require('../../database/queries/order/editOrder');
const updateItemQuery = require('../../database/queries/item/editItem');
const checkIfItemExistQuery = require('../../database/queries/item/checkItem');
const insertItemQuery = require('../../database/queries/item/insertItem');

const updateOrder = (req, res) => {
  const {
    phone, address, items, date, storeID,
  } = req.body;
  updateOrdersQuery(phone, address, date, storeID, req.params.id)
    .then(
      () => new Promise((resolve, reject) => {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < items.length; i++) {
          checkIfItemExistQuery(
            items[i],
            // eslint-disable-next-line no-loop-func
          ).then((result) => {
            if (result) {
              updateItemQuery(items[i].name, date, items[i].price, req.params.id).catch(e => reject(e));
            } else {
              insertItemQuery(items[i].name, items[i].price, req.params.id).catch(e => reject(e));
            }
          }).catch(e => reject(e));
        }
      }),
    )
    .then(() => res.status(200).send('updated successfully'))
    .catch(() => {
      res.status(500).send('Internal server error');
    });
};
module.exports = { updateOrder };
