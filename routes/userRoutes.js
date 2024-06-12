const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const {default:mongoose} = require('mongoose');

const createUser = async(req,res)=>{

    let bodyRequest = req.body;
    User.exists({username:bodyRequest.username},(err,doc)=>{

            if(err){
                console.log(err);
            }else{
                console.log(doc);
                if(doc===null){
                    bcrypt.hash(bodyRequest.password,10, async(err,hash)=>{
                        const newUser = new User({
                            username:bodyRequest.username,
                            password:hash,
                            role:bodyRequest.role
                        });
                    })
                }
            }

        }

    )

};