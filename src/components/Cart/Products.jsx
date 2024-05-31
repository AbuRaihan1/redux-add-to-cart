import SingleProduct from "./SingleProduct";
import headphone from "../../assets/images/headphone.jfif";
import camera from "../../assets/images/camera.jfif";
import cube from "../../assets/images/cube.jfif";
import makeup from "../../assets/images/makeup.jfif";
import phone from "../../assets/images/phone.jfif";
import serum from "../../assets/images/serum.jfif";
import shampoo from "../../assets/images/shampoo.jfif";
import shoe from "../../assets/images/shoe.jfif";
import watch from "../../assets/images/watch.jfif";
import oil from "../../assets/images/oil.jfif";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 29.99,
      inStock: true,
      rating: 4.5,
      description:
        "A comfortable and responsive wireless mouse with ergonomic design.",
      img: headphone,
    },
    {
      id: 2,
      name: "Bluetooth Headphones",
      category: "Audio",
      price: 79.99,
      inStock: true,
      rating: 4.7,
      description:
        "Noise-canceling Bluetooth headphones with excellent sound quality.",
      img: oil,
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Wearables",
      price: 199.99,
      inStock: false,
      rating: 4.3,
      description:
        "A sleek and modern smart watch with fitness tracking capabilities.",
      img: camera,
    },
    {
      id: 4,
      name: "LED Desk Lamp",
      category: "Home & Office",
      price: 49.99,
      inStock: true,
      rating: 4.2,
      description:
        "Adjustable LED desk lamp with multiple brightness levels and USB charging port.",
      img: cube,
    },
    {
      id: 5,
      name: "Portable Charger",
      category: "Accessories",
      price: 24.99,
      inStock: true,
      rating: 4.6,
      description:
        "Compact and powerful portable charger with fast charging capabilities.",
      img: makeup,
    },
    {
      id: 6,
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 89.99,
      inStock: false,
      rating: 4.8,
      description: "Mechanical gaming keyboard with customizable RGB lighting.",
      img: phone,
    },
    {
      id: 7,
      name: "Fitness Tracker",
      category: "Wearables",
      price: 59.99,
      inStock: true,
      rating: 4.4,
      description:
        "Waterproof fitness tracker with heart rate monitoring and sleep tracking.",
      img: serum,
    },
    {
      id: 8,
      name: "4K Monitor",
      category: "Electronics",
      price: 399.99,
      inStock: true,
      rating: 4.7,
      description:
        "Ultra HD 4K monitor with stunning visuals and vibrant colors.",
      img: shampoo,
    },
    {
      id: 9,
      name: "Smart Speaker",
      category: "Audio",
      price: 129.99,
      inStock: true,
      rating: 4.5,
      description: "Voice-controlled smart speaker with premium sound quality.",
      img: shoe,
    },
    {
      id: 10,
      name: "Electric Kettle",
      category: "Home & Kitchen",
      price: 39.99,
      inStock: false,
      rating: 4.1,
      description:
        "Fast-boiling electric kettle with temperature control and auto shut-off.",
      img: watch,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products?.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
