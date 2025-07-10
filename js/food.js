// Food Page JavaScript - Complete Food Places Data

// Updated food places data (20 locations from user table)
const foodData = [
  {
    id: 1,
    name: "Indian Coffee House",
    category: "Restaurant",
    foodType: "Vegetarian",
    location: "Civil Lines",
    description: "Iconic South Indian and Indian thali spot",
    highlights: "South Indian, Indian thali, iconic",
    image: "https://via.placeholder.com/400x250?text=Indian+Coffee+House",
    priceRange: "₹",
    rating: 4.2,
    specialties: "Dosa, Idli, Thali",
    timings: "8:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Indian+Coffee+House+Jabalpur"
  },
  {
    id: 2,
    name: "Panchavati Gaurav",
    category: "Restaurant",
    foodType: "Vegetarian",
    location: "South Avenue Mall",
    description: "Rajasthani-Gujarati thali",
    highlights: "Rajasthani, Gujarati, thali",
    image: "https://via.placeholder.com/400x250?text=Panchavati+Gaurav",
    priceRange: "₹₹",
    rating: 4.1,
    specialties: "Rajasthani Thali, Gujarati Thali",
    timings: "11:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Panchavati+Gaurav+Jabalpur"
  },
  {
    id: 3,
    name: "The Yellow Chilli (Sanjeev Kapoor)",
    category: "Restaurant",
    foodType: "Both",
    location: "Napier Town",
    description: "Celebrity chef-curated Indian cuisine",
    highlights: "Celebrity chef, Indian cuisine",
    image: "https://via.placeholder.com/400x250?text=The+Yellow+Chilli",
    priceRange: "₹₹₹",
    rating: 4.3,
    specialties: "North Indian, Signature Dishes",
    timings: "12:00 PM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=The+Yellow+Chilli+Napier+Town+Jabalpur"
  },
  {
    id: 4,
    name: "Rajasthani Dhaba",
    category: "Dhaba",
    foodType: "Vegetarian",
    location: "NH-12, near bypass",
    description: "Affordable, local-style meals",
    highlights: "Affordable, local-style",
    image: "https://via.placeholder.com/400x250?text=Rajasthani+Dhaba",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Rajasthani Meals, Thali",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Rajasthani+Dhaba+NH-12+Jabalpur"
  },
  {
    id: 5,
    name: "Raju Tea Stall",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Gole Bazar",
    description: "Famous for bun maska, tea, and poha",
    highlights: "Bun maska, tea, poha",
    image: "https://via.placeholder.com/400x250?text=Raju+Tea+Stall",
    priceRange: "₹",
    rating: 4.5,
    specialties: "Bun Maska, Tea, Poha",
    timings: "6:00 AM - 9:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Raju+Tea+Stall+Gole+Bazar+Jabalpur"
  },
  {
    id: 6,
    name: "70 MM Dining",
    category: "Restaurant",
    foodType: "Both",
    location: "Napier Town",
    description: "Bollywood-themed multicuisine",
    highlights: "Bollywood theme, multicuisine",
    image: "https://via.placeholder.com/400x250?text=70+MM+Dining",
    priceRange: "₹₹",
    rating: 4.2,
    specialties: "Indian, Chinese, Continental",
    timings: "11:00 AM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=70+MM+Dining+Napier+Town+Jabalpur"
  },
  {
    id: 7,
    name: "Indian Tandoori Zaika",
    category: "Restaurant",
    foodType: "Non-Veg",
    location: "Sadar",
    description: "Known for tandoori chicken & biryani",
    highlights: "Tandoori chicken, biryani",
    image: "https://via.placeholder.com/400x250?text=Indian+Tandoori+Zaika",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Tandoori Chicken, Biryani",
    timings: "12:00 PM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Indian+Tandoori+Zaika+Sadar+Jabalpur"
  },
  {
    id: 8,
    name: "Milan Sweets & Namkeen",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Wright Town",
    description: "Kachori, samosa, sweets, chaat",
    highlights: "Kachori, samosa, chaat",
    image: "https://via.placeholder.com/400x250?text=Milan+Sweets+Namkeen",
    priceRange: "₹",
    rating: 4.4,
    specialties: "Kachori, Samosa, Chaat, Sweets",
    timings: "7:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Milan+Sweets+Wright+Town+Jabalpur"
  },
  {
    id: 9,
    name: "Kalchuri Residency Restaurant",
    category: "Hotel",
    foodType: "Both",
    location: "Civil Lines",
    description: "Hotel MP Tourism - thali & buffet",
    highlights: "Thali, buffet, hotel",
    image: "https://via.placeholder.com/400x250?text=Kalchuri+Residency+Restaurant",
    priceRange: "₹₹₹",
    rating: 4.1,
    specialties: "Thali, Buffet, Indian",
    timings: "7:00 AM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Kalchuri+Residency+Civil+Lines+Jabalpur"
  },
  {
    id: 10,
    name: "Desi Zaika Dhaba",
    category: "Dhaba",
    foodType: "Both",
    location: "Tilwara Road",
    description: "Outdoor seating, rustic food vibes",
    highlights: "Outdoor seating, rustic",
    image: "https://via.placeholder.com/400x250?text=Desi+Zaika+Dhaba",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "North Indian, Dhaba Food",
    timings: "10:00 AM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Desi+Zaika+Dhaba+Tilwara+Road+Jabalpur"
  },
  {
    id: 11,
    name: "Bawarchi Restaurant",
    category: "Restaurant",
    foodType: "Both",
    location: "Sadar Bazar",
    description: "Mughlai & North Indian delights",
    highlights: "Mughlai, North Indian",
    image: "https://via.placeholder.com/400x250?text=Bawarchi+Restaurant",
    priceRange: "₹₹",
    rating: 4.2,
    specialties: "Mughlai, North Indian",
    timings: "11:00 AM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Bawarchi+Restaurant+Sadar+Bazar+Jabalpur"
  },
  {
    id: 12,
    name: "Al-Baik Express",
    category: "Street Food",
    foodType: "Non-Veg",
    location: "Napier Town",
    description: "Fried chicken, shawarma, rolls",
    highlights: "Fried chicken, shawarma, rolls",
    image: "https://via.placeholder.com/400x250?text=Al-Baik+Express",
    priceRange: "₹",
    rating: 4.1,
    specialties: "Fried Chicken, Shawarma, Rolls",
    timings: "12:00 PM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Al-Baik+Express+Napier+Town+Jabalpur"
  },
  {
    id: 13,
    name: "Café Symphony",
    category: "Restaurant",
    foodType: "Both",
    location: "Vijay Nagar",
    description: "Continental, pizza, mocktails",
    highlights: "Continental, pizza, mocktails",
    image: "https://via.placeholder.com/400x250?text=Cafe+Symphony",
    priceRange: "₹₹",
    rating: 4.3,
    specialties: "Continental, Pizza, Mocktails",
    timings: "11:00 AM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Cafe+Symphony+Vijay+Nagar+Jabalpur"
  },
  {
    id: 14,
    name: "Rajput Dhaba",
    category: "Dhaba",
    foodType: "Both",
    location: "Near Bargi Road",
    description: "Local flavors with village setup",
    highlights: "Village setup, local flavors",
    image: "https://via.placeholder.com/400x250?text=Rajput+Dhaba",
    priceRange: "₹",
    rating: 4.1,
    specialties: "Local Flavors, Dhaba Food",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Rajput+Dhaba+Bargi+Road+Jabalpur"
  },
  {
    id: 15,
    name: "Rani Durgavati Food Court",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Civic Centre",
    description: "Affordable student-friendly bites",
    highlights: "Affordable, student-friendly",
    image: "https://via.placeholder.com/400x250?text=Rani+Durgavati+Food+Court",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Snacks, Fast Food",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Rani+Durgavati+Food+Court+Civic+Centre+Jabalpur"
  },
  {
    id: 16,
    name: "Barbeque Nation",
    category: "Restaurant",
    foodType: "Both",
    location: "South Avenue Mall",
    description: "Buffet & grill at table",
    highlights: "Buffet, grill, multicuisine",
    image: "https://via.placeholder.com/400x250?text=Barbeque+Nation",
    priceRange: "₹₹₹",
    rating: 4.4,
    specialties: "Buffet, Grill, Indian",
    timings: "12:00 PM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Barbeque+Nation+South+Avenue+Mall+Jabalpur"
  },
  {
    id: 17,
    name: "Biryani By Kilo",
    category: "Restaurant",
    foodType: "Non-Veg",
    location: "Sadar",
    description: "Premium dum biryani, delivery too",
    highlights: "Premium biryani, delivery",
    image: "https://via.placeholder.com/400x250?text=Biryani+By+Kilo",
    priceRange: "₹₹₹",
    rating: 4.2,
    specialties: "Dum Biryani, North Indian",
    timings: "11:00 AM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Biryani+By+Kilo+Sadar+Jabalpur"
  },
  {
    id: 18,
    name: "Poha Junction",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Ranjhi",
    description: "Poha, jalebi, chai combo",
    highlights: "Poha, jalebi, chai",
    image: "https://via.placeholder.com/400x250?text=Poha+Junction",
    priceRange: "₹",
    rating: 4.3,
    specialties: "Poha, Jalebi, Chai",
    timings: "6:00 AM - 9:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Poha+Junction+Ranjhi+Jabalpur"
  },
  {
    id: 19,
    name: "Arya Bhawan",
    category: "Restaurant",
    foodType: "Vegetarian",
    location: "Wright Town",
    description: "Pure veg North Indian food",
    highlights: "Pure veg, North Indian",
    image: "https://via.placeholder.com/400x250?text=Arya+Bhawan",
    priceRange: "₹",
    rating: 4.1,
    specialties: "North Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Arya+Bhawan+Wright+Town+Jabalpur"
  },
  {
    id: 20,
    name: "Jharokha Restaurant",
    category: "Hotel",
    foodType: "Both",
    location: "Samdariya Hotel",
    description: "Rooftop ambience, multicuisine",
    highlights: "Rooftop, multicuisine",
    image: "https://via.placeholder.com/400x250?text=Jharokha+Restaurant",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Multicuisine, Rooftop",
    timings: "11:00 AM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Jharokha+Restaurant+Samdariya+Hotel+Jabalpur"
  },
  {
    id: 21,
    name: "Sukh Saga",
    category: "Restaurant",
    foodType: "Vegetarian",
    location: "Sadar",
    description: "Vegetarian restaurant in Sadar",
    highlights: "Vegetarian, Sadar",
    image: "https://via.placeholder.com/400x250?text=Sukh+Saga",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Sukh+Saga+Sadar+Jabalpur"
  },
  {
    id: 22,
    name: "Anand Veg",
    category: "Restaurant",
    foodType: "Vegetarian",
    location: "Gorakhpur",
    description: "Vegetarian restaurant in Gorakhpur",
    highlights: "Vegetarian, Gorakhpur",
    image: "https://via.placeholder.com/400x250?text=Anand+Veg",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Anand+Veg+Gorakhpur+Jabalpur"
  },
  {
    id: 23,
    name: "Sagar Gaire",
    category: "Restaurant",
    foodType: "Vegetarian",
    location: "Multiple Locations",
    description: "Popular vegetarian chain in Jabalpur",
    highlights: "Vegetarian, Multiple Locations",
    image: "https://via.placeholder.com/400x250?text=Sagar+Gaire",
    priceRange: "₹₹",
    rating: 4.1,
    specialties: "Indian, Fast Food",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Sagar+Gaire+Jabalpur"
  },
  {
    id: 24,
    name: "Rasoi The",
    category: "Restaurant",
    foodType: "Vegetarian",
    location: "Wright Town",
    description: "Vegetarian restaurant in Wright Town",
    highlights: "Vegetarian, Wright Town",
    image: "https://via.placeholder.com/400x250?text=Rasoi+The",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Rasoi+The+Wright+Town+Jabalpur"
  },
  {
    id: 25,
    name: "Rajasthan Dhaba",
    category: "Dhaba",
    foodType: "Vegetarian",
    location: "NH-12 Bypass",
    description: "Vegetarian dhaba on NH-12 Bypass",
    highlights: "Vegetarian, NH-12 Bypass",
    image: "https://via.placeholder.com/400x250?text=Rajasthan+Dhaba",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Rajasthani, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Rajasthan+Dhaba+NH-12+Bypass+Jabalpur"
  },
  {
    id: 26,
    name: "Shree Krishna Dhaba",
    category: "Dhaba",
    foodType: "Vegetarian",
    location: "Near Medical College",
    description: "Vegetarian dhaba near Medical College",
    highlights: "Vegetarian, Medical College",
    image: "https://via.placeholder.com/400x250?text=Shree+Krishna+Dhaba",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Shree+Krishna+Dhaba+Jabalpur"
  },
  {
    id: 27,
    name: "Vaishnav Ji Dhaba",
    category: "Dhaba",
    foodType: "Vegetarian",
    location: "Tilwara Road",
    description: "Vegetarian dhaba on Tilwara Road",
    highlights: "Vegetarian, Tilwara Road",
    image: "https://via.placeholder.com/400x250?text=Vaishnav+Ji+Dhaba",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Vaishnav+Ji+Dhaba+Tilwara+Road+Jabalpur"
  },
  {
    id: 28,
    name: "Rajput Veg Dhaba",
    category: "Dhaba",
    foodType: "Vegetarian",
    location: "Bargi Road",
    description: "Vegetarian dhaba on Bargi Road",
    highlights: "Vegetarian, Bargi Road",
    image: "https://via.placeholder.com/400x250?text=Rajput+Veg+Dhaba",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Rajput+Veg+Dhaba+Bargi+Road+Jabalpur"
  },
  {
    id: 29,
    name: "Hotel Kalchuri",
    category: "Hotel",
    foodType: "Vegetarian",
    location: "Civil Lines",
    description: "Vegetarian hotel in Civil Lines",
    highlights: "Vegetarian, Civil Lines",
    image: "https://via.placeholder.com/400x250?text=Hotel+Kalchuri",
    priceRange: "₹₹₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Hotel+Kalchuri+Civil+Lines+Jabalpur"
  },
  {
    id: 30,
    name: "Hotel Samdariya",
    category: "Hotel",
    foodType: "Vegetarian",
    location: "Wright Town",
    description: "Vegetarian hotel in Wright Town",
    highlights: "Vegetarian, Wright Town",
    image: "https://via.placeholder.com/400x250?text=Hotel+Samdariya",
    priceRange: "₹₹₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Hotel+Samdariya+Wright+Town+Jabalpur"
  },
  {
    id: 31,
    name: "Hotel Rishi",
    category: "Hotel",
    foodType: "Vegetarian",
    location: "Napier Town",
    description: "Vegetarian hotel in Napier Town",
    highlights: "Vegetarian, Napier Town",
    image: "https://via.placeholder.com/400x250?text=Hotel+Rishi",
    priceRange: "₹₹₹",
    rating: 4.0,
    specialties: "Indian, Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Hotel+Rishi+Napier+Town+Jabalpur"
  },
  {
    id: 32,
    name: "Raju Tea Stall",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Gole Bazar",
    description: "Vegetarian tea stall in Gole Bazar",
    highlights: "Vegetarian, Gole Bazar",
    image: "https://via.placeholder.com/400x250?text=Raju+Tea+Stall",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Tea, Snacks",
    timings: "6:00 AM - 9:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Raju+Tea+Stall+Gole+Bazar+Jabalpur"
  },
  {
    id: 33,
    name: "Milan Sweets",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Wright Town",
    description: "Vegetarian sweets shop in Wright Town",
    highlights: "Vegetarian, Wright Town",
    image: "https://via.placeholder.com/400x250?text=Milan+Sweets",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Sweets, Snacks",
    timings: "7:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Milan+Sweets+Wright+Town+Jabalpur"
  },
  {
    id: 34,
    name: "Poha Junction",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Ranjhi",
    description: "Vegetarian poha shop in Ranjhi",
    highlights: "Vegetarian, Ranjhi",
    image: "https://via.placeholder.com/400x250?text=Poha+Junction",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Poha, Snacks",
    timings: "6:00 AM - 9:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Poha+Junction+Ranjhi+Jabalpur"
  },
  {
    id: 35,
    name: "Rani Durgavati Food Court",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Civic Centre",
    description: "Vegetarian food court in Civic Centre",
    highlights: "Vegetarian, Civic Centre",
    image: "https://via.placeholder.com/400x250?text=Rani+Durgavati+Food+Court",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Snacks, Fast Food",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Rani+Durgavati+Food+Court+Civic+Centre+Jabalpur"
  },
  {
    id: 36,
    name: "Chappan Bhog",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Wright Town",
    description: "Vegetarian street food in Wright Town",
    highlights: "Vegetarian, Wright Town",
    image: "https://via.placeholder.com/400x250?text=Chappan+Bhog",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Snacks, Sweets",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Chappan+Bhog+Wright+Town+Jabalpur"
  },
  {
    id: 37,
    name: "Shankar Namkeen",
    category: "Street Food",
    foodType: "Vegetarian",
    location: "Napier Town",
    description: "Vegetarian namkeen shop in Napier Town",
    highlights: "Vegetarian, Napier Town",
    image: "https://via.placeholder.com/400x250?text=Shankar+Namkeen",
    priceRange: "₹",
    rating: 4.0,
    specialties: "Namkeen, Snacks",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Shankar+Namkeen+Napier+Town+Jabalpur"
  },
  {
    id: 38,
    name: "The Yellow Chilli",
    category: "Restaurant",
    foodType: "Non-Veg",
    location: "Napier Town",
    description: "Non-veg restaurant in Napier Town",
    highlights: "Non-Veg, Napier Town",
    image: "https://via.placeholder.com/400x250?text=The+Yellow+Chilli",
    priceRange: "₹800",
    rating: 4.3,
    specialties: "Indian, Non-Veg",
    timings: "12:00 PM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=The+Yellow+Chilli+Napier+Town+Jabalpur"
  },
  {
    id: 39,
    name: "Indian Coffee House",
    category: "Restaurant",
    foodType: "Non-Veg",
    location: "Sadar",
    description: "Non-veg restaurant in Sadar",
    highlights: "Non-Veg, Sadar",
    image: "https://via.placeholder.com/400x250?text=Indian+Coffee+House",
    priceRange: "₹300",
    rating: 4.0,
    specialties: "Indian, Non-Veg",
    timings: "8:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Indian+Coffee+House+Sadar+Jabalpur"
  },
  {
    id: 40,
    name: "Barbeque Nation",
    category: "Restaurant",
    foodType: "Non-Veg",
    location: "South Avenue Mall",
    description: "Non-veg restaurant in South Avenue Mall",
    highlights: "Non-Veg, South Avenue Mall",
    image: "https://via.placeholder.com/400x250?text=Barbeque+Nation",
    priceRange: "₹1200",
    rating: 4.4,
    specialties: "Indian, Non-Veg",
    timings: "12:00 PM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Barbeque+Nation+South+Avenue+Mall+Jabalpur"
  },
  {
    id: 41,
    name: "Panchvati Dhaba",
    category: "Dhaba",
    foodType: "Non-Veg",
    location: "Tilwara Road",
    description: "Non-veg dhaba on Tilwara Road",
    highlights: "Non-Veg, Tilwara Road",
    image: "https://via.placeholder.com/400x250?text=Panchvati+Dhaba",
    priceRange: "₹250",
    rating: 3.9,
    specialties: "Dhaba, Non-Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Panchvati+Dhaba+Tilwara+Road+Jabalpur"
  },
  {
    id: 42,
    name: "New Milan Dhaba",
    category: "Dhaba",
    foodType: "Non-Veg",
    location: "Gwarighat",
    description: "Non-veg dhaba in Gwarighat",
    highlights: "Non-Veg, Gwarighat",
    image: "https://via.placeholder.com/400x250?text=New+Milan+Dhaba",
    priceRange: "₹200",
    rating: 4.1,
    specialties: "Dhaba, Non-Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=New+Milan+Dhaba+Gwarighat+Jabalpur"
  },
  {
    id: 43,
    name: "Hotel Kalchuri",
    category: "Hotel",
    foodType: "Non-Veg",
    location: "Russel Chowk",
    description: "Non-veg hotel in Russel Chowk",
    highlights: "Non-Veg, Russel Chowk",
    image: "https://via.placeholder.com/400x250?text=Hotel+Kalchuri",
    priceRange: "₹900",
    rating: 4.1,
    specialties: "Hotel, Non-Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Hotel+Kalchuri+Russel+Chowk+Jabalpur"
  },
  {
    id: 44,
    name: "Hotel Samdariya",
    category: "Hotel",
    foodType: "Non-Veg",
    location: "Wright Town",
    description: "Non-veg hotel in Wright Town",
    highlights: "Non-Veg, Wright Town",
    image: "https://via.placeholder.com/400x250?text=Hotel+Samdariya",
    priceRange: "₹850",
    rating: 4.0,
    specialties: "Hotel, Non-Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Hotel+Samdariya+Wright+Town+Jabalpur"
  },
  {
    id: 45,
    name: "Al Baik",
    category: "Street Food",
    foodType: "Non-Veg",
    location: "Sadar",
    description: "Non-veg street food in Sadar",
    highlights: "Non-Veg, Sadar",
    image: "https://via.placeholder.com/400x250?text=Al+Baik",
    priceRange: "₹150",
    rating: 4.2,
    specialties: "Street Food, Non-Veg",
    timings: "12:00 PM - 11:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Al+Baik+Sadar+Jabalpur"
  },
  {
    id: 46,
    name: "Lucknowi",
    category: "Street Food",
    foodType: "Non-Veg",
    location: "Wright Town",
    description: "Non-veg street food in Wright Town",
    highlights: "Non-Veg, Wright Town",
    image: "https://via.placeholder.com/400x250?text=Lucknowi",
    priceRange: "₹180",
    rating: 4.1,
    specialties: "Street Food, Non-Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Lucknowi+Wright+Town+Jabalpur"
  },
  {
    id: 47,
    name: "Chicken Point",
    category: "Street Food",
    foodType: "Non-Veg",
    location: "Adhartal",
    description: "Non-veg street food in Adhartal",
    highlights: "Non-Veg, Adhartal",
    image: "https://via.placeholder.com/400x250?text=Chicken+Point",
    priceRange: "₹120",
    rating: 3.8,
    specialties: "Street Food, Non-Veg",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Chicken+Point+Adhartal+Jabalpur"
  },
  {
    id: 48,
    name: "Indian Spice",
    category: "Restaurant",
    foodType: "Both",
    location: "Jabalpur",
    description: "Both cuisine restaurant in Jabalpur",
    highlights: "Both, Jabalpur",
    image: "https://via.placeholder.com/400x250?text=Indian+Spice",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Indian, Both",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Indian+Spice+Jabalpur"
  },
  {
    id: 49,
    name: "Jabali (Vijay Nagar)",
    category: "Restaurant",
    foodType: "Both",
    location: "Jabalpur",
    description: "Both cuisine restaurant in Jabalpur",
    highlights: "Both, Jabalpur",
    image: "https://via.placeholder.com/400x250?text=Jabali+Vijay+Nagar",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Indian, Both",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Jabali+Vijay+Nagar+Jabalpur"
  },
  {
    id: 50,
    name: "Tamara (Vijan Palace)",
    category: "Restaurant",
    foodType: "Both",
    location: "Jabalpur",
    description: "Both cuisine restaurant in Jabalpur",
    highlights: "Both, Jabalpur",
    image: "https://via.placeholder.com/400x250?text=Tamara+Vijan+Palace",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Indian, Both",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Tamara+Vijan+Palace+Jabalpur"
  },
  {
    id: 51,
    name: "Saffron (Hotel Samdariya)",
    category: "Restaurant",
    foodType: "Both",
    location: "Jabalpur",
    description: "Both cuisine restaurant in Jabalpur",
    highlights: "Both, Jabalpur",
    image: "https://via.placeholder.com/400x250?text=Saffron+Hotel+Samdariya",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Indian, Both",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Saffron+Hotel+Samdariya+Jabalpur"
  },
  {
    id: 52,
    name: "Urban Spice",
    category: "Restaurant",
    foodType: "Both",
    location: "Jabalpur",
    description: "Both cuisine restaurant in Jabalpur",
    highlights: "Both, Jabalpur",
    image: "https://via.placeholder.com/400x250?text=Urban+Spice",
    priceRange: "₹₹",
    rating: 4.0,
    specialties: "Indian, Both",
    timings: "10:00 AM - 10:00 PM",
    contact: "N/A",
    mapLink: "https://maps.google.com/?q=Urban+Spice+Jabalpur"
  }
];

// DOM Elements
const foodGrid = document.getElementById('food-grid');
const categoryFilter = document.getElementById('category-filter');
const foodTypeFilter = document.getElementById('food-type-filter');
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
    const search = searchFilter.value.toLowerCase();

    let filteredFood = foodData.filter(place => {
        const matchesCategory = category === 'all' || place.category.toLowerCase() === category;
        
        // Handle food type matching with proper mapping
        let matchesFoodType = false;
        if (foodType === 'all') {
            matchesFoodType = true;
        } else if (foodType === 'veg') {
            matchesFoodType = place.foodType.toLowerCase() === 'vegetarian';
        } else if (foodType === 'non-veg') {
            matchesFoodType = place.foodType.toLowerCase() === 'non-veg';
        } else if (foodType === 'both') {
            matchesFoodType = place.foodType.toLowerCase() === 'both';
        }
        
        const matchesSearch = search === '' || 
            place.name.toLowerCase().includes(search) ||
            place.description.toLowerCase().includes(search) ||
            place.highlights.toLowerCase().includes(search) ||
            place.specialties.toLowerCase().includes(search) ||
            place.location.toLowerCase().includes(search);

        return matchesCategory && matchesFoodType && matchesSearch;
    });

    // Sort the filtered results
    const sortBy = sortSelect.value;
    if (sortBy === 'rating') {
        filteredFood.sort((a, b) => b.rating - a.rating);
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

renderFoodPlaces();