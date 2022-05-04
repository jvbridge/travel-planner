const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Traveller.belongsToMany(Location, {
  through: Trip,
});

Location.belongsToMany(Traveller, {
  through: Trip,
});

module.exports = {
  Location,
  Traveller,
  Trip,
};
