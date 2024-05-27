const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_TOKEN = 'wsedrfbjgtriygnffiujhfhfjk'

const loginExistingUser = async (request,response)=>{
    const {email , password} = request.body
    try{
        const validUser = await userModel.findOne({email:email})
        if(!validUser){
            return response.status(401).json({message : "Invalid email."})
        }
        if(await bcrypt.compare(password,validUser.password))
        {
            const AUTH_TOKEN = jwt.sign({email : validUser.email}, JWT_TOKEN)
            return response.status(201).json({token : AUTH_TOKEN, firstName : validUser.firstName, lastName : validUser.lastName})
        }
        response.status(401).json({message : 'Invalid Password'})
    }catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {loginExistingUser}