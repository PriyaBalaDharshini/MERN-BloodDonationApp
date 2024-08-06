import ejs from "ejs";
import prospectModel from "../models/prospectModel.js";
import sendMail from "../helpers/sendMail.js"
import dotenv from "dotenv";
dotenv.config();

const sendDetailsProspectEmail = async () => {
    const prospects = await prospectModel.find({ status: 0 }) //person who registered from blood donoation butt not yet gave blood (status=0)
    if (prospects.length > 0) {
        for (let prospect of prospects) {
            ejs.renderFile("templates/BloodDonationProspect.ejs",
                { name: prospect.name },
                async (error, data) => {
                    let messageOption = {
                        from: process.env.EMAIL,
                        to: prospect.email,
                        subject: "Blood Bridge, Thank you",
                        html: data
                    }
                    try {
                        sendMail(messageOption)
                        await prospectModel.findByIdAndUpdate(prospect._id, { $set: { status: 1 } })
                    } catch (error) {
                        console.log(error);
                    }
                }
            )
        }
    }

}

export default sendDetailsProspectEmail
