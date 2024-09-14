import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config();

const sendEmail = (emailID, sub, data) => {
    console.log(process.env.EMAIL)
    console.log(process.env.PASSWORD)
    console.log(emailID, sub, data)
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    });

    let message = {
        from: process.env.EMAIL, // sender address
        to: emailID, // list of receivers
        subject: sub, // Subject line
        html: data, // html body
    }

    transporter.sendMail(message).then(() => {
        console.log("received email");

    }).catch(error => { console.log("Message:" + error) })
}
export default sendEmail;