require("dotenv").config();

var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);
  await base("contact").create([
    {
      fields: {
        name: name,
        email: email,
        message: message,
      },
    },
  ]);
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "User Added" }),
  };
};
