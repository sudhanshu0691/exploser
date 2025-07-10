// Places Page JavaScript - Complete Tourist Places Data

// Complete places data with all 38 locations
const placesData = [
    {
        id: 1,
        name: "Bhedaghat",
        category: "Nature",
        religion: "—",
        location: "Bhedaghat",
        description: "Bhedaghat Jabalpur ka sabse famous tourist destination hai. Yahan par Marble Rocks aur Dhuandhar Falls dono hain. Narmada River ke dono sides par white marble ke cliffs hain jo boat ride ke time bahut beautiful dikhte hain. Best time to visit: October to March.",
        highlights: "Marble Rocks, boat ride on Narmada",
        image: "https://www.mptourism.com/images/poi/bhedaghat-marble-rocks-jabalpur.jpg",
        bestTime: "October to March",
        entryFee: "₹50-200",
        mapLink: "https://maps.google.com/?q=Bhedaghat+Jabalpur"
    },
    {
        id: 2,
        name: "Dhuandhar Falls",
        category: "Waterfall",
        religion: "—",
        location: "Near Bhedaghat",
        description: "Dhuandhar Falls Narmada River ka smoky cascade hai jo Bhedaghat ke pass hai. Monsoon mein ye waterfall bahut powerful dikhta hai aur smoky mist create karta hai. Boat ride bhi available hoti hai jo waterfall ke pass tak jaati hai.",
        highlights: "Smoky mist waterfall, best in monsoon",
        image: "https://www.mptourism.com/images/poi/dhuandhar-falls-jabalpur.jpg",
        bestTime: "July to March",
        entryFee: "₹50-200",
        mapLink: "https://maps.google.com/?q=Dhuandhar+Falls+Jabalpur"
    },
    {
        id: 3,
        name: "Marble Rocks",
        category: "Nature",
        religion: "—",
        location: "Along Narmada River",
        description: "Marble Rocks Bhedaghat mein Narmada River ke dono sides par 100-feet tall white marble ke cliffs hain. Boat ride through these rocks ek unforgettable experience hai. Sunset time par ye rocks golden color mein chamakte hain.",
        highlights: "100-ft tall marble cliffs",
        image: "https://www.mptourism.com/images/poi/marble-rocks-bhedaghat-jabalpur.jpg",
        bestTime: "October to March",
        entryFee: "₹100-300",
        mapLink: "https://maps.google.com/?q=Marble+Rocks+Bhedaghat"
    },
    {
        id: 4,
        name: "Madan Mahal Fort",
        category: "Historical",
        religion: "—",
        location: "Madan Mahal",
        description: "Madan Mahal Fort 11th century ka historical fort hai jo Gond dynasty ne banaya tha. Hilltop par situated ye fort city ka panoramic view deta hai. Architecture lovers ke liye perfect destination hai aur history buffs ke liye bhi interesting hai.",
        highlights: "Ancient fort with panoramic views",
        image: "https://www.mptourism.com/images/poi/madan-mahal-fort-jabalpur.jpg",
        bestTime: "October to March",
        entryFee: "₹20-50",
        mapLink: "https://maps.google.com/?q=Madan+Mahal+Fort+Jabalpur"
    },
    {
        id: 5,
        name: "Balancing Rock",
        category: "Geological Wonder",
        religion: "—",
        location: "Near Madan Mahal",
        description: "Balancing Rock ek natural geological wonder hai jo Madan Mahal ke pass hai. Ye rock naturally dusre rock par balanced hai aur gravity ke against stand karta hai. Photography ke liye perfect spot hai.",
        highlights: "Rock balanced naturally on another",
        image: "https://www.mptourism.com/images/poi/balancing-rock-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Balancing+Rock+Madan+Mahal+Jabalpur"
    },
    {
        id: 6,
        name: "Dumna Nature Reserve",
        category: "Nature",
        religion: "—",
        location: "Dumna area",
        description: "Dumna Nature Reserve ek wildlife park hai jo eco-tourism ke liye famous hai. Yahan par toy train, deer park, aur various wildlife species hain. Family ke saath picnic ke liye perfect destination hai.",
        highlights: "Eco-tourism, toy train, deer park",
        image: "https://www.mptourism.com/images/poi/dumna-nature-reserve-jabalpur.jpg",
        bestTime: "October to March",
        entryFee: "₹50-100",
        mapLink: "https://maps.google.com/?q=Dumna+Nature+Reserve+Jabalpur"
    },
    {
        id: 7,
        name: "Bargi Dam",
        category: "Leisure",
        religion: "—",
        location: "Bargi",
        description: "Bargi Dam Narmada River par bana hua dam hai jo boating, birdwatching, aur sunset views ke liye famous hai. Water sports activities bhi available hain. Peaceful environment mein nature enjoy karne ke liye perfect hai.",
        highlights: "Boating, birdwatching, sunset views",
        image: "https://www.mptourism.com/images/poi/bargi-dam-jabalpur.jpg",
        bestTime: "October to March",
        entryFee: "₹100-300",
        mapLink: "https://maps.google.com/?q=Bargi+Dam+Jabalpur"
    },
    {
        id: 8,
        name: "Tilwara Ghat",
        category: "Historical",
        religion: "—",
        location: "Tilwara",
        description: "Tilwara Ghat Narmada River ka peaceful ghat hai jo Gandhi ji se associated hai. Yahan par park aur ghat dono hain. Morning walk aur evening stroll enjoy kar sakte hain. Historical significance bhi hai.",
        highlights: "Gandhi association, park & ghat",
        image: "https://www.mptourism.com/images/poi/tilwara-ghat-jabalpur.jpg",
        bestTime: "October to March",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Tilwara+Ghat+Jabalpur"
    },
    {
        id: 9,
        name: "Gwarighat",
        category: "Leisure",
        religion: "Hindu",
        location: "Gwarighat",
        description: "Gwarighat Narmada River ka spiritual ghat hai jahan Narmada Aarti hoti hai. Hindu aur Sikh dono communities ke liye important hai. Peaceful riverside environment mein spiritual experience milta hai.",
        highlights: "Narmada Aarti, peaceful riverside",
        image: "https://www.mptourism.com/images/poi/gwarighat-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Gwarighat+Jabalpur"
    },
    {
        id: 10,
        name: "Kachnar City Shiva Temple",
        category: "Temple",
        religion: "Hindu",
        location: "Kachnar City",
        description: "Kachnar City Shiva Temple mein 76-feet tall Lord Shiva ki statue hai jo bahut impressive hai. Temple campus clean aur peaceful hai. Shiva devotees ke liye must-visit destination hai.",
        highlights: "76-ft Lord Shiva statue",
        image: "https://www.mptourism.com/images/poi/kachnar-city-shiva-temple-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Kachnar+City+Shiva+Temple+Jabalpur"
    },
    {
        id: 11,
        name: "Chausath Yogini Temple",
        category: "Temple",
        religion: "Hindu",
        location: "Bhedaghat Hilltop",
        description: "Chausath Yogini Temple 10th century ka ancient temple hai jo 64 yoginis ko samarpit hai. Bhedaghat hilltop par situated ye temple circular architecture ke liye famous hai. Spiritual seekers ke liye perfect hai.",
        highlights: "10th-century, 64 Yogini idols",
        image: "https://www.mptourism.com/images/poi/chausath-yogini-temple-bhedaghat.jpg",
        bestTime: "October to March",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Chausath+Yogini+Temple+Bhedaghat"
    },
    {
        id: 12,
        name: "Tripur Sundari Temple",
        category: "Temple",
        religion: "Hindu",
        location: "Tewar",
        description: "Tripur Sundari Temple Durga Maa ka temple hai jo Tewar mein situated hai. Navratri ke time yahan bada fair lagta hai. Temple architecture beautiful hai aur spiritual environment hai.",
        highlights: "Durga temple, Navratri fair",
        image: "https://www.mptourism.com/images/poi/tripur-sundari-temple-tewar.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Tripur+Sundari+Temple+Tewar+Jabalpur"
    },
    {
        id: 13,
        name: "Gupteshwar Mahadev Temple",
        category: "Temple",
        religion: "Hindu",
        location: "Tilwara Ghat area",
        description: "Gupteshwar Mahadev Temple ek cave temple hai jo Lord Shiva ko samarpit hai. Tilwara Ghat area mein situated ye temple natural cave mein bana hua hai. Unique architecture ke liye famous hai.",
        highlights: "Cave of Lord Shiva",
        image: "https://www.mptourism.com/images/poi/gupteshwar-mahadev-temple-tilwara.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Gupteshwar+Mahadev+Temple+Tilwara+Jabalpur"
    },
    {
        id: 14,
        name: "Hanuman Tal Mandir",
        category: "Temple",
        religion: "Hindu",
        location: "Hanuman Tal",
        description: "Hanuman Tal Mandir ek lake ke pass situated temple hai jo Hanuman ji ko samarpit hai. Lake ke beautiful view ke saath spiritual environment milta hai. Morning aur evening aarti bahut peaceful hoti hai.",
        highlights: "Temple by the lake",
        image: "https://www.mptourism.com/images/poi/hanuman-tal-mandir-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Hanuman+Tal+Mandir+Jabalpur"
    },
    {
        id: 15,
        name: "Mata Narmada Mandir",
        category: "Temple",
        religion: "Hindu",
        location: "Gwarighat",
        description: "Mata Narmada Mandir Narmada River ke bank par situated holy temple hai. River ke beautiful view ke saath spiritual experience milta hai. Narmada Maa ke devotees ke liye important pilgrimage site hai.",
        highlights: "On riverbank, holy temple",
        image: "https://www.mptourism.com/images/poi/mata-narmada-mandir-gwarighat.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Mata+Narmada+Mandir+Gwarighat+Jabalpur"
    },
    {
        id: 16,
        name: "Ram Mandir",
        category: "Temple",
        religion: "Hindu",
        location: "Gorakhpur area",
        description: "Ram Mandir local devotion ka important center hai. Temple architecture traditional hai aur spiritual environment hai. Local people yahan daily prayers ke liye aate hain.",
        highlights: "Local devotion site",
        image: "https://www.mptourism.com/images/poi/ram-mandir-gorakhpur-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Ram+Mandir+Gorakhpur+Jabalpur"
    },
    {
        id: 17,
        name: "Radha Krishna Mandir",
        category: "Temple",
        religion: "Hindu",
        location: "Napier Town",
        description: "Radha Krishna Mandir spiritual gatherings ka center hai. Temple campus clean aur peaceful hai. Devotees yahan spiritual activities ke liye aate hain.",
        highlights: "Spiritual gatherings",
        image: "https://www.mptourism.com/images/poi/radha-krishna-mandir-napier-town.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Radha+Krishna+Mandir+Napier+Town+Jabalpur"
    },
    {
        id: 18,
        name: "Jama Masjid",
        category: "Mosque",
        religion: "Muslim",
        location: "Madan Mahal",
        description: "Jama Masjid Madan Mahal area ka historic mosque hai. Islamic architecture ka beautiful example hai. Muslim community ke liye important religious site hai.",
        highlights: "Historic mosque",
        image: "https://www.mptourism.com/images/poi/jama-masjid-madan-mahal-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Jama+Masjid+Madan+Mahal+Jabalpur"
    },
    {
        id: 19,
        name: "Masjid-e-Azam",
        category: "Mosque",
        religion: "Muslim",
        location: "Napier Town",
        description: "Masjid-e-Azam Napier Town ka main mosque hai. Friday prayers aur Eid celebrations ke liye famous hai. Large congregation accommodate kar sakta hai.",
        highlights: "Friday & Eid prayers",
        image: "https://www.mptourism.com/images/poi/masjid-e-azam-napier-town.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Masjid-e-Azam+Napier+Town+Jabalpur"
    },
    {
        id: 20,
        name: "Masjid Bilal",
        category: "Mosque",
        religion: "Muslim",
        location: "Sadar",
        description: "Masjid Bilal Sadar area ka community mosque hai. Local Muslim community ke gatherings ke liye important center hai. Peaceful environment hai.",
        highlights: "Community gatherings",
        image: "https://www.mptourism.com/images/poi/masjid-bilal-sadar-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Masjid+Bilal+Sadar+Jabalpur"
    },
    {
        id: 21,
        name: "Moti Masjid",
        category: "Mosque",
        religion: "Muslim",
        location: "Near Kotwali",
        description: "Moti Masjid ek small aur peaceful mosque hai jo Kotwali ke pass situated hai. Local Muslim community ke daily prayers ke liye important hai.",
        highlights: "Small, peaceful mosque",
        image: "https://www.mptourism.com/images/poi/moti-masjid-kotwali-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Moti+Masjid+Kotwali+Jabalpur"
    },
    {
        id: 22,
        name: "Pisanhari ki Madiya",
        category: "Jain Temple",
        religion: "Jain",
        location: "Pisanhari Hill",
        description: "Pisanhari ki Madiya ek Jain temple hai jo ek woman devotee ne banaya tha. Hilltop par situated hai aur beautiful view deta hai. Jain community ka important religious site hai.",
        highlights: "Built by woman devotee, hilltop view",
        image: "https://www.mptourism.com/images/poi/pisanhari-ki-madiya-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Pisanhari+ki+Madiya+Jabalpur"
    },
    {
        id: 23,
        name: "Mahavir Swami Jain Mandir",
        category: "Jain Temple",
        religion: "Jain",
        location: "Wright Town",
        description: "Mahavir Swami Jain Mandir Wright Town ka community temple hai. Jain community ke daily prayers aur spiritual activities ke liye important center hai.",
        highlights: "Community temple",
        image: "https://www.mptourism.com/images/poi/mahavir-swami-jain-mandir-wright-town.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Mahavir+Swami+Jain+Mandir+Wright+Town+Jabalpur"
    },
    {
        id: 24,
        name: "Parshwanath Jain Mandir",
        category: "Jain Temple",
        religion: "Jain",
        location: "Napier Town",
        description: "Parshwanath Jain Mandir ornate carvings ke liye famous hai. Temple campus clean aur well-maintained hai. Jain architecture ka beautiful example hai.",
        highlights: "Ornate carvings, clean campus",
        image: "https://www.mptourism.com/images/poi/parshwanath-jain-mandir-napier-town.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Parshwanath+Jain+Mandir+Napier+Town+Jabalpur"
    },
    {
        id: 25,
        name: "Shantinath Jain Mandir",
        category: "Jain Temple",
        religion: "Jain",
        location: "Adhartal",
        description: "Shantinath Jain Mandir spiritual peace ka center hai. Temple environment peaceful hai aur devotees yahan meditation ke liye aate hain.",
        highlights: "Spiritual peace site",
        image: "https://www.mptourism.com/images/poi/shantinath-jain-mandir-adhartal.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Shantinath+Jain+Mandir+Adhartal+Jabalpur"
    },
    {
        id: 26,
        name: "St. Aloysius Church",
        category: "Church",
        religion: "Christian",
        location: "Sadar",
        description: "St. Aloysius Church Gothic architecture ka beautiful example hai. Church campus peaceful hai aur Christian community ke liye important religious center hai.",
        highlights: "Gothic architecture",
        image: "https://www.mptourism.com/images/poi/st-aloysius-church-sadar-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=St+Aloysius+Church+Sadar+Jabalpur"
    },
    {
        id: 27,
        name: "St. Paul's Church",
        category: "Church",
        religion: "Christian",
        location: "Wright Town",
        description: "St. Paul's Church colonial-era design ka example hai. Church architecture historical significance rakhta hai. Christian community ke worship ke liye important hai.",
        highlights: "Colonial-era design",
        image: "https://www.mptourism.com/images/poi/st-pauls-church-wright-town.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=St+Pauls+Church+Wright+Town+Jabalpur"
    },
    {
        id: 28,
        name: "Holy Trinity Church",
        category: "Church",
        religion: "Christian",
        location: "Civil Lines",
        description: "Holy Trinity Church Anglican architecture ka example hai. Church campus beautiful hai aur spiritual environment hai. Christian community ke liye important center hai.",
        highlights: "Anglican architecture",
        image: "https://www.mptourism.com/images/poi/holy-trinity-church-civil-lines.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Holy+Trinity+Church+Civil+Lines+Jabalpur"
    },
    {
        id: 29,
        name: "St. Thomas Church",
        category: "Church",
        religion: "Christian",
        location: "Ghamapur",
        description: "St. Thomas Church calm aur spiritual environment provide karta hai. Church campus peaceful hai aur devotees yahan prayers ke liye aate hain.",
        highlights: "Calm and spiritual",
        image: "https://www.mptourism.com/images/poi/st-thomas-church-ghamapur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=St+Thomas+Church+Ghamapur+Jabalpur"
    },
    {
        id: 30,
        name: "Evangelical Church",
        category: "Church",
        religion: "Christian",
        location: "Ranjhi",
        description: "Evangelical Church community events ka center hai. Church local Christian community ke gatherings aur celebrations ke liye important hai.",
        highlights: "Community events",
        image: "https://www.mptourism.com/images/poi/evangelical-church-ranjhi.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Evangelical+Church+Ranjhi+Jabalpur"
    },
    {
        id: 31,
        name: "Gurudwara Gwarighat Sahib",
        category: "Gurudwara",
        religion: "Sikh",
        location: "Gwarighat",
        description: "Gurudwara Gwarighat Sahib Narmada ghat ke pass situated hai. Langar service famous hai aur Narmada river ka beautiful view milta hai. Sikh community ka important religious center hai.",
        highlights: "Langar & Narmada ghat view",
        image: "https://www.mptourism.com/images/poi/gurudwara-gwarighat-sahib.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Gurudwara+Gwarighat+Sahib+Jabalpur"
    },
    {
        id: 32,
        name: "Gurudwara Singh Sabha",
        category: "Gurudwara",
        religion: "Sikh",
        location: "Sadar",
        description: "Gurudwara Singh Sabha Sadar area ka Sikh religious center hai. Gurpurab celebrations ke time bahut crowded hota hai. Sikh community ke daily prayers ke liye important hai.",
        highlights: "Celebrations on Gurpurab",
        image: "https://www.mptourism.com/images/poi/gurudwara-singh-sabha-sadar.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Gurudwara+Singh+Sabha+Sadar+Jabalpur"
    },
    {
        id: 33,
        name: "Gurudwara Guru Nanak Darbar",
        category: "Gurudwara",
        religion: "Sikh",
        location: "Napier Town",
        description: "Gurudwara Guru Nanak Darbar peaceful worship space provide karta hai. Gurudwara campus clean aur spiritual environment hai. Sikh devotees ke liye important center hai.",
        highlights: "Peaceful worship space",
        image: "https://www.mptourism.com/images/poi/gurudwara-guru-nanak-darbar-napier-town.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Gurudwara+Guru+Nanak+Darbar+Napier+Town+Jabalpur"
    },
    {
        id: 34,
        name: "Deeksha Bhoomi Jabalpur",
        category: "Buddhist Site",
        religion: "Buddhist",
        location: "Saliwada / Ranjhi",
        description: "Deeksha Bhoomi Jabalpur Dr. Ambedkar se inspired Buddhist site hai. Buddhist community ke liye important pilgrimage site hai. Spiritual environment aur meditation ke liye perfect hai.",
        highlights: "Inspired by Dr. Ambedkar",
        image: "https://www.mptourism.com/images/poi/deeksha-bhoomi-jabalpur.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Deeksha+Bhoomi+Jabalpur"
    },
    {
        id: 35,
        name: "Buddha Vihar",
        category: "Buddhist Site",
        religion: "Buddhist",
        location: "Civic Centre",
        description: "Buddha Vihar meditation aur Dhamma sessions ke liye famous hai. Buddhist community ke spiritual activities ka center hai. Peaceful environment mein meditation kar sakte hain.",
        highlights: "Meditation, Dhamma sessions",
        image: "https://www.mptourism.com/images/poi/buddha-vihar-civic-centre.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Buddha+Vihar+Civic+Centre+Jabalpur"
    },
    {
        id: 36,
        name: "Civic Centre",
        category: "City",
        religion: "—",
        location: "Near Wright Town",
        description: "Civic Centre shopping, street food, aur cafes ka hub hai. Yahan par local street food, cafes, aur shopping options available hain. Evening time par bahut crowded hota hai.",
        highlights: "Street food, cafes, shopping",
        image: "https://www.mptourism.com/images/poi/civic-centre-wright-town.jpg",
        bestTime: "Evening",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Civic+Centre+Wright+Town+Jabalpur"
    },
    {
        id: 37,
        name: "South Avenue Mall",
        category: "City",
        religion: "—",
        location: "Vijay Nagar",
        description: "South Avenue Mall multiplex aur food court ke liye famous hai. Modern shopping experience provide karta hai. Family entertainment ke liye perfect destination hai.",
        highlights: "Multiplex, food court",
        image: "https://www.mptourism.com/images/poi/south-avenue-mall-vijay-nagar.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=South+Avenue+Mall+Vijay+Nagar+Jabalpur"
    },
    {
        id: 38,
        name: "Samdariya Mall",
        category: "City",
        religion: "—",
        location: "South Civil Lines",
        description: "Samdariya Mall fashion stores aur cinema ke liye famous hai. Modern shopping experience aur entertainment options provide karta hai. Youth ke liye popular destination hai.",
        highlights: "Fashion stores, cinema",
        image: "https://www.mptourism.com/images/poi/samdariya-mall-south-civil-lines.jpg",
        bestTime: "Year round",
        entryFee: "Free",
        mapLink: "https://maps.google.com/?q=Samdariya+Mall+South+Civil+Lines+Jabalpur"
    }
];

// DOM Elements
const placesGrid = document.getElementById('places-grid');
const categoryFilter = document.getElementById('category-filter');
const religionFilter = document.getElementById('religion-filter');
const locationFilter = document.getElementById('location-filter');
const searchFilter = document.getElementById('search-filter');
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

// Render Places
function renderPlaces(places = placesData) {
    if (places.length === 0) {
        placesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No places found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    placesGrid.innerHTML = places.map(place => `
        <div class="place-card" data-category="${place.category}" data-religion="${place.religion}" data-location="${place.location}">
            <div class="place-image">
                <img src="${place.image}" alt="${place.name}" loading="lazy">
                <div class="place-badges">
                    <div class="place-category-badge">${place.category}</div>
                    ${place.religion !== '—' ? `<div class="place-religion-badge">${place.religion}</div>` : ''}
                </div>
            </div>
            <div class="place-content">
                <h3 class="place-title">${place.name}</h3>
                <div class="place-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${place.location}</span>
                </div>
                <p class="place-description">${place.description}</p>
                <div class="place-details">
                    <div class="place-detail">
                        <div class="place-detail-label">Highlights</div>
                        <div class="place-detail-value">${place.highlights}</div>
                    </div>
                    <div class="place-detail">
                        <div class="place-detail-label">Best Time</div>
                        <div class="place-detail-value">${place.bestTime}</div>
                    </div>
                    <div class="place-detail">
                        <div class="place-detail-label">Entry Fee</div>
                        <div class="place-detail-value">${place.entryFee}</div>
                    </div>
                    <div class="place-detail">
                        <div class="place-detail-label">Category</div>
                        <div class="place-detail-value">${place.category}</div>
                    </div>
                </div>
                <div class="place-actions">
                    <a href="${place.mapLink}" target="_blank" class="btn-map">
                        <i class="fas fa-map"></i>
                        View on Map
                    </a>
                    <a href="#" class="btn-view" onclick="showPlaceDetails(${place.id})">
                        <i class="fas fa-info-circle"></i>
                        More Info
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Places
function filterPlaces() {
    const category = categoryFilter.value;
    const religion = religionFilter.value;
    const location = locationFilter.value;
    const search = searchFilter.value.toLowerCase();

    let filteredPlaces = placesData.filter(place => {
        const matchesCategory = category === 'all' || place.category === category;
        const matchesReligion = religion === 'all' || place.religion === religion;
        const matchesLocation = location === 'all' || place.location === location;
        const matchesSearch = search === '' || 
            place.name.toLowerCase().includes(search) ||
            place.description.toLowerCase().includes(search) ||
            place.highlights.toLowerCase().includes(search) ||
            place.location.toLowerCase().includes(search);

        return matchesCategory && matchesReligion && matchesLocation && matchesSearch;
    });

    renderPlaces(filteredPlaces);
}

// Event Listeners for Filters
categoryFilter.addEventListener('change', filterPlaces);
religionFilter.addEventListener('change', filterPlaces);
locationFilter.addEventListener('change', filterPlaces);
searchFilter.addEventListener('input', filterPlaces);

// Show Place Details (Modal or new page)
function showPlaceDetails(placeId) {
    const place = placesData.find(p => p.id === placeId);
    if (place) {
        // For now, just show an alert. You can implement a modal or redirect to a detail page
        alert(`${place.name}\n\n${place.description}\n\nHighlights: ${place.highlights}\nBest Time: ${place.bestTime}\nEntry Fee: ${place.entryFee}`);
    }
}

// Footer category links
document.querySelectorAll('[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
        categoryFilter.value = category;
        filterPlaces();
        
        // Scroll to places section
        document.querySelector('.places-section').scrollIntoView({ behavior: 'smooth' });
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
    renderPlaces();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Export for potential use
window.JabalpurPlaces = {
    placesData,
    filterPlaces,
    showPlaceDetails
}; 