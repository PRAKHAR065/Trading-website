// document.getElementById("analyze-btn").addEventListener("click", function() {
//     const stockSymbol = document.getElementById("stock-search").value;
//     const ownership = document.getElementById("ownership-check").value;
//     const startDate = document.getElementById("start-date").value;
//     const endDate = document.getElementById("end-date").value;

//     // Validate user input for stock analysis
//     if (stockSymbol === "" || startDate === "" || endDate === "") {
//         alert("Please fill in all fields.");
//         return;
//     }

//     // Mock Analysis Result
//     const analysisResult = `
//         Stock Symbol: ${stockSymbol} <br>
//         Ownership: ${ownership === "yes" ? "Already Owned" : "Not Owned"} <br>
//         Timeframe: ${startDate} to ${endDate} <br>
//         Prediction: The stock price is expected to increase by 10% over the next 3 months.
//     `;

//     // Display results
//     const resultsDiv = document.getElementById("results");
//     resultsDiv.innerHTML = analysisResult;
//     document.querySelector(".results-section").style.display = "block";
// });

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

// // Selling stock functionality
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


// Listen for ownership changes and toggle buy/sell options accordingly
document.getElementById("ownership-check").addEventListener("change", function() {
    const ownership = document.getElementById("ownership-check").value;

    if (ownership === "yes") {
        // If the user owns the stock, enable both buy and sell options
        document.getElementById("buy-quantity").disabled = false;
        document.getElementById("buy-price").disabled = false;
        document.getElementById("buy-btn").disabled = false;
        
        document.getElementById("sell-quantity").disabled = false;
        document.getElementById("sell-price").disabled = false;
        document.getElementById("sell-btn").disabled = false;
    } else {
        // If the user does not own the stock, enable only buy options, disable sell options
        document.getElementById("buy-quantity").disabled = false;
        document.getElementById("buy-price").disabled = false;
        document.getElementById("buy-btn").disabled = false;
        
        document.getElementById("sell-quantity").disabled = true;
        document.getElementById("sell-price").disabled = true;
        document.getElementById("sell-btn").disabled = true;
    }
});

// Analyze button functionality remains unchanged
document.getElementById("analyze-btn").addEventListener("click", function() {
    const stockSymbol = document.getElementById("stock-search").value;
    const ownership = document.getElementById("ownership-check").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    if (stockSymbol === "" || startDate === "" || endDate === "") {
        alert("Please fill in all fields.");
        return;
    }

    const analysisResult = `
        Stock Symbol: ${stockSymbol} <br>
        Ownership: ${ownership === "yes" ? "Already Owned" : "Not Owned"} <br>
        Timeframe: ${startDate} to ${endDate} <br>
        Prediction: The stock price is expected to increase by 10% over the next 3 months.
    `;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = analysisResult;
    document.querySelector(".results-section").style.display = "block";
});

// Buying stock functionality
document.getElementById("buy-btn").addEventListener("click", function() {
    const quantity = document.getElementById("buy-quantity").value;
    const price = document.getElementById("buy-price").value;

    if (quantity === "" || price === "") {
        alert("Please enter both quantity and price to buy.");
        return;
    }

    const result = `
        Bought ${quantity} stocks at $${price} each. <br>
        Total cost: $${(quantity * price).toFixed(2)}
    `;

    document.getElementById("results").innerHTML = result;
    document.querySelector(".results-section").style.display = "block";
});

// Selling stock functionality (enabled only if the user owns the stock)
document.getElementById("sell-btn").addEventListener("click", function() {
    const quantity = document.getElementById("sell-quantity").value;
    const price = document.getElementById("sell-price").value;

    if (quantity === "" || price === "") {
        alert("Please enter both quantity and price to sell.");
        return;
    }

    const result = `
        Sold ${quantity} stocks at $${price} each. <br>
        Total revenue: $${(quantity * price).toFixed(2)}
    `;

    document.getElementById("results").innerHTML = result;
    document.querySelector(".results-section").style.display = "block";
});
