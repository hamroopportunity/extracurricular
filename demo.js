
    document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.dropdown');
  
    // Check if the target element is inside the dropdown
    var isInsideDropdown = false;
    dropdowns.forEach(function(dropdown) {
      if (dropdown.contains(event.target)) {
        isInsideDropdown = true;
      }
    });
  
    // Hide the dropdown menu if the target element is outside the dropdown
    if (!isInsideDropdown) {
      hideDropdowns();
    }
  });
  
  // Function to hide all dropdown menus
  function hideDropdowns() {
    var dropdownMenus = document.querySelectorAll('.dropdown-menu');
  
    dropdownMenus.forEach(function(menu) {
      menu.style.display = 'none';
    });
  }
  
  // Function to toggle the visibility of a dropdown menu
  function toggleDropdown(button) {
    var dropdownMenu = button.parentNode.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
  }
  