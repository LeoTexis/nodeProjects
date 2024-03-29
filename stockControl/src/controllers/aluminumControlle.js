import profile from "../models/profilesModels.js";


class ProfileController  {
    static async listOfProfile(req, res, next){
        const listProfile = await profile.find({});
        res.status(200).json(listProfile)
    }

    static async acessProfileById (req, res, next) {
        try {
            const id = req.params.id
            const idProfile = await profile.findById(id)
            res.status(200).json(idProfile)
        } catch (err) {
            next(err)
        }
    }

    static async registerProfile (req, res, next) {
        try {
            const data = req.body
            const newProfile = await profile.create(data)
            res.status(201).json({message: "Profile created!", profile : newProfile})
        } catch (err) {
            next(err)
        }
    }
    
    static async updateProfile (req, res, next) {
        try {
            const id = req.params.id
            await profile.findByIdAndUpdate(id, req.body)
            res.status(201).json({ message: "Updated profile"})
        } catch (err) {
            next(err)
        }
    }

    static async deleteProfile (req, res, next) {
        try {
            const id = req.params.id
            await profile.findByIdAndDelete(id)
            res.status(200).json({ message : `Profile deleted!`})
        } catch (err) {
            next(err)
        }
    }

    static async acessProfileByQuery (req, res) {
        const profileCode = req.query.codes

        try {
            const profileByName = await profile.find({codes: profileCode})
            res.status(200).json(profileByName)
            console.log(profileByName)
        } catch(err) {
            res.status(500).json({message : "search failure!"})
        }
    }
}

export default ProfileController