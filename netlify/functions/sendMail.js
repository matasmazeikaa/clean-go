const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp.titan.email',
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: 'info@pasiskiepijes.lt',
		pass: '2684526845Matas', // generated ethereal password
	},
});

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

const sendMail = (emailData) => {
	const {
		name,
		email,
		cleaningType,
		service,
		phone,
		area,
		currentPrice,
		priceRange = { min: null, max: null },
		frequency,
	} = emailData;

	const html = `<h1>Kontaktai</h1> <strong>Vardas: </strong> ${
		name || '-'
	} </br> <strong>Telefonas: </strong> ${phone || ''} <br /> <strong>El. paštas: </strong> ${
		email || ''
	} <br/> <br/> <h1>Paslaugos</h1>  <strong>Valymo tipas:</strong> ${
		cleaningType || '-'
	} </br> <strong>Paslauga: </strong> ${service || '-'} <br/> <strong>Plotas: </strong> ${
		area || '-'
	}m2 </br> <strong>Valymo dažnumas: </strong> ${
		frequency || '-'
	} <br/> <strong>Preliminari kaina: </strong> ${
		priceRange.min ? `${priceRange.min}-${priceRange.max}` : currentPrice || '-'
	}eur`;

	try {
		return transporter.sendMail({
			from: 'info@pasiskiepijes.lt', // sender address
			to: 'info@pasiskiepijes.lt', // list of receivers
			subject: 'Užsakymas ✔', // Subject line
			text: 'Užsakymas', // plain text body
			html, // html body
		});
	} catch (error) {
		throw error;

		if (error.response) {
			throw error.response.body;
		}
	}
};

exports.handler = async (event, context) => {
	const requestBody = JSON.parse(event.body);

	try {
		const emailResponse = await sendMail(requestBody);

		return {
			statusCode: 200,
			body: String(emailResponse),
			headers,
		};
	} catch (error) {
		return {
			statusCode: 422,
			body: String(error),
			headers,
		};
	}
};
