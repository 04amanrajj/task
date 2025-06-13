const mockDestinations = [
  {
    name: "Jammu & Kashmir",
    description:
      "Experience spiritual tranquility with guided meditation retreats in the Himalayan valleys of Jammu & Kashmir. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/97/36/b6/9736b63fdfd6e297d767dd1cc53f8201.jpg",
  },
  {
    name: "Himachal Pradesh",
    description:
      "Embark on a spiritual journey with yoga and meditation sessions in the serene hills of Himachal Pradesh. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/f8/f6/8d/f8f68d87abcefe8c702d6a8fb890e62a.jpg",
  },
  {
    name: "Goa",
    description:
      "Rejuvenate with yoga and mindfulness retreats by the tranquil beaches of Goa. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/fe/c0/fb/fec0fb1c9a2a70f4812e3fe9ddc88d86.jpg",
  },
  {
    name: "Assam",
    description:
      "Find peace with meditation retreats amidst the lush tea gardens of Assam. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/f3/44/87/f3448758f72bafc39c3e6d8ab05679b9.jpg",
  },
  {
    name: "Maharashtra",
    description:
      "Explore spiritual serenity in the historic caves and monasteries of Maharashtra. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/18/9f/e2/189fe25c327910f4c9f4e6852e9ee5ad.jpg",
  },
  {
    name: "Kerala",
    description:
      "Discover tranquility with yoga retreats by the serene backwaters of Kerala. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/d2/8b/70/d28b70b9d4d3e205551078cac9fb1833.jpg",
  },
  {
    name: "Uttarakhand",
    description:
      "Join a spiritual retreat in the sacred lands of Uttarakhand, with meditation in Rishikesh. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/47/14/30/471430b468f840c3b500bbe9aee44eac.jpg",
  },
  {
    name: "Rajasthan",
    description:
      "Experience mindfulness amidst the royal heritage and deserts of Rajasthan. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/31/26/05/3126050a050e7f2cb656bb9f3bfd2030.jpg",
  },
  {
    name: "Tamil Nadu",
    description:
      "Find inner calm with spiritual retreats near the ancient temples of Tamil Nadu. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/7d/d8/cf/7dd8cfd213bdc8808342ff1d39e539d5.jpg",
  },
  {
    name: "Karnataka",
    description:
      "Embark on a wellness journey with yoga retreats in the lush landscapes of Karnataka. Starting from ₹4999/-.",
    image: "https://i.pinimg.com/736x/1b/51/ba/1b51ba6da57633576197296053e7aa5f.jpg",
  },
];

const mockPackages = [
  {
    name: "Himalayan Serenity",
    duration: "5D/4N",
    price: 4999,
    destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
    rating: 4.8,
    // image:"https://i.pinimg.com/736x/f2/5f/e1/f25fe1b9e9dbf4ffded1247f20028431.jpg"
  },
  {
    name: "Himachal Escape",
    duration: "6D/5N",
    price: 4999,
    destinations: ["Shimla", "Manali", "Dharamshala"],
    rating: 4.7,
    // image: "https://i.pinimg.com/736x/e2/47/fa/e247fa7f9e7be4a17bc15ad6bd9fdc5f.jpg"
  },
  {
    name: "Goan Retreat",
    duration: "4D/3N",
    price: 4999,
    destinations: ["Panaji", "Calangute", "Anjuna"],
    rating: 4.9,
  },
  {
    name: "Assam Adventure",
    duration: "5D/4N",
    price: 4999,
    destinations: ["Guwahati", "Kaziranga", "Jorhat"],
    rating: 4.6,
  },
  {
    name: "Maharashtra Marvel",
    duration: "6D/5N",
    price: 4999,
    destinations: ["Mumbai", "Aurangabad", "Pune"],
    rating: 4.8,
  },
  {
    name: "Kerala Tranquility",
    duration: "5D/4N",
    price: 4999,
    destinations: ["Kochi", "Munnar", "Alleppey"],
    rating: 4.9,
  },
  {
    name: "Uttarakhand Odyssey",
    duration: "6D/5N",
    price: 4999,
    destinations: ["Rishikesh", "Haridwar", "Mussoorie"],
    rating: 4.7,
  },
  {
    name: "Rajasthan Heritage",
    duration: "7D/6N",
    price: 4999,
    destinations: ["Jaipur", "Jaisalmer", "Udaipur"],
    rating: 4.8,
  },
  {
    name: "Tamil Nadu Temples",
    duration: "5D/4N",
    price: 4999,
    destinations: ["Chennai", "Madurai", "Rameswaram"],
    rating: 4.6,
  },
  {
    name: "Karnataka Journey",
    duration: "6D/5N",
    price: 4999,
    destinations: ["Bangalore", "Mysore", "Coorg"],
    rating: 4.7,
  },
];

const mockTestimonials = [
  {
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    name: "John Doe",
    companyOrDesignation: "Travel Blogger",
  },
  {
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    name: "Jane Smith",
    companyOrDesignation: "CEO, Wanderlust Tours",
  },
  {
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    name: "Rahul Sharma",
    companyOrDesignation: "Freelance Photographer",
  },
];

module.exports = { mockDestinations, mockPackages, mockTestimonials };
