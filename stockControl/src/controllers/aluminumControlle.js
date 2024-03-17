import profile from "../models/profilesModels.js";

<<<<<<< Updated upstream

class ProfileController  {
    static async listOfProfile(req, res, next){
=======
class ProfileController  {
    static async listOfProfile(req, res){
>>>>>>> Stashed changes
        const listProfile = await profile.find({});
        res.status(200).json(listProfile)
    }

<<<<<<< Updated upstream
    static async acessProfileById (req, res, next) {
        try {
            throw new Error()
            const id = req.params.id
            const idProfile = await profile.findById(id)
            res.status(200).json(idProfile)
        } catch (err) {
            next(err)
            // res.status(400).json({ message: `${err.message} - request failure`})
        }
    }

    static async registerProfile (req, res, next) {
        console.log(req.body)
        try {
            const data = req.body
            const newProfile = await profile.create(data)
            res.status(201).json({message: "Profile created!", profile : newProfile})
        } catch (err) {
            next(err)
            // res.status(500).json({message: `${err.message} - Error creating profile`})
        }
    }
    
    static async updateProfile (req, res, next) {
        try {
            const id = req.params.id
            await profile.findByIdAndUpdate(id, req.body)
            res.status(201).json({ message: "Updated profile"})
        } catch (err) {
            next(err)
            // res.status(500).json({message : `${err.message} - update failure`})
        }
    }

    static async deleteProfile (req, res, next) {
        try {
            const id = req.params.id
            await profile.findByIdAndDelete(id)
            res.status(200).json({ message : `Profile deleted!`})
        } catch (err) {
            next(err)
            // res.status(500).json({ message : `${err.message} - delete failure`})
=======
    static async registerProfile (req, res) {
        try {
            const newProfile = await profile.create(req.body)
            res.status(201).json({message: "Profile created!", profile : newProfile})
        } catch (err) {
            res.status(500).json({message: `${err.message} - Error creating profile`})
>>>>>>> Stashed changes
        }
    }
}

export default ProfileController