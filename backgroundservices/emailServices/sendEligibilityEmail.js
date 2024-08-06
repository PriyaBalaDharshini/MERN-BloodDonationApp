import ejs from "ejs";
import prospectModel from "../models/prospectModel.js";
import sendMail from "../helpers/sendMail.js"
import dotenv from "dotenv";
dotenv.config();

const sendEligibilityEmail = async () => {
    const prospects = await prospectModel.find({ status: 0 });
    if (prospects.length > 0) {
        for (let prospect of prospects) {
            if (prospect.age < 18 || prospect.weight < 50) {
                ejs.renderFile("templates/BloodDonationEligibility.ejs",
                    { name: prospect.name, age: prospect.age, weight: prospect.weight },
                    async (error, data) => {
                        let messageOption = {
                            from: process.env.EMAIL,
                            to: prospect.email,
                            subject: "Blood Donation Eligibility ",
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
}

export default sendEligibilityEmail