const customer = require('../data/customer.json');
const order = require('../data/order.json');
const {readDataJson,customerDetails,products,totalPrice,isFreeshipping}=require('./api')

console.log(customerDetails(customer))
readDataJson("../data/order.json", result=>{
products(result).forEach((items)=>{
    console.log(items)

})
    console.log(`Összesen: ${totalPrice(result)}ft`)
    const shippingCost=new Promise((resolve, reject)=>{
        if(isFreeshipping(totalPrice(result))){
            resolve('Ingyenes szállítás!')
        }else{
            reject(`Szállítási díj: ${shippingPrice}`)
        }
    });
    shippingCost.then((message)=>{console.log(message);}).catch((message)=>{console.log(message)})


})
