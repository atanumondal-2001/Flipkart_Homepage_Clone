function changeMode() {
    let myContainer = document.getElementById("MainBody");
    myContainer.classList.toggle('DarkMode')
}


// For Coupons
function loadCoupon() {
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('allElements').style.opacity = '0.5'
}

function closeCoupon() {
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('allElements').style.opacity = '1';
}