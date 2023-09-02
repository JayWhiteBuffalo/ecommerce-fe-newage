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
    }

    
};

// function findParams(params){
//     const x = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     const y = [x[0].price, x[x.length-1].price]
//     return y
//  }
