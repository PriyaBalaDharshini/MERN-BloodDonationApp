import donorModel from "../models/donorModel.js";

const createDonor = async (req, res) => {
    try {
        const { name, email, address, mobile, bloodgroup, weight, age, healthissues, bp } = req.body;

        // Check if all required fields are present
        if (!name || !email || !address || !mobile || !bloodgroup || !weight || !age || !healthissues || !bp) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        // Check for an existing donor by email
        const existingDonor = await donorModel.findOne({ email });
        if (existingDonor) {
            return res.status(400).json({ message: "Donor with this email already exists." });
        }

        // Create and save a new donor
        const newDonor = new donorModel({
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

        await newDonor.save();
        res.status(201).json({ message: "Donor created successfully.", newDonor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getAllDonors = async (req, res) => {
    try {
        const allDonors = await donorModel.find().sort({ createdAt: 1 });
        if (allDonors.length === 0) {
            return res.status(200).json({ message: "No donors found" });
        }
        res.status(201).json({ message: "Donor details fetched successfully.", allDonors });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const getOneDonor = async (req, res) => {
    try {
        const { id } = req.params;
        // Find donor by MongoDB's _id
        const oneDonor = await donorModel.findById(id);

        if (!oneDonor) {
            return res.status(404).json({ message: "Donor not found." });
        }

        res.status(200).json({ message: "One donor detail fetched successfully.", donor: oneDonor });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const updateDonor = async (req, res) => {
    try {
        const { id } = req.params;
        // Find and update donor by MongoDB's _id
        const updatedDonor = await donorModel.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        if (!updatedDonor) {
            return res.status(404).json({ message: "Donor not found." });
        }

        res.status(200).json({ message: "Donor detail updated successfully.", donor: updatedDonor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const deleteDonor = async (req, res) => {
    try {
        const { id } = req.params;
        // Find and delete donor by MongoDB's _id
        const deletedDonor = await donorModel.findByIdAndDelete(id);

        if (!deletedDonor) {
            return res.status(404).json({ message: "Donor not found." });
        }

        res.status(200).json({ message: "Donor deleted successfully.", donor: deletedDonor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const donorStatistics = async (req, res) => {
    try {
        const statistics = await donorModel.aggregate([
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

const donorCount = async (req, res) => {
    try {
        const count = await donorModel.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const recentDonors = async (req, res) => {
    try {
        const recentDonors = await donorModel.find().sort({ createdAt: -1 }).limit(5); // Get last 5 donors
        res.status(200).json(recentDonors);
    } catch (err) {
        res.status(500).json(err);
    }
}

const donorDistributionByAgeGroup = async (req, res) => {
    try {
        const distribution = await donorModel.aggregate([
            {
                $bucket: {
                    groupBy: "$age",
                    boundaries: [0, 18, 30, 45, 60, 100],
                    default: "Unknown",
                    output: {
                        count: { $sum: 1 }
                    }
                }
            }
        ]);
        res.status(200).json(distribution);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}


export default {
    createDonor,
    getAllDonors,
    getOneDonor,
    updateDonor,
    deleteDonor,
    donorStatistics,
    donorCount,
    recentDonors,
    donorDistributionByAgeGroup
}