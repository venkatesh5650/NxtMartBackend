const productData = [
  // Fruits & Vegetables
  {
    name: "Apple",
    category: "Fruits & Vegetables",
    price: 120,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/1344927287/photo/fresh-red-apples-in-wooden-box.jpg?s=612x612&w=0&k=20&c=JgsvmZohUAaywBbMQm67VEOpSJA6sYP-ZCjrL7HCzq0=",
  },
  {
    name: "Banana",
    category: "Fruits & Vegetables",
    price: 60,
    quantity: "12 pcs",
    image_url:
      "https://media.istockphoto.com/id/163676705/photo/market-fresh-bananas-hanging-on-an-old-blue-wooden-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=25TUOTuus7BMjbnyHVy51zXPXqr5dvVFkkxwtA8wbUc=",
  },
  {
    name: "Tomato",
    category: "Fruits & Vegetables",
    price: 40,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/589985234/photo/homegrown-tomatoes.jpg?s=612x612&w=0&k=20&c=uzUhfFsfesTDClRQ_3PACAAS5SIb8UR1RyU9FqAVAco=",
  },
  {
    name: "Onion",
    category: "Fruits & Vegetables",
    price: 50,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/171158822/photo/red-onions-background.jpg?s=612x612&w=0&k=20&c=-jkt0464Xku9H0_eSrcz6RJc8TqeQwUFNI2AF9oFGL8=",
  },
  {
    name: "Potato",
    category: "Fruits & Vegetables",
    price: 45,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/619756376/photo/raw-potato.jpg?s=612x612&w=0&k=20&c=mIIEmCiwVeSGYgdaoaxTw7_0gUR-dfK09HQsFATWifc=",
  },
  {
    name: "Carrot",
    category: "Fruits & Vegetables",
    price: 70,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/2150710300/photo/overhead-view-of-freshly-sliced-organic-carrots-on-cutting-board.jpg?s=612x612&w=0&k=20&c=ukr4W-a52GLyqT2jshKF8DHEkPkmvjrP5-cSE0GmZZU=",
  },

  // Prepared Foods
  {
    name: "Veg Biryani",
    category: "Prepared Foods",
    price: 150,
    quantity: "1 plate",
    image_url:
      "https://media.istockphoto.com/id/1292442851/photo/traditional-hyderabadi-vegetable-veg-dum-biryani-with-mixed-veggies-served-with-mixed-raita.jpg?s=612x612&w=0&k=20&c=FPsC5CB9UqiS09045jGu_hd3dgPHH1Z9IZm6JXe2yNA=",
  },
  {
    name: "Chicken Biryani",
    category: "Prepared Foods",
    price: 250,
    quantity: "1 plate",
    image_url:
      "https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=612x612&w=0&k=20&c=63UXYPOISm8nJ8SNK79dDm0w1gY6jXzYQP0heL6fnOg=",
  },
  {
    name: "Veg Salad",
    category: "Prepared Foods",
    price: 120,
    quantity: "1 bowl",
    image_url:
      "https://media.istockphoto.com/id/1200393614/photo/tangy-mix-veg-with-indian-cottage-cheese-paneer.jpg?s=612x612&w=0&k=20&c=XNQ6vAIqaevNXci_tf7Ghi9pL4BVv4w-OHwxiUXWhx0=",
  },
  {
    name: "Paneer Curry",
    category: "Prepared Foods",
    price: 180,
    quantity: "1 bowl",
    image_url:
      "https://media.istockphoto.com/id/1472170341/photo/indian-australian-cuisine-restaurant-dish-curry.jpg?s=612x612&w=0&k=20&c=21JnprHLoZNnpA-UnS_T6ApigM5ZEA_U9mzXzc-0OcY=",
  },
  {
    name: "Veg Pizza",
    category: "Prepared Foods",
    price: 299,
    quantity: "1 pizza",
    image_url:
      "https://media.istockphoto.com/id/1364747500/photo/the-perfect-toppings.webp?a=1&b=1&s=612x612&w=0&k=20&c=TVEywQmOVLtLq1J0nxlYzH6OSTzB2QkBWtuCuplGsHw=",
  },
  {
    name: "Burger",
    category: "Prepared Foods",
    price: 99,
    quantity: "1 piece",
    image_url:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
  },

  // Oil
  {
    name: "Sunflower Oil",
    category: "Oil",
    price: 180,
    quantity: "1L",
    image_url: "https://m.media-amazon.com/images/I/616gnRopZDL._AC_UL320_.jpg",
  },
  {
    name: "Olive Oil",
    category: "Oil",
    price: 450,
    quantity: "1L",
    image_url: "https://m.media-amazon.com/images/I/717Y2iacktL._AC_UL320_.jpg",
  },
  {
    name: "Coconut Oil",
    category: "Oil",
    price: 220,
    quantity: "1L",
    image_url: "https://m.media-amazon.com/images/I/61h5Qf0-cZL._AC_UL320_.jpg",
  },
  {
    name: "Groundnut Oil",
    category: "Oil",
    price: 200,
    quantity: "1L",
    image_url: "https://m.media-amazon.com/images/I/51i5sEERhOL._AC_UL320_.jpg",
  },
  {
    name: "Mustard Oil",
    category: "Oil",
    price: 160,
    quantity: "1L",
    image_url: "https://m.media-amazon.com/images/I/51dhZglj8LL._AC_UL320_.jpg",
  },
  {
    name: "Rice Bran Oil",
    category: "Oil",
    price: 170,
    quantity: "1L",
    image_url: "https://m.media-amazon.com/images/I/71cOvYJsVYL._AC_UL320_.jpg",
  },

  // Frozen Foods
  {
    name: "Frozen Peas",
    category: "Frozen Foods",
    price: 120,
    quantity: "500g",
    image_url: "https://m.media-amazon.com/images/I/81AW2m7iufL._AC_UL320_.jpg",
  },
  {
    name: "Frozen Sweet Corn",
    category: "Frozen Foods",
    price: 100,
    quantity: "500g",
    image_url: "https://m.media-amazon.com/images/I/61oEJQBd8ML._AC_UL320_.jpg",
  },
  {
    name: "French Fries",
    category: "Frozen Foods",
    price: 150,
    quantity: "500g",
    image_url: "https://m.media-amazon.com/images/I/81MpvH88S7L._AC_UL320_.jpg",
  },
  {
    name: "Frozen Chicken Nuggets",
    category: "Frozen Foods",
    price: 250,
    quantity: "500g",
    image_url: "https://m.media-amazon.com/images/I/51SBE7b5qNL._AC_UL320_.jpg",
  },
  {
    name: "Ice Cream",
    category: "Frozen Foods",
    price: 199,
    quantity: "500ml",
    image_url:
      "https://m.media-amazon.com/images/I/51Ft7x8KGsL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    name: "Frozen Paratha",
    category: "Frozen Foods",
    price: 80,
    quantity: "5 pcs",
    image_url: "https://m.media-amazon.com/images/I/81uCeCUYFLL._AC_UL320_.jpg",
  },

  // Meat & Seafood
  {
    name: "Chicken",
    category: "Meat & Seafood",
    price: 250,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/1322432988/photo/raw-chicken-cuts-without-skin.webp?a=1&b=1&s=612x612&w=0&k=20&c=itrU0ikHzT9YQD_0q9quf-OC_mKm5dFb9OvnBAdZWS8=",
  },
  {
    name: "Mutton",
    category: "Meat & Seafood",
    price: 650,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/538918713/photo/lamb-chops.webp?a=1&b=1&s=612x612&w=0&k=20&c=KngAj46-ey8bcMOyvo6ScKjkbnTM-UNX7iV6Fy6iXHg=",
  },
  {
    name: "Fish",
    category: "Meat & Seafood",
    price: 350,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/2162360732/photo/traditional-bangladeshi-national-fish-fresh-hilsa-fish-on-display-hilsa.webp?a=1&b=1&s=612x612&w=0&k=20&c=VwV2uNwp6kFC9k1njSKwXRyVL_K0yyv0_L_Tylf7il8=",
  },
  {
    name: "Prawns",
    category: "Meat & Seafood",
    price: 500,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/1297113217/photo/fresh-shrimp-served-with-lemon.webp?a=1&b=1&s=612x612&w=0&k=20&c=flaK_A_jXvxRF5LhDSpeYOtbsj0riJ440sLbXqy8qRw=",
  },
  {
    name: "Crab",
    category: "Meat & Seafood",
    price: 600,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/2162197716/photo/group-of-freshwater-crabs-freshwater-crabs-or-rice-field-crabs-crab-on-the-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=x1YcvV5UVBwO7O15Z87cXulKMwA6flBSvvfC9FSA8Pw=",
  },

  // Home Needs
  {
    name: "Detergent",
    category: "Home Needs",
    price: 250,
    quantity: "1kg",
    image_url:
      "https://media.istockphoto.com/id/1219405722/photo/detergent-powder.webp?a=1&b=1&s=612x612&w=0&k=20&c=JLeMRigU_1RO-96gtw_L-wYo9-xsatiYZZwc00LCNHg=",
  },
  {
    name: "Soap",
    category: "Home Needs",
    price: 40,
    quantity: "1 piece",
    image_url:
      "https://media.istockphoto.com/id/1212680808/photo/natural-green-soap-and-eucalyptus-leaves-on-a-straw-plate-vertical-format-organic.webp?a=1&b=1&s=612x612&w=0&k=20&c=RWqCUGQYr-_B42ZjXzMZFFLspGxF9nmC9T25iJJ9i_o=",
  },
  {
    name: "Shampoo",
    category: "Home Needs",
    price: 120,
    quantity: "200ml",
    image_url: "https://images.unsplash.com/photo-1655892810227-c0cffe1d9717",
  },
  {
    name: "Toothpaste",
    category: "Home Needs",
    price: 90,
    quantity: "200g",
    image_url: "https://images.unsplash.com/photo-1612705166160-97d3b2e8e212",
  },
  {
    name: "Tissues",
    category: "Home Needs",
    price: 60,
    quantity: "1 pack",
    image_url:
      "https://media.istockphoto.com/id/185295476/photo/tissue-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=zbiZfVXucmptURV-oeYBj6biEth8VWbfhiRTfZ7GbFs=",
  },
  {
    name: "Floor Cleaner",
    category: "Home Needs",
    price: 150,
    quantity: "1L",
    image_url:
      "https://media.istockphoto.com/id/1345539958/photo/cleaning-parquet-floor-with-wet-mop.webp?a=1&b=1&s=612x612&w=0&k=20&c=8A7cxH8ZDYEYdsjj_1OktmfCB0JHNLn3_QQFg1GB8Ok=",
  },

  // Beverages
  {
    name: "Coca Cola",
    category: "Beverages",
    price: 40,
    quantity: "500ml",
    image_url: "https://m.media-amazon.com/images/I/61Ju--N-QoL._AC_UL320_.jpg",
  },
  {
    name: "Pepsi",
    category: "Beverages",
    price: 40,
    quantity: "500ml",
    image_url: "https://m.media-amazon.com/images/I/51pGxfs4w1L._AC_UL320_.jpg",
  },
  {
    name: "Orange Juice",
    category: "Beverages",
    price: 120,
    quantity: "1L",
    image_url:
      "https://m.media-amazon.com/images/I/41rksqDZ8cL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Mango Juice",
    category: "Beverages",
    price: 130,
    quantity: "1L",
    image_url: "https://m.media-amazon.com/images/I/51TNaTSPSJL._AC_UL320_.jpg",
  },
  {
    name: "Tea Pack",
    category: "Beverages",
    price: 250,
    quantity: "500g",
    image_url: "https://m.media-amazon.com/images/I/61JcMMLXlgL._AC_UL320_.jpg",
  },
  {
    name: "Coffee Powder",
    category: "Beverages",
    price: 300,
    quantity: "500g",
    image_url: "https://m.media-amazon.com/images/I/61L96Ywi7aL._AC_UL320_.jpg",
  },
];

export default productData;
