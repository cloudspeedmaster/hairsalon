// =================================================================
// DATA FOR DYNAMIC CONTENT
// All text and repeatable content is stored here for easy updates.
// =================================================================

// --- Multi-language Translations ---
// Add all user-facing text here.
const translations = {
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_services: 'Services',
        nav_stylists: 'Stylists',
        nav_gallery: 'Gallery',
        nav_pricing: 'Pricing',
        nav_contact: 'Contact',
        hero_title: '<span class="text-stroke">ELEVATE</span> <span class="gradient-text">YOUR STYLE</span>',
        hero_subtitle: 'Where artistry meets precision to create your signature look',
        hero_button1: 'Explore Services',
        hero_button2: 'Book Appointment',
        about_title: '<span class="gradient-text">Redefining</span> Hair Artistry',
        about_p1: 'At STRANDS, we believe that exceptional hair is more than just a service—it\'s an art form. Our team of passionate stylists combines technical expertise with creative vision to deliver personalized looks that enhance your natural beauty and reflect your unique personality.',
        about_p2: 'Founded in 2015, our salon has become a destination for those who seek more than just a haircut. We\'ve created a space where innovation meets tradition, where every client receives undivided attention, and where the result is always a masterpiece.',
        about_button: 'Book Your Experience',
        services_title: 'Our <span class="gradient-text">Premium</span> Services',
        services_subtitle: 'Discover our comprehensive range of hair services designed to transform, enhance, and maintain your signature look.',
        stylists_title: 'Meet Our <span class="gradient-text">Expert</span> Stylists',
        stylists_subtitle: 'Our team of talented professionals brings creativity, passion, and expertise to every client experience.',
        gallery_title: 'Our <span class="gradient-text">Stunning</span> Portfolio',
        gallery_subtitle: 'Browse our gallery to see the artistry and skill of our stylists and get inspired for your next visit.',
        gallery_button: 'View on Instagram',
        testimonials_title: 'Client <span class="gradient-text">Testimonials</span>',
        testimonials_subtitle: 'Hear what our clients have to say about their experiences at STRANDS.',
        pricing_title: 'Our <span class="gradient-text">Pricing</span>',
        pricing_subtitle: 'Transparent pricing for our premium services. All services include a consultation, shampoo, and style.',
        contact_title: 'Book Your <span class="gradient-text">Appointment</span>',
        contact_subtitle: 'Ready to transform your look? Schedule your appointment today and experience the STRANDS difference.',
        contact_info_title: 'Contact Information',
        contact_form_title: 'Request a Booking',
        contact_info_address_title: 'Our Address',
        contact_info_phone_title: 'Phone',
        contact_info_email_title: 'Email',
        contact_info_hours_title: 'Opening Hours',
        contact_info_hours_p1: 'Tue - Sat: 10:00 AM - 7:00 PM',
        contact_info_hours_p2: 'Sun - Mon: Closed',
        form_name: 'Full Name',
        form_email: 'Email Address',
        form_service: 'Service',
        form_service_option: 'Select a service',
        form_date: 'Preferred Date',
        form_message: 'Message',
        form_button: 'Send Request',
        footer_text: 'All Rights Reserved. Designed with',
        book_now: 'Book Now',
    },
    al: {
        nav_home: 'Kryefaqja',
        nav_about: 'Rreth Nesh',
        nav_services: 'Shërbimet',
        nav_stylists: 'Stilistët',
        nav_gallery: 'Galeria',
        nav_pricing: 'Çmimet',
        nav_contact: 'Kontakti',
        hero_title: '<span class="text-stroke">LARTËSO</span> <span class="gradient-text">STILIN TËND</span>',
        hero_subtitle: 'Ku mjeshtëria takohet me saktësinë për të krijuar pamjen tuaj unike',
        hero_button1: 'Shfleto Shërbimet',
        hero_button2: 'Rezervo Takim',
        about_title: '<span class="gradient-text">Ridefinimi</span> i Artit të Flokëve',
        about_p1: 'Në STRANDS, ne besojmë se flokët e jashtëzakonshëm janë më shumë se një shërbim—janë një formë arti. Ekipi ynë i stilistëve të pasionuar kombinon ekspertizën teknike me vizionin krijues për të ofruar pamje të personalizuara që rrisin bukurinë tuaj natyrale dhe pasqyrojnë personalitetin tuaj unik.',
        about_p2: 'Themeluar në vitin 2015, salloni ynë është bërë një destinacion për ata që kërkojnë më shumë se një prerje flokësh. Kemi krijuar një hapësirë ku inovacioni takohet me traditën, ku çdo klient merr vëmendje të plotë dhe ku rezultati është gjithmonë një kryevepër.',
        about_button: 'Rezervoni Përvojën Tuaj',
        services_title: 'Shërbimet Tona <span class="gradient-text">Premium</span>',
        services_subtitle: 'Zbuloni gamën tonë të plotë të shërbimeve të flokëve të dizajnuara për të transformuar, përmirësuar dhe mirëmbajtur pamjen tuaj unike.',
        stylists_title: 'Njihuni me Stilistët Tanë <span class="gradient-text">Ekspertë</span>',
        stylists_subtitle: 'Ekipi ynë i profesionistëve të talentuar sjell kreativitet, pasion dhe ekspertizë në çdo përvojë klienti.',
        gallery_title: 'Portfolio Jonë <span class="gradient-text">Mahnitëse</span>',
        gallery_subtitle: 'Shfletoni galerinë tonë për të parë mjeshtërinë dhe aftësitë e stilistëve tanë dhe për t\'u frymëzuar për vizitën tuaj të ardhshme.',
        gallery_button: 'Shiko në Instagram',
        testimonials_title: 'Vlerësimet e <span class="gradient-text">Klientëve</span>',
        testimonials_subtitle: 'Dëgjoni çfarë thonë klientët tanë për përvojat e tyre në STRANDS.',
        pricing_title: 'Çmimet <span class="gradient-text">Tona</span>',
        pricing_subtitle: 'Çmime transparente për shërbimet tona premium. Të gjitha shërbimet përfshijnë një konsultë, larje dhe stilim.',
        contact_title: 'Rezervoni <span class="gradient-text">Takimin Tuaj</span>',
        contact_subtitle: 'Gati për të transformuar pamjen tuaj? Rezervoni takimin tuaj sot dhe përjetoni diferencën e STRANDS.',
        contact_info_title: 'Informacion Kontakti',
        contact_form_title: 'Kërko një Rezervim',
        contact_info_address_title: 'Adresa Jonë',
        contact_info_phone_title: 'Telefoni',
        contact_info_email_title: 'Email',
        contact_info_hours_title: 'Orari i Punës',
        contact_info_hours_p1: 'E Martë - E Shtunë: 10:00 - 19:00',
        contact_info_hours_p2: 'E Diel - E Hënë: Mbyllur',
        form_name: 'Emri i plotë',
        form_email: 'Adresa Email',
        form_service: 'Shërbimi',
        form_service_option: 'Zgjidhni një shërbim',
        form_date: 'Data e Preferuar',
        form_message: 'Mesazhi',
        form_button: 'Dërgo Kërkesën',
        footer_text: 'Të gjitha të drejtat e rezervuara. Dizajnuar me',
        book_now: 'Rezervo Tani',
    },
};

// --- Dynamic Content Arrays ---

const services = [
    { id: 'cut', icon: 'fa-cut', title: 'Precision Haircuts', desc: 'Expertly crafted cuts tailored to your face shape, hair texture, and personal style.', price: '$65' },
    { id: 'color', icon: 'fa-palette', title: 'Creative Coloring', desc: 'From subtle highlights to bold transformations, our color specialists use advanced techniques.', price: '$85' },
    { id: 'balayage', icon: 'fa-magic', title: 'Balayage & Ombré', desc: 'Hand-painted highlights that create a natural, sun-kissed effect for a dimensional look.', price: '$120' },
    { id: 'styling', icon: 'fa-wind', title: 'Styling & Blowouts', desc: 'Professional styling for any occasion, from everyday elegance to special event glamour.', price: '$55' },
    { id: 'keratin', icon: 'fa-fire', title: 'Keratin Treatments', desc: 'Smooth, frizz-free hair with our premium keratin services. Enjoy manageable, silky hair.', price: '$175' },
    { id: 'extensions', icon: 'fa-plus', title: 'Extensions & Additions', desc: 'Add length, volume, or color with our high-quality hair extensions.', price: '$250' }
];

const stylists = [
    { name: 'Alex Morgan', role: 'Creative Director', desc: 'Specializing in precision cuts and creative color.', imgId: '2' },
    { name: 'Sophia Chen', role: 'Color Specialist', desc: 'Expert in balayage, ombré, and creative color.', imgId: '20' },
    { name: 'Marcus Rivera', role: 'Style Director', desc: 'Specializes in avant-garde styling and makeovers.', imgId: '3' },
    { name: 'Olivia Taylor', role: 'Texture Expert', desc: 'Specializing in curly hair and natural texture.', imgId: '4' }
];

const galleryItems = [
    { title: 'Balayage Transformation', by: 'Alex Morgan', imgId: '106' },
    { title: 'Precision Bob Cut', by: 'Marcus Rivera', imgId: '1027' },
    { title: 'Vibrant Fashion Color', by: 'Sophia Chen', imgId: '152' },
    { title: 'Textured Pixie Cut', by: 'Olivia Taylor', imgId: '327' },
    { title: 'Elegant Updo', by: 'Marcus Rivera', imgId: '433' },
    { title: 'Natural Curls Enhancement', by: 'Olivia Taylor', imgId: '628' },
    { title: 'Dimensional Highlights', by: 'Sophia Chen', imgId: '996' },
    { title: 'Modern Shag Cut', by: 'Alex Morgan', imgId: '1074' }
];

const testimonials = [
    { name: 'Jessica R.', role: 'Regular Client', quote: 'Alex completely transformed my hair! Not only did she listen to what I wanted, but she also offered suggestions that worked perfectly. I\'ve never received so many compliments!' },
    { name: 'Michael T.', role: 'Loyal Client', quote: 'I\'ve been to many salons, but STRANDS is in a league of its own. The attention to detail, the luxurious experience, and the results are consistently exceptional. Sophia is a color genius!' },
    { name: 'Aisha K.', role: 'New Client', quote: 'As someone with curly hair, finding a stylist who understands my texture is a challenge. Olivia not only understands curls but celebrates them! My hair has never looked or felt healthier.' }
];

const pricing = [
    {
        id: 'cuts_styling',
        icon: 'fa-cut',
        title: 'Haircuts & Styling',
        items: [
            { name: 'Women\'s Haircut', price: '$65-85' },
            { name: 'Men\'s Haircut', price: '$45-65' },
            { name: 'Blowout & Style', price: '$55+' },
            { name: 'Special Occasion', price: '$85+' },
        ]
    },
    {
        id: 'color_services',
        icon: 'fa-palette',
        title: 'Color Services',
        items: [
            { name: 'Single Process', price: '$85+' },
            { name: 'Partial Highlights', price: '$110+' },
            { name: 'Full Highlights', price: '$150+' },
            { name: 'Balayage/Ombré', price: '$175+' },
        ]
    },
    {
        id: 'treatments_extras',
        icon: 'fa-magic',
        title: 'Treatments & Extras',
        items: [
            { name: 'Deep Conditioning', price: '$35+' },
            { name: 'Keratin Treatment', price: '$250+' },
            { name: 'Hair Extensions', price: '$350+' },
            { name: 'Scalp Treatment', price: '$45+' },
        ]
    }
];

const contactInfo = [
    { id: 'address', icon: 'fa-map-marker-alt', title: 'contact_info_address_title', details: ['123 Luxury Lane, Beverly Hills, CA 90210'] },
    { id: 'phone', icon: 'fa-phone', title: 'contact_info_phone_title', details: ['(310) 555-0123'] },
    { id: 'email', icon: 'fa-envelope', title: 'contact_info_email_title', details: ['bookings@strands.com'] },
    { id: 'hours', icon: 'fa-clock', title: 'contact_info_hours_title', details: ['contact_info_hours_p1', 'contact_info_hours_p2'] }
];

// =================================================================
// DYNAMIC RENDERING FUNCTIONS
// These functions build the HTML from the data above.
// =================================================================

function renderNavLinks() {
    const navKeys = ['home', 'about', 'services', 'stylists', 'gallery', 'pricing', 'contact'];
    const desktopNav = document.getElementById('desktop-nav');
    const mobileNav = document.getElementById('mobile-nav');

    const linksHTML = navKeys.map(key => `
        <a href="#${key}" class="nav-link text-primary hover:text-secondary font-medium" data-translate="nav_${key}"></a>
    `).join('');
    
    const mobileLinksHTML = navKeys.map(key => `
        <a href="#${key}" class="text-primary hover:text-secondary font-medium py-2 mobile-link" data-translate="nav_${key}"></a>
    `).join('');

    desktopNav.innerHTML = linksHTML;
    mobileNav.innerHTML = mobileLinksHTML;
}

function renderServices() {
    const grid = document.getElementById('services-grid');
    grid.innerHTML = services.map((service, index) => `
        <div class="service-card rounded-xl bg-white shadow-lg overflow-hidden p-8" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
            <div class="mb-6">
                <div class="service-icon w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-primary">
                    <i class="fas ${service.icon} text-2xl"></i>
                </div>
            </div>
            <h3 class="text-2xl font-semibold cormorant text-primary mb-3" data-translate="service_title_${service.id}">${service.title}</h3>
            <p class="text-gray-600 mb-6" data-translate="service_desc_${service.id}">${service.desc}</p>
            <div class="flex justify-between items-center">
                <span class="text-secondary font-medium">From ${service.price}</span>
                <a href="#contact" class="text-primary hover:text-secondary font-medium flex items-center transition-all" data-translate="book_now">Book Now <i class="fas fa-arrow-right ml-2"></i></a>
            </div>
        </div>
    `).join('');
}

function renderStylists() {
    const grid = document.getElementById('stylists-grid');
    grid.innerHTML = stylists.map((stylist, index) => `
        <div class="stylist-card rounded-xl shadow-lg bg-white" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
            <div class="relative">
                <img src="https://picsum.photos/id/${stylist.imgId}/400/500" alt="${stylist.name}" class="w-full h-96 object-cover rounded-t-xl">
                <div class="stylist-overlay absolute inset-0 flex items-end p-6">
                     <a href="#contact" class="text-white hover:text-secondary font-medium flex items-center transition-all text-sm">
                        <span data-translate="book_now"></span> ${stylist.name} <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold cormorant text-primary" data-translate="stylist_name_${stylist.name.split(' ')[0].toLowerCase()}">${stylist.name}</h3>
                <p class="text-secondary font-medium text-sm mb-2" data-translate="stylist_role_${stylist.name.split(' ')[0].toLowerCase()}">${stylist.role}</p>
                <p class="text-gray-600 text-sm" data-translate="stylist_desc_${stylist.name.split(' ')[0].toLowerCase()}">${stylist.desc}</p>
            </div>
        </div>
    `).join('');
}

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = galleryItems.map((item, index) => `
        <div class="gallery-item rounded-xl shadow-lg" data-aos="zoom-in" data-aos-delay="${(index + 1) * 100}">
            <img src="https://picsum.photos/id/${item.imgId}/500/500" alt="${item.title}" class="w-full h-full object-cover rounded-xl">
            <div class="gallery-overlay absolute inset-0 flex items-end p-4">
                <div class="text-white">
                    <h4 class="font-medium" data-translate="gallery_item_title_${index}">${item.title}</h4>
                    <p class="text-xs" data-translate="gallery_item_by_${index}">By ${item.by}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    grid.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card bg-gray-50/50 rounded-xl p-8 shadow-lg relative" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
            <div class="flex text-secondary mb-4">
                ${'<i class="fas fa-star"></i>'.repeat(5)}
            </div>
            <p class="text-gray-600 italic mb-6" data-translate="testimonial_quote_${index}">${testimonial.quote}</p>
            <div class="flex items-center">
                 <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <i class="fas fa-user text-secondary"></i>
                </div>
                <div>
                    <h4 class="font-semibold text-primary">${testimonial.name}</h4>
                    <p class="text-gray-500 text-sm" data-translate="testimonial_role_${index}">${testimonial.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPricing() {
    const grid = document.getElementById('pricing-grid');
    grid.innerHTML = pricing.map((category, index) => `
        <div class="price-card rounded-xl bg-white shadow-lg overflow-hidden p-8" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
            <div class="mb-6">
                <div class="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-primary">
                    <i class="fas ${category.icon} text-2xl"></i>
                </div>
            </div>
            <h3 class="text-2xl font-semibold cormorant text-primary mb-6" data-translate="pricing_title_${category.id}">${category.title}</h3>
            <div class="space-y-4 mb-8">
                ${category.items.map(item => `
                    <div class="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span class="text-gray-700" data-translate="pricing_item_${category.id}_${item.name.toLowerCase().replace(/ /g, '_')}">${item.name}</span>
                        <span class="text-secondary font-medium">${item.price}</span>
                    </div>
                `).join('')}
            </div>
            <a href="#contact" class="btn-primary py-3 px-6 rounded-full font-medium inline-block w-full text-center" data-translate="book_now">Book Now</a>
        </div>
    `).join('');
}

function renderContactInfo() {
    const container = document.querySelector('#contact .space-y-6');
    container.innerHTML = contactInfo.map(info => `
        <div class="flex items-start">
            <div class="w-12 h-12 rounded-full bg-secondary/20 flex-shrink-0 flex items-center justify-center mr-4">
                <i class="fas ${info.icon} text-secondary"></i>
            </div>
            <div>
                <h4 class="font-semibold text-primary" data-translate="${info.title}"></h4>
                ${info.details.map(detail => `<p class="text-gray-600" data-translate="${info.id === 'hours' ? detail : ''}">${info.id !== 'hours' ? detail : ''}</p>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderBookingForm() {
    const form = document.getElementById('booking-form');
    
    // Add dynamic translations to data arrays before rendering
    services.forEach(s => { 
        translations.en[`service_option_${s.id}`] = s.title;
        translations.al[`service_option_${s.id}`] = s.title; // Placeholder, replace with actual translation
    });
    
    const serviceOptionsHTML = services.map(s => `<option value="${s.id}" data-translate="service_option_${s.id}"></option>`).join('');

    form.innerHTML = `
        <div>
            <label for="name" class="block text-sm font-medium text-gray-700" data-translate="form_name"></label>
            <input type="text" name="name" id="name" required class="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary">
        </div>
        <div>
            <label for="email" class="block text-sm font-medium text-gray-700" data-translate="form_email"></label>
            <input type="email" name="email" id="email" required class="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary">
        </div>
        <div>
            <label for="service" class="block text-sm font-medium text-gray-700" data-translate="form_service"></label>
            <select id="service" name="service" required class="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary">
                <option value="" data-translate="form_service_option"></option>
                ${serviceOptionsHTML}
            </select>
        </div>
        <div>
            <label for="date" class="block text-sm font-medium text-gray-700" data-translate="form_date"></label>
            <input type="date" name="date" id="date" required class="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary">
        </div>
        <div>
            <label for="message" class="block text-sm font-medium text-gray-700" data-translate="form_message"></label>
            <textarea id="message" name="message" rows="4" class="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary"></textarea>
        </div>
        <div>
            <button type="submit" class="w-full btn-primary py-4 px-8 rounded-full font-medium text-lg" data-translate="form_button"></button>
        </div>
    `;
}

// Add dynamic translations for repeatable content
function prepareDynamicTranslations() {
    const categories = { services, stylists, galleryItems, testimonials, pricing };
    Object.keys(categories).forEach(catKey => {
        categories[catKey].forEach((item, index) => {
            Object.keys(item).forEach(itemKey => {
                if (typeof item[itemKey] === 'string' && itemKey !== 'icon' && itemKey !== 'imgId' && !item[itemKey].includes('$')) {
                    const uniqueId = item.id || item.name.split(' ')[0].toLowerCase() || index;
                    const transKey = `${catKey.slice(0, -1)}_${itemKey}_${uniqueId}`;
                    translations.en[transKey] = item[itemKey];
                    translations.al[transKey] = item[itemKey]; // Placeholder, replace with actual translation
                }
            });
        });
    });
}

// =================================================================
// LANGUAGE SWITCHER LOGIC
// =================================================================

const languageSwitcher = document.getElementById('language-switcher');
const langToggleButton = document.getElementById('lang-toggle-btn');
const langOptionsContainer = languageSwitcher.querySelector('.options');
const supportedLangs = {
    en: { name: 'EN', flag: '🇬🇧' },
    al: { name: 'AL', flag: '🇦🇱' }
};

function switchLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLangSwitcherUI(lang);
}

function updateLangSwitcherUI(currentLang) {
    langToggleButton.innerHTML = `<span>${supportedLangs[currentLang].flag}</span> <span>${supportedLangs[currentLang].name}</span>`;
    
    langOptionsContainer.innerHTML = Object.keys(supportedLangs)
        .filter(lang => lang !== currentLang)
        .map(lang => `
            <button data-lang="${lang}" class="lang-option w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                <span>${supportedLangs[lang].flag}</span>
                <span>${supportedLangs[lang].name}</span>
            </button>
        `).join('');

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
            languageSwitcher.classList.remove('active');
        });
    });
}

// =================================================================
// EVENT LISTENERS & INITIALIZATION
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({ duration: 800, once: true, offset: 50 });

    // --- Render all dynamic content ---
    renderNavLinks();
    renderServices();
    renderStylists();
    renderGallery();
    renderTestimonials();
    renderPricing();
    renderContactInfo();
    renderBookingForm();
    prepareDynamicTranslations();

    // --- Language Switcher Setup ---
    langToggleButton.addEventListener('click', () => languageSwitcher.classList.toggle('active'));
    document.addEventListener('click', (e) => {
        if (!languageSwitcher.contains(e.target)) {
            languageSwitcher.classList.remove('active');
        }
    });
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);


    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // --- Social Media Floater ---
    const socialFloater = document.getElementById('social-floater');
    const socialToggleButton = document.getElementById('social-toggle-btn');
    socialToggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        socialFloater.classList.toggle('active');
        socialToggleButton.classList.toggle('rotate-45');
    });
    document.addEventListener('click', () => {
        socialFloater.classList.remove('active');
        socialToggleButton.classList.remove('rotate-45');
    });
});
