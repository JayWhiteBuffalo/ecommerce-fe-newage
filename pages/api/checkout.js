import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/modals/Product";
import { Order } from "@/modals/Order";
require('stripe');

export default async function hander(req,res){
    if (req.method !== 'POST'){
        res.json('should be a POST request');
        return;
    }

    const {name,email,city,postalCode,streetAddress,country,products} = req.body;

    await mongooseConnect();

    const productsIds = products.split(',');
    const uniqueIds = [...new Set(productsIds)];
    const productsInfo = await Product.find({_id:uniqueIds});

    let line_items = [];
    for (const productId of uniqueIds){
        const productInfo = productsInfo.find(p => p._id.toString() === productId);
        const quantity = productsIds.filter(id => id === productId)?.length || 0;
        if (quantity > 0){
            line_items.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: {name:productInfo.title},
                    unit_amount: quantity * productInfo.price,
                },
            });
        }
    }

    const orderDoc = await Order.create({
        line_items,name,email,city,postalCode,streetAddress,country,paid:false,
    })

}