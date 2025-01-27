const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection('contacts').find()
  const users = await result.toArray()

  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(users)
}

const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id)
  const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: contactId })

  const contacts = await result.toArray()

  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(contacts[0])
}

const createContact = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday } = req.body

  const contact = {
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday
  }

  const response = await mongodb.getDatabase().db().collection('contacts').insertOne(contact)

  res.setHeader('Content-Type', 'application/json')

  if (response.acknowledged) {
    return res.status(204).json({ message: 'User created' })
  }

  return res.status(500).json(response.error || 'Some error occourred while create the contant.')
}

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id)

  const {
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday } = req.body

  const contact = {
    firstName,
    lastName,
    email,
    favoriteColor,
    birthday
  }

  const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({ _id: contactId }, contact)

  res.setHeader('Content-Type', 'application/json')

  if (response.modifiedCount > 0) {
    res.status(204).json({ "message": 'User modified sucessefuly' })
    return
  }

  res.status(500).json(response.error || 'Some error occourred while update the contant.')
}


const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id)

  const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({ _id: contactId })

  res.setHeader('Content-Type', 'application/json')

  if (response.deleteCount > 0) {
    res.status(204).json({ message: 'User deleted successefuly.' })
    return
  }

  res.status(500).json(response.error || 'Some error occourred while update the contant.')
}


module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
}