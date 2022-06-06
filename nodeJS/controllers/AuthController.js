import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import StudentModel from "../models/StudentModel.js"
import PsychologistModel from '../models/PsychologistModel.js'

// inicio secion y registrarse de student
export const singUpStudent = (req,res) =>{
    /* let password = bcrypt.hashSync(req.body.password,8) */
    //crear un estudiante
    StudentModel.create({
        user_student: req.body.user_student,
        name_student: req.body.name_student, 
        password_student: req.body.password_student,
        code_student: req.body.code_student,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email      
    }).then(StudentModel =>{
        let token =jwt.sign({StudentModel:StudentModel}, 'secret', {
            expiresIn: '7d',
            rounds: 10
        })

        res.json({
            StudentModel:StudentModel,
            token:token
        })
    }).catch(error =>{
        res.status(500).json(error)
    })
}

export const singInStudent = (req,res) =>{
    let {user_student, password_student} = req.body
    //buscar estudiante
    StudentModel.findAll({
        where:{
            user_student:user_student
        }.then(StudentModel =>{
            if(!user){
                res.status(404).json({msg: 'usuario no encontrado'})
            }else{
                //voy aqui
            }
        }).catch(error =>{
            res.status(500).json(error)
        })
    })
}

// inicio secion y registrarse de student
export const singUpPsychologis = (req,res) =>{
    /* let password = bcrypt.hashSync(req.body.password,8) */
    //crear un estudiante
    PsychologistModel.create({
        name_psychologist: req.body.name_psychologist,
        document : req.body.document, 
        email: req.body.email, 
        password_psychologist: req.body.password_psychologist,
        phone: req.body.phone     
    }).then(PsychologisModel =>{
        let token =jwt.sign({PsychologisModel:PsychologisModel}, 'secret', {
            expiresIn: '7d',
            rounds: 10
        })

        res.json({
            PsychologisModel:PsychologistModel,
            token:token,
            "message":"psicologo creado correctamente"
        })
    }).catch(error =>{
        res.status(500).json(error)
    })
}