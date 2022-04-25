import CartDetails from '../models/CartDetails.js'

export const getCarts = async (req, res) => {
    try {
        const cartDetails = await CartDetails.find().sort({ cartID: -1 });

        res.status(200).json(cartDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postCart = async (req, res) => {
    const cart = req.body; 

    const newCart = new CartDetails({ ...cart, cartID: req.userId, cartCreatedAt: new Date().toISOString() });
    try {
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteCart = async (req, res) => {
    const { id: cID } = req.params;
    const existCheck = await CartDetails.exists({ _id: cID });
    if (!existCheck) {
        return res.status(404).send('No Cart with that ID');
    } else {
        const selectedCart = await CartDetails.find({ _id: cID }).select('_id');
        await CartDetails.findByIdAndRemove(selectedCart);
        res.json({ message: 'Post Deleted successfully' });
    }
}

export const updateCart = async (req, res) => {
    const { id: cID } = req.params;
    const cart = req.body;
    const existCheck = await CartDetails.exists({ cartID: cID });
    if (!existCheck) {
        return res.status(404).send('No Cart with that ID');
    } else {
        const selectedCart = await CartDetails.find({cartID: cID}).select('_id');
        const updatedCart = await CartDetails.findByIdAndUpdate(selectedCart, cart, { new: true });
        res.json(updatedCart);
    }
}