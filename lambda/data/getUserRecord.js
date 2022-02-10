const Airtable = require("airtable");
const fetch = require("node-fetch");
const keys = require("./keys");

function getUserRecord(handlerInput) {
  console.log("GETTING USER RECORD");
  const userId = handlerInput.requestEnvelope.session.user.userId;

  const url = `https://api.airtable.com/v0/${keys.airtable_base_data}/User?api_key=${keys.airtable_api_key}&filterByFormula=%7BSlotsId%7D%3D%22${encodeURIComponent(userId)}%22`;
  const options = {method: "GET"};

  console.log(`PATH: ${url}`);

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => {
      if (r.records.length === 0) {
        return createUserRecord(userId);
      } else return r.records[0];
    });
}

function createUserRecord(userId) {
  var airtable = new Airtable({ apiKey: keys.airtable_api_key }).base(keys.airtable_base_data);
  return new Promise((resolve, reject) => {
    airtable("User").create({ SlotsId: userId, Balance: 100 }, function (err, record) {
      console.log("NEW USER RECORD = " + JSON.stringify(record));
      if (err) {
        console.error(err);
        return;
      }
      resolve(record);
    });
  });
}

module.exports = getUserRecord;