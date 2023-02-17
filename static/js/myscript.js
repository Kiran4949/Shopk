$('#slider1, #slider2, #slider3, #slider4').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3,
            nav: false,
            autoplay: true,
        },
        800: {
            items: 3,
            nav: true,
            autoplay: true,
        },
        1000: {
            items: 6,
            nav: true,
            loop: true,
            autoplay: true,
        },
        1400: {
            items: 9,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})

// This is plus button in the Quantity of Cart, its a AJAX code and also we can update the data to our page using of javascript to show without Refresh The Page hence we choose to update data using javascript.
$('.plus-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    $.ajax({
        type: "GET",
        url: "/pluscart",
        data: {
            prod_id: id
        },
        success: function(data) {
           eml.innerText = data.quantity
           location.reload(true);
           document.getElementById("amount").innerText = data.amount
           document.getElementById("totalamount").innerText = data.totalamount
        }
    })
})

$('.minus-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
   // console.log(id)
    $.ajax({
        type: "GET",
        url: "/minuscart",
        data: {
            prod_id: id
        },
        success: function(data) {
           eml.innerText = data.quantity
           location.reload(true);
           document.getElementById("amount").innerText = data.amount
           document.getElementById("totalamount").innerText = data.totalamount
        }
    })
})

$('.remove-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = this
   // console.log(id)
    $.ajax({
        type: "GET",
        url: "/removecart",
        data: {
            prod_id: id
        },
        success: function(data) {
           document.getElementById("amount").innerText = data.amount
           document.getElementById("totalamount").innerText = data.totalamount
           eml.parentNode.parentNode.parentNode.parentNode.remove()
        }
    })
})