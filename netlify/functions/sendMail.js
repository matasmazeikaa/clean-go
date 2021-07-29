const sgMail = require("@sendgrid/mail")

const TEST_API = "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"
//ES6

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
}


const sendMail = (emailData) => {
  const msg = {
    to: "info@cleango.lt",
    from: "info@cleango.lt", // Use the email address or domain you verified above
    subject: "Naujas užsakymas!",
    text: "Naujas klientas!",
    html: `<p><strong>Vardas: </strong>${emailData.name} <br /> ${emailData.cleaningType ? `<strong>Valymo tipas:</strong> ${emailData.cleaningType} <br />` : ""} ${emailData.service ? `<strong>Paslauga:</strong> ${emailData.service} <br />` : ""}  <strong>Telefonas</strong>: <a href='tel:+370${emailData.phone}'>+370${emailData.phone}</a> </p>`
  }
  console.log(msg, 'Messgage');
  sgMail.setApiKey(TEST_API)
  
  try {
    return sgMail.send(msg)
  } catch (error) {
    console.log(error);
    console.log('dasdasd');
    throw error
    
    if (error.response) {
      throw error.response.body;
    }
  }
}


exports.handler = async (event, context) => {
  const requestBody = JSON.parse(event.body)
  console.log(!!requestBody.cleaningType)
  try {
    const emailResponse = await sendMail(requestBody)
    
    return {
      statusCode: 200,
      body: String(emailResponse),
      headers
    }
  } catch (error) {
    return {
      statusCode: 422,
      body: String(error),
      headers
    }
  }
}
