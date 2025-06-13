const mockDestinations = [
  {
    name: "Jammu & Kashmir",
    description:
      "Experience spiritual tranquility with guided meditation retreats in the Himalayan valleys of Jammu & Kashmir. Starting from ₹4999/-.",
    image: "https://example.com/images/jammu_kashmir_retreat.jpg",
  },
  {
    name: "Himachal Pradesh",
    description:
      "Embark on a spiritual journey with yoga and meditation sessions in the serene hills of Himachal Pradesh. Starting from ₹4999/-.",
    image: "https://example.com/images/himachal_retreat.jpg",
  },
  {
    name: "Goa",
    description:
      "Rejuvenate with yoga and mindfulness retreats by the tranquil beaches of Goa. Starting from ₹4999/-.",
    image: "https://example.com/images/goa_retreat.jpg",
  },
  {
    name: "Assam",
    description:
      "Find peace with meditation retreats amidst the lush tea gardens of Assam. Starting from ₹4999/-.",
    image: "https://example.com/images/assam_retreat.jpg",
  },
  {
    name: "Maharashtra",
    description:
      "Explore spiritual serenity in the historic caves and monasteries of Maharashtra. Starting from ₹4999/-.",
    image: "https://example.com/images/maharashtra_retreat.jpg",
  },
  {
    name: "Kerala",
    description:
      "Discover tranquility with yoga retreats by the serene backwaters of Kerala. Starting from ₹4999/-.",
    image: "https://example.com/images/kerala_retreat.jpg",
  },
  {
    name: "Uttarakhand",
    description:
      "Join a spiritual retreat in the sacred lands of Uttarakhand, with meditation in Rishikesh. Starting from ₹4999/-.",
    image: "https://example.com/images/uttarakhand_retreat.jpg",
  },
  {
    name: "Rajasthan",
    description:
      "Experience mindfulness amidst the royal heritage and deserts of Rajasthan. Starting from ₹4999/-.",
    image: "https://example.com/images/rajasthan_retreat.jpg",
  },
  {
    name: "Tamil Nadu",
    description:
      "Find inner calm with spiritual retreats near the ancient temples of Tamil Nadu. Starting from ₹4999/-.",
    image: "https://example.com/images/tamil_nadu_retreat.jpg",
  },
  {
    name: "Karnataka",
    description:
      "Embark on a wellness journey with yoga retreats in the lush landscapes of Karnataka. Starting from ₹4999/-.",
    image: "https://example.com/images/karnataka_retreat.jpg",
  },
];

const mockPackages = [
  {
    name: "Himalayan Serenity",
    duration: "5D/4N",
    price: 4999,
    destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
    rating: 4.8,
  },
  {
    name: "Himachal Escape",
    duration: "6D/5N",
    price: 4999,
    destinations: ["Shimla", "Manali", "Dharamshala"],
    rating: 4.7,
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
