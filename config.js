// config.js
const users = [
  { username: "admin", password: "admin", permission: 3 },
  { username: "profe", password: "profe", permission: 2 },
  { username: "alumno", password: "alumno", permission: 1 }
];

const permissions = {
  1: { visibleColumns: ["Comunidad", "Universidad", "Rama", "Grado", "Año", "ID"] },
  2: { visibleColumns: ["Comunidad", "Universidad", "Rama", "Grado", "Año", "ID", "Nombre"] },
  3: { visibleColumns: ["Comunidad", "Universidad", "Rama", "Grado", "Año", "ID", "Nombre", "Correo", "Teléfono"] }
};
