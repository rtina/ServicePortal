const services = [
  {
    title: '3D Logo Animation',
    category: '3d',
    artist: 'John Doe',
    rating: 4.8,
    deliveryTime: 7,
    price: 1200,
    description: 'Professional 3D logo animation with modern effects and transitions.',
    image: '/images/services/3d-logo.jpg',
    tags: ['3d', 'logo', 'branding']
  },
  {
    title: '2D Cartoon Explainer',
    category: '2d',
    artist: 'Jane Smith',
    rating: 4.5,
    deliveryTime: 14,
    price: 800,
    description: 'Engaging 2D cartoon explainer videos for your business or product.',
    image: '/images/services/2d-cartoon.jpg',
    tags: ['2d', 'explainer', 'cartoon']
  },
  {
    title: 'Motion Graphics Package',
    category: 'motion',
    artist: 'Alice Blue',
    rating: 4.9,
    deliveryTime: 10,
    price: 1500,
    description: 'Complete motion graphics package including transitions and effects.',
    image: '/images/services/motion-graphics.jpg',
    tags: ['motion', 'graphics', 'transitions']
  },
  {
    title: 'Epic VFX Shot',
    category: 'vfx',
    artist: 'Mike Storm',
    rating: 4.7,
    deliveryTime: 21,
    price: 2500,
    description: 'High-quality visual effects for your film or video project.',
    image: '/images/services/vfx-shot.jpg',
    tags: ['vfx', 'film', 'effects']
  },
  {
    title: 'Character Animation',
    category: 'character',
    artist: 'Leo Ray',
    rating: 4.6,
    deliveryTime: 14,
    price: 1800,
    description: 'Custom character animation for games, films, or promotional content.',
    image: '/images/services/character-animation.jpg',
    tags: ['character', 'animation', 'custom']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const serviceList = document.getElementById('service-list');

  const searchInput = document.querySelector('.search-box input');
  const priceInputs = document.querySelectorAll('.price-range input');
  const deliverySelect = document.querySelector('.delivery-select');
  const ratingSelect = document.querySelector('.rating-select');
  const clearFiltersBtn = document.querySelector('.clear-filters-btn');

  // Ensure there's an active tab set
  if (!document.querySelector('.tab.active')) {
    const firstTab = document.querySelector('.tab');
    if (firstTab) firstTab.classList.add('active');
  }

  function applyFilters() {
    const activeTab = document.querySelector('.tab.active');
    const activeCategory = activeTab ? activeTab.dataset.category : services[0].category;

    const searchQuery = searchInput.value.toLowerCase();
    const minPrice = parseInt(priceInputs[0].value) || 0;
    const maxPrice = parseInt(priceInputs[1].value) || 5000;
    const maxDelivery = deliverySelect.value;
    const minRating = parseFloat(ratingSelect.value) || 0;

    return services.filter(service => {
      const matchesCategory = service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery) ||
        service.description.toLowerCase().includes(searchQuery);
      const matchesPrice = service.price >= minPrice && service.price <= maxPrice;
      const matchesDelivery = maxDelivery === 'any' || service.deliveryTime <= parseInt(maxDelivery);
      const matchesRating = service.rating >= minRating;

      return matchesCategory && matchesSearch && matchesPrice && matchesDelivery && matchesRating;
    });
  }

  function displayServices() {
    serviceList.innerHTML = '';
    const filtered = applyFilters();

    if (filtered.length === 0) {
      serviceList.innerHTML = '<p class="no-results">No services found matching your criteria.</p>';
      return;
    }

    filtered.forEach(service => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="service-image">
          <img src="${service.image}" alt="${service.title}">
        </div>
        <div class="service-content">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="service-artist">
            <img src="/images/avatars/${service.artist.toLowerCase().replace(' ', '-')}.jpg" alt="${service.artist}">
            <span>${service.artist}</span>
            <div class="artist-rating">
              <i class="fas fa-star"></i>
              <span>${service.rating.toFixed(1)}</span>
            </div>
          </div>
          <div class="service-meta">
            <div class="meta-item">
              <i class="far fa-clock"></i>
              <span>${service.deliveryTime} days</span>
            </div>
          </div>
          <div class="service-tags">
            ${service.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="service-price">
            <span>Starting at</span>
            <strong>$${service.price}</strong>
          </div>
          <a href="/service/${service.title.toLowerCase().replace(/ /g, '-')}" class="view-details-btn">View Details</a>
        </div>
      `;
      serviceList.appendChild(card);
    });
  }

  function handleFilterChange() {
    displayServices();
  }

  // Category tab clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      handleFilterChange();
    });
  });

  // Search input
  searchInput.addEventListener('input', handleFilterChange);

  // Price range inputs
  priceInputs.forEach(input => {
    input.addEventListener('input', handleFilterChange);
  });

  // Delivery time select
  deliverySelect.addEventListener('change', handleFilterChange);

  // Rating select
  ratingSelect.addEventListener('change', handleFilterChange);

  // Clear filters button
  clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    priceInputs[0].value = '0';
    priceInputs[1].value = '5000';
    deliverySelect.value = 'any';
    ratingSelect.value = 'any';
    handleFilterChange();
  });

  // Initial load
  displayServices();
});
