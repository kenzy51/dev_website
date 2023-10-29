const { google } = require("googleapis");
const axios = require("axios");
const cheerio = require("cheerio");

const sheets = google.sheets("v4");

async function getSheetData() {
  const auth = await google.auth.getClient({
    keyFile: "theta-eon-391814-087f4a9c7334.json", // Replace with path to your service account key
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const spreadsheetId = "1P4J4p478yIkIXJn_wjra80hmthtwqZWsbrbWSPlfWzI"; // Your spreadsheet ID
  const range = "Sheet1!A1:B"; // Assuming the sheet's name is 'Sheet1' and you want to start from B2

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
    auth,
  });

  const rows = response.data.values;
  if (rows.length) {
    return rows.map((row) => ({
      storeName: row[0], // Assuming column A has store names
      link: row[1], // Assuming column B has the links
    }));
  } else {
    console.log("No data found.");
    return [];
  }
}

export async function getSewingFromSheet() {
  let sewings = await getSheetData()
  .then(async (data) => {
    //console.log(data);
    const results = [];
    for (const store of data) {
      const dataSewing = await axios
        .get(store.link)
        .then((response) => {
          const html = response.data;
          const $ = cheerio.load(html);

          const title = $("p.h4.mb-3").text().trim();
          const brand = $('p.font-size-14.font-weight-light:contains("Брэнд:")')
            .text()
            .split("Брэнд:")[1]
            ? $('p.font-size-14.font-weight-light:contains("Брэнд:")')
                .text()
                .split("Брэнд:")[1]
                .trim()
            : null;
          const address = $(
            'p.font-size-14.font-weight-light:contains("Адрес:")'
          )
            .next()
            .text()
            .trim();
          const email = $('p.font-size-14.font-weight-light:contains("Email:")')
            .next()
            .text()
            .trim();

          const telephone1 = $(
            'p.font-size-14.font-weight-light:contains("Телефон № 1:")'
          )
            .next()
            .text()
            .trim();
          const telephone2 = $(
            'p.font-size-14.font-weight-light:contains("Телефон № 2:")'
          )
            .next()
            .text()
            .trim();
          const contentValue = $('meta[name="description"]').attr("content");
          let hrefValues = [];

          const hrefs = $(`#sync1 a`)
            .map((index, element) => {
              let href = $(element).attr("href");

              return href;
            })
            .get();

          hrefValues = hrefValues.concat(hrefs);

          return {
            title,
            brand,
            address,
            email,
            telephone1,
            telephone2,
            hrefValues,
            contentValue,
            website:store.link
          };
        })
        .catch((error) => {
          console.error("Error fetching the webpage:", error);
        });
      console.log(dataSewing);
      results.push(dataSewing);
    }
    return results;
  })
  .catch((err) => {
    console.error("Error reading data from Google Sheet:", err);
  });
  return sewings;
}




