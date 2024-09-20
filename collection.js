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
    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function() {
        // Get all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        // Add event listeners to all checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterProducts);
        });

        function filterProducts() {

            // Get all checked checkboxes
            let checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
            
            // Get the values (tags) of the checked checkboxes
            let selectedTags = checkedBoxes.map(box => box.value);
            
            // Get all the products
            let products = document.querySelectorAll('.product');

            // Loop through each product and show/hide based on the selected tags
            products.forEach(product => {
                let productTags = product.querySelector('tags').innerText.split(',');

                // If there's a match between product tags and selected tags, show the product
                if (selectedTags.some(tag => productTags.includes(tag))) {
                    product.style.display = 'block'; // Show product
                } else {
                    product.style.display = 'none'; // Hide product
                }
            });
        }
    });

