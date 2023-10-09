/* Base de datos productos */
import { v4 as uuidv4 } from "uuid";

//-- Seccion Ropa ---//
import vestido001 from "../../public/product/vestido/vestido001.jpg";
import vestido002 from "../../public/product/vestido/vestido002.jpg";
import vestido003 from "../../public/product/vestido/vestido003.jpg";
import vestido004 from "../../public/product/vestido/vestido004.jpg";

import pantalon001 from "../../public/product/pantalon/pantalon001.jpg"
import pantalon002 from "../../public/product/pantalon/pantalon002.jpg"
import pantalon003 from "../../public/product/pantalon/pantalon003.jpg"

import blusa001 from "../../public/product/blusa/blusa001.jpg"
import blusa002 from "../../public/product/blusa/blusa002.jpg"
import blusa003 from "../../public/product/blusa/blusa003.jpg"

export const cardDataClothing = [
  {
    id: uuidv4(),
    title: "Vestido Espiritu",
    price: 100000,
    imageUrl: vestido001,
    category: "vestido",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Vestido Tracender",
    price: 80000,
    imageUrl: vestido002,
    category: "vestido",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Vestido Religion",
    price: 90000,
    imageUrl: vestido003,
    category: "vestido",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Vestido Fe",
    price: 98000,
    imageUrl: vestido004,
    category: "vestido",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Pantalon Armonia",
    price: 180000,
    imageUrl: pantalon001,
    category: "pantalon",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Pantalon Devoción",
    price: 280000,
    imageUrl: pantalon002,
    category: "pantalon",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Pantalon Santos",
    price: 230000,
    imageUrl: pantalon003,
    category: "pantalon",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Blusa Creencias",
    price: 90000,
    imageUrl: blusa001,
    category: "blusa",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Blusa Búsqueda",
    price: 90000,
    imageUrl: blusa002,
    category: "blusa",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Blusa Espiritual",
    price: 90000,
    imageUrl: blusa003,
    category: "blusa",
    quantity: 1,
  },
];

//-- Seccion Linea de sol ---//
import bikini001 from "../../public/product/bikini/bikini001.jpeg"
import bikini002 from "../../public/product/bikini/bikini002.jpg"
import bikini003 from "../../public/product/bikini/bikini003.jpg"
import bikini004 from "../../public/product/bikini/bikini004.jpg"
import bikini005 from "../../public/product/bikini/bikini005.jpg"
import bikini006 from "../../public/product/bikini/bikini006.jpg"

export const cardDataSunLine = [
  {
    id: uuidv4(),
    title: "Bikini Celestial",
    price: 50000,
    imageUrl: bikini001,
    category: "bikini",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Bikini Divino",
    price: 60000,
    imageUrl: bikini002,
    category: "bikini",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Bikini Alado",
    price: 50000,
    imageUrl: bikini003,
    category: "bikini",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Bikini Serafín",
    price: 70000,
    imageUrl: bikini004,
    category: "bikini",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Bikini Arcángel",
    price: 50000,
    imageUrl: bikini005,
    category: "bikini",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Bikini Armonía",
    price: 90000,
    imageUrl: bikini006,
    category: "bikini",
    quantity: 1,
  },
];

//-- Seccion Saldos ---//
import sale001 from "../../public/product/saldos/saldo001.jpeg"
import sale002 from "../../public/product/saldos/saldo002.jpeg"
import sale003 from "../../public/product/saldos/saldo003.jpeg"
import sale004 from "../../public/product/saldos/saldo004.jpeg"
import sale005 from "../../public/product/saldos/saldo005.jpeg"
import sale006 from "../../public/product/saldos/saldo006.jpeg"

export const cardDataSale = [
  {
    id: uuidv4(),
    title: "Top Paz",
    price: 30000,
    imageUrl: sale001,
    category: "cropTop",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Top Serenidad",
    price: 30000,
    imageUrl: sale002,
    category: "cropTop",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Top Iluminación",
    price: 30000,
    imageUrl: sale003,
    category: "cropTop",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Top Trascendencia",
    price: 30000,
    imageUrl: sale004,
    category: "cropTop",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Top Gratitud",
    price: 30000,
    imageUrl: sale005,
    category: "cropTop",
    quantity: 1,
  },
  {
    id: uuidv4(),
    title: "Top Conciencia",
    price: 30000,
    imageUrl: sale006,
    category: "cropTop",
    quantity: 1,
  },
];
