const { request, response } = require('express');
const houseDetailsModel = require('../models/houseDetailsModel');


const viewAllProperties = async (request, response) => {
    const { place } = request.body;
  
    try {
      let filter = {};
  
      if (place) {
        filter.place = place;
      }
      const propertyData = await houseDetailsModel.find(filter);
      response.status(200).send(propertyData);
    } catch (error) {
      response.status(500).json({ ErrorMessage: error.message });
    }
  };

  const buyerInterested = async (request, response) => {
    const { _id } = request.body;
  
    try {
      if (_id) {
        const houseDetails = await houseDetailsModel.findById(_id);
        if (houseDetails) {
          response.status(201).send({ mobile: houseDetails.mobile });
        } else {
          response.status(404).send({ ErrorMessage: 'House details not found' });
        }
      } else {
        response.status(400).send({ ErrorMessage: 'ID is required' });
      }
    } catch (error) {
      response.status(500).json({ ErrorMessage: error.message });
    }
  };

  const filter = async(request,response) => {
    try {
        const { place, bhk, area } = request.query;
        const filter = {};
    
        if (place) filter.place = new RegExp(place, 'i'); // Case-insensitive regex search
        if (bhk) filter.bhk = bhk;
        if (area) filter.area = area;
    
        const properties = await houseDetailsModel.find(filter);
        response.status(200).json(properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
        response.status(500).json({ message: 'Server error' });
      }
  }
  

module.exports = {
    viewAllProperties,
    buyerInterested,
    filter
};