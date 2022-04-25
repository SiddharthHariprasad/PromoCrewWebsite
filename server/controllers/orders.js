import OrderDetails from '../models/OrderDetails.js'

export const getOrders = async (req, res) => {
    try {
        const orderDetails = await OrderDetails.find().sort({ orderID: -1 });

        res.status(200).json(orderDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postOrder = async (req, res) => {
    const order = req.body; 

    const newOrder = new OrderDetails({ ...order, orderCreatedAt: new Date().toISOString() });
    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteOrder = async (req, res) => {
    const { id: oID } = req.params;
    const existCheck = await OrderDetails.exists({ orderID: oID });
    if (!existCheck) {
        return res.status(404).send('No Order with that ID');
    } else {
        const selectedOrder = await OrderDetails.find({orderID: oID}).select('_id');
        await OrderDetails.findByIdAndRemove(selectedOrder);
        res.json({ message: 'Post Deleted successfully' });
    }
}

export const updateOrder = async (req, res) => {
    const { id: oID } = req.params;
    const order = req.body;
    const existCheck = await OrderDetails.exists({ orderID: oID });
    if (!existCheck) {
        return res.status(404).send('No Order with that ID');
    } else {
        const selectedOrder = await OrderDetails.find({orderID: oID}).select('_id');
        const updatedOrder = await OrderDetails.findByIdAndUpdate(selectedOrder, order, { new: true });
        res.json(updatedOrder);
    }
}