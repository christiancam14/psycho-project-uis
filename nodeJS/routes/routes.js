import express from 'express'
import { getAllLocation, getLocation, createLocation, updateLocation, deleteLocation} from '../controllers/LocationController.js'
import { getAllAppointment, getAppointment, createAppointment, updateAppointment, deleteAppointment} from '../controllers/AppointmentController.js'
import { getAllConsultation, getConsultation, createConsultation, updateConsultation, deleteConsultation} from '../controllers/ConsultationController.js'
import { getAllLandingpage, getLandingpage, createLandingpage, updateLandingpage, deleteLandingpage} from '../controllers/LandingpageController.js'
import { getAllPeople, getPeople, createPeople, updatePeople, deletePeople} from '../controllers/PeopleController.js'
import { getAllPsychologist, getPsychologist, createPsychologist, updatePsychologist, deletePsychologist} from '../controllers/PsychologistController.js'
import { getAllStudent, getStudent, createStudent, updateStudent, deleteStudent} from '../controllers/StudentController.js'
import { getAllTest, getTest, createTest, updateTest, deleteTest} from '../controllers/TestController.js'
const router = express.Router()

//rutas de locacion
router.get('/location', getAllLocation)
router.get('/location/:id', getLocation)
router.post('/location', createLocation)
router.put('location/id', updateLocation)
router.delete('location/id', deleteLocation)

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

//rutas de Landingpage
router.get('/landingpage', getAllLandingpage)
router.get('/landingpage/:id', getLandingpage)
router.post('/landingpage', createLandingpage)
router.put('landingpage/id', updateLandingpage)
router.delete('landingpage/id', deleteLandingpage)

//rutas de People
router.get('/people', getAllPeople)
router.get('/people/:id', getPeople)
router.post('/people', createPeople)
router.put('people/id', updatePeople)
router.delete('people/id', deletePeople)

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

//rutas de Test
router.get('/test', getAllTest)
router.get('/test/:id', getTest)
router.post('test', createTest)
router.put('test/id', updateTest)
router.delete('test/id', deleteTest)

export default router