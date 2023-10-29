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
