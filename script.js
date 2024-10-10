// Visibility of the dropdown menu
function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // Check the current display style of the menu
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none"; // Hide menu if visible
    } else {
        dropdownMenu.style.display = "block"; // Show menu if hidden
    }
}

// Toggles the nested dropdown categories on click
function toggleDropdown(categoryElement) {
    const dropdownItem = categoryElement.parentElement; // The parent <li> of the clicked category
    const dropdownContent = dropdownItem.querySelector('.dropdown-content');

    // Toggle 'open' class to expand/collapse the nested dropdown
    if (dropdownItem.classList.contains('open')) {
        dropdownItem.classList.remove('open'); // Collapse
        dropdownContent.style.maxHeight = "0"; // Close animation
    } else {
        dropdownItem.classList.add('open'); // Expand
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px"; // Smooth transition animation
    }
}
