document.addEventListener('DOMContentLoaded', () => {
  const anyCheckbox = document.getElementById('categoryAny');
  const customCheckbox = document.getElementById('allCategories');
  const collapseElement = document.getElementById('showCategories');
  const bsCollapse = new bootstrap.Collapse(collapseElement, { toggle: false });

  // Todas las checkboxes de categorías personalizadas dentro del collapse
  const customCategoryCheckboxes = collapseElement.querySelectorAll('input[type="checkbox"][name="category"]');

  function clearCustomCategories() {
    customCategoryCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }

  function updateState() {
    if (anyCheckbox.checked) {
      // Cuando Any está seleccionado, desmarcar custom y limpiar categorías
      if (customCheckbox.checked) {
        customCheckbox.checked = false;
      }
      clearCustomCategories();
      bsCollapse.hide();
    } else {
      // Cuando Any NO está seleccionado
      if (customCheckbox.checked) {
        bsCollapse.show();
      } else {
        bsCollapse.hide();
        // Si ninguno está seleccionado, volver a marcar Any
        if (!anyCheckbox.checked && !customCheckbox.checked) {
          anyCheckbox.checked = true;
          clearCustomCategories();
        }
      }
    }
  }

  anyCheckbox.addEventListener('change', () => {
    if (anyCheckbox.checked) {
      updateState();
    }
  });

  customCheckbox.addEventListener('change', () => {
    if (customCheckbox.checked) {
      anyCheckbox.checked = false;
    }
    updateState();
  });

  // También escuchar cambios en las categorías personalizadas para evitar estados inconsistentes
  customCategoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      // Si alguna categoría personalizada se selecciona, se debe desmarcar Any y Custom debe estar marcado
      if (checkbox.checked) {
        anyCheckbox.checked = false;
        customCheckbox.checked = true;
        bsCollapse.show();
      } else {
        // Si no queda ninguna categoría personalizada marcada, desmarcar Custom y marcar Any
        const anyChecked = Array.from(customCategoryCheckboxes).some(cb => cb.checked);
        if (!anyChecked) {
          customCheckbox.checked = false;
          anyCheckbox.checked = true;
          bsCollapse.hide();
        }
      }
    });
  });

  // Inicializar estado al cargar la página
  updateState();
});
