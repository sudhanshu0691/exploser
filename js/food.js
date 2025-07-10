// Food Page JavaScript - Complete Food Places Data

// Complete food places data with all 30 locations
const foodData = [
    {
        id: 1,
        name: "Hotel Krishna Palace",
        category: "Hotel",
        foodType: "Both",
        location: "Sadar",
        description: "Hotel Krishna Palace Jabalpur ka famous hotel hai jo traditional Indian cuisine serve karta hai. Yahan par North Indian, South Indian, aur Chinese dishes available hain. Family dining ke liye perfect hai.",
        highlights: "Traditional Indian cuisine, family dining",
        image: "https://www.mptourism.com/images/restaurants/hotel-krishna-palace-sadar.jpg",
        priceRange: "₹₹",
        rating: 4.2,
        specialties: "Butter Chicken, Dal Makhani, Biryani",
        timings: "7:00 AM - 11:00 PM",
        contact: "+91-761-1234567",
        mapLink: "https://maps.google.com/?q=Hotel+Krishna+Palace+Sadar+Jabalpur"
    },
    {
        id: 2,
        name: "Rasoi Restaurant",
        category: "Restaurant",
        foodType: "Veg",
        location: "Napier Town",
        description: "Rasoi Restaurant pure vegetarian restaurant hai jo authentic Indian flavors serve karta hai. Yahan par traditional recipes ka special focus hai. Health conscious people ke liye perfect hai.",
        highlights: "Pure vegetarian, authentic flavors",
        image: "https://www.mptourism.com/images/restaurants/rasoi-restaurant-napier-town.jpg",
        priceRange: "₹",
        rating: 4.0,
        specialties: "Paneer Tikka, Malai Kofta, Thali",
        timings: "11:00 AM - 10:30 PM",
        contact: "+91-761-2345678",
        mapLink: "https://maps.google.com/?q=Rasoi+Restaurant+Napier+Town+Jabalpur"
    },
    {
        id: 3,
        name: "Spice Garden",
        category: "Restaurant",
        foodType: "Both",
        location: "Wright Town",
        description: "Spice Garden modern Indian restaurant hai jo fusion cuisine serve karta hai. Yahan par traditional aur modern dishes ka perfect blend hai. Ambiance bhi bahut attractive hai.",
        highlights: "Fusion cuisine, modern ambiance",
        image: "https://www.mptourism.com/images/restaurants/spice-garden-wright-town.jpg",
        priceRange: "₹₹",
        rating: 4.3,
        specialties: "Fusion Biryani, Tandoori Platter, Desserts",
        timings: "12:00 PM - 11:00 PM",
        contact: "+91-761-3456789",
        mapLink: "https://maps.google.com/?q=Spice+Garden+Wright+Town+Jabalpur"
    },
    {
        id: 4,
        name: "Dhaba Express",
        category: "Dhaba",
        foodType: "Both",
        location: "Highway Road",
        description: "Dhaba Express highway ke pass situated traditional dhaba hai jo authentic North Indian food serve karta hai. Yahan par truck drivers aur travelers dono aate hain. Home-style cooking famous hai.",
        highlights: "Highway dhaba, home-style cooking",
        image: "https://www.mptourism.com/images/restaurants/dhaba-express-highway.jpg",
        priceRange: "₹",
        rating: 4.1,
        specialties: "Dal Tadka, Roti, Sabzi",
        timings: "6:00 AM - 12:00 AM",
        contact: "+91-761-4567890",
        mapLink: "https://maps.google.com/?q=Dhaba+Express+Highway+Jabalpur"
    },
    {
        id: 5,
        name: "Punjabi Dhaba",
        category: "Dhaba",
        foodType: "Non-Veg",
        location: "Near Railway Station",
        description: "Punjabi Dhaba authentic Punjabi cuisine ka specialist hai. Yahan par butter chicken, tandoori chicken, aur other non-veg dishes famous hain. Spicy food lovers ke liye perfect hai.",
        highlights: "Authentic Punjabi, spicy non-veg",
        image: "https://www.mptourism.com/images/restaurants/punjabi-dhaba-railway-station.jpg",
        priceRange: "₹",
        rating: 4.4,
        specialties: "Butter Chicken, Tandoori Chicken, Naan",
        timings: "11:00 AM - 11:00 PM",
        contact: "+91-761-5678901",
        mapLink: "https://maps.google.com/?q=Punjabi+Dhaba+Railway+Station+Jabalpur"
    },
    {
        id: 6,
        name: "Hotel Samrat",
        category: "Hotel",
        foodType: "Both",
        location: "Civil Lines",
        description: "Hotel Samrat luxury dining experience provide karta hai. Yahan par multi-cuisine restaurant hai jo Indian, Chinese, aur Continental dishes serve karta hai. Business meetings ke liye perfect hai.",
        highlights: "Luxury dining, multi-cuisine",
        image: "https://www.mptourism.com/images/restaurants/hotel-samrat-civil-lines.jpg",
        priceRange: "₹₹₹",
        rating: 4.5,
        specialties: "Multi-cuisine buffet, Continental dishes",
        timings: "7:00 AM - 11:30 PM",
        contact: "+91-761-6789012",
        mapLink: "https://maps.google.com/?q=Hotel+Samrat+Civil+Lines+Jabalpur"
    },
    {
        id: 7,
        name: "Green Leaf Restaurant",
        category: "Restaurant",
        foodType: "Veg",
        location: "Adhartal",
        description: "Green Leaf Restaurant organic aur healthy vegetarian food serve karta hai. Yahan par fresh vegetables aur organic ingredients ka use hota hai. Health conscious people ke liye ideal hai.",
        highlights: "Organic food, healthy options",
        image: "https://www.mptourism.com/images/restaurants/green-leaf-restaurant-adhartal.jpg",
        priceRange: "₹₹",
        rating: 4.2,
        specialties: "Organic Thali, Fresh Juices, Salads",
        timings: "10:00 AM - 10:00 PM",
        contact: "+91-761-7890123",
        mapLink: "https://maps.google.com/?q=Green+Leaf+Restaurant+Adhartal+Jabalpur"
    },
    {
        id: 8,
        name: "Chicken Corner",
        category: "Restaurant",
        foodType: "Non-Veg",
        location: "Gorakhpur",
        description: "Chicken Corner chicken dishes ka specialist hai. Yahan par various types ke chicken dishes available hain - grilled, fried, curry, aur tandoori. Chicken lovers ke liye paradise hai.",
        highlights: "Chicken specialist, variety of dishes",
        image: "https://www.mptourism.com/images/restaurants/chicken-corner-gorakhpur.jpg",
        priceRange: "₹₹",
        rating: 4.3,
        specialties: "Grilled Chicken, Chicken Curry, Tandoori",
        timings: "12:00 PM - 11:00 PM",
        contact: "+91-761-8901234",
        mapLink: "https://maps.google.com/?q=Chicken+Corner+Gorakhpur+Jabalpur"
    },
    {
        id: 9,
        name: "Maa Durga Dhaba",
        category: "Dhaba",
        foodType: "Veg",
        location: "Near Bus Stand",
        description: "Maa Durga Dhaba pure vegetarian traditional dhaba hai. Yahan par simple aur tasty food milta hai. Budget friendly hai aur quality bhi maintain karta hai.",
        highlights: "Pure vegetarian, budget friendly",
        image: "https://www.mptourism.com/images/restaurants/maa-durga-dhaba-bus-stand.jpg",
        priceRange: "₹",
        rating: 3.9,
        specialties: "Dal Chawal, Sabzi Roti, Thali",
        timings: "6:00 AM - 11:00 PM",
        contact: "+91-761-9012345",
        mapLink: "https://maps.google.com/?q=Maa+Durga+Dhaba+Bus+Stand+Jabalpur"
    },
    {
        id: 10,
        name: "Chinese Wok",
        category: "Restaurant",
        foodType: "Both",
        location: "Vijay Nagar",
        description: "Chinese Wok authentic Chinese cuisine serve karta hai. Yahan par both vegetarian aur non-vegetarian Chinese dishes available hain. Chinese food lovers ke liye perfect destination hai.",
        highlights: "Authentic Chinese, both veg & non-veg",
        image: "https://www.mptourism.com/images/restaurants/chinese-wok-vijay-nagar.jpg",
        priceRange: "₹₹",
        rating: 4.1,
        specialties: "Fried Rice, Noodles, Manchurian",
        timings: "11:30 AM - 10:30 PM",
        contact: "+91-761-0123456",
        mapLink: "https://maps.google.com/?q=Chinese+Wok+Vijay+Nagar+Jabalpur"
    },
    {
        id: 11,
        name: "Hotel Central",
        category: "Hotel",
        foodType: "Both",
        location: "Sadar",
        description: "Hotel Central Jabalpur ka established hotel hai jo traditional Indian hospitality provide karta hai. Yahan par North Indian aur South Indian dono cuisines available hain.",
        highlights: "Established hotel, traditional hospitality",
        image: "https://www.mptourism.com/images/restaurants/hotel-central-sadar.jpg",
        priceRange: "₹₹",
        rating: 4.0,
        specialties: "North Indian, South Indian, Thali",
        timings: "7:00 AM - 11:00 PM",
        contact: "+91-761-1234568",
        mapLink: "https://maps.google.com/?q=Hotel+Central+Sadar+Jabalpur"
    },
    {
        id: 12,
        name: "Pizza Corner",
        category: "Restaurant",
        foodType: "Both",
        location: "Civic Centre",
        description: "Pizza Corner Italian cuisine ka specialist hai. Yahan par various types ke pizzas, pasta, aur other Italian dishes available hain. Youth ke liye popular destination hai.",
        highlights: "Italian cuisine, pizza specialist",
        image: "https://www.mptourism.com/images/restaurants/pizza-corner-civic-centre.jpg",
        priceRange: "₹₹",
        rating: 4.2,
        specialties: "Margherita Pizza, Pasta, Garlic Bread",
        timings: "11:00 AM - 11:00 PM",
        contact: "+91-761-2345679",
        mapLink: "https://maps.google.com/?q=Pizza+Corner+Civic+Centre+Jabalpur"
    },
    {
        id: 13,
        name: "South Indian Delight",
        category: "Restaurant",
        foodType: "Veg",
        location: "Wright Town",
        description: "South Indian Delight authentic South Indian cuisine serve karta hai. Yahan par dosa, idli, vada, aur other South Indian dishes famous hain. Breakfast ke liye perfect hai.",
        highlights: "Authentic South Indian, breakfast",
        image: "https://www.mptourism.com/images/restaurants/south-indian-delight-wright-town.jpg",
        priceRange: "₹",
        rating: 4.3,
        specialties: "Masala Dosa, Idli Vada, Sambar",
        timings: "7:00 AM - 10:00 PM",
        contact: "+91-761-3456780",
        mapLink: "https://maps.google.com/?q=South+Indian+Delight+Wright+Town+Jabalpur"
    },
    {
        id: 14,
        name: "Mutton House",
        category: "Restaurant",
        foodType: "Non-Veg",
        location: "Ghamapur",
        description: "Mutton House mutton dishes ka specialist hai. Yahan par various types ke mutton dishes available hain - curry, biryani, kebabs. Mutton lovers ke liye perfect destination hai.",
        highlights: "Mutton specialist, variety of dishes",
        image: "https://www.mptourism.com/images/restaurants/mutton-house-ghamapur.jpg",
        priceRange: "₹₹",
        rating: 4.4,
        specialties: "Mutton Curry, Mutton Biryani, Kebabs",
        timings: "12:00 PM - 11:00 PM",
        contact: "+91-761-4567891",
        mapLink: "https://maps.google.com/?q=Mutton+House+Ghamapur+Jabalpur"
    },
    {
        id: 15,
        name: "Gujarati Thali",
        category: "Restaurant",
        foodType: "Veg",
        location: "Napier Town",
        description: "Gujarati Thali authentic Gujarati cuisine serve karta hai. Yahan par traditional Gujarati thali famous hai jo various dishes ke saath aati hai. Gujarati food lovers ke liye perfect hai.",
        highlights: "Authentic Gujarati, traditional thali",
        image: "https://www.mptourism.com/images/restaurants/gujarati-thali-napier-town.jpg",
        priceRange: "₹",
        rating: 4.1,
        specialties: "Gujarati Thali, Dhokla, Thepla",
        timings: "11:00 AM - 10:00 PM",
        contact: "+91-761-5678902",
        mapLink: "https://maps.google.com/?q=Gujarati+Thali+Napier+Town+Jabalpur"
    },
    {
        id: 16,
        name: "Seafood Paradise",
        category: "Restaurant",
        foodType: "Non-Veg",
        location: "Vijay Nagar",
        description: "Seafood Paradise fish aur seafood dishes ka specialist hai. Yahan par fresh fish, prawns, aur other seafood dishes available hain. Seafood lovers ke liye perfect destination hai.",
        highlights: "Seafood specialist, fresh fish",
        image: "https://www.mptourism.com/images/restaurants/seafood-paradise-vijay-nagar.jpg",
        priceRange: "₹₹₹",
        rating: 4.5,
        specialties: "Fish Curry, Prawn Masala, Crab",
        timings: "12:00 PM - 11:00 PM",
        contact: "+91-761-6789013",
        mapLink: "https://maps.google.com/?q=Seafood+Paradise+Vijay+Nagar+Jabalpur"
    },
    {
        id: 17,
        name: "Hotel Ashoka",
        category: "Hotel",
        foodType: "Both",
        location: "Civil Lines",
        description: "Hotel Ashoka luxury hotel hai jo fine dining experience provide karta hai. Yahan par multi-cuisine restaurant hai jo international standards par food serve karta hai.",
        highlights: "Luxury hotel, fine dining",
        image: "https://www.mptourism.com/images/restaurants/hotel-ashoka-civil-lines.jpg",
        priceRange: "₹₹₹",
        rating: 4.6,
        specialties: "Fine dining, international cuisine",
        timings: "6:30 AM - 11:30 PM",
        contact: "+91-761-7890124",
        mapLink: "https://maps.google.com/?q=Hotel+Ashoka+Civil+Lines+Jabalpur"
    },
    {
        id: 18,
        name: "Street Food Corner",
        category: "Dhaba",
        foodType: "Both",
        location: "Civic Centre",
        description: "Street Food Corner local street food ka specialist hai. Yahan par chaat, samosa, kachori, aur other street food items famous hain. Evening snacks ke liye perfect hai.",
        highlights: "Street food, local specialties",
        image: "https://www.mptourism.com/images/restaurants/street-food-corner-civic-centre.jpg",
        priceRange: "₹",
        rating: 4.0,
        specialties: "Chaat, Samosa, Kachori, Jalebi",
        timings: "4:00 PM - 11:00 PM",
        contact: "+91-761-8901235",
        mapLink: "https://maps.google.com/?q=Street+Food+Corner+Civic+Centre+Jabalpur"
    },
    {
        id: 19,
        name: "Biryani House",
        category: "Restaurant",
        foodType: "Both",
        location: "Gorakhpur",
        description: "Biryani House biryani ka specialist hai. Yahan par various types ke biryani available hain - chicken, mutton, veg. Biryani lovers ke liye perfect destination hai.",
        highlights: "Biryani specialist, various types",
        image: "https://www.mptourism.com/images/restaurants/biryani-house-gorakhpur.jpg",
        priceRange: "₹₹",
        rating: 4.3,
        specialties: "Chicken Biryani, Mutton Biryani, Veg Biryani",
        timings: "11:00 AM - 11:00 PM",
        contact: "+91-761-9012346",
        mapLink: "https://maps.google.com/?q=Biryani+House+Gorakhpur+Jabalpur"
    },
    {
        id: 20,
        name: "Cafe Coffee Day",
        category: "Restaurant",
        foodType: "Both",
        location: "South Avenue Mall",
        description: "Cafe Coffee Day coffee aur light snacks ka specialist hai. Yahan par various types ke coffee, sandwiches, aur desserts available hain. Coffee lovers ke liye perfect hai.",
        highlights: "Coffee specialist, light snacks",
        image: "https://www.mptourism.com/images/restaurants/cafe-coffee-day-south-avenue.jpg",
        priceRange: "₹₹",
        rating: 4.2,
        specialties: "Coffee, Sandwiches, Desserts",
        timings: "9:00 AM - 11:00 PM",
        contact: "+91-761-0123457",
        mapLink: "https://maps.google.com/?q=Cafe+Coffee+Day+South+Avenue+Mall+Jabalpur"
    },
    {
        id: 21,
        name: "Hotel President",
        category: "Hotel",
        foodType: "Both",
        location: "Wright Town",
        description: "Hotel President business hotel hai jo professional dining experience provide karta hai. Yahan par conference facilities bhi available hain. Business travelers ke liye perfect hai.",
        highlights: "Business hotel, conference facilities",
        image: "https://www.mptourism.com/images/restaurants/hotel-president-wright-town.jpg",
        priceRange: "₹₹₹",
        rating: 4.4,
        specialties: "Business dining, multi-cuisine",
        timings: "7:00 AM - 11:00 PM",
        contact: "+91-761-1234569",
        mapLink: "https://maps.google.com/?q=Hotel+President+Wright+Town+Jabalpur"
    },
    {
        id: 22,
        name: "Sweet Shop",
        category: "Restaurant",
        foodType: "Veg",
        location: "Sadar",
        description: "Sweet Shop traditional Indian sweets ka specialist hai. Yahan par various types ke sweets, namkeen, aur snacks available hain. Sweet lovers ke liye perfect destination hai.",
        highlights: "Traditional sweets, namkeen",
        image: "https://www.mptourism.com/images/restaurants/sweet-shop-sadar.jpg",
        priceRange: "₹",
        rating: 4.1,
        specialties: "Gulab Jamun, Jalebi, Namkeen",
        timings: "8:00 AM - 10:00 PM",
        contact: "+91-761-2345680",
        mapLink: "https://maps.google.com/?q=Sweet+Shop+Sadar+Jabalpur"
    },
    {
        id: 23,
        name: "Ice Cream Parlor",
        category: "Restaurant",
        foodType: "Veg",
        location: "Civic Centre",
        description: "Ice Cream Parlor various flavors ke ice cream serve karta hai. Yahan par sundaes, shakes, aur other ice cream desserts available hain. Kids aur families ke liye perfect hai.",
        highlights: "Ice cream specialist, various flavors",
        image: "https://www.mptourism.com/images/restaurants/ice-cream-parlor-civic-centre.jpg",
        priceRange: "₹",
        rating: 4.0,
        specialties: "Ice Cream, Sundaes, Shakes",
        timings: "10:00 AM - 11:00 PM",
        contact: "+91-761-3456781",
        mapLink: "https://maps.google.com/?q=Ice+Cream+Parlor+Civic+Centre+Jabalpur"
    },
    {
        id: 24,
        name: "Juice Bar",
        category: "Restaurant",
        foodType: "Veg",
        location: "Wright Town",
        description: "Juice Bar fresh juices aur healthy drinks serve karta hai. Yahan par fruit juices, smoothies, aur health drinks available hain. Health conscious people ke liye perfect hai.",
        highlights: "Fresh juices, healthy drinks",
        image: "https://www.mptourism.com/images/restaurants/juice-bar-wright-town.jpg",
        priceRange: "₹",
        rating: 4.2,
        specialties: "Fresh Juices, Smoothies, Health Drinks",
        timings: "8:00 AM - 10:00 PM",
        contact: "+91-761-4567892",
        mapLink: "https://maps.google.com/?q=Juice+Bar+Wright+Town+Jabalpur"
    },
    {
        id: 25,
        name: "Fast Food Center",
        category: "Restaurant",
        foodType: "Both",
        location: "Vijay Nagar",
        description: "Fast Food Center quick meals serve karta hai. Yahan par burgers, fries, wraps, aur other fast food items available hain. Quick meal ke liye perfect hai.",
        highlights: "Quick meals, fast food",
        image: "https://www.mptourism.com/images/restaurants/fast-food-center-vijay-nagar.jpg",
        priceRange: "₹",
        rating: 3.9,
        specialties: "Burgers, Fries, Wraps",
        timings: "11:00 AM - 11:00 PM",
        contact: "+91-761-5678903",
        mapLink: "https://maps.google.com/?q=Fast+Food+Center+Vijay+Nagar+Jabalpur"
    },
    {
        id: 26,
        name: "Hotel Grand",
        category: "Hotel",
        foodType: "Both",
        location: "Civil Lines",
        description: "Hotel Grand luxury accommodation ke saath fine dining provide karta hai. Yahan par rooftop restaurant bhi hai jo city ka beautiful view deta hai. Special occasions ke liye perfect hai.",
        highlights: "Luxury hotel, rooftop dining",
        image: "https://www.mptourism.com/images/restaurants/hotel-grand-civil-lines.jpg",
        priceRange: "₹₹₹",
        rating: 4.5,
        specialties: "Rooftop dining, fine cuisine",
        timings: "6:30 AM - 11:30 PM",
        contact: "+91-761-6789014",
        mapLink: "https://maps.google.com/?q=Hotel+Grand+Civil+Lines+Jabalpur"
    },
    {
        id: 27,
        name: "Dessert Corner",
        category: "Restaurant",
        foodType: "Veg",
        location: "Napier Town",
        description: "Dessert Corner various types ke desserts serve karta hai. Yahan par cakes, pastries, ice cream, aur other sweet items available hain. Dessert lovers ke liye perfect hai.",
        highlights: "Dessert specialist, various sweets",
        image: "https://www.mptourism.com/images/restaurants/dessert-corner-napier-town.jpg",
        priceRange: "₹₹",
        rating: 4.3,
        specialties: "Cakes, Pastries, Ice Cream",
        timings: "10:00 AM - 10:00 PM",
        contact: "+91-761-7890125",
        mapLink: "https://maps.google.com/?q=Dessert+Corner+Napier+Town+Jabalpur"
    },
    {
        id: 28,
        name: "Breakfast Club",
        category: "Restaurant",
        foodType: "Both",
        location: "Wright Town",
        description: "Breakfast Club breakfast aur brunch ka specialist hai. Yahan par various types ke breakfast items available hain. Morning meal ke liye perfect destination hai.",
        highlights: "Breakfast specialist, brunch",
        image: "https://www.mptourism.com/images/restaurants/breakfast-club-wright-town.jpg",
        priceRange: "₹₹",
        rating: 4.1,
        specialties: "Breakfast Items, Brunch, Coffee",
        timings: "6:00 AM - 2:00 PM",
        contact: "+91-761-8901236",
        mapLink: "https://maps.google.com/?q=Breakfast+Club+Wright+Town+Jabalpur"
    },
    {
        id: 29,
        name: "Night Food Street",
        category: "Dhaba",
        foodType: "Both",
        location: "Civic Centre",
        description: "Night Food Street late night food ka specialist hai. Yahan par various street food items available hain jo late night tak open rehta hai. Night owls ke liye perfect hai.",
        highlights: "Late night food, street food",
        image: "https://www.mptourism.com/images/restaurants/night-food-street-civic-centre.jpg",
        priceRange: "₹",
        rating: 4.0,
        specialties: "Street Food, Late Night Snacks",
        timings: "6:00 PM - 2:00 AM",
        contact: "+91-761-9012347",
        mapLink: "https://maps.google.com/?q=Night+Food+Street+Civic+Centre+Jabalpur"
    },
    {
        id: 30,
        name: "Family Restaurant",
        category: "Restaurant",
        foodType: "Both",
        location: "Adhartal",
        description: "Family Restaurant family dining ke liye perfect hai. Yahan par comfortable seating aur family-friendly menu available hai. Family gatherings ke liye ideal destination hai.",
        highlights: "Family dining, comfortable seating",
        image: "https://www.mptourism.com/images/restaurants/family-restaurant-adhartal.jpg",
        priceRange: "₹₹",
        rating: 4.2,
        specialties: "Family Meals, Multi-cuisine",
        timings: "11:00 AM - 11:00 PM",
        contact: "+91-761-0123458",
        mapLink: "https://maps.google.com/?q=Family+Restaurant+Adhartal+Jabalpur"
    }
];

// DOM Elements
const foodGrid = document.getElementById('food-grid');
const categoryFilter = document.getElementById('category-filter');
const foodTypeFilter = document.getElementById('food-type-filter');
const locationFilter = document.getElementById('location-filter');
const priceFilter = document.getElementById('price-filter');
const searchFilter = document.getElementById('search-filter');
const sortSelect = document.getElementById('sort-select');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Render Food Places
function renderFoodPlaces(foodPlaces = foodData) {
    if (foodPlaces.length === 0) {
        foodGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No restaurants found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    foodGrid.innerHTML = foodPlaces.map(place => `
        <div class="food-card" data-category="${place.category}" data-food-type="${place.foodType}" data-location="${place.location}" data-price="${place.priceRange}">
            <div class="food-image">
                <img src="${place.image}" alt="${place.name}" loading="lazy">
                <div class="food-badges">
                    <div class="food-category-badge">${place.category}</div>
                    <div class="food-type-badge">${place.foodType}</div>
                    <div class="food-price-badge">${place.priceRange}</div>
                </div>
                <div class="food-rating">
                    <i class="fas fa-star"></i>
                    <span>${place.rating}</span>
                </div>
            </div>
            <div class="food-content">
                <h3 class="food-title">${place.name}</h3>
                <div class="food-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${place.location}</span>
                </div>
                <p class="food-description">${place.description}</p>
                <div class="food-details">
                    <div class="food-detail">
                        <div class="food-detail-label">Highlights</div>
                        <div class="food-detail-value">${place.highlights}</div>
                    </div>
                    <div class="food-detail">
                        <div class="food-detail-label">Specialties</div>
                        <div class="food-detail-value">${place.specialties}</div>
                    </div>
                    <div class="food-detail">
                        <div class="food-detail-label">Timings</div>
                        <div class="food-detail-value">${place.timings}</div>
                    </div>
                    <div class="food-detail">
                        <div class="food-detail-label">Contact</div>
                        <div class="food-detail-value">${place.contact}</div>
                    </div>
                </div>
                <div class="food-actions">
                    <a href="${place.mapLink}" target="_blank" class="btn-map">
                        <i class="fas fa-map"></i>
                        View on Map
                    </a>
                    <a href="#" class="btn-view" onclick="showFoodDetails(${place.id})">
                        <i class="fas fa-info-circle"></i>
                        More Info
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Food Places
function filterFoodPlaces() {
    const category = categoryFilter.value;
    const foodType = foodTypeFilter.value;
    const location = locationFilter.value;
    const price = priceFilter.value;
    const search = searchFilter.value.toLowerCase();

    let filteredFood = foodData.filter(place => {
        const matchesCategory = category === 'all' || place.category === category;
        const matchesFoodType = foodType === 'all' || place.foodType === foodType;
        const matchesLocation = location === 'all' || place.location === location;
        const matchesPrice = price === 'all' || place.priceRange === price;
        const matchesSearch = search === '' || 
            place.name.toLowerCase().includes(search) ||
            place.description.toLowerCase().includes(search) ||
            place.highlights.toLowerCase().includes(search) ||
            place.specialties.toLowerCase().includes(search) ||
            place.location.toLowerCase().includes(search);

        return matchesCategory && matchesFoodType && matchesLocation && matchesPrice && matchesSearch;
    });

    // Sort the filtered results
    const sortBy = sortSelect.value;
    if (sortBy === 'rating-high') {
        filteredFood.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'rating-low') {
        filteredFood.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === 'price-low') {
        filteredFood.sort((a, b) => a.priceRange.length - b.priceRange.length);
    } else if (sortBy === 'price-high') {
        filteredFood.sort((a, b) => b.priceRange.length - a.priceRange.length);
    } else if (sortBy === 'name') {
        filteredFood.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderFoodPlaces(filteredFood);
}

// Event Listeners for Filters
categoryFilter.addEventListener('change', filterFoodPlaces);
foodTypeFilter.addEventListener('change', filterFoodPlaces);
locationFilter.addEventListener('change', filterFoodPlaces);
priceFilter.addEventListener('change', filterFoodPlaces);
searchFilter.addEventListener('input', filterFoodPlaces);
sortSelect.addEventListener('change', filterFoodPlaces);

// Show Food Details (Modal or new page)
function showFoodDetails(foodId) {
    const food = foodData.find(f => f.id === foodId);
    if (food) {
        // For now, just show an alert. You can implement a modal or redirect to a detail page
        alert(`${food.name}\n\n${food.description}\n\nHighlights: ${food.highlights}\nSpecialties: ${food.specialties}\nTimings: ${food.timings}\nContact: ${food.contact}`);
    }
}

// Footer category links
document.querySelectorAll('[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
        categoryFilter.value = category;
        filterFoodPlaces();
        
        // Scroll to food section
        document.querySelector('.food-section').scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderFoodPlaces();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Export for potential use
window.JabalpurFood = {
    foodData,
    filterFoodPlaces,
    showFoodDetails
}; 