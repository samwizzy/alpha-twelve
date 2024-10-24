/**
 * Collapse Side-Pane Events
 */
const sidepaneEl = document.querySelector(".side-pane");
const collapseEl = document.querySelector("li.collapse-btn");

collapseEl.addEventListener("click", function (event) {
  if (document.body.classList.contains("collapsible")) {
    document.body.classList.remove("collapsible");
  } else {
    document.body.classList.add("collapsible");
  }
});

/**
 * Toggle Side-Pane with hamburger
 */
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function (event) {
  document.body.classList.toggle("closed");
});

/**
 * Modal Events
 */

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("openModal");

// Get the <img> element that closes the modal
const closeImg = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeImg.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

/**
 * Theme Switch Events
 */
const toggleThemeButton = document.getElementById("toggle-theme");

// Check if dark mode is already set in local storage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle theme when the button is clicked
toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save the current theme in local storage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

/**
 * Media Query for Side-Pane
 */
const mediaQuery = window.matchMedia("(max-width: 1268px)");

function updateLayout(e) {
  if (e.matches) {
    // Mobile layout
    document.body.classList.add("closed");
  } else {
    // Desktop layout
    document.body.classList.remove("closed");
  }
}

mediaQuery.addEventListener("change", updateLayout);

// Initial check
updateLayout(mediaQuery);

/**
 * Custom Select Events
 */

// Function to close all select dropdowns
function closeAllSelect(exceptElement) {
  const allSelectItems = document.querySelectorAll(".select-items");
  const allSelected = document.querySelectorAll(".select-selected");

  allSelectItems.forEach(function (item) {
    if (item !== exceptElement) {
      item.classList.add("select-hide");
    }
  });
}

// Loop through all custom select elements
document.querySelectorAll(".custom-select").forEach(function (customSelect) {
  const selectedDiv = customSelect.querySelector(".select-selected");
  const selectItemsDiv = customSelect.querySelector(".select-items");

  // When the select is clicked
  selectedDiv.addEventListener("click", function (e) {
    // Close all other select dropdowns
    closeAllSelect(selectItemsDiv);

    // Toggle the current dropdown
    selectItemsDiv.classList.toggle("select-hide");
  });

  // Loop through each option in the dropdown
  selectItemsDiv.querySelectorAll("div").forEach(function (option) {
    option.addEventListener("click", function () {
      selectedDiv.textContent = this.textContent;
      selectItemsDiv.classList.add("select-hide");
    });
  });
});

// Close the dropdown if the user clicks outside any select
document.addEventListener("click", function (e) {
  const clickedInsideSelect = e.target.closest(".custom-select");
  if (!clickedInsideSelect) {
    closeAllSelect();
  }
});
