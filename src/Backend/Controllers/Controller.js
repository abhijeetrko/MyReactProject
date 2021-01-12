const DUMMY_DATA = [{
    day: "Saturday",
    income: "300RS"
}, {
    day: "Sunday",
    income: "400Rs"
}]

const getDetails = (req, res, next) => {
    console.log(req.params.day)
    const day = req.params.day;
    const data = DUMMY_DATA.find(p => {

        return p.day === day
    })
    res.json(data)
}

const test = (req, res, next) => {

    res.json({
        message: "Hey it is working"
    })

}

function saveData (req,res,next) {
        res.json({message:"You are saving data"})
        
    DUMMY_DATA.push(req.body);
}



module.exports.getDetails = getDetails;
module.exports.test = test;
module.exports.saveData=saveData;