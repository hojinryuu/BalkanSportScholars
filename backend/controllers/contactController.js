const Contact = require('../models/contactModel');
const mongoose = require('mongoose');
const sendEmail = require('../utils/sendEmail');

// get all contacts
const getContacts = async (req, res) => {
    const contacts = await Contact.find({}).sort({createdAt: -1})

    res.status(200).json(contacts)
}

// get a single contact
const getContact = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findById(id)

    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }

    res.status(200).json(contact)
}

// create new contact
const createContact = async (req, res) => {
    const {name, email, message} = req.body;

    let emptyFields = [];

    if(!name) {
        emptyFields.push('name')
    }
    if(!email) {
        emptyFields.push('email')
    }
    if(!message){
        emptyFields.push('message')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const contact = await Contact.create({ name, email, message })
        // send email notification
        await sendEmail(name, email, message)
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a contact
const deleteContact = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findOneAndDelete({_id: id})

    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }

    res.status(200).json(contact)
}

// update a contact
const updateContact = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }

    res.status(200).json(contact)
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact
}