const Renting = require('../models/RentProperty');

const SubmitRenting = async (req,res) => {
    try{
        const newRenting = new Renting(req.body);
        await newRenting.save();
        res.json({success: true, message:'Your rent property linsiting success!!'})

    }catch(error){
        console.error(error);
        res.status(500).json({ success: false, message:'Internal server error'});
    }
}

const getRent = async (req,res) => {
    try{
        const data = await Renting.find();
        res.json(data);
    }catch{
        console.error('Error fetching data', error)
        res.status(500).json({error : 'Internal Server error!!'});

    }

}

module.exports={
    SubmitRenting,
    getRent,
};