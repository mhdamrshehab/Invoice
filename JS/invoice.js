
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("display_name").textContent = sessionStorage.getItem("name");
    document.getElementById("display_mobile").textContent = sessionStorage.getItem("mobile");
    document.getElementById("display_info1").textContent = sessionStorage.getItem("info1");
    document.getElementById("display_cost1").textContent = sessionStorage.getItem("cost1");
    document.getElementById("display_info2").textContent = sessionStorage.getItem("info2");
    document.getElementById("display_cost2").textContent = sessionStorage.getItem("cost2");
    document.getElementById("display_info3").textContent = sessionStorage.getItem("info3");
    document.getElementById("display_cost3").textContent = sessionStorage.getItem("cost3");
    document.getElementById("display_info4").textContent = sessionStorage.getItem("info4");
    document.getElementById("display_cost4").textContent = sessionStorage.getItem("cost4");
    document.getElementById("display_info5").textContent = sessionStorage.getItem("info5");
    document.getElementById("display_cost5").textContent = sessionStorage.getItem("cost5");
    document.getElementById("display_info6").textContent = sessionStorage.getItem("info6");
    document.getElementById("display_cost6").textContent = sessionStorage.getItem("cost6");
    document.getElementById("display_info7").textContent = sessionStorage.getItem("info7");
    document.getElementById("display_cost7").textContent = sessionStorage.getItem("cost7");
    document.getElementById("display_info8").textContent = sessionStorage.getItem("info8");
    document.getElementById("display_cost8").textContent = sessionStorage.getItem("cost8");
    document.getElementById("display_info9").textContent = sessionStorage.getItem("info9");
    document.getElementById("display_cost9").textContent = sessionStorage.getItem("cost9");
    document.getElementById("display_info10").textContent = sessionStorage.getItem("info10");
    document.getElementById("display_cost10").textContent = sessionStorage.getItem("cost10");

    const cost1 = parseFloat(sessionStorage.getItem("cost1")) || 0;
    const cost2 = parseFloat(sessionStorage.getItem("cost2")) || 0;
    const cost3 = parseFloat(sessionStorage.getItem("cost3")) || 0;
    const cost4 = parseFloat(sessionStorage.getItem("cost4")) || 0;
    const cost5 = parseFloat(sessionStorage.getItem("cost5")) || 0;
    const cost6 = parseFloat(sessionStorage.getItem("cost6")) || 0;
    const cost7 = parseFloat(sessionStorage.getItem("cost7")) || 0;
    const cost8 = parseFloat(sessionStorage.getItem("cost8")) || 0;
    const cost9 = parseFloat(sessionStorage.getItem("cost9")) || 0;
    const cost10 = parseFloat(sessionStorage.getItem("cost10")) || 0;
    
    // Retrieve the delivery cost from sessionStorage

    // Calculate the total cost
    const totalCost = cost1 + cost2 + cost3 + cost4 + cost5 + cost6 + cost7 + cost8+ cost9 + cost10 ;

    // Display the total cost
    document.getElementById("display_totalCost").textContent = totalCost;
    document.getElementById("display_totalCostArabic").textContent = ("فقط "+toArabicWord(totalCost)+" جنيه لا غير");
});

// Example usage:
