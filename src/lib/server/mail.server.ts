import nodemailer from 'nodemailer';
import { SENDER_EMAIL, SENDER_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
	host: 'mail.eurovias.com.br',
	port: 465,
	secure: true,
	auth: {
		user: SENDER_EMAIL,
		pass: SENDER_PASSWORD
	}
});

export default transporter;
