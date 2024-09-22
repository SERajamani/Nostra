// <script>

var offerBar =document.querySelector(".offerBar")
offerBar.addEventListener("click",function(){
    offerBar.style.display="none"
})

// selecting the side nav bar

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

// Search bar

   var searchInput = document.querySelector('input[type="search"]');

  
   var products = document.querySelectorAll('.product');

   
   searchInput.addEventListener('input', function(event) {
       
       var searchValue = event.target.value.toUpperCase();

      
       products.forEach(function(product) {
           
           var productName = product.querySelector('h1').textContent.toUpperCase();
           if (productName.includes(searchValue)) {
               product.style.display = 'block'; 
           } else {
               product.style.display = 'none'; 
           }
       });
   });

   document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', filterProducts);
    }

    function filterProducts() {
        let selectedTags = [];

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                selectedTags.push(checkboxes[i].value);
            }
        }

        const products = document.querySelectorAll('.product');

        if (selectedTags.length === 0) {
            for (let i = 0; i < products.length; i++) {
                products[i].style.display = 'block'; 
            }
        } else {
            for (let i = 0; i < products.length; i++) {
                // Get the product tags from data-tags attribute
                let productTagsText = products[i].getAttribute('data-tags');
                let productTags = productTagsText.split(',').map(tag => tag.trim());

                // Check if any of the selected tags match the product's tags
                let match = selectedTags.some(tag => productTags.includes(tag));

                if (match) {
                    products[i].style.display = 'block'; 
                } else {
                    products[i].style.display = 'none'; 
                }
            }
        }
    }
});






