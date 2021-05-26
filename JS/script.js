// cost of all product in the cart

var total =0;

// index
var i = 1;

//message
var message ="please select a size";

// List of the amount of every product in the cart

var itemCost =[];

var cart = document.querySelector(".cart");

var articles = document.querySelector(".articles");


//add to cart
function add(n){
  //n is the rank of the item
  sizeId = "size" + n;
  messageId= "message" + n;
  size = document.getElementById(sizeId).value;
 if (size === "size") {
   document.getElementById(messageId).innerHTML=message;
   return 0;
 }
 //getting id of all selected item
 brand = "brand" + n;
 priceId = "price" +n;
 quantityId ="quantity" + n;
 // getting details of the selected item
 Name = document.getElementById(brand).innerHTML;
 price = document.getElementById(priceId).innerHTML;
 quantity = document.getElementById(quantityId).value;

 // creating li element to add it to ul
  var node = document.createElement("LI");
  item = "item" + i;
  node.setAttribute("id", item)
  //cost of selected item
  itemCost[i-1] = Number(price) * Number(quantity);
  //updating the index i
  i += 1;
  //text of the li element
  var textnode = document.createTextNode(Name+" "+quantity+"x "+price+" $, Size: "+ size);
  // add the text to li element
  node.appendChild(textnode);
  //add li element to ul list
  document.getElementById("items").appendChild(node);

  total += Number(price) * Number(quantity);

  //update the total
  document.getElementById("total").innerHTML= "Total: " + total.toFixed(2) +"$";

  //remove button

  document.getElementById(item).innerHTML += '<button onclick="deleteItem('+"'"+item+"'"+')"class="delete-button">Delete</button>';

  cart.style.display="block";
  articles.style.margin ="0 50px"

  
}



// delete message when the select element is cklicked
function deleteE(eId) {
  document.getElementById(eId).innerHTML='';
  
}

//remove a product from the cart
function deleteItem(eId) {
  document.getElementById(eId).remove();
  n = Number (eId.slice(-1)) -1;
  //remove the cost of the product deleted from the cart
  total -= itemCost[n];
  //updating the cost of products in the cart
  document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) +"$";
}