function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product+'-number');
    let ProductNumber = productInput.value;
    if(isIncreasing){
        ProductNumber = parseInt(ProductNumber) + 1;
    }
    else if(ProductNumber>0){
        ProductNumber = parseInt(ProductNumber) - 1;
    }

    productInput.value = ProductNumber

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = ProductNumber * price;

    // calculate Total
    calculateTotal();
};
// phone amount button handler
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})

// case amount button handler
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});

// calculate total
function calculateTotal(){
    const phoneQuantity = document.getElementById('phone-number').value;
    const phoneNumber = parseInt(phoneQuantity);
    const phoneCost = phoneNumber * 1219;
    const caseQuantity = document.getElementById('case-number').value;
    const caseNumber = parseInt(caseQuantity);
    const caseCost = caseNumber * 59;
    const subTotal = phoneCost + caseCost;
    const tax = subTotal * 0.1;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = subTotal + tax;
}

