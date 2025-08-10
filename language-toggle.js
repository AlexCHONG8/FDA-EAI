/**
 * Language Toggle Script for FDA EAI Guidance
 * This script handles switching between English and Chinese content
 */

function toggleLanguage() {
    // Get all elements with English content
    var enElements = document.getElementsByClassName("en-content");
    
    // Get all elements with Chinese content
    var zhElements = document.getElementsByClassName("zh-content");
    
    // Get the language toggle button
    var toggleButton = document.getElementById("language-toggle");
    
    // Check if English is currently displayed
    var isEnglishDisplayed = false;
    if (enElements.length > 0) {
        isEnglishDisplayed = (enElements[0].style.display !== "none");
    }
    
    // Toggle the display
    for (var i = 0; i < enElements.length; i++) {
        enElements[i].style.display = isEnglishDisplayed ? "none" : "block";
    }
    
    for (var i = 0; i < zhElements.length; i++) {
        zhElements[i].style.display = isEnglishDisplayed ? "block" : "none";
    }
    
    // Update the button text
    toggleButton.textContent = isEnglishDisplayed ? "English" : "中文";
}

// Initialize the language toggle based on the current file
document.addEventListener("DOMContentLoaded", function() {
    // Check if this is the Chinese version by looking at the filename
    var isChinese = window.location.href.includes("chinese");
    
    // Get the language toggle button
    var toggleButton = document.getElementById("language-toggle");
    
    // Set the initial button text
    if (toggleButton) {
        toggleButton.textContent = isChinese ? "English" : "中文";
    }
});