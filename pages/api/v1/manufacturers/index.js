const { Op } = require("sequelize");
import { manufacturers as Manufacturer } from "../../../../models";
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      if (req.query.id) {
        await getManufacturerById(req, res);
      } else {
        await getManufacturers(req, res);
      }
      break;

    case "POST":
      await createManufacturer(req, res);
      break;

    case "PUT":
      await updateManufacturer(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const getManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.findAll();
    res.status(200).json(manufacturers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createManufacturer = async (req, res) => {
  const { name, keywords } = req.body;

  try {
    const newManufacturer = await Manufacturer.create({ name, country });
    res.status(201).json(newManufacturer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getManufacturerById = async (req, res) => {
  const { id } = req.query;

  try {
    const manufacturer = await Manufacturer.findByPk(id);

    if (manufacturer) {
      res.status(200).json(manufacturer);
    } else {
      res.status(404).json({ error: "Manufacturer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
