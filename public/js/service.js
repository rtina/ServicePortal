document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const searchInput = document.querySelector('.search-box input');
  const priceInputs = document.querySelectorAll('.price-range input');
  const deliverySelect = document.querySelector('.delivery-select');
  const ratingSelect = document.querySelector('.rating-select');
  const clearFiltersBtn = document.querySelector('.clear-filters-btn');
  const allCards = document.querySelectorAll('#service-list .card');

  function applyFilters() {
    const activeTab = document.querySelector('.tab.active');
    const activeCategory = activeTab ? activeTab.dataset.category : null;

    const searchQuery = searchInput.value.toLowerCase();
    const minPrice = parseInt(priceInputs[0].value) || 0;
    const maxPrice = parseInt(priceInputs[1].value) || 5000;
    const maxDelivery = deliverySelect.value;
    const minRating = parseFloat(ratingSelect.value) || 0;

    allCards.forEach(card => {
      const title = card.getAttribute('data-title')?.toLowerCase() || '';
      const description = card.getAttribute('data-description')?.toLowerCase() || '';
      const category = card.getAttribute('data-category');
      const price = parseFloat(card.getAttribute('data-price'));
      const rating = parseFloat(card.getAttribute('data-rating'));
      const delivery = parseInt(card.getAttribute('data-delivery'));

      const matchesCategory = !activeCategory || category === activeCategory;
      const matchesSearch = title.includes(searchQuery) || description.includes(searchQuery);
      const matchesPrice = price >= minPrice && price <= maxPrice;
      const matchesDelivery = maxDelivery === 'any' || delivery <= parseInt(maxDelivery);
      const matchesRating = rating >= minRating;

      if (matchesCategory && matchesSearch && matchesPrice && matchesDelivery && matchesRating) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      applyFilters();
    });
  });

  searchInput.addEventListener('input', applyFilters);
  priceInputs.forEach(input => input.addEventListener('input', applyFilters));
  deliverySelect.addEventListener('change', applyFilters);
  ratingSelect.addEventListener('change', applyFilters);

  clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    priceInputs[0].value = '0';
    priceInputs[1].value = '5000';
    deliverySelect.value = 'any';
    ratingSelect.value = 'any';
    applyFilters();
  });

  applyFilters(); // Initial filter on page load
});
