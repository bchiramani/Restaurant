//il faut importer l app pour qu il soit a l'ecoute des requests
const app = require('./backend/app');
app.listen(3000, () => {
    console.log("app is listening on PORT 3000");
});