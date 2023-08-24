module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_price: price => {
        return (Math.round(price * 100) / 100).toFixed(2);
    }
    
};