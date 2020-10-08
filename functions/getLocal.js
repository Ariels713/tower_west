require("dotenv").config();
const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const table = base.table("local");

exports.handler = async (event) => {
  const records = await table
    .select({ sort: [{ field: "order", direction: "asc" }] })
    .firstPage();
  const formattedData = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));
  return {
    statusCode: 200,
    body: JSON.stringify(formattedData),
  };
};
