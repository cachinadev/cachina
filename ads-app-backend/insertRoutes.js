const mongoose = require("mongoose");
const Route = require("./models/routeModel");

// 🌍 Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 🔹 Generate route points for movement simulation
const generateRoutePoints = (startLat, startLng, speed, numPoints) => {
  let points = [];
  for (let i = 0; i < numPoints; i++) {
    points.push({
      lat: startLat + (i * 0.0015),  // Simulated movement
      lng: startLng + (i * -0.0015), // Simulated movement
      speed: speed,
      timestamp: new Date()
    });
  }
  return points;
};

// 🚍 Mock Data: Simulated Transport Routes
const sampleRoutes = [
  {
    name: "Linea 1 - Centro a Sur",
    company: "Empresa 1",
    horaPartida: "07:00",
    horaLlegada: "07:30",
    numeroRuta: 1,
    departamento: "Puno",
    provincia: "San Roman",
    distrito: "Juliaca",
    rangoPrecio: 10,
    path: generateRoutePoints(-12.04654, -77.0428, 80, 10),
    vehicles: [
      { id: "VEH-101", lat: -12.04654, lng: -77.0428, speed: 80, lastUpdate: new Date() }
    ]
  },
  {
    name: "Ruta Norte - Expreso",
    company: "Empresa 2",
    horaPartida: "07:00",
    horaLlegada: "08:10",
    numeroRuta: 2,
    departamento: "Puno",
    provincia: "San Roman",
    distrito: "Juliaca",
    rangoPrecio: 2,
    path: generateRoutePoints(-12.04456, -77.0448, 40, 10),
    vehicles: [
      { id: "VEH-202", lat: -12.04456, lng: -77.0448, speed: 40, lastUpdate: new Date() }
    ]
  },
  {
    name: "Circuito Urbano Express",
    company: "Empresa 3",
    horaPartida: "07:00",
    horaLlegada: "08:50",
    numeroRuta: 3,
    departamento: "Puno",
    provincia: "San Roman",
    distrito: "Juliaca",
    rangoPrecio: 5,
    path: generateRoutePoints(-12.04696, -77.0476, 60, 10),
    vehicles: [
      { id: "VEH-303", lat: -12.04696, lng: -77.0476, speed: 60, lastUpdate: new Date() }
    ]
  }
];

// 🚀 Insert Data into MongoDB
Route.insertMany(sampleRoutes)
  .then(() => {
    console.log("✅ Sample transport routes inserted!");
    mongoose.connection.close();
  })
  .catch(err => console.error("❌ Error inserting routes:", err));
