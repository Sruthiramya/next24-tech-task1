// backend/routes/orderRoutes.js
const express = require('express');
const { createOrder, getUserOrders, updateOrderStatus } = require('../controllers/orderController');
const router = express.Router();

router.post('/', createOrder);
router.get('/:userId', getUserOrders);
router.put('/:orderId', updateOrderStatus);

module.exports = router;