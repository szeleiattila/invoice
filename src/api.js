const fs = require('fs');
const freeShippingOver=50000;
const VAT=1.25;
const shippingPrice=1000;

const readDataJson = (filePath, callback) => {
    fs.readFile(filePath,{encoding: "utf-8", flag: 'r'}, (err, data) => {
        callback(JSON.parse(data))
    })
}

const customerDetails =(customer) =>{
    return ` Rendelés azonosító: ${customer.deliveryCode} \n Vevő: ${customer.name}
 Cím: ${customer.address} \n\n Termék  Mennyiség   Ár  Bruttó ár`;
}

const products =(orderData) =>{
    return orderData.map(n=> `${n.product}       ${n.qty}     ${n.unitPrice*n.qty}      ${n.unitPrice*n.qty*VAT}`)
}

const totalPrice= (orderData) =>{
return orderData.reduce((sum,item)=>sum+(item.unitPrice*item.qty*VAT),0)
}

const isFreeshipping = (price)=>{
    return price >= freeShippingOver;
}

module.exports={
    readDataJson : readDataJson,
    customerDetails: customerDetails,
    products:products,
    totalPrice:totalPrice,
    isFreeshipping:isFreeshipping
}







