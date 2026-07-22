import mongoose from "mongoose";
import Product from "./Models/Product.js";
import dotenv from "dotenv";

dotenv.config();

const sampleProducts = [
  {
    productName: "Nike Air Max",
    productPrice: 8999,
    publishDate: "2024-01-15",
    category: "Shoes",
    productDescription:
      "Premium running shoes with air cushioning technology for maximum comfort.",
    productImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    status: "In Stock",
    views: 0,
  },
  {
    productName: "Sony WH-1000XM5",
    productPrice: 29999,
    publishDate: "2024-02-20",
    category: "Electronics",
    productDescription:
      "Industry-leading noise canceling headphones with exceptional sound quality.",
    productImage:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
    status: "In Stock",
    views: 0,
  },
  {
    productName: 'MacBook Pro 14"',
    productPrice: 199999,
    publishDate: "2024-03-10",
    category: "Laptops",
    productDescription:
      "Powerful laptop with M3 Pro chip, stunning Liquid Retina XDR display.",
    productImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    status: "In Stock",
    views: 0,
  },
  {
    productName: "iPhone 15 Pro",
    productPrice: 134900,
    publishDate: "2024-04-05",
    category: "Mobile",
    productDescription:
      "Titanium design, A17 Pro chip, advanced camera system with 5x zoom.",
    productImage:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    status: "In Stock",
    views: 0,
  },
  {
    productName: "Samsung Galaxy Watch 6",
    productPrice: 32999,
    publishDate: "2024-05-12",
    category: "Wearables",
    productDescription:
      "Advanced health monitoring, GPS, and long battery life smartwatch.",
    productImage:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    status: "In Stock",
    views: 0,
  },
  {
    productName: "Canon EOS R6 Mark II",
    productPrice: 215999,
    publishDate: "2024-06-01",
    category: "Cameras",
    productDescription:
      "Full-frame mirrorless camera with 24.2MP sensor and 40fps burst shooting.",
    productImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    status: "In Stock",
    views: 0,
  },
  {
    productName: "Dyson V15 Detect",
    productPrice: 52900,
    publishDate: "2024-06-15",
    category: "Home Appliances",
    productDescription:
      "Cordless vacuum with laser dust detection and HEPA filtration.",
    productImage:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500",
    status: "In Stock",
    views: 0,
  },
  {
    productName: "PlayStation 5",
    productPrice: 54990,
    publishDate: "2024-07-01",
    category: "Gaming",
    productDescription:
      "Next-gen gaming console with ultra-high speed SSD and 4K gaming.",
    productImage:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
    status: "In Stock",
    views: 0,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert sample products
    const products = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${products.length} sample products`);

    console.log("Products:");
    products.forEach((p) =>
      console.log(`- ${p.productName} (${p.category}) - Rs. ${p.productPrice}`),
    );

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
