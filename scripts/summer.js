
function updateAfterCoupon() {

    const couponField = document.getElementById("couponInput") ;

    if(couponField.value != "SELL200"){
        alert("Coupon is not valid");
        couponField.value = "";
        return
    }

    const isPrice = parseFloat(document.getElementById("total-price").innerText);

    if (isPrice == 0) {
        alert("You have to add item to cart first");
        couponField.value = "";
        return
    }

    const isDiscount = parseFloat(document.getElementById("discount").innerText);

    if (isDiscount != 0) {
        alert("Coupon already applied");
        couponField.value = "";
        return
    }

    couponField.value = "";

    const price = 0;

    updatePrice(price, true)
}

function addPrice(element) {

    // get the price
    const productName = element.querySelector("h2").innerText;
    const childP = element.querySelector("p");
    const price = parseFloat(childP.innerText);

    const itemBought = document.getElementById("items-bought");
    const totalChild = itemBought.childElementCount;


    const p = document.createElement('p');
    p.innerHTML = `${totalChild + 1}. ${productName}`;
    itemBought.appendChild(p);

    updatePrice(price, false);

}

function updatePrice(price, isDiscount) {

    //get total price
    const totalPrice = parseFloat(document.getElementById("total-price").innerText);
    const discount = parseFloat(document.getElementById("discount").innerText).toFixed(2);

    // add price
    const updatedPrice = totalPrice + price;

    if(updatedPrice >= 200){
        const apply = document.getElementById("applybtn");
        apply.removeAttribute("disabled");
    }

    document.getElementById("total-price").innerText = updatedPrice;

    if (updatedPrice != 0) {
        const purchase = document.getElementById("purchasebtn");
        purchase.removeAttribute("disabled");
    }

    if (discount == 0 && !isDiscount) {

        const updatedTotal = updatedPrice;
        document.getElementById("total").innerText = updatedTotal;

    }

    else {

        const updatedDiscount = (updatedPrice * 0.2).toFixed(2);
        const updatedTotal = updatedPrice - updatedDiscount;

        document.getElementById("discount").innerText = updatedDiscount;
        document.getElementById("total").innerText = updatedTotal;

    }
}

function reload() {

    document.getElementById("total-price").innerText = "0.00";
    document.getElementById("total").innerText = "0.00";
    document.getElementById("discount").innerText = "0.00";

    const itemBought = document.getElementById("items-bought");
    const couponInput = document.getElementById("couponInput");
    itemBought.innerText = "";
    couponInput.value = "";

    const apply = document.getElementById("applybtn");
    apply.setAttribute("disabled", true);

    const purchase = document.getElementById("purchasebtn")
    purchase.setAttribute("disabled", true);



}