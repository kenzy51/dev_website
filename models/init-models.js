var DataTypes = require("sequelize").DataTypes;
var _Bids = require("./Bids");
var _ManufacturerLocations = require("./ManufacturerLocations");
var _Manufacturers = require("./Manufacturers");
var _Orders = require("./Orders");
var _ProductRequests = require("./ProductRequests");
var _Products = require("./Products");
var _Reviews = require("./Reviews");
var _SequelizeMeta = require("./SequelizeMeta");
var _SupportTickets = require("./SupportTickets");
var _Users = require("./Users");

function initModels(sequelize) {
  var Bids = _Bids(sequelize, DataTypes);
  var ManufacturerLocations = _ManufacturerLocations(sequelize, DataTypes);
  var Manufacturers = _Manufacturers(sequelize, DataTypes);
  var Orders = _Orders(sequelize, DataTypes);
  var ProductRequests = _ProductRequests(sequelize, DataTypes);
  var Products = _Products(sequelize, DataTypes);
  var Reviews = _Reviews(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var SupportTickets = _SupportTickets(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Bids.belongsTo(Manufacturers, { as: "manufacturer", foreignKey: "manufacturerId"});
  Manufacturers.hasMany(Bids, { as: "Bids", foreignKey: "manufacturerId"});
  ManufacturerLocations.belongsTo(Manufacturers, { as: "manufacturer", foreignKey: "manufacturerId"});
  Manufacturers.hasMany(ManufacturerLocations, { as: "ManufacturerLocations", foreignKey: "manufacturerId"});
  Products.belongsTo(Manufacturers, { as: "manufacturer", foreignKey: "manufacturerId"});
  Manufacturers.hasMany(Products, { as: "Products", foreignKey: "manufacturerId"});
  Reviews.belongsTo(Manufacturers, { as: "manufacturer", foreignKey: "manufacturerId"});
  Manufacturers.hasMany(Reviews, { as: "Reviews", foreignKey: "manufacturerId"});
  Bids.belongsTo(ProductRequests, { as: "productRequest", foreignKey: "productRequestId"});
  ProductRequests.hasMany(Bids, { as: "Bids", foreignKey: "productRequestId"});
  Manufacturers.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(Manufacturers, { as: "Manufacturers", foreignKey: "userId"});
  Orders.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(Orders, { as: "Orders", foreignKey: "userId"});
  ProductRequests.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(ProductRequests, { as: "ProductRequests", foreignKey: "userId"});
  Reviews.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(Reviews, { as: "Reviews", foreignKey: "userId"});
  SupportTickets.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(SupportTickets, { as: "SupportTickets", foreignKey: "userId"});

  return {
    Bids,
    ManufacturerLocations,
    Manufacturers,
    Orders,
    ProductRequests,
    Products,
    Reviews,
    SequelizeMeta,
    SupportTickets,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
