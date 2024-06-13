const { readCSVFile } = require("../helpers/readCSVFile");
const path = require('path');
const fileName = process.env.FILENAME

module.exports = {
    foodtrucksController: async (req, res) => {
        try 
        {
            //console.log("inside controller");
            const foodTrucks = await readCSVFile(path.join(__dirname, '..', 'data', fileName));
            res.json(foodTrucks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to read CSV file' });
        }
    },
};