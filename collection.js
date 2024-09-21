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
document.addEventListener("DOMContentLoaded", function() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Add event listeners to all checkboxes
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', filterProducts);
    }

    function filterProducts() {
        // Get all checked checkboxes
        let selectedTags = [];
        
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                selectedTags.push(checkboxes[i].value);
            }
        }

        // Get all products
        const products = document.querySelectorAll('.product');

        // If no checkboxes are selected, display all products
        if (selectedTags.length === 0) {
            for (let i = 0; i < products.length; i++) {
                products[i].style.display = 'block'; // Show all products
            }
        } else {
            // Loop through each product
            for (let i = 0; i < products.length; i++) {
                // Get the tags associated with the current product and trim whitespace
                let productTagsText = products[i].querySelector('tags').innerText.trim();
                let productTags = productTagsText.split(',');

                // Trim each product tag using a for loop (avoiding map)
                for (let j = 0; j < productTags.length; j++) {
                    productTags[j] = productTags[j].trim();
                }

                // Check if any of the selected tags match the product's tags
                let match = false;
                for (let k = 0; k < selectedTags.length; k++) {
                    if (productTags.includes(selectedTags[k])) {
                        match = true;
                        break; // Stop loop if a match is found
                    }
                }

                // Show product if it matches any selected tag, otherwise hide it
                if (match) {
                    products[i].style.display = 'block'; // Show product
                } else {
                    products[i].style.display = 'none'; // Hide product
                }
            }
        }
    }
});





