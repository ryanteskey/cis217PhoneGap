/* Created with JetBrains PhpStorm.
 * User: ryant0524
 * Date: 5/14/13
 * Time: 11:52 AM
 * To change this template use File | Settings | File Templates.*/

$(document).ready(function() {
    var cart = new Array();
    $('#wrap li').click(function(){
        var thisID = $(this).attr('id');
        var itemname  = $(this).find('div .name').html();
        var itemprice = $(this).find('div .price').html();
        if(cart[thisID]) { // Returns true if what ever was clicked on is already in the cart.
            var price 	 = $('#each-'+thisID).children(".shopp-price").find('em').html();
            var qty = parseInt($('#each-'+thisID).children(".shopp-quantity").html())+parseInt(1);
            cart[thisID].qty = qty;
            var total = parseInt(itemprice)*parseInt(qty);
            $('#each-'+thisID).children(".shopp-price").find('em').html(total);
            $('#each-'+thisID).children(".shopp-quantity").html(qty);
            var prev_charges = $('.cart-total span').html();
            prev_charges = parseInt(prev_charges)-parseInt(price);
            prev_charges = parseInt(prev_charges)+parseInt(total);
            $('.cart-total span').html(prev_charges);
            $('#total-hidden-charges').val(prev_charges);
            cart[thisID].total = prev_charges;
        } else {
            var prev_charges = $('.cart-total span').html();
            prev_charges = parseInt(prev_charges)+parseInt(itemprice);
            cart[thisID] = new Object();
            cart[thisID].id = thisID;
            cart[thisID].price = itemprice;
            cart[thisID].name = itemname;
            cart[thisID].qty = 1;
            cart[thisID].total = prev_charges;
            $('.cart-total span').html(prev_charges);
            $('#total-hidden-charges').val(prev_charges);
            var location = $('#left_bar .cart-info');
            var remove_image = "images/remove.png"
            add_to_end_of_cart(location, thisID, itemname, itemprice, cart, remove_image);
        }
        //This adds my animation to my products page to lead to my order form.
        animated_objects.call(this, 100, $("a[href=#order]"));
    });
    function animated_objects(move, destination) {
        $(this).clone().insertAfter($(this)).css({
            "position": "absolute",
            "top": ($(this).offset().top - move) + "px",
            "left": $(this).offset().left + "px"
        }).animate({
                "top": (destination.offset().top - move) + "px",
                "left": destination.offset().left + "px",
                "height": '0', "width": "0"}, 1500,
            function () {
                $(this).remove();
            }
        );
    }
    $('.remove').livequery('click', function() {
        var deduct = $(this).parent().children(".shopp-price").find('em').html();
        var prev_charges = $('.cart-total span').html();
        var thisID = $(this).parent().attr('id').replace('each-','');
        delete cart[thisID]
        prev_charges = parseInt(prev_charges)-parseInt(deduct);
        $('.cart-total span').html(prev_charges);
        $('#total-hidden-charges').val(prev_charges);
        $(this).parent().remove();
    });
    $('#Submit').livequery('click', function() {
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = true;
        var check_out_url = '';
        var totalCharge = $('#total-hidden-charges').val();
        for(var item in cart){
            check_out_url+="&name[]="+cart[item].name+"&qty[]="+cart[item].qty+"&price[]="+cart[item].price
        }
        check_out_url+="&total="+totalCharge;
        $.getJSON("buy.php?" + check_out_url,function(data){
            $('#left_bar .cart-info').append(data);
        });
        console.log("http://cis217-4.ryanteskey.com/buy.php?" + check_out_url)
//        $('#left_bar').html('Total Charges: $'+totalCharge);
//        return false;
    });
    function clickCounter(){
        if(typeof(Storage)!=="undefined"){
            localStorage.order = cart
        }else{
            document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
        }
    }
    function add_to_end_of_cart(location, thisID, itemname, itemprice, cart, remove_image) {
        location.append('<div class="shopp" id="each-' + thisID + '"><div class="label">' + itemname + '</div><div class="shopp-price"> $<em>' + itemprice + '</em></div><span class="shopp-quantity">' + cart[thisID].qty + '</span><img src=' + remove_image + ' class="remove" /><br class="all" /></div>');
    }
});