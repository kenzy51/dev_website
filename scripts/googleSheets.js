const { google } = require("googleapis");
const axios = require("axios");
const cheerio = require("cheerio");

const sheets = google.sheets("v4");

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134'
        },
        timeout: 5000,
      });
      return response.data;
    } catch (error) {
      if (i === retries - 1) throw error;  // rethrow the last error if retries exhausted
      console.log(`Retry ${i + 1} for ${url}`);
    }
  }
}

async function getSheetData() {
  const auth = await google.auth.getClient({
    keyFile: "theta-eon-391814-087f4a9c7334.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const spreadsheetId = "1P4J4p478yIkIXJn_wjra80hmthtwqZWsbrbWSPlfWzI";
  const range = "Sheet1!A1:B";

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
    auth,
  });

  const rows = response.data.values;
  return rows.length ? rows.map(row => ({ storeName: row[0], link: row[1] })) : [];
}

async function parseHtml(html) {
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
  const address = $('p.font-size-14.font-weight-light:contains("Адрес:")')
    .next()
    .text()
    .trim();
  const email = $('p.font-size-14.font-weight-light:contains("Email:")')
    .next()
    .text()
    .trim();

  const telephone1 = $('p.font-size-14.font-weight-light:contains("Телефон № 1:")')
    .next()
    .text()
    .trim();
  const telephone2 = $('p.font-size-14.font-weight-light:contains("Телефон № 2:")')
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
  };
}

export async function getSewingFromSheet() {
  let sewings = await getSheetData()
    .then(async (data) => {
      const results = [];
      for (const store of data) {
        try {
          const html = await fetchWithRetry(store.link);
          const dataSewing = await parseHtml(html);
          dataSewing.website = store.link
          results.push(dataSewing);
          console.log('dataSewing', dataSewing)
        } catch (error) {
          console.error("Error fetching the webpage:", error);
        }
      }
      return results;
    })
    .catch(err => {
      console.error("Error reading data from Google Sheet:", err);
    });
  return sewings;
}
