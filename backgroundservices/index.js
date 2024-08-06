import express from "express"
import dbConnection from "./utils/db.js"
import cron from "node-cron"
import dotenv from "dotenv"
import sendDetailsProspectEmail from "./emailServices/sendDetailsProspect.js"
import sendEligibilityEmail from "./emailServices/sendEligibilityEmail.js"
import sendBloodDonationEmail from "./emailServices/sendBloodDonationRemainder.js"
import sendDonorDetailsEmail from "./emailServices/sendDonorDetailsEmail.js"
dotenv.config()

const app = express()
const port = process.env.PORT;

//Schedule Task
const run = () => {
    cron.schedule('* * * * * *', () => {
        sendDetailsProspectEmail()
        sendEligibilityEmail()
        sendBloodDonationEmail()
        //sendDonorDetailsEmail(); 
    });
}
run()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dbConnection();
});


