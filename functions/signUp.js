require("dotenv").config();

var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

exports.handler = async (event) => {
  const { email } = JSON.parse(event.body);
  await base("newsLetter").create([
    {
      fields: {
        email: email,
      },
    },
  ]);
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "User Added" }),
  };
};
