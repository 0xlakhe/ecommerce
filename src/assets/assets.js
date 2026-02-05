import logo from "./logo.png";
import belt from "./gym-belt.webp";

const products = [
  {
    id: "p001",
    name: "Urban Explorer Hoodie",
    description:
      "A heavy-weight organic cotton hoodie designed for comfort and durability.",
    price: 65.0,
    image:
      "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
    category: "Men",
    subcategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2024-01-15",
    bestseller: true,
  },
  {
    id: "p002",
    name: "Performance Running Shoes",
    description:
      "Breathable mesh upper with reactive foam cushioning for long-distance runs.",
    price: 120.0,
    image:
      "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Women",
    subcategory: "Winterwear",
    sizes: ["8", "9", "10", "11", "12"],
    date: "2024-02-10",
    bestseller: true,
  },
  {
    id: "p003",
    name: "Minimalist Leather Wallet",
    description: "Full-grain leather with RFID protection and a slim profile.",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Kids",
    subcategory: "Winterwear",
    sizes: ["One Size"],
    date: "2023-11-05",
    bestseller: false,
  },
  {
    id: "p004",
    name: "Heritage Denim Jacket",
    description:
      "Classic fit denim jacket featuring vintage wash and reinforced stitching.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Men",
    subcategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    date: "2024-03-01",
    bestseller: false,
  },
  {
    id: "p005",
    name: "Yoga Comfort Leggings",
    description: "High-waisted, moisture-wicking fabric with four-way stretch.",
    price: 55.0,
    image:
      "https://plus.unsplash.com/premium_photo-1675186049409-f9f8f60ebb5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    category: "Women",
    subcategory: "Bottomwear",
    sizes: ["XS", "S", "M", "L"],
    date: "2024-01-20",
    bestseller: true,
  },
  {
    id: "p006",
    name: "Titanium Water Bottle",
    description:
      "Ultra-lightweight and vacuum insulated to keep drinks cold for 24 hours.",
    price: 38.0,
    image:
      "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    category: "Kids",
    subcategory: "Bottomwear",
    sizes: ["500ml", "750ml", "1L"],
    date: "2023-12-12",
    bestseller: false,
  },
  {
    id: "p007",
    name: "Classic Crew Neck Tee",
    description: "Essential everyday tee made from 100% Pima cotton.",
    price: 25.0,
    image:
      "https://plus.unsplash.com/premium_photo-1675186049297-035b3f692c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    category: "Men",
    subcategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    date: "2024-02-25",
    bestseller: true,
  },
  {
    id: "p008",
    name: "Canvas Commuter Bag",
    description:
      "Water-resistant canvas with a padded laptop sleeve and leather accents.",
    price: 110.0,
    image:
      "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    category: "Kids",
    subcategory: "Topwear",
    sizes: ["15-inch", "17-inch"],
    date: "2023-10-30",
    bestseller: true,
  },
  {
    id: "p009",
    name: "All-Weather Beanie",
    description: "Soft merino wool blend that stays warm even when wet.",
    price: 22.0,
    image:
      "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    category: "Women",
    subcategory: "Topwear",
    sizes: ["One Size"],
    date: "2024-01-05",
    bestseller: false,
  },
  {
    id: "p010",
    name: "Smart Fitness Watch",
    description:
      "Tracks heart rate, sleep patterns, and daily activity with 5-day battery life.",
    price: 199.0,
    image:
      "https://images.unsplash.com/photo-1693443688057-85f57b872a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    category: "Kids",
    subcategory: "Topwear",
    sizes: ["38mm", "42mm"],
    date: "2024-03-12",
    bestseller: true,
  },
];
export const assets = {
  logo,
  belt,
  products,
};
