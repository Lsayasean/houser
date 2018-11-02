module.exports ={
    getAll: (req,res) => {
        const db = req.app.get('db');
        db.getAll().then(results => {
            res.status(200).send(results)
        }) 
    },
    create: (req,res,next) => {
        const db = req.app.get('db')
        let {name, address, city, state, zipCode, image, monthly, rent} = req.body
        db.create({name: name, address: address, city: city, state: state, zipcode: zipCode, image: image, monthly: monthly, rent: rent}).then(results => {
            res.sendStatus(200)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        let id = req.params.id
        db.delete({id: id}).then(results => {
            res.sendStatus(200)
        })
    }
}