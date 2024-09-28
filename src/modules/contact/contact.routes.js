const express = require('express');
const { getContactList, addContact, updateContact, deleteContact } = require('./contact.controller');
const { validateContactList, validateContactCreate, validateContactUpdate, validateContactDeletion } = require('./contact.middlewares');

const router = express.Router();

router.get('', validateContactList, getContactList);
router.post('', validateContactCreate, addContact);
router.put('', validateContactUpdate, updateContact);
router.delete('', validateContactDeletion, deleteContact);

module.exports = router;