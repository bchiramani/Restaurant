    // c comme si on a importé le module express , on creer une  instance de expression
    const express = require('express');
    //import pour pouvoir utiliser re.body 
    const bodyParser = require('body-parser');
    //import mangoose model
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt');
    //creation d'une app express qui s sappelle app
    const app = express();
    // connect app to dataBase
    mongoose.connect('mongodb://localhost:27017/firstProjectAngularDB');
    //import de Plat.js
    const Plat = require('./models/plat')
    const Chef = require('./models/chef')
    const User = require('./models/plat')
    User.plugin(uniqueValidator);
    var uniqueValidator = require('mongoose-unique-validator');
    //app.use bech najm nekhou el req.body 
    app.use(bodyParser.urlencoded({ extended: true }));
    //bech nestaeml el format json
    app.use(bodyParser.json());

    //tableau bech nestaemlouh zama zama base de données
    // let plats = [
    //     { id: 1, name: "couscous", price: "20", description: "dfghjk" },
    //     { id: 2, name: "makrouna", price: "30", description: "dfghjk" },
    //     { id: 3, name: "ojja", price: "15", description: "cvbn," }
    // ];
    // Security configuration
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, Accept, Content-Type, X-Requested-with"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, DELETE, OPTIONS, PATCH, PUT"
        );
        next();
    });

    /******************************************************************************************** */
    //business logic to get all plats
    app.get("/api/plats", (req, res) => {
        console.log("here into to get all plats ")
        Plat.find().then(
            (result) => {
                console.log("here after find plats", result);
                res.status(200).json({
                    plats: result,
                    message: "here all plats"
                })
            }

        );
        // res.status(200).json({
        //     plats: plats,
        //     message: "here all plats"
        // })
    });


    // busniss logic to delete plat  by id
    app.delete("/api/plats/:id", (req, res) => {
        console.log("Here into delete plat by ID", req.params.id);
        // for (let i = 0; i < plats.length; i++) {
        //     if (plats[i].id == req.params.id) {
        //         console.log(plats[i]);
        //         plats.splice(i, 1);
        //         break;
        //     }
        // }
        Plat.deleteOne({ _id: req.params.id }).then(
            (result) => {
                console.log("result after delete ", result);
                res.status(200).json({
                    message: "Object is deleted with success"
                })
            }
        );
        // res.status(200).json({
        //     plats: Plat,
        //     message: "Object is deleted with success"
        // })
    });

    // // busniss logic to add plat  by id
    app.post("/api/plats", (req, res) => {
        console.log("here to add plat", req.body);
        const platObj = new Plat({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            note: req.body.note
        });
        //hathom kenou ki ken andena l variable plats feha l'ensemble des plats
        // plats.push(req.body);
        // plats[plats.length - 1].id = plats.length;
        platObj.save((err, result) => {
            if (err) {
                console.log('Here error with database', err)
            } else {
                res.status(200).json({
                    message: "added with succes"
                });
            }
        });
        // res.status(200).json({
        //     plats: plats,
        //     message: "here all objects"
        // });

    });


    // busniss logic to get plat  by id
    app.get("/api/plats/:id", (req, res) => {
        console.log("here into get  a plat of APP", req.params.id);
        // for (let i = 0; i < plats.length; i++) {
        //     if (plats[i].id == req.params.id) {
        //         res.status(200).json({
        //             plat: plats[i],
        //             message: "here s the object"
        //         });
        //         break;
        //     }

        // }
        Plat.findOne({ _id: req.params.id }).then(
            (result) => {
                console.log("here the result fot the element ", result);
                res.status(200).json({
                    message: " here the plat",
                    plat: result
                })
            }
        )

    });
    app.get("api/plats/:name/:price", (req, res) => {
        let myPlats = [];
        console.log("here into get plat of APP", req.params.name, req.params.price);
        for (let i = 0; i < plats.length; i++) {
            if ((plats[i].name == req.params.name) && (plats[i].price = req.params.price)) {
                console.log('hellooooooo');
                myPlats.push(plats[i]);
                break;
            }

        }
        res.status(200).json({
            plats: myPlats,
            message: "here s the object"
        });

    });

    app.put("/api/plats/:id", (req, res) => {
        console.log("here plat into app", req.body);
        // for (let i = 0; i < plats.length; i++) {
        //     if (plats[i].id == req.params.id) {
        //         plats[i] = req.body;

        //         break;
        //     }

        // }
        // res.status(200).json({
        //     message: "here s the object"
        // });
        Plat.updateOne({ _id: req.params.id }, req.body).then(
            //updateOne(criete de recherche, objet)
            (result) => {
                console.log("Result after modif", result);
            }
        )
    })

    // busniss logic to find plat by name and price
    app.post("/api/plats/search", (req, res) => {
        console.log("here to find plats by name and price", req.body);
        // let findedPlats = [];
        // for (let i = 0; i < plats.length; i++) {
        //     if (plats[i].name == req.body.name && plats[i].price == req.body.price) {
        //         findedPlats.push(plats[i]);

        //     }

        // }
        // res.status(200).json({
        //     allPlats: findedPlats
        // })
        Plat.find({ name: req.body.name, price: req.body.price }).then(
            (result) => {
                console.log("here is the search of the search ", result);
            }
        );
        res.status(200).json({
            allPlats: result
        })

    });

    // busniss logic to find plat where price is bigger than
    app.post("/api/plats/search/price", (req, res) => {
        console.log("here to find plats where price is bigger than", req.body);
        Plat.find({ name: req.body.name, price: req.body.price }).then(
            (result) => {
                console.log("here is the search of the search ", result);
                res.status(200).json({
                    allPlats: result
                })
            }
        );


    });
    /*********************************************************************************** */



    //business logic to get all chefs
    app.get("/api/chefs", (req, res) => {
        console.log("here app: get all chefs ");
        Chef.find().then(
            (result) => {
                console.log("here after find chefs", result);
                res.status(200).json({
                    chefs: result,
                    message: "here all chefs"
                })
            }

        );
    });
    // busniss logic to delete a cgef  by id
    app.delete("/api/chefs/:id", (req, res) => {
        console.log("here chefApp: delete chef", req.params.id);
        Chef.deleteOne({ _id: req.params.id }).then(
            (result) => {
                console.log("result after delete ", result);
                res.status(200).json({
                    message: "Object is deleted with success"
                })
            }
        );
    });

    // // busniss logic to add chef  by id
    app.post("/api/chefs", (req, res) => {
        console.log("here chefApp:add chef ", req.body);
        const chefObj = new Chef({
            name: req.body.name,
            speciality: req.body.speciality,
            experience: req.body.experience
        });
        chefObj.save((err, result) => {
            if (err) {
                console.log('Here error with database', err)
            } else {
                res.status(200).json({
                    message: `added with succes",${req.body.experience}`
                });
            }
        });

    });


    // busniss logic to get chef  by id
    app.get("/api/chefs/:id", (req, res) => {
        console.log("here chefApp:get chef by id ", req.params.id);
        Chef.findOne({ _id: req.params.id }).then(
            (result) => {
                console.log("here the result fot the element ", result);
                res.status(200).json({
                    message: " here the chef",
                    chef: result
                })
            }
        )

    });

    //busniss logic to update
    app.put("/api/chefs/:id", (req, res) => {
        console.log("here chefApp:update chef ", req.body);
        Chef.updateOne({ _id: req.params.id }, req.body).then(
            //updateOne(criete de recherche, objet)
            (result) => {
                console.log("Result after modif", result);
            }
        )
    })

    // busniss logic to find chef by speciality
    app.post("/api/chefs/search", (req, res) => {
        console.log("here chefApp:find by speciality ", req.body);
        Chef.find({ speciality: req.body.speciality }).then(
            (result) => {
                console.log("here is the search of the search ", result);
                res.status(200).json({
                    allChefs: result
                })
            }
        );


    });
    /**************************************************************************** */
    //signup
    app.post("/api/users/signup", (req, res) => {
        console.log("here userApp:add user ", req.body)
            // cryptage du mdp , 10 c est le degres du cryptage
        bcrypt.hash(req.body.password, 10).then(
            (cryptPwd) => {
                console.log(cryptPwd);
                const userObj = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: cryptPwd,
                    tel: req.body.tel,
                    role: req.body.role
                });
                userObj.save((err, result) => {
                    if (err) {
                        console.log('Here error with database', err.errors.email)
                        if (err.errors.email) {
                            res.status().json({
                                code: '0'
                            })
                        }
                    } else {
                        res.status(200).json({
                            code: '1'
                        });
                    }
                });
            }
        );

    });
    // login
    app.get("/api/users/login", (req, res) => {
        console.log("here user to login ", req.body);
        User.findOne({ email: req.body.email }).then(
            (result) => {
                console.log("here find user by email result ", result)
                if (!result) {
                    res.status(200).json({
                        message: 'O'
                    })
                }
                // compare the passwords
                return bcrypt.compare(req.body.password, result.password)

            }).then(
            // pwdResult =bcrypt.compare(req.body.password,result.password) 
            (pwdResult) => {

                res.status(200).json({
                    message: '1'
                });


                User.findOne({ email: req.body.email }).then(
                    (finalResult) => {

                    }
                )


            });
    });

    module.exports = app;
    //on a permis a cette app d'etre exportable
    //lezm tkoun ekher ligne LEZEM