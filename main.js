
//pop up alert for cart icon
function myFunction() {
    alert("Items in your cart (click to remove):\nMilk\nBread\nEggs\n\nSub-total: $11.47\nHST: $1.49\nTtotal: $12.96");
}

//toggle review form on off
function showReview() {
    const reviewToggle = document.querySelector(".reviewForm")
    if (reviewToggle.style.display === "none") {
        reviewToggle.style.display = "block";
    } else {
        reviewToggle.style.display = "none";
    }

}

