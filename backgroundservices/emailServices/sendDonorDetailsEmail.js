import ejs from "ejs";
import donorModel from "../models/donorModel.js";
import sendMail from "../helpers/sendMail.js";
import dotenv from "dotenv";
dotenv.config();

const sendDonorDetailsEmail = async () => {
    const donors = await donorModel.find({ status: 0 });

    if (donors.length > 0) {
        for (let donor of donors) {
            ejs.renderFile(
                "templates/BloodDonationDonor.ejs",
                {
                    name: donor.name,
                    email: donor.email,
                    mobile: donor.mobile,
                    address: donor.address,
                    bloodgroup: donor.bloodgroup,
                    healthissues: donor.healthissues,
                    weight: donor.weight,
                    bp: donor.bp,
                    age: donor.age,
                    date: donor.date,
                },
                async (err, data) => {
                    if (err) {
                        console.error('EJS render error:', err);
                        return;
                    }

                    let messageOption = {
                        from: process.env.EMAIL,
                        to: donor.email,
                        subject: "Hello, Blood Bridge Donor.",
                        html: data,
                    };

                    try {
                        await sendMail(messageOption);
                        await donorModel.findByIdAndUpdate(donor._id, {
                            $set: {
                                status: 1,
                            },
                        });
                    } catch (error) {
                        console.log('Error sending email:', error);
                    }
                }
            );
        }
    }
};

export default sendDonorDetailsEmail;
