import sendEmail from "../mailServices/senMail.js";
import prospectModel from "../models/prospectModel.js";
import ejs from 'ejs'

const createProspect = async (req, res) => {
    try {
        const { name, email, address, mobile, bloodgroup, weight, age, healthissues, bp } = req.body;

        console.log("Received data:", req.body);

        if (!name || !email || !address || !mobile || !bloodgroup || !weight || !age) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const existingProspect = await prospectModel.findOne({ email });
        if (existingProspect) {
            return res.status(400).json({ message: "Prospect with this email already exists." });
        }

        const newProspect = new prospectModel({
            name,
            email,
            address,
            mobile,
            bloodgroup,
            weight,
            age,
            healthissues,
            bp
        });

        await newProspect.save();
        res.status(201).json({ message: "Prospect created successfully.", newProspect });

        /*  if (age < 18) {
             ejs.renderFile("emailTemplates/notEligibleMail.ejs",
                 { name, age },
                 async (err, data) => {
                     if (err) {
                         console.log(err);
                     } else { sendEmail(email, "Not Elgible", data) }
                 }
             )
 
         } else {
             sendEmail(email, "Welcom", "You are welcome")
         } */


    } catch (error) {
        console.log("Error creating prospect:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getAllProspects = async (req, res) => {
    try {
        const allProspects = await prospectModel.find().sort({ createdAt: 1 });
        if (allProspects.length === 0) {
            return res.status(200).json({ message: "No Prospects found" });
        }
        res.status(201).json({ message: "Prospect details fetched successfully.", allProspects });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const getOneProspect = async (req, res) => {
    try {
        const { id } = req.params;
        // Find Prospect by MongoDB's _id
        const oneProspect = await prospectModel.findById(id);

        if (!oneProspect) {
            return res.status(404).json({ message: "Prospect not found." });
        }

        res.status(200).json({ message: "One Prospect detail fetched successfully.", Prospect: oneProspect });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const updateProspect = async (req, res) => {
    try {
        const { id } = req.params;
        // Find and update Prospect by MongoDB's _id
        const updatedProspect = await prospectModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        if (!updatedProspect) {
            return res.status(404).json({ message: "Prospect not found." });
        }

        res.status(200).json({ message: "Prospect detail updated successfully.", Prospect: updatedProspect });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const deleteProspect = async (req, res) => {
    try {
        const { id } = req.params;
        // Find and delete Prospect by MongoDB's _id
        const deletedProspect = await prospectModel.findByIdAndDelete(id);

        if (!deletedProspect) {
            return res.status(404).json({ message: "Prospect not found." });
        }

        res.status(200).json({ message: "Prospect deleted successfully.", Prospect: deletedProspect });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const prospectStatistics = async (req, res) => {
    try {
        const statistics = await prospectModel.aggregate([
            {
                $group: {
                    _id: "$bloodgroup",
                    count: { $sum: 1 }
                }
            }
        ])
        res.status(200).json(statistics)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const prospectCount = async (req, res) => {
    try {
        const prospectCount = await prospectModel.countDocuments();
        res.status(200).json({ count: prospectCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}


export default {
    createProspect,
    getAllProspects,
    getOneProspect,
    updateProspect,
    deleteProspect,
    prospectStatistics,
    prospectCount
}