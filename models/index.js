const Location = require("./Location");
const Traveller = require("./Traveller");
const Trips = require("./Trips");

Traveller.belongsToMany(Location, {
  through: Trips,
});

Location.belongsToMany(Traveller, {
  through: Trips,
});

module.exports = {
  Location,
  Traveller,
  Trips,
};
