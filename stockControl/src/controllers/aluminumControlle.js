import profile from "../models/profilesModels.js";


class ProfileController  {
    static async listOfProfile(req, res){
        const listProfile = await profile.find({});
        res.status(200).json(listProfile)
    }

    static async acessProfileById (req, res) {
        try {
            const id = req.params.id
            const idProfile = await profile.findById(id)
            res.status(200).json(idProfile)
        } catch (err) {
            res.status(500).json({ message: `${err.message} - request failure`})
        }
    }

    static async registerProfile (req, res) {
        console.log(req.body)
        try {
            const data = req.body
            const newProfile = await profile.create(data)
            res.status(201).json({message: "Profile created!", profile : newProfile})
        } catch (err) {
            res.status(500).json({message: `${err.message} - Error creating profile`})
        }
    }
    
    static async updateProfile (req, res) {
        try {
            const id = req.params.id
            await profile.findByIdAndUpdate(id, req.body)
            res.status(201).json({ message: "Updated profile"})
        } catch (err) {
            res.status(500).json({message : `${err.message} - update failure`})
        }
    }

    static async deleteProfile (req, res) {
        try {
            const id = req.params.id
            await profile.findByIdAndDelete(id)
            res.status(200).json({ message : `Profile deleted!`})
        } catch (err) {
            res.status(500).json({ message : `${err.message} - delete failure`})
        }
    }

    static async acessProfileByQuery (req, res) {
        const profileCode = req.query.codes

        try {
            const profileByName = await profile.find({codes: profileCode})
            res.status(200).json(profileByName)
        } catch(err) {
            res.status(500).json({message : "search failure!"})
        }
    }
}

export default ProfileController