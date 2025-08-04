const express = require("express");
const mongoose = require("mongoose");
const Patient = require("./models/patient");
const { logRequest } = require("./utils/utils.js");

const app = express();

// Conexión a la base de datos con Mongoose (nueva sintaxis)
mongoose
  .connect("mongodb+srv://sololectura:sololectura@cluster0.c8tq0vp.mongodb.net/catsalut")
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos", err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Middleware integrado para manejar formularios
app.use(express.json()); // Middleware integrado para manejar JSON

// Nueva ruta: Página de inicio
app.get("/", async (req, res) => {
  logRequest(`GET / - Home`);
  try {
    const totalPatients = await Patient.countDocuments();
    res.render("home", { totalPatients });
  } catch (err) {
    res.status(500).send("Error al cargar la página de inicio");
  }
});

// Endpoint 1: Obtener todos los pacientes en formato JSON en la ruta /api/patients
app.get("/api/patients", async (req, res) => {
  logRequest(`GET /api/patients`);
  try {
    const patients = await Patient.find({});
    res.json({
      message: "Query executed successfully",
      results: patients,
    });
  } catch (err) {
    res.status(500).send("Error al obtener los pacientes");
  }
});

// Endpoint 2: Renderizar el formulario de búsqueda
app.get("/form", (req, res) => {
  res.render("form");
});

// Endpoint 3: Verificar si el paciente existe y mostrar información
app.get("/check", async (req, res) => {
  const { ssn } = req.query;
  logRequest(`GET /check - Se ha realizado una consulta sobre el paciente número ${ssn}`);
  // Patrón: \b[0-6][0-9][ -]?[0-9]{8}[ -]?[0-9]{2}\b
  const ssnRegex = /\b[0-6][0-9][ -]?[0-9]{8}[ -]?[0-9]{2}\b/;
  const valid = ssnRegex.test(ssn);

  if (valid) {
    try {
      const patient = await Patient.findOne({ ssn: ssn.replace(/^0+/, '') });
      console.log("🚀 ~ file: app.js:52 ~ app.get ~ patient:", patient);

      if (patient) {
        res.render("patient-info", { patient });
      } else {
        res.render("patient-info", { patient: null, message: "El paciente no existe en la base de datos" });
      }
    } catch (err) {
      res.status(500).send("Error al verificar el paciente");
    }
  } else {
    res.status(500).send("Error en el formato del SSN");
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
