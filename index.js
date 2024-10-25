let stockList = [];

        // Load stock list from JSON file
        $.getJSON("MCAP28032024.json", function(data) {
            stockList = data.Sheet1; // Accessing the array under the "Sheet1" key
        });

        $(document).ready(function () {
            const $dropdownList = $("#dropdown-list");
            const $searchInput = $("#stock-search");

            // Display dropdown suggestions based on input
            $searchInput.on("input", function () {
                const searchQuery = $(this).val().toUpperCase();
                $dropdownList.empty();

                if (searchQuery.length > 0) {
                    const filteredStocks = stockList.filter(stock =>
                        stock.Symbol.startsWith(searchQuery)
                    );

                    if (filteredStocks.length > 0) {
                        filteredStocks.forEach(stock => {
                            $dropdownList.append(
                                `<li data-symbol="${stock.Symbol}">${stock.Symbol} - ${stock['Company Name']}</li>`
                            );
                        });
                        $dropdownList.show();
                    } else {
                        $dropdownList.hide();
                    }
                } else {
                    $dropdownList.hide();
                }
            });

            // Select stock from dropdown
            $dropdownList.on("click", "li", function () {
                const selectedStock = $(this).data("symbol");
                $searchInput.val(selectedStock);
                $dropdownList.hide();
            });

            // Hide dropdown if clicked outside
            $(document).click(function (e) {
                if (!$(e.target).closest(".search-section").length) {
                    $dropdownList.hide();
                }
            });
        });
// // Buying stock functionality
// document.getElementById("buy-btn").addEventListener("click", function() {
//     const quantity = document.getElementById("buy-quantity").value;
//     const price = document.getElementById("buy-price").value;

//     if (quantity === "" || price === "") {
//         alert("Please enter both quantity and price to buy.");
//         return;
//     }

//     const result = `
//         Bought ${quantity} stocks at $${price} each. <br>
//         Total cost: $${(quantity * price).toFixed(2)}
//     `;

//     document.getElementById("results").innerHTML = result;
//     document.querySelector(".results-section").style.display = "block";
// });

// // Selling stock functionality (enabled only if the user owns the stock)
// document.getElementById("sell-btn").addEventListener("click", function() {
//     const quantity = document.getElementById("sell-quantity").value;
//     const price = document.getElementById("sell-price").value;

//     if (quantity === "" || price === "") {
//         alert("Please enter both quantity and price to sell.");
//         return;
//     }

//     const result = `
//         Sold ${quantity} stocks at $${price} each. <br>
//         Total revenue: $${(quantity * price).toFixed(2)}
//     `;

//     document.getElementById("results").innerHTML = result;
//     document.querySelector(".results-section").style.display = "block";
// });
