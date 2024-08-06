import ejs from "ejs";
import donorModel from "../models/donorModel.js";
import sendMail from "../helpers/sendMail.js"
import dotenv from "dotenv";
dotenv.config();

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
};

const sendBloodDonationEmail = async () => {

    const donors = await donorModel.find();

    if (donors.length > 0) {
        for (let donor of donors) {
            //Calculating the date difference b/w last blood donated date and current date

            const donorDate = new Date(donor.date);
            const today = new Date();
            const diffTime = Math.abs(donorDate - today)
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 60) {
                ejs.renderFile("templates/BloodDonationReminder.ejs",
                    { name: donor.name, date: donor.date },
                    async (error, data) => {
                        let messageOption = {
                            from: process.env.EMAIL,
                            to: donor.email,
                            subject: "Hello, Blood Brideg Donor",
                            html: data
                        };
                        try {
                            sendMail(messageOption);
                            const formattedDate = formatDate(today);
                            await donorModel.findByIdAndUpdate(donor._id, { $set: { date: formattedDate } })
                        } catch (error) {
                            console.log(error);
                        }
                    }
                )
            }

        }
    }

}

export default sendBloodDonationEmail;