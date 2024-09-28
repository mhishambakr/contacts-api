
const Contact = require('./contact.schema');

exports.getContacts = async ({ page, limit }) => {
    try {
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 5;
        const skip = (page - 1) * limit;

        const contacts = await Contact.find().skip(skip).limit(limit);
        const total = await Contact.countDocuments();

        return { contacts, total };
    } catch (err) {
        throw err;
    }
}

exports.addContact = async (contact) => {
    try {
        const newContact = new Contact(contact);
        await newContact.save();

        return newContact;
    } catch (err) {
        throw err;
    }
}

exports.updateContact = async (contact) => {
    try {
        const existingContact = await Contact.findById(contact._id);

        if (!existingContact) {
            throw {
                status: 404,
                message: 'Contact not found'
            }
        }

        return await Contact.findByIdAndUpdate(contact._id, contact, { new: true });
    } catch (err) {
        throw err;
    }
}

exports.deleteContact = async (contactId) => {
    try {
        console.log(contactId)
        const existingContact = await Contact.findById(contactId);

        if (!existingContact) {
            throw {
                status: 404,
                message: 'Contact not found'
            }
        }

        return await Contact.findByIdAndDelete(contactId);
    } catch (err) {
        throw err;
    }
}