import express from 'express'
import { getAllAppointment, getAppointment, createAppointment, updateAppointment, deleteAppointment} from '../controllers/AppointmentController.js'
import { getAllConsultation, getConsultation, createConsultation, updateConsultation, deleteConsultation} from '../controllers/ConsultationController.js'
import { getAllPsychologist, getPsychologist, createPsychologist, updatePsychologist, deletePsychologist} from '../controllers/PsychologistController.js'
import { getAllStudent, getStudent, createStudent, updateStudent, deleteStudent} from '../controllers/StudentController.js'
//login and register
import {singUpStudent, singUpPsychologis} from '../controllers/AuthController.js'

const router = express.Router()



//rutas de Appointment
router.get('/appointment', getAllAppointment)
router.get('/appointment/:id', getAppointment)
router.post('/appointment', createAppointment)
router.put('appointment/id', updateAppointment)
router.delete('appointment/id', deleteAppointment)

//rutas de Consultation
router.get('/consultation', getAllConsultation)
router.get('/consultation/:id', getConsultation)
router.post('/consultation', createConsultation)
router.put('consultation/id', updateConsultation)
router.delete('consultation/id', deleteConsultation)

//rutas de Psychologist
router.get('/psychologist', getAllPsychologist)
router.get('/psychologist/:id', getPsychologist)
router.post('/psychologist', createPsychologist)
router.put('psychologist/id', updatePsychologist)
router.delete('psychologist/id', deletePsychologist)

//rutas de Student

router.get('/student', getAllStudent)
router.get('/student/:id', getStudent)
router.post('student', createStudent)
router.put('student/id', updateStudent)
router.delete('student/id', deleteStudent)

// rutas login y register student
router.post('/register/student', singUpStudent)

// rutas login y register psychologist
router.post('/register/psychologist', singUpPsychologis)


export default router