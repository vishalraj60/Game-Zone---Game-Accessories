document.addEventListener('DOMContentLoaded', function () {
  // Get all category elements
  const categories = document.querySelectorAll('.glow-category');

  // Function to close all dropdowns except the current one
  function closeOtherDropdowns(currentCategory) {
    categories.forEach(category => {
      if (category !== currentCategory) {
        category.classList.remove('active');
      }
    });
  }

  // Add click event listeners for all devices
  categories.forEach(category => {
    const categoryButton = category.querySelector('span');

    // Handle click on category button
    categoryButton.addEventListener('click', function (e) {
      e.stopPropagation();
      const isActive = category.classList.contains('active');
      closeOtherDropdowns(category);

      // Toggle the clicked category
      if (!isActive) {
        category.classList.add('active');
      } else {
        category.classList.remove('active');
      }
    });

    // Handle hover for non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      category.addEventListener('mouseenter', function () {
        closeOtherDropdowns(category);
        category.classList.add('active');
      });

      category.addEventListener('mouseleave', function () {
        // Don't hide if dropdown is being hovered
        if (!category.matches(':hover')) {
          category.classList.remove('active');
        }
      });

      // Keep dropdown open when hovering over it
      const dropdown = category.querySelector('.dropdown');
      if (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
          category.classList.add('active');
        });

        dropdown.addEventListener('mouseleave', function () {
          category.classList.remove('active');
        });
      }
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.glow-category')) {
      categories.forEach(category => {
        category.classList.remove('active');
      });
    }
  });

  // Close dropdowns when pressing Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      categories.forEach(category => {
        category.classList.remove('active');
      });
    }
  });

  // Search bar clear button functionality
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');

  if (searchInput && clearBtn) {
    searchInput.addEventListener('input', function () {
      if (this.value.length > 0) {
        clearBtn.classList.add('visible');
      } else {
        clearBtn.classList.remove('visible');
      }
    });
  }

  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }
});
