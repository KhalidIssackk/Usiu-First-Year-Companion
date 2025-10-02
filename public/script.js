// USIU First-Year Companion (v1) - JavaScript
// Uses only Lesson 1 concepts: variables, operators, prompts, alerts, console, DOM manipulation

// Global variable to store student name
let studentName = "";

/**
 * Initialize greeting on page load
 * Demonstrates: prompt(), alert(), string concatenation, DOM manipulation, console.log
 */
function initializeGreeting() {
    console.log("=== USIU First-Year Companion Initialized ===");
    console.log("Timestamp:", new Date().toLocaleString());
    
    // Prompt for student name
    studentName = prompt("Welcome to USIU! What's your first name?");
    
    // Handle if user cancels prompt
    if (studentName === null || studentName === "") {
        studentName = "Student";
        console.log("User cancelled name prompt, using default:", studentName);
    } else {
        console.log("Student entered name:", studentName);
    }
    
    // Display Swahili welcome alert
    alert("Karibu, " + studentName + "! 🎉");
    
    // Update greeting on page
    document.getElementById("greeting").textContent = "Hello, " + studentName + " 👋";
    
    console.log("Greeting initialized successfully");
}

/**
 * Run the campus cost/commute estimator
 * Demonstrates: Number(), arithmetic operators, template literals, DOM updates
 */
function runEstimator() {
    console.log("\n=== Running Cost Estimator ===");
    console.log("Initiated by:", studentName);
    
    // Collect inputs via prompts with realistic USIU context
    const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
    console.log("Days per week:", days);
    
    const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120 for Thika Rd)"));
    console.log("Cost per trip (KSh):", costPerTrip);
    
    const snacksPerDay = Number(prompt("Snacks per day? (e.g., 2)"));
    console.log("Snacks per day:", snacksPerDay);
    
    const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));
    console.log("Snack price (KSh):", snackPrice);
    
    // Validate inputs
    if (isNaN(days) || isNaN(costPerTrip) || isNaN(snacksPerDay) || isNaN(snackPrice)) {
        alert("⚠️ Please enter valid numbers for all fields!");
        console.log("ERROR: Invalid input detected. Calculation aborted.");
        return;
    }
    
    if (days < 0 || costPerTrip < 0 || snacksPerDay < 0 || snackPrice < 0) {
        alert("⚠️ Values cannot be negative!");
        console.log("ERROR: Negative values detected. Calculation aborted.");
        return;
    }
    
    // Perform calculations
    const transportWeekly = days * costPerTrip * 2; // Round trip calculation
    const snacksWeekly = days * snacksPerDay * snackPrice;
    const totalWeekly = transportWeekly + snacksWeekly;
    const save10 = totalWeekly * 0.10; // 10% savings calculation
    const totalWithSavings = totalWeekly - save10;
    
    // Log all calculation details for debugging
    console.log("\n--- Calculation Results ---");
    console.log({
        days: days,
        costPerTrip: costPerTrip,
        snacksPerDay: snacksPerDay,
        snackPrice: snackPrice,
        transportWeekly: transportWeekly,
        snacksWeekly: snacksWeekly,
        totalWeekly: totalWeekly,
        save10: save10,
        totalWithSavings: totalWithSavings
    });
    
    // Format and display summary
    const summary = `
Weekly Transport:  KSh ${transportWeekly.toFixed(2)}
  (${days} days × KSh ${costPerTrip} × 2 trips)

Weekly Snacks:     KSh ${snacksWeekly.toFixed(2)}
  (${days} days × ${snacksPerDay} snacks × KSh ${snackPrice})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Weekly Total:      KSh ${totalWeekly.toFixed(2)}

💡 Smart Tip: By carpooling or bringing snacks from home,
you could save 10% (KSh ${save10.toFixed(2)}) weekly!

New Weekly Total:  KSh ${Math.round(totalWithSavings)}

🎯 Suggested Action: Try reducing snack purchases by 
bringing home-made snacks 2 days/week. This saves money 
and supports healthier eating habits!
    `;
    
    // Update page content
    document.getElementById("summary").innerText = summary;
    
    // Generate personalized student info
    const timestamp = new Date().toLocaleDateString();
    document.getElementById("student-id").textContent = 
        "Generated for: " + studentName + " | Date: " + timestamp;
    
    // Alert user that calculation is complete
    alert("✅ Check your summary on the page. All details logged to console for debugging.");
    
    console.log("Estimator completed successfully");
}

/**
 * Toggle between day and night theme
 * Demonstrates: conditional logic, style manipulation, string comparison
 */
function toggleTheme() {
    console.log("\n=== Theme Toggle Triggered ===");
    
    const current = document.body.style.backgroundColor;
    console.log("Current background color:", current);
    
    // Toggle between light and dark themes
    if (current === "white" || current === "" || current === "rgb(255, 255, 255)") {
        // Switch to dark theme
        document.body.style.backgroundColor = "#111";
        document.body.style.color = "white";
        console.log("Switched to DARK theme");
    } else {
        // Switch to light theme
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        console.log("Switched to LIGHT theme");
    }
    
    console.log("New background color:", document.body.style.backgroundColor);
    console.log("New text color:", document.body.style.color);
}

/**
 * Extension Feature: Auto-set theme based on time of day
 * Demonstrates: Date object, conditional logic, automatic initialization
 */
function autoSetTheme() {
    const hour = new Date().getHours();
    console.log("\n=== Auto Theme Check ===");
    console.log("Current hour:", hour);
    
    // Set dark theme between 6 PM (18:00) and 6 AM (06:00)
    if (hour >= 18 || hour < 6) {
        document.body.style.backgroundColor = "#111";
        document.body.style.color = "white";
        console.log("Auto-applied DARK theme (nighttime)");
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        console.log("Auto-applied LIGHT theme (daytime)");
    }
}

/**
 * Extension Feature: Reset summary to default state
 * Demonstrates: DOM manipulation, user feedback
 */
function resetSummary() {
    console.log("\n=== Reset Summary Triggered ===");
    
    document.getElementById("summary").innerText = 
        "Run the estimator to see your weekly plan…";
    document.getElementById("student-id").textContent = "";
    
    alert("🔄 Summary has been reset. Run the estimator again when ready!");
    console.log("Summary reset completed");
}

// Log that script has loaded
console.log("✓ script.js loaded successfully");
console.log("Ready for user interaction");
