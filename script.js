// Dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile hamburger menu toggle with scroll locking
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  nav.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile nav when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Smooth scroll for anchor links (with fix for '#' empty href selector issue)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Subtle fade-in on scroll using IntersectionObserver (with hover state transform overrides fixed)
const fadeEls = document.querySelectorAll(
  '.category-card, .step, .testimonial, .section-header'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = entry.target.style.transform.replace('translateY(24px)', 'translateY(0)');
      
      // Remove inline styles after transition to restore CSS hover animations
      entry.target.addEventListener('transitionend', function handler() {
        entry.target.style.opacity = '';
        entry.target.style.transform = '';
        entry.target.style.transition = '';
        entry.target.removeEventListener('transitionend', handler);
      });
      
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = (el.style.transform || '') + ' translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease, box-shadow 0.25s ease';
  observer.observe(el);
});

// Products Data Array (99 Gypsum Decoration Projects)
const products = [
  { id: 1,  title: "Floral Coffered Ceiling Design",         category: "ceiling-designs", badge: "Featured",  image: "pictures/1.jpeg" },
  { id: 2,  title: "Classic Pop Ceiling with Cove Lighting", category: "ceiling-designs", badge: null,        image: "pictures/2.jpeg" },
  { id: 3,  title: "Geometric Textured Wall Panel",          category: "wall-cladding",   badge: "Popular",   image: "pictures/3.jpeg" },
  { id: 4,  title: "3D Rose Relief Wall Art",                category: "3d-wall-art",     badge: "New",       image: "pictures/4.jpeg" },
  { id: 5,  title: "Ornate Ceiling Medallion Design",        category: "ceiling-designs", badge: null,        image: "pictures/5.jpeg" },
  { id: 6,  title: "Herringbone Wall Cladding Panel",        category: "wall-cladding",   badge: null,        image: "pictures/6.jpeg" },
  { id: 7,  title: "Botanical 3D Gypsum Wall Sculpture",     category: "3d-wall-art",     badge: "Featured",  image: "pictures/7.jpeg" },
  { id: 8,  title: "Tray Ceiling with Crown Molding",        category: "ceiling-designs", badge: null,        image: "pictures/8.jpeg" },
  { id: 9,  title: "Wainscoting & Raised Panel Wall",        category: "wall-cladding",   badge: null,        image: "pictures/9.jpeg" },
  { id: 10, title: "Abstract Leaf 3D Wall Art",              category: "3d-wall-art",     badge: null,        image: "pictures/10.jpeg" },
  { id: 11, title: "Recessed Dome Ceiling Design",           category: "ceiling-designs", badge: null,        image: "pictures/11.jpeg" },
  { id: 12, title: "Stone-Texture Feature Wall Panel",       category: "wall-cladding",   badge: "Popular",   image: "pictures/12.jpeg" },
  { id: 13, title: "Geometric Hexagon 3D Wall Art",          category: "3d-wall-art",     badge: null,        image: "pictures/13.jpeg" },
  { id: 14, title: "Grand Ballroom Ceiling Design",          category: "ceiling-designs", badge: "Featured",  image: "pictures/14.jpeg" },
  { id: 15, title: "Ribbed Vertical Wall Cladding",          category: "wall-cladding",   badge: null,        image: "pictures/15.jpeg" },
  { id: 16, title: "Mandala 3D Gypsum Wall Art",             category: "3d-wall-art",     badge: "New",       image: "pictures/16.jpeg" },
  { id: 17, title: "False Ceiling with Arch Detail",         category: "ceiling-designs", badge: null,        image: "pictures/17.jpeg" },
  { id: 18, title: "Brick-Effect Gypsum Wall Panel",         category: "wall-cladding",   badge: null,        image: "pictures/18.jpeg" },
  { id: 19, title: "Peacock Feather 3D Relief Art",          category: "3d-wall-art",     badge: null,        image: "pictures/19.jpeg" },
  { id: 20, title: "Pop Ceiling with Indirect Lighting",     category: "ceiling-designs", badge: null,        image: "pictures/20.jpeg" },
  { id: 21, title: "Smooth Plaster Feature Wall",            category: "wall-cladding",   badge: null,        image: "pictures/21.jpeg" },
  { id: 22, title: "Floral Bouquet 3D Wall Sculpture",       category: "3d-wall-art",     badge: "Popular",   image: "pictures/22.jpeg" },
  { id: 23, title: "Stepped Coffered Ceiling Detail",        category: "ceiling-designs", badge: null,        image: "pictures/23.jpeg" },
  { id: 24, title: "Diamond Pattern Wall Cladding",          category: "wall-cladding",   badge: null,        image: "pictures/24.jpeg" },
  { id: 25, title: "Tree of Life 3D Gypsum Art",             category: "3d-wall-art",     badge: "New",       image: "pictures/25.jpeg" },
  { id: 26, title: "Bedroom Ceiling Focal Point",            category: "ceiling-designs", badge: null,        image: "pictures/26.jpeg" },
  { id: 27, title: "Shiplap Gypsum Wall Panel",              category: "wall-cladding",   badge: null,        image: "pictures/27.jpeg" },
  { id: 28, title: "Wave Pattern 3D Wall Art",               category: "3d-wall-art",     badge: null,        image: "pictures/28.jpeg" },
  { id: 29, title: "Coffered Grid Ceiling Design",           category: "ceiling-designs", badge: "Featured",  image: "pictures/29.jpeg" },
  { id: 30, title: "Rustic Wood-Look Wall Cladding",         category: "wall-cladding",   badge: null,        image: "pictures/30.jpeg" },
  { id: 31, title: "Sun Burst 3D Gypsum Wall Piece",         category: "3d-wall-art",     badge: null,        image: "pictures/31.jpeg" },
  { id: 32, title: "Living Room Accent Ceiling",             category: "ceiling-designs", badge: null,        image: "pictures/32.jpeg" },
  { id: 33, title: "Textured Linen-Effect Wall Panel",       category: "wall-cladding",   badge: null,        image: "pictures/33.jpeg" },
  { id: 34, title: "Geometric Cube 3D Wall Art",             category: "3d-wall-art",     badge: "Popular",   image: "pictures/34.jpeg" },
  { id: 35, title: "Dining Area Ceiling Design",             category: "ceiling-designs", badge: null,        image: "pictures/35.jpeg" },
  { id: 36, title: "Chevron Wall Cladding Panel",            category: "wall-cladding",   badge: null,        image: "pictures/36.jpeg" },
  { id: 37, title: "Arabesque 3D Gypsum Wall Art",           category: "3d-wall-art",     badge: null,        image: "pictures/37.jpeg" },
  { id: 38, title: "Office Reception Ceiling",               category: "ceiling-designs", badge: "Featured",  image: "pictures/38.jpeg" },
  { id: 39, title: "Smooth Venetian Wall Panel",             category: "wall-cladding",   badge: null,        image: "pictures/39.jpeg" },
  { id: 40, title: "Butterfly 3D Relief Wall Art",           category: "3d-wall-art",     badge: "New",       image: "pictures/40.jpeg" },
  { id: 41, title: "Hallway Ceiling with Cornice",           category: "ceiling-designs", badge: null,        image: "pictures/41.jpeg" },
  { id: 42, title: "Vertical Slat Wall Cladding",            category: "wall-cladding",   badge: null,        image: "pictures/42.jpeg" },
  { id: 43, title: "Lotus Flower 3D Gypsum Art",             category: "3d-wall-art",     badge: null,        image: "pictures/43.jpeg" },
  { id: 44, title: "Master Bedroom Ceiling Design",          category: "ceiling-designs", badge: null,        image: "pictures/44.jpeg" },
  { id: 45, title: "Carved Gypsum Accent Wall",              category: "wall-cladding",   badge: "Popular",   image: "pictures/45.jpeg" },
  { id: 46, title: "Deer & Forest 3D Wall Sculpture",        category: "3d-wall-art",     badge: null,        image: "pictures/46.jpeg" },
  { id: 47, title: "Luxury Villa Ceiling Design",            category: "ceiling-designs", badge: "Featured",  image: "pictures/47.jpeg" },
  { id: 48, title: "Mosaic-Inspired Wall Panel",             category: "wall-cladding",   badge: null,        image: "pictures/48.jpeg" },
  { id: 49, title: "Abstract Bird 3D Gypsum Art",            category: "3d-wall-art",     badge: null,        image: "pictures/49.jpeg" },
  { id: 50, title: "Kids Room Ceiling Design",               category: "ceiling-designs", badge: null,        image: "pictures/50.jpeg" },
  { id: 51, title: "Beadboard-Style Wall Cladding",          category: "wall-cladding",   badge: null,        image: "pictures/51.jpeg" },
  { id: 52, title: "Ocean Wave 3D Wall Art",                 category: "3d-wall-art",     badge: "New",       image: "pictures/52.jpeg" },
  { id: 53, title: "Study Room Ceiling Focal Point",         category: "ceiling-designs", badge: null,        image: "pictures/53.jpeg" },
  { id: 54, title: "Grey Textured Wall Panel",               category: "wall-cladding",   badge: null,        image: "pictures/54.jpeg" },
  { id: 55, title: "Crescent Moon 3D Gypsum Piece",          category: "3d-wall-art",     badge: null,        image: "pictures/55.jpeg" },
  { id: 56, title: "Hotel Lobby Ceiling Design",             category: "ceiling-designs", badge: "Featured",  image: "pictures/56.jpeg" },
  { id: 57, title: "Rectangular Raised Wall Panel",          category: "wall-cladding",   badge: "Popular",   image: "pictures/57.jpeg" },
  { id: 58, title: "Geometric Star 3D Wall Art",             category: "3d-wall-art",     badge: null,        image: "pictures/58.jpeg" },
  { id: 59, title: "Bathroom Ceiling with Cove",             category: "ceiling-designs", badge: null,        image: "pictures/59.jpeg" },
  { id: 60, title: "Whitewash Texture Wall Panel",           category: "wall-cladding",   badge: null,        image: "pictures/60.jpeg" },
  { id: 61, title: "Elephant 3D Gypsum Wall Art",            category: "3d-wall-art",     badge: null,        image: "pictures/61.jpeg" },
  { id: 62, title: "Staircase Ceiling Design",               category: "ceiling-designs", badge: null,        image: "pictures/62.jpeg" },
  { id: 63, title: "Fluted Column Wall Cladding",            category: "wall-cladding",   badge: "New",       image: "pictures/63.jpeg" },
  { id: 64, title: "Coral Reef 3D Gypsum Sculpture",         category: "3d-wall-art",     badge: null,        image: "pictures/64.jpeg" },
  { id: 65, title: "Conference Room Ceiling",                category: "ceiling-designs", badge: null,        image: "pictures/65.jpeg" },
  { id: 66, title: "Marble-Look Wall Cladding Panel",        category: "wall-cladding",   badge: null,        image: "pictures/66.jpeg" },
  { id: 67, title: "Celtic Knot 3D Wall Art",                category: "3d-wall-art",     badge: "Popular",   image: "pictures/67.jpeg" },
  { id: 68, title: "Foyer Ceiling Centerpiece",              category: "ceiling-designs", badge: "Featured",  image: "pictures/68.jpeg" },
  { id: 69, title: "Grooved Horizontal Wall Panel",          category: "wall-cladding",   badge: null,        image: "pictures/69.jpeg" },
  { id: 70, title: "Feather Fan 3D Gypsum Art",              category: "3d-wall-art",     badge: null,        image: "pictures/70.jpeg" },
  { id: 71, title: "Double-Height Living Room Ceiling",      category: "ceiling-designs", badge: null,        image: "pictures/71.jpeg" },
  { id: 72, title: "Sandstone-Effect Wall Cladding",         category: "wall-cladding",   badge: null,        image: "pictures/72.jpeg" },
  { id: 73, title: "Mountain Landscape 3D Wall Art",         category: "3d-wall-art",     badge: "New",       image: "pictures/73.jpeg" },
  { id: 74, title: "Restaurant Ceiling Design",              category: "ceiling-designs", badge: null,        image: "pictures/74.jpeg" },
  { id: 75, title: "Arched Niche Wall Panel",                category: "wall-cladding",   badge: "Popular",   image: "pictures/75.jpeg" },
  { id: 76, title: "Peacock 3D Gypsum Wall Art",             category: "3d-wall-art",     badge: null,        image: "pictures/76.jpeg" },
  { id: 77, title: "Suspended Grid Ceiling Design",          category: "ceiling-designs", badge: null,        image: "pictures/77.jpeg" },
  { id: 78, title: "Slate-Texture Feature Wall",             category: "wall-cladding",   badge: null,        image: "pictures/78.jpeg" },
  { id: 79, title: "Vine & Leaves 3D Gypsum Piece",          category: "3d-wall-art",     badge: null,        image: "pictures/79.jpeg" },
  { id: 80, title: "Salon Ceiling Statement Design",         category: "ceiling-designs", badge: "Featured",  image: "pictures/80.jpeg" },
  { id: 81, title: "Panelled Wainscoting Wall",              category: "wall-cladding",   badge: null,        image: "pictures/81.jpeg" },
  { id: 82, title: "Hummingbird 3D Gypsum Wall Art",         category: "3d-wall-art",     badge: "New",       image: "pictures/82.jpeg" },
  { id: 83, title: "Compact Room Ceiling Design",            category: "ceiling-designs", badge: null,        image: "pictures/83.jpeg" },
  { id: 84, title: "Exposed Beam-Effect Wall Panel",         category: "wall-cladding",   badge: null,        image: "pictures/84.jpeg" },
  { id: 85, title: "Dragon 3D Gypsum Sculpture",             category: "3d-wall-art",     badge: "Popular",   image: "pictures/85.jpeg" },
  { id: 86, title: "Kitchen Ceiling Accent Design",          category: "ceiling-designs", badge: null,        image: "pictures/86.jpeg" },
  { id: 87, title: "Stacked Stone Wall Cladding",            category: "wall-cladding",   badge: null,        image: "pictures/87.jpeg" },
  { id: 88, title: "Eagle 3D Gypsum Wall Piece",             category: "3d-wall-art",     badge: null,        image: "pictures/88.jpeg" },
  { id: 89, title: "Arch Ceiling with Plaster Detail",       category: "ceiling-designs", badge: "Featured",  image: "pictures/89.jpeg" },
  { id: 90, title: "Shadowbox Wall Panel Design",            category: "wall-cladding",   badge: null,        image: "pictures/90.jpeg" },
  { id: 91, title: "Geometric Forest 3D Wall Art",           category: "3d-wall-art",     badge: "New",       image: "pictures/91.jpeg" },
  { id: 92, title: "Commercial Lobby Ceiling",               category: "ceiling-designs", badge: null,        image: "pictures/92.jpeg" },
  { id: 93, title: "Wide Plank Wall Cladding Panel",         category: "wall-cladding",   badge: null,        image: "pictures/93.jpeg" },
  { id: 94, title: "Lion Portrait 3D Gypsum Art",            category: "3d-wall-art",     badge: "Popular",   image: "pictures/94.jpeg" },
  { id: 95, title: "Layered Oval Ceiling Centerpiece",       category: "ceiling-designs", badge: null,        image: "pictures/95.jpeg" },
  { id: 96, title: "Hammered Plaster Wall Panel",            category: "wall-cladding",   badge: null,        image: "pictures/96.jpeg" },
  { id: 97, title: "Phoenix 3D Gypsum Wall Sculpture",       category: "3d-wall-art",     badge: "Featured",  image: "pictures/97.jpeg" },
  { id: 98, title: "Penthouse Ceiling Statement",            category: "ceiling-designs", badge: "Featured",  image: "pictures/98.jpeg" },
  { id: 99, title: "Infinity Panel Wall Cladding",           category: "wall-cladding",   badge: "New",       image: "pictures/99.jpeg" }
];

const galleryGrid = document.getElementById('gallery-grid');
const showMoreBtn = document.getElementById('show-more-btn');
const showMoreWrap = document.querySelector('.show-more-wrap');

let currentLimit = 8;
let currentFilter = 'all';

// Dynamic Rendering Engine
const renderProducts = () => {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = '';
  
  let renderedCount = 0;
  let totalMatchCount = 0;

  products.forEach(product => {
    const isMatch = currentFilter === 'all' || product.category === currentFilter;
    if (isMatch) {
      totalMatchCount++;
      if (renderedCount < currentLimit) {
        renderedCount++;
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);
        card.setAttribute('data-id', product.id);

        const badgeHTML = product.badge ? `<div class="product-badge ${product.badge.toLowerCase() === 'new' ? 'new' : ''}">${product.badge}</div>` : '';
        
        card.innerHTML = `
          <div class="product-img-wrap">
            <img src="${product.image}" alt="${product.title}" loading="lazy" />
            ${badgeHTML}
          </div>
          <div class="product-info">
            <h4>${product.title}</h4>
            <p class="product-size">${product.category === 'ceiling-designs' ? 'Ceiling Design' : product.category === 'wall-cladding' ? 'Wall Cladding & Panels' : '3D Gypsum Wall Art'}</p>
            <div class="product-footer">
              <span class="price">Contact for Pricing</span>
              <a href="https://www.facebook.com" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Get a Quote</a>
            </div>
          </div>
        `;
        
        galleryGrid.appendChild(card);
        
        // Dynamic scroll fade-in for generated items
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.55s ease, transform 0.55s ease, box-shadow 0.25s ease';
        observer.observe(card);
      }
    }
  });

  // Toggle Show More button wrapper based on product limits
  if (showMoreWrap) {
    if (totalMatchCount > currentLimit) {
      showMoreWrap.classList.remove('hidden');
    } else {
      showMoreWrap.classList.add('hidden');
    }
  }
};

// Initial run
renderProducts();

// Dynamic Gallery Filtering Click Logic
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentFilter = btn.getAttribute('data-filter');
    
    // Automatically reveal all matching items on filter change
    if (currentFilter !== 'all') {
      currentLimit = products.length;
    } else {
      currentLimit = 8; // Reset back to default 8
    }

    renderProducts();
  });
});

// Show More button click logic
if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    currentLimit = products.length; // expand limit to show all
    renderProducts();
  });
}

// Category Cards Interactivity (Clicking a card scrolls & filters the gallery)
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const category = card.getAttribute('data-category');
    
    // Avoid double trigger if they click the overlay button inside
    if (e.target.closest('.btn')) {
      e.preventDefault();
    }

    // Abstract or Nature or Wood Carvings or Mixed Media, scroll to gallery and filter
    const gallerySection = document.getElementById('gallery');
    const targetFilterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
    
    if (targetFilterBtn) {
      targetFilterBtn.click(); // Trigger active filter and expand
    }

    if (gallerySection) {
      const offset = 80;
      const top = gallerySection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Lightbox Modal Interactivity
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxPrice = document.getElementById('lightbox-price');
const lightboxBadge = document.getElementById('lightbox-badge');
const lightboxOrderBtn = document.getElementById('lightbox-order-btn');
const lightboxClose = document.getElementById('lightbox-close');

let currentBasePrice = 2000;

// Bind delegated click events on dynamic gallery grid
if (galleryGrid) {
  galleryGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;

    // Ignore lightbox popup if they click order CTA directly
    if (e.target.closest('.product-footer a')) {
      return;
    }
    
    e.preventDefault();
    
    // Load dynamic data from script object instead of DOM strings
    const productId = parseInt(card.getAttribute('data-id'), 10);
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentBasePrice = 0;

    // Populate lightbox contents
    lightboxImg.src = product.image;
    lightboxImg.alt = product.title;
    lightboxTitle.textContent = product.title;
    lightboxPrice.textContent = 'Contact for Pricing';
    
    // Create pre-filled Messenger URL payload
    const msgTemplate = encodeURIComponent(`Hi! I am interested in your gypsum decoration project: "${product.title}". Could you please provide more details and pricing?`);
    lightboxOrderBtn.href = `https://www.facebook.com/messages/t/?text=${msgTemplate}`;

    if (product.badge) {
      lightboxBadge.textContent = product.badge;
      lightboxBadge.style.display = 'inline-block';
      if (product.badge === 'New') {
        lightboxBadge.style.background = '#C8A96E';
        lightboxBadge.style.color = '#ffffff';
      } else {
        lightboxBadge.style.background = '#f3f4f6';
        lightboxBadge.style.color = 'var(--fg)';
      }
    } else {
      lightboxBadge.style.display = 'none';
    }

    // Open lightbox
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
}

// Size selection logic in Lightbox modal
const lightboxSizes = document.getElementById('lightbox-sizes');
if (lightboxSizes) {
  lightboxSizes.addEventListener('click', (e) => {
    const tag = e.target.closest('.size-tag');
    if (!tag) return;

    lightboxSizes.querySelectorAll('.size-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');

    const selectedSize = tag.getAttribute('data-size');
    let finalPrice = currentBasePrice;

    if (selectedSize === 'A2') {
      finalPrice = currentBasePrice + 500;
    } else if (selectedSize === 'A1') {
      finalPrice = currentBasePrice + 1000;
    }

    // Update price representation: size A3 keeps "Starting from", others show fixed price
    if (selectedSize === 'A3') {
      lightboxPrice.textContent = `Starting from ${finalPrice} BDT`;
    } else {
      lightboxPrice.textContent = `${finalPrice} BDT`;
    }
  });
}

// Close Lightbox functions
const closeLightbox = () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

// Close on clicking overlay outside the content
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Close on Escape key press
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

// Hero Image Slideshow (randomly switch every 3 seconds with a professional cross-dissolve)
const heroImg = document.getElementById('hero-slideshow-img');
if (heroImg && products && products.length > 0) {
  const heroImages = products.map(p => p.image);
  const heroTitles = products.map(p => p.title);
  
  // Pick a random starting image index on page load
  let currentHeroIndex = Math.floor(Math.random() * heroImages.length);
  const startImage = heroImages[currentHeroIndex];

  // Set the starting image and alt immediately
  heroImg.src = startImage;
  heroImg.alt = heroTitles[currentHeroIndex];

  const parentFrame = heroImg.parentElement;
  if (parentFrame) {
    parentFrame.style.backgroundImage = `url(${startImage})`;
  }

  const switchHeroImage = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * heroImages.length);
    } while (randomIndex === currentHeroIndex && heroImages.length > 1);

    currentHeroIndex = randomIndex;
    const nextImage = heroImages[currentHeroIndex];

    // Set background of the frame to the incoming image
    if (parentFrame) {
      parentFrame.style.backgroundImage = `url(${nextImage})`;
    }

    // Fade out the top image (takes 1.2s via transition)
    heroImg.style.opacity = '0';

    // Swap src + alt, then restore opacity once fade out finishes
    setTimeout(() => {
      heroImg.src = nextImage;
      heroImg.alt = heroTitles[currentHeroIndex];
      heroImg.style.opacity = '1';
    }, 1200); // matching CSS opacity transition time
  };

  setInterval(switchHeroImage, 3000);
}

