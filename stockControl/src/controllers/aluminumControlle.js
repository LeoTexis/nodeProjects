import profile from "../models/profilesModels.js";

class ProfileController  {
    static async listOfProfile(req, res){
        const listProfile = await profile.find({});
        res.status(200).json(listProfile)
    }

    static async registerProfile (req, res) {
        try {
            const newProfile = await profile.create(req.body)
            res.status(201).json({message: "Profile created!", profile : newProfile})
        } catch (err) {
            res.status(500).json({message: `${err.message} - Error creating profile`})
        }
    }
    
    static async acessProfile (req, res) {

    }
    
    static async updateProfile (req, res) {

    }
}

export default ProfileController