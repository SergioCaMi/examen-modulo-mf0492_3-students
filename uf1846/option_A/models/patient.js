const { Schema, model, Types } = require("mongoose");

const patientSchema = new Schema({
  ssn: {
    type: String,
    required: true,
    unique: true,
    match: [/^[0-6][0-9][ -]?[0-9]{8}[ -]?[0-9]{2}$/, "El campo SSN no tiene un formato válido"],
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
});

const Patient = model("patient", patientSchema);

module.exports = Patient;
