// ============================================
// Data Catalog & Pricing
// ============================================
const catalogData = [
    // Tenda & Carrier
    {
        id: 1,
        name: 'Tenda Double Layer (Kapasitas 4-5 orang)',
        description: 'Tenda double layer kapasitas 4-5 orang dengan ventilasi optimal.',
        prices: { '1': 40000, '2': 60000, '3': 80000 },
        stock: 12,
        image: 'assets/images/tenda-double-4-5.jpg',
        category: 'Tenda'
    },
    {
        id: 2,
        name: 'Tenda Double Layer (Kapasitas 2 orang)',
        description: 'Tenda double layer kompak untuk 2 orang, mudah dibawa.',
        prices: { '1': 30000, '2': 45000, '3': 60000 },
        stock: 15,
        image: 'assets/images/tenda-double-2.jpg',
        category: 'Tenda'
    },
    {
        id: 3,
        name: 'Carrier Kap 45L',
        description: 'Carrier 45L dengan sistem back support ergonomis.',
        prices: { '1': 25000, '2': 35000, '3': 45000 },
        stock: 18,
        image: 'assets/images/carrier-45l.jpg',
        category: 'Tas'
    },
    {
        id: 4,
        name: 'Carrier Kap 60L',
        description: 'Carrier 60L standar dengan rain cover dan kompartemen lengkap.',
        prices: { '1': 30000, '2': 45000, '3': 60000 },
        stock: 16,
        image: 'assets/images/carrier-60l.png',
        category: 'Tas'
    },
    {
        id: 5,
        name: 'Carrier Kap 60L Premium',
        description: 'Carrier 60L premium dengan material berkualitas tinggi.',
        prices: { '1': 40000, '2': 60000, '3': 80000 },
        stock: 10,
        image: 'assets/images/carrier-60l-premium.jpg',
        category: 'Tas'
    },
    {
        id: 6,
        name: 'Hydropack Montagna',
        description: 'Hydropack design ergonomis untuk hiking long distance.',
        prices: { '1': 15000, '2': 25000, '3': 35000 },
        stock: 20,
        image: 'assets/images/hydropack-montagna.jpg',
        category: 'Tas'
    },
    {
        id: 7,
        name: 'Hydropack Outfrai',
        description: 'Hydropack outdoor dengan kapasitas medium.',
        prices: { '1': 20000, '2': 30000, '3': 40000 },
        stock: 18,
        image: 'assets/images/hydropack-outfrai.jpg',
        category: 'Tas'
    },
    {
        id: 8,
        name: 'Daypack 10L - 18L',
        description: 'Daypack ukuran small untuk perjalanan sehari.',
        prices: { '1': 15000, '2': 25000, '3': 35000 },
        stock: 25,
        image: 'assets/images/daypack-10-18l.jpg',
        category: 'Tas'
    },
    // Penerangan & Perlengkapan Tidur
    {
        id: 9,
        name: 'Headlamp Biasa',
        description: 'Lampu kepala standar dengan baterai AA.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 30,
        image: 'assets/images/headlamp-biasa.jpg',
        category: 'Peralatan'
    },
    {
        id: 10,
        name: 'Headlamp Cas',
        description: 'Lampu kepala rechargeable dengan USB charging.',
        prices: { '1': 15000, '2': 25000, '3': 35000 },
        stock: 25,
        image: 'assets/images/headlamp-cas.jpg',
        category: 'Peralatan'
    },
    {
        id: 11,
        name: 'Lampu Tenda',
        description: 'Lampu gantung untuk tenda, hemat daya.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 28,
        image: 'assets/images/lampu-tenda.jpg',
        category: 'Peralatan'
    },
    {
        id: 12,
        name: 'Sleeping Bag',
        description: 'Sleeping bag dengan insulasi thermal premium.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 22,
        image: 'assets/images/sleeping-bag.jpg',
        category: 'Perlengkapan'
    },
    {
        id: 13,
        name: 'Matras',
        description: 'Matras foam tebal untuk tidur nyaman.',
        prices: { '1': 5000, '2': 10000, '3': 15000 },
        stock: 35,
        image: 'assets/images/matras.jpg',
        category: 'Perlengkapan'
    },
    {
        id: 14,
        name: 'Flysheet Uk 2x3',
        description: 'Flysheet ukuran 2x3 meter untuk shelter.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 14,
        image: 'assets/images/flysheet-2x3.jpg',
        category: 'Perlengkapan'
    },
    {
        id: 15,
        name: 'Hammock',
        description: 'Hammock portable untuk istirahat outdoor.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 16,
        image: 'assets/images/hammock.png',
        category: 'Perlengkapan'
    },
    // Peralatan Masak
    {
        id: 16,
        name: 'Kompor Portable Kecil',
        description: 'Kompor camping ukuran kecil, praktis dibawa.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 20,
        image: 'assets/images/kompor-kecil.jpg',
        category: 'Peralatan'
    },
    {
        id: 17,
        name: 'Kompor Portable Besar',
        description: 'Kompor besar dengan fungsi grill untuk masak bersama.',
        prices: { '1': 20000, '2': 30000, '3': 40000 },
        stock: 12,
        image: 'assets/images/kompor-besar.jpg',
        category: 'Peralatan'
    },
    {
        id: 18,
        name: 'Nesting',
        description: 'Peralatan masak nesting set lengkap.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 18,
        image: 'assets/images/nesting.jpg',
        category: 'Peralatan'
    },
    {
        id: 19,
        name: 'Gas Portable',
        description: 'Gas portable untuk kompor camping.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 32,
        image: 'assets/images/gas-portable.jpg',
        category: 'Peralatan'
    },
    {
        id: 20,
        name: 'Pan Grill Biasa',
        description: 'Pan dan grill standar untuk memasak outdoor.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 24,
        image: 'assets/images/pan-grill.jpg',
        category: 'Peralatan'
    },
    // Pakaian & Sepatu
    {
        id: 21,
        name: 'Jaket Gorpcore',
        description: 'Jaket gorpcore stylish untuk outdoor adventure.',
        prices: { '1': 25000, '2': 35000, '3': 45000 },
        stock: 15,
        image: 'assets/images/jaket-gorpcore.jpg',
        category: 'Pakaian'
    },
    {
        id: 22,
        name: 'Jaket Puffer',
        description: 'Jaket puffer hangat untuk cuaca dingin.',
        prices: { '1': 20000, '2': 30000, '3': 40000 },
        stock: 18,
        image: 'assets/images/jaket-puffer.jpg',
        category: 'Pakaian'
    },
    {
        id: 23,
        name: 'Sepatu Hiking',
        description: 'Sepatu hiking dengan grip dan support optimal.',
        prices: { '1': 25000, '2': 35000, '3': 45000 },
        stock: 20,
        image: 'assets/images/sepatu-hiking.jpg',
        category: 'Pakaian'
    },
    {
        id: 24,
        name: 'Sepatu Trail Run 910',
        description: 'Sepatu trail running 910 model terbaru.',
        prices: { '1': 35000, '2': 50000, '3': 65000 },
        stock: 14,
        image: 'assets/images/sepatu-trail-910.jpg',
        category: 'Pakaian'
    },
    {
        id: 25,
        name: 'Sarung Tangan',
        description: 'Sarung tangan outdoor untuk perlindungan tangan.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 28,
        image: 'assets/images/sarung-tangan.jpg',
        category: 'Pakaian'
    },
    {
        id: 26,
        name: 'Kacamata',
        description: 'Kacamata outdoor dengan UV protection.',
        prices: { '1': 5000, '2': 10000, '3': 15000 },
        stock: 40,
        image: 'assets/images/kacamata.jpg',
        category: 'Pakaian'
    },
    // Aksesori Outdoor
    {
        id: 27,
        name: 'Tracking Pole Biasa',
        description: 'Tongkat trekking standar untuk pendakian.',
        prices: { '1': 10000, '2': 15000, '3': 20000 },
        stock: 22,
        image: 'assets/images/tracking-pole-biasa.jpg',
        category: 'Aksesoris'
    },
    {
        id: 28,
        name: 'Tracking Pole Lipat',
        description: 'Tongkat trekking lipat praktis dibawa.',
        prices: { '1': 15000, '2': 25000, '3': 35000 },
        stock: 18,
        image: 'assets/images/tracking-pole-lipat.jpg',
        category: 'Aksesoris'
    },
    {
        id: 29,
        name: 'Meja Lipat',
        description: 'Meja lipat untuk camping dan outdoor gathering.',
        prices: { '1': 20000, '2': 35000, '3': 45000 },
        stock: 12,
        image: 'assets/images/meja-lipat.jpg',
        category: 'Aksesoris'
    },
    {
        id: 30,
        name: 'Kursi Lipat',
        description: 'Kursi lipat ergonomis untuk istirahat outdoor.',
        prices: { '1': 15000, '2': 25000, '3': 35000 },
        stock: 16,
        image: 'assets/images/kursi-lipat.jpg',
        category: 'Aksesoris'
    },
    // Barang Dijual (Bukan Sewa)
    {
        id: 31,
        name: 'Kaos Kaki (jual)',
        description: 'Kaos kaki outdoor, bahan breathable. Barang dijual, bukan sewa.',
        price: 15000,
        stock: 50,
        image: 'assets/images/kaos-kaki.jpg',
        category: 'BarangDijual',
        forSale: true
    },
    {
        id: 32,
        name: 'Jas Hujan (jual)',
        description: 'Jas hujan portable, tahan air. Barang dijual, bukan sewa.',
        price: 8000,
        stock: 30,
        image: 'assets/images/jas-hujan.jpg',
        category: 'BarangDijual',
        forSale: true
    },
    {
        id: 33,
        name: 'Emergency Blanket (jual)',
        description: 'Selimut emergency untuk cuaca ekstrem. Barang dijual, bukan sewa.',
        price: 10000,
        stock: 25,
        image: 'assets/images/emergency-blanket.jpg',
        category: 'BarangDijual',
        forSale: true
    }
];

const testimonialData = [
    {
        id: 1,
        name: 'Budi Santoso',
        rating: 5,
        text: 'Alatnya lengkap dan masih baru! Layanan antar sangat membantu buat persiapan trip ke Gunung Merapi.',
        date: '20 Desember 2023'
    },
    {
        id: 2,
        name: 'Siti Rahayu',
        rating: 4,
        text: 'Tidur nyaman dengan sleeping bagnya, harga sewa terjangkau banget. Akan sewa lagi next time!',
        date: '5 Januari 2024'
    },
    {
        id: 3,
        name: 'Andi Wijaya',
        rating: 5,
        text: 'Carrier 70L ini pas banget buat backpacking 3 hari. Bahan kuat dan kompartemen lengkap.',
        date: '15 Februari 2024'
    },
    {
        id: 4,
        name: 'Dewi Lestari',
        rating: 5,
        text: 'Pelayanan ramah dan cepat responnya. Carrier barang juga aman sampai di tempat.',
        date: '28 Februari 2024'
    }
];

// ============================================
// Helper Functions
// ============================================
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function validatePositiveInteger(value, fieldName) {
    const num = parseInt(value);
    if (isNaN(num) || num < 1) {
        return { valid: false, message: `${fieldName} harus berupa angka positif` };
    }
    return { valid: true, value: num };
}

// ============================================
// Render Catalog Cards & Filter
// ============================================
let currentFilter = 'semua';
let currentSort = 'default';
let searchQuery = '';

function renderCatalog() {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;
    
    catalogGrid.innerHTML = '';
    
    let filteredItems = [...catalogData];
    
    // Filter by category
    if (currentFilter !== 'semua') {
        filteredItems = filteredItems.filter(item => item.category === currentFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    }
    
    // Sort items
    switch (currentSort) {
        case 'price-low':
            filteredItems.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredItems.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredItems.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
        
    if (filteredItems.length === 0) {
        catalogGrid.innerHTML = '<p class="catalog-empty">Tidak ada produk yang ditemukan.</p>';
        return;
    }
    
    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'catalog-card';
        
        let priceHTML = '';
        if (item.forSale) {
            priceHTML = `
                <div class="price-sale">
                    <span class="sale-label">Harga Jual:</span>
                    <span class="sale-price">${formatRupiah(item.price)}</span>
                </div>
            `;
        } else {
            priceHTML = `
                <div class="price-tiers">
                    <div class="price-tier"><span class="tier-label">1 Malam:</span> <span class="tier-val">${formatRupiah(item.prices['1'])}</span></div>
                    <div class="price-tier"><span class="tier-label">2 Malam:</span> <span class="tier-val">${formatRupiah(item.prices['2'])}</span></div>
                    <div class="price-tier"><span class="tier-label">3 Malam:</span> <span class="tier-val">${formatRupiah(item.prices['3'])}</span></div>
                </div>
            `;
        }
        
        card.innerHTML = `
            <div class="catalog-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="catalog-content">
                <span class="catalog-badge">${item.category === 'BarangDijual' ? 'Dijual' : item.category}</span>
                <h3 class="catalog-name">${item.name}</h3>
                <p class="catalog-desc">${item.description}</p>
                ${priceHTML}
                <div class="catalog-footer">
                    <span class="catalog-stock">Stok: ${item.stock}</span>
                </div>
            </div>
        `;
        catalogGrid.appendChild(card);
    });
}

function initCatalogControls() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    
    // Category filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderCatalog();
        });
    });
    
    // Search input with debounce
    let searchTimeout;
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchQuery = e.target.value.trim();
                renderCatalog();
            }, 300);
        });
    }
    
    // Sort dropdown
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderCatalog();
        });
    }
}

// ============================================
// Render Testimonials
// ============================================
function renderTestimonials() {
    const testimonialGrid = document.getElementById('testimonialGrid');
    if (!testimonialGrid) return;
    
    testimonialGrid.innerHTML = '';
    
    testimonialData.forEach(item => {
        const stars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
        
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">${item.name.charAt(0)}</div>
                <div class="testimonial-info">
                    <h4 class="testimonial-name">${item.name}</h4>
                    <p class="testimonial-date">${item.date}</p>
                </div>
            </div>
            <div class="testimonial-rating">${stars}</div>
            <p class="testimonial-text">"${item.text}"</p>
        `;
        testimonialGrid.appendChild(card);
    });
}

// ============================================
// Populate Select Options
// ============================================
function populateSelectOptions() {
    const itemSelect = document.getElementById('itemSelect');
    const bookingItem = document.getElementById('bookingItem');
    
    if (itemSelect) {
        itemSelect.innerHTML = '<option value="" disabled selected>-- Pilih alat --</option>';
        catalogData.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            const priceText = item.forSale 
                ? formatRupiah(item.price)
                : formatRupiah(item.prices['1']);
            option.textContent = `${item.name} (${priceText})`;
            itemSelect.appendChild(option);
        });
    }
    
    if (bookingItem) {
        bookingItem.innerHTML = '<option value="" disabled selected>-- Pilih alat --</option>';
        catalogData.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            bookingItem.appendChild(option);
        });
    }
}

// ============================================
// Calculator Feature
// ============================================
function initCalculator() {
    const calculateBtn = document.getElementById('calculateBtn');
    const itemSelect = document.getElementById('itemSelect');
    const daysInput = document.getElementById('daysInput');
    const quantityInput = document.getElementById('quantityInput');
    
    if (!calculateBtn || !itemSelect || !daysInput || !quantityInput) return;
    
    function calculateCost() {
        const resultError = document.getElementById('resultError');
        const selectedItemId = parseInt(itemSelect.value);
        const days = daysInput.value;
        const quantity = quantityInput.value;
        
        // Reset error
        resultError.classList.add('hidden');
        
        // Validate item selection
        if (!selectedItemId) {
            resultError.textContent = 'Harap pilih alat terlebih dahulu';
            resultError.classList.remove('hidden');
            return;
        }
        
        // Validate days
        const daysValidation = validatePositiveInteger(days, 'Durasi sewa');
        if (!daysValidation.valid) {
            resultError.textContent = daysValidation.message;
            resultError.classList.remove('hidden');
            return;
        }
        
        // Validate quantity
        const qtyValidation = validatePositiveInteger(quantity, 'Jumlah unit');
        if (!qtyValidation.valid) {
            resultError.textContent = qtyValidation.message;
            resultError.classList.remove('hidden');
            return;
        }
        
        // Check max limits
        if (daysValidation.value > 30) {
            resultError.textContent = 'Durasi sewa maksimal 30 hari';
            resultError.classList.remove('hidden');
            return;
        }
        
        if (qtyValidation.value > 10) {
            resultError.textContent = 'Jumlah unit maksimal 10 per pesanan';
            resultError.classList.remove('hidden');
            return;
        }
        
        // Find selected item
        const selectedItem = catalogData.find(item => item.id === selectedItemId);
        if (!selectedItem) {
            resultError.textContent = 'Alat tidak ditemukan';
            resultError.classList.remove('hidden');
            return;
        }
        
        // Calculate price based on duration
        const daysNum = daysValidation.value;
        let basePricePerDay = 0;
        let totalCost = 0;
        
        if (selectedItem.forSale) {
            // Item for sale (not rent) - fixed price × quantity
            totalCost = selectedItem.price * qtyValidation.value;
            basePricePerDay = selectedItem.price;
        } else {
            // Rental item: 1st day full price, additional days +50% each
            // Use price for 1 day as base price
            const basePrice = selectedItem.prices['1'];
            basePricePerDay = basePrice;
            
            // Calculate total: 1st day full, additional days +50%
            const additionalDays = daysNum - 1;
            const additionalDayPrice = basePrice * 0.5; // +50% per additional day
            
            totalCost = (basePrice + (additionalDays * additionalDayPrice)) * qtyValidation.value;
        }
        
        // Update result display
        document.getElementById('resultItem').textContent = selectedItem.name;
        document.getElementById('resultPrice').textContent = selectedItem.forSale 
            ? formatRupiah(basePricePerDay) + ' (harga jual)'
            : formatRupiah(basePricePerDay) + '/hari (estimasi)';
        document.getElementById('resultDays').textContent = selectedItem.forSale ? '-' : `${daysNum} hari`;
        document.getElementById('resultQty').textContent = `${qtyValidation.value} unit`;
        document.getElementById('resultTotal').textContent = formatRupiah(Math.round(totalCost));
    }
    
    calculateBtn.addEventListener('click', calculateCost);
    
    // Also calculate on input change
    itemSelect.addEventListener('change', calculateCost);
    daysInput.addEventListener('input', () => {
        if (itemSelect.value) calculateCost();
    });
    quantityInput.addEventListener('input', () => {
        if (itemSelect.value) calculateCost();
    });
}

// ============================================
// FAQ Accordion Feature
// ============================================
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;
            
            if (isExpanded) {
                question.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = '0';
            } else {
                question.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
        
        // Keyboard support
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
}

// ============================================
// Mobile Navigation Toggle
// ============================================
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navList) return;
    
    function toggleNav() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            navToggle.setAttribute('aria-expanded', 'false');
            navList.classList.remove('active');
        } else {
            navToggle.setAttribute('aria-expanded', 'true');
            navList.classList.add('active');
        }
    }
    
    function closeNav() {
        navToggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('active');
    }
    
    navToggle.addEventListener('click', toggleNav);
    
    // Close nav when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeNav);
    });
    
    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
            closeNav();
        }
    });
}

// ============================================
// Booking Form Feature
// ============================================
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    const bookingSummary = document.getElementById('bookingSummary');
    const summaryDetails = document.getElementById('summaryDetails');
    
    if (!bookingForm || !bookingSummary || !summaryDetails) return;
    
    bookingForm.querySelectorAll('input[name="hobbies"]').forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const selected = bookingForm.querySelector('input[name="hobbies"]:checked');
            const hobbyError = document.getElementById('hobbyError');
            if (hobbyError && selected) hobbyError.classList.add('hidden');
        });
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('nameInput').value.trim();
        const phone = document.getElementById('phoneInput').value.trim();
        const address = document.getElementById('addressInput').value.trim();
        const city = document.getElementById('cityInput').value;
        const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(input => input.value);
        const hobbyError = document.getElementById('hobbyError');
        const itemId = parseInt(document.getElementById('bookingItem').value);
        const date = document.getElementById('bookingDate').value;
        const notes = document.getElementById('bookingNotes').value.trim();
        
        // Validate
        if (!name || !phone || !address || !city || !itemId || !date) {
            alert('Harap isi semua field yang wajib.');
            return;
        }

        if (hobbyError) hobbyError.classList.toggle('hidden', hobbies.length > 0);
        if (hobbies.length === 0) {
            if (hobbyError) hobbyError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            alert('Pilih minimal satu hobi.');
            return;
        }
        
        // Phone validation
        const phoneRegex = /^[0-9]{10,14}$/;
        if (!phoneRegex.test(phone)) {
            alert('Nomor telepon harus 10-14 digit angka');
            return;
        }
        
        // Find selected item
        const selectedItem = catalogData.find(item => item.id === itemId);
        if (!selectedItem) {
            alert('Alat tidak ditemukan');
            return;
        }
        
        // Format date
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Tampilkan ringkasan dengan textContent agar input pengguna tidak ditafsirkan sebagai HTML.
        const rentalPrice = selectedItem.forSale
            ? `${formatRupiah(selectedItem.price)} (harga jual)`
            : `${formatRupiah(selectedItem.prices['1'])} / hari`;
        const summaryRows = [
            ['Nama', name],
            ['Nomor Telepon', phone],
            ['Alamat', address],
            ['Kota', city],
            ['Hobi', hobbies.join(', ')],
            [selectedItem.forSale ? 'Barang yang Dibeli' : 'Alat yang Disewa', selectedItem.name],
            [selectedItem.forSale ? 'Harga Jual' : 'Harga Sewa Awal', rentalPrice],
            ['Tanggal Pengambilan', formattedDate]
        ];
        if (notes) summaryRows.push(['Catatan Tambahan', notes]);
        summaryDetails.replaceChildren();
        summaryRows.forEach(([label, value]) => {
            const row = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = `${label}: `;
            row.append(strong, document.createTextNode(value));
            summaryDetails.appendChild(row);
        });
        
        // Show summary, hide form
        bookingSummary.classList.remove('hidden');
        
        // Scroll to summary
        bookingSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form
        bookingForm.reset();
    });
}

// ============================================
// Set Minimum Date for Booking
// ============================================
function setMinBookingDate() {
    const bookingDate = document.getElementById('bookingDate');
    if (!bookingDate) return;
    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    
    bookingDate.setAttribute('min', `${year}-${month}-${day}`);
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href === '') return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Initialize All Features on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    renderTestimonials();
    initCatalogControls();
    populateSelectOptions();
    initCalculator();
    initFAQ();
    initMobileNav();
    initBookingForm();
    setMinBookingDate();
    initSmoothScroll();
    
    console.log('✅ WildStones Adventure - All features initialized successfully');
});

// ============================================
// Handle Window Resize for Mobile Nav
// ============================================
window.addEventListener('resize', () => {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    if (window.innerWidth > 768 && navList) {
        navList.classList.remove('active');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
});