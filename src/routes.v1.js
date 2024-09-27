const contactRoutes = require('./modules/contact/contact.routes');

module.exports = (app,base) => {
    app.use(`${base}/contact`, contactRoutes);
}