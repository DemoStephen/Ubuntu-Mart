/*
 *** Image Imported Based on category
 */

//  Vegetables Images
import cabbage from "../assets/images/Vegetables/cabbage.png";
import capicum from "../assets/images/Vegetables/capsicum.png";
import carrot from "../assets/images/Vegetables/cabbage.png";
import broccoli from "../assets/images/Vegetables/cabbage.png";
import spinach from "../assets/images/Vegetables/cabbage.png";
import lettuce from "../assets/images/Vegetables/cabbage.png";
import onion from "../assets/images/Vegetables/cabbage.png";
import garlic from "../assets/images/Vegetables/cabbage.png";
import tomato from "../assets/images/Vegetables/cabbage.png";
import cucumber from "../assets/images/Vegetables/cabbage.png";

//  Fruits Images
import apple from "../assets/images/Fruits/apple.png";
import banana from "../assets/images/Fruits/apple.png";
import orange from "../assets/images/Fruits/apple.png";
import mango from "../assets/images/Fruits/apple.png";
import grape from "../assets/images/Fruits/apple.png";
import watermelon from "../assets/images/Fruits/apple.png";
import strawberry from "../assets/images/Fruits/apple.png";
import pineapple from "../assets/images/Fruits/apple.png";
import kiwi from "../assets/images/Fruits/apple.png";
import blueberry from "../assets/images/Fruits/apple.png";

//  Meats Images
import meat from "../assets/images/Meats/product4.png";
import beef from "../assets/images/Meats/product4.png";
import pork from "../assets/images/Meats/product4.png";
import lamb from "../assets/images/Meats/product4.png";
import bacon from "../assets/images/Meats/product4.png";
import turkey from "../assets/images/Meats/product4.png";
import ribs from "../assets/images/Meats/product4.png";
import ham from "../assets/images/Meats/product4.png";
import sausage from "../assets/images/Meats/product4.png";
import steak from "../assets/images/Meats/product4.png";

//  Fish Images
import fish from "../assets/images/Fishes/product4.png";
import tuna from "../assets/images/Fishes/product4.png";
import cod from "../assets/images/Fishes/product4.png";
import trout from "../assets/images/Fishes/product4.png";
import tilapia from "../assets/images/Fishes/product4.png";
import mackerel from "../assets/images/Fishes/product4.png";
import sardine from "../assets/images/Fishes/product4.png";
import shrimp from "../assets/images/Fishes/product4.png";
import crab from "../assets/images/Fishes/product4.png";
import lobster from "../assets/images/Fishes/product4.png";

// Drinks Images
import drinks from "../assets/images/Drinks/product4.png";
import appleJuice from "../assets/images/Drinks/product4.png";
import cola from "../assets/images/Drinks/product4.png";
import water from "../assets/images/Drinks/product4.png";
import lemonade from "../assets/images/Drinks/product4.png";
import icedTea from "../assets/images/Drinks/product4.png";
import milk from "../assets/images/Drinks/product4.png";
import coffee from "../assets/images/Drinks/product4.png";
import smoothie from "../assets/images/Drinks/product4.png";
import energyDrink from "../assets/images/Drinks/product4.png";

// Snacks Images
import snacks from "../assets/images/Snacks/product4.png";
import pretzels from "../assets/images/Snacks/product4.png";
import popcorn from "../assets/images/Snacks/product4.png";
import nuts from "../assets/images/Snacks/product4.png";
import chocolateBar from "../assets/images/Snacks/product4.png";
import granolaBar from "../assets/images/Snacks/product4.png";
import crackers from "../assets/images/Snacks/product4.png";
import jerky from "../assets/images/Snacks/product4.png";
import gummyBears from "../assets/images/Snacks/product4.png";
import cheesePuffs from "../assets/images/Snacks/product4.png";
/*
CATEGORY IMAGES
*/
import vegetables from "../assets/images/Categories/vegetables.png";
import fruits from "../assets/images/Categories/fruits.png";
import meats from "../assets/images/Categories/meat.png";
import fishes from "../assets/images/Categories/fishes.png";
import drinksList from "../assets/images/Categories/drinks.png";
import snacksList from "../assets/images/Categories/snacks.png";

export const CATEGORIES = [
  {
    image: vegetables,
    name: "Vegetables",
    text: 165,
  },
  {
    image: fruits,
    name: "Fruits",
    text: 165,
  },
  {
    image: meats,
    name: "Meat",
    text: 165,
  },
  {
    image: fishes,
    name: "Fishes",
    text: 165,
  },
  {
    image: drinksList,
    name: "Drinks",
    text: 165,
  },
  {
    image: snacksList,
    name: "Snacks",
    text: 165,
  },
];

export const PRODUCTS = {
  vegetables: [
    {
      image: cabbage,
      name: "Cabbage",
      price: 2.99,
      discount: 10,
      category: "Vegetable",
    },
    {
      image: capicum,
      name: "Capicum",
      price: 1.99,
      discount: 5,
      category: "Vegetable",
    },
    {
      image: carrot,
      name: "Carrot",
      price: 1.5,
      discount: 8,
      category: "Vegetable",
    },
    {
      image: broccoli,
      name: "Broccoli",
      price: 3.25,
      discount: 12,
      category: "Vegetable",
    },
    {
      image: spinach,
      name: "Spinach",
      price: 2.1,
      discount: 15,
      category: "Vegetable",
    },
    {
      image: lettuce,
      name: "Lettuce",
      price: 1.75,
      discount: 10,
      category: "Vegetable",
    },
    {
      image: onion,
      name: "Onion",
      price: 0.99,
      discount: 5,
      category: "Vegetable",
    },
    {
      image: garlic,
      name: "Garlic",
      price: 0.5,
      discount: 7,
      category: "Vegetable",
    },
    {
      image: tomato,
      name: "Tomato",
      price: 1.2,
      discount: 6,
      category: "Vegetable",
    },
    {
      image: cucumber,
      name: "Cucumber",
      price: 1.0,
      discount: 9,
      category: "Vegetable",
    },
  ],

  fruits: [
    {
      image: apple,
      name: "Green Apple",
      price: 14.99,
      discount: 50,
      category: "Fruit",
    },
    {
      image: banana,
      name: "Banana",
      price: 0.99,
      discount: 10,
      category: "Fruit",
    },
    {
      image: orange,
      name: "Orange",
      price: 1.5,
      discount: 15,
      category: "Fruit",
    },
    {
      image: mango,
      name: "Mango",
      price: 5.99,
      discount: 20,
      category: "Fruit",
    },
    {
      image: grape,
      name: "Grape",
      price: 2.99,
      discount: 5,
      category: "Fruit",
    },
    {
      image: watermelon,
      name: "Watermelon",
      price: 7.99,
      discount: 25,
      category: "Fruit",
    },
    {
      image: strawberry,
      name: "Strawberry",
      price: 6.5,
      discount: 15,
      category: "Fruit",
    },
    {
      image: pineapple,
      name: "Pineapple",
      price: 3.99,
      discount: 18,
      category: "Fruit",
    },
    { image: kiwi, name: "Kiwi", price: 1.25, discount: 10, category: "Fruit" },
    {
      image: blueberry,
      name: "Blueberry",
      price: 8.99,
      discount: 20,
      category: "Fruit",
    },
  ],

  meats: [
    {
      image: meat,
      name: "Chicken Breast",
      price: 5.99,
      discount: 15,
      category: "Meat",
    },
    {
      image: beef,
      name: "Ground Beef",
      price: 8.99,
      discount: 10,
      category: "Meat",
    },
    {
      image: pork,
      name: "Pork Chop",
      price: 6.5,
      discount: 12,
      category: "Meat",
    },
    {
      image: lamb,
      name: "Lamb Leg",
      price: 9.99,
      discount: 18,
      category: "Meat",
    },
    {
      image: bacon,
      name: "Bacon",
      price: 4.99,
      discount: 20,
      category: "Meat",
    },
    {
      image: turkey,
      name: "Turkey Breast",
      price: 7.5,
      discount: 10,
      category: "Meat",
    },
    {
      image: ribs,
      name: "Pork Ribs",
      price: 10.99,
      discount: 15,
      category: "Meat",
    },
    { image: ham, name: "Ham", price: 3.99, discount: 8, category: "Meat" },
    {
      image: sausage,
      name: "Sausage",
      price: 4.5,
      discount: 12,
      category: "Meat",
    },
    {
      image: steak,
      name: "Steak",
      price: 11.99,
      discount: 20,
      category: "Meat",
    },
  ],

  fishes: [
    {
      image: fish,
      name: "Salmon",
      price: 9.99,
      discount: 20,
      category: "Fish",
    },
    { image: tuna, name: "Tuna", price: 8.5, discount: 15, category: "Fish" },
    { image: cod, name: "Cod", price: 7.99, discount: 10, category: "Fish" },
    {
      image: trout,
      name: "Trout",
      price: 9.25,
      discount: 12,
      category: "Fish",
    },
    {
      image: tilapia,
      name: "Tilapia",
      price: 5.5,
      discount: 8,
      category: "Fish",
    },
    {
      image: mackerel,
      name: "Mackerel",
      price: 6.75,
      discount: 15,
      category: "Fish",
    },
    {
      image: sardine,
      name: "Sardine",
      price: 3.99,
      discount: 5,
      category: "Fish",
    },
    {
      image: shrimp,
      name: "Shrimp",
      price: 12.99,
      discount: 18,
      category: "Fish",
    },
    { image: crab, name: "Crab", price: 14.99, discount: 20, category: "Fish" },
    {
      image: lobster,
      name: "Lobster",
      price: 25.99,
      discount: 25,
      category: "Fish",
    },
  ],

  drinksList: [
    {
      image: drinks,
      name: "Orange Juice",
      price: 3.99,
      discount: 10,
      category: "Drinks",
    },
    {
      image: appleJuice,
      name: "Apple Juice",
      price: 4.5,
      discount: 8,
      category: "Drinks",
    },
    { image: cola, name: "Cola", price: 1.99, discount: 5, category: "Drinks" },
    {
      image: water,
      name: "Mineral Water",
      price: 1.0,
      discount: 0,
      category: "Drinks",
    },
    {
      image: lemonade,
      name: "Lemonade",
      price: 2.5,
      discount: 12,
      category: "Drinks",
    },
    {
      image: icedTea,
      name: "Iced Tea",
      price: 2.25,
      discount: 10,
      category: "Drinks",
    },
    { image: milk, name: "Milk", price: 1.5, discount: 5, category: "Drinks" },
    {
      image: coffee,
      name: "Coffee",
      price: 3.0,
      discount: 15,
      category: "Drinks",
    },
    {
      image: smoothie,
      name: "Berry Smoothie",
      price: 5.99,
      discount: 18,
      category: "Drinks",
    },
    {
      image: energyDrink,
      name: "Energy Drink",
      price: 2.75,
      discount: 20,
      category: "Drinks",
    },
  ],

  snacksList: [
    {
      image: snacks,
      name: "Potato Chips",
      price: 1.49,
      discount: 5,
      category: "Snacks",
    },
    {
      image: pretzels,
      name: "Pretzels",
      price: 2.0,
      discount: 10,
      category: "Snacks",
    },
    {
      image: popcorn,
      name: "Popcorn",
      price: 1.25,
      discount: 8,
      category: "Snacks",
    },
    {
      image: nuts,
      name: "Mixed Nuts",
      price: 4.99,
      discount: 15,
      category: "Snacks",
    },
    {
      image: chocolateBar,
      name: "Chocolate Bar",
      price: 1.75,
      discount: 5,
      category: "Snacks",
    },
    {
      image: granolaBar,
      name: "Granola Bar",
      price: 1.5,
      discount: 12,
      category: "Snacks",
    },
    {
      image: crackers,
      name: "Crackers",
      price: 2.25,
      discount: 10,
      category: "Snacks",
    },
    {
      image: jerky,
      name: "Beef Jerky",
      price: 3.99,
      discount: 15,
      category: "Snacks",
    },
    {
      image: gummyBears,
      name: "Gummy Bears",
      price: 1.99,
      discount: 20,
      category: "Snacks",
    },
    {
      image: cheesePuffs,
      name: "Cheese Puffs",
      price: 1.99,
      discount: 10,
      category: "Snacks",
    },
  ],
};

export const LANGUAGE_CURRENCY = {
  LANGUAGES: [
    { code: "EN", name: "English" },
    { code: "ES", name: "Spanish" },
    { code: "FR", name: "French" },
    { code: "DE", name: "German" },
    { code: "ZH", name: "Chinese" },
    { code: "JA", name: "Japanese" },
    { code: "Ru", name: "Russian" },
    { code: "Pt", name: "Portuguese" },
    { code: "It", name: "Italian" },
    { code: "Nl", name: "Dutch" },
    { code: "Ko", name: "Korean" },
    { code: "Ar", name: "Arabic" },
    { code: "Hi", name: "Hindi" },
    { code: "El", name: "Greek" },
    { code: "He", name: "Hebrew" },
    { code: "Sv", name: "Swedish" },
    { code: "Tr", name: "Turkish" },
    { code: "Da", name: "Danish" },
    { code: "Pl", name: "Polish" },
    { code: "Th", name: "Thai" },
  ],
  CURRENCIES: [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "KRW", name: "South Korean Won" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "INR", name: "Indian Rupee" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "ZAR", name: "South African Rand" },
  ],
};
