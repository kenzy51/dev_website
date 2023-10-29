import { manufacturers as Manufacturer } from "../../../../models";
import { getSewingFromSheet } from "../../../../scripts/googleSheets";
import { searchSewingWorkshopsInBishkek } from "../../../../scripts/googleSewings";
/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getTest(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const getTest = async (req, res) => {
    console.log(Manufacturer);
    //let manufacturers = await Manufacturer.findAll({});
    let searchSewingWorkshopsInBishkekResult = await searchSewingWorkshopsInBishkek();
    console.log("searchSewingWorkshopsInBishkekResult", searchSewingWorkshopsInBishkekResult);
  
    let dbResult = searchSewingWorkshopsInBishkekResult.map(async (record) => {

      const newManufacturer = await Manufacturer.create({
        name: record.name,
   
        location: record.address,
        userId: "d2fdd9e4-3a02-4a58-9ed0-7d64ab164e55",
        website: record.website,
        photos: record.photoUrl,
        contactInfo: [{'phone':record.phoneNumber}],
        lat:record.latitude,
        lng:record.longitude
      });
    });
    res.send({ ok: searchSewingWorkshopsInBishkekResult });
  };
  

// const getTest = async (req, res) => {
//   console.log(Manufacturer);
//   let manufacturers = await Manufacturer.findAll({});
//   let googleSheetResult = await getSewingFromSheet();
//   console.log("googleSheetResult", googleSheetResult);

//   let dbResult = googleSheetResult.map(async (record) => {
//     let contactInfo = [];

//     if (record.email && record.email.trim()) {
//       contactInfo.push({email:record.email});
//     }
//     if (record.telephone1 && record.telephone1.trim()) {
//       contactInfo.push({telephone1:record.telephone1});
//     }
//     if (record.telephone2 && record.telephone2.trim()) {
//       contactInfo.push({telephone2:record.telephone2});
//     }
//     const newManufacturer = await Manufacturer.create({
//       name: record.title,
//       description: record.contentValue,
//       location: record.address,
//       userId: "d2fdd9e4-3a02-4a58-9ed0-7d64ab164e55",
//       website: record.website,
//       brand: record.brand,
//       photos: record.hrefValues,
//       contactInfo: contactInfo,
//     });
//   });
//   res.send({ ok: dbResult });
// };
