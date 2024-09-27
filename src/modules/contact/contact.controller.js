const { getContacts, addContact, updateContact, deleteContact } = require("./contact.service");

exports.getContactList = async (req, res) => {
    try {
        let { page, limit } = req.query;

        const contacts = await getContacts({ page, limit });
        res.status(200).json({
            message: 'Contacts list fetched successfully.',
            data: {
                contacts
            }
        })
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json({
            message: err.message
        })
    }
}

exports.addContact = async (req, res) => {
    try {
        const resp = await addContact(req.body);
        
        res.status(200).json({
            message: 'Contact added successfully',
            data: {
                resp
            }
        })
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json({
            message: err.message
        })
    }
}

exports.updateContact = async (req, res) => {
    try {
        const resp = await updateContact(req.body);

        res.status(200).json({
            message: 'Contact updated successfuly',
            data: {
                resp
            }
        })
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json({
            message: err.message
        })
    }
}

exports.deleteContact = async (req,res) =>{
    try {
        const {id: contactId} = req.query;

        await deleteContact(contactId);

        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json({
            message: err.message
        })
    }
}

