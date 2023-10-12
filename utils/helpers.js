module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_price: price => {
        return (Math.round(price * 100) / 100).toFixed(2);
    },
    get_price_params: products => {
        let x = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        let y = [x[0].price, x[x.length-1].price]
        return y
    },

    getServerSideProps: async function() {
        const featuredProductId = '64dfac49918f50837ef604cc';
        await mongooseConnect();
        const featuredProduct = await Product.findById(featuredProductId);
        const products = await Product.find({}, null, {sort: {'_id':-1}});
        const categories = await Category.find({}, null, {sort: {'_id':-1}});
        return {
          props: {
            featuredProduct: JSON.parse (JSON.stringify(featuredProduct)),
            products: JSON.parse(JSON.stringify(products)),
            categories: JSON.parse(JSON.stringify(categories))
          },
        }
      }

    
};

// function findParams(params){
//     const x = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     const y = [x[0].price, x[x.length-1].price]
//     return y
//  }
