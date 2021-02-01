const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.get('/', pageController.getOne('homepage'));
router.get('/galeria', pageController.getOne('gallery'));
router.get('/pravidla', pageController.getOne('pravidla'));
router.get('/clenstva', pageController.getOne('clenstva'));
router.get('/skupinove-cvicenia', pageController.getGroupExercises);
router.get('/skupinove-cvicenia/:slug', pageController.getExercise);
router.get('/relax', pageController.getOne('relax'));
router.get('/sportove-priestory', pageController.getOne('sportove-priestory'));
router.get('/treneri', pageController.getOne('treneri'));
router.get('/regiony', pageController.getOne('regiony'));
router.get('/regiony/:slug', pageController.getRegion);
router.get('/benefity', pageController.getOne('benefity'));
router.get('/kontakt', pageController.getOne('kontakt'));

module.exports = router;
