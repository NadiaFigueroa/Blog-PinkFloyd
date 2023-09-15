

const { Router } = require('express');
const { 
    obtenerPublicaciones,
    crearPublicacion, 
    obtenerPublicacion, 
    actualizarPublicacion,
    eliminarPublicacion } = require('../controllers/blog.controllers');
const router = Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

router.get('/admin/:id', (req, res)=> {
    res.render('editar', { id: req.params.id })
})

router.get('/publicaciones', obtenerPublicaciones)

router.post('/publicacion', crearPublicacion)

router.get('/publicacion/:id', obtenerPublicacion)

router.put('/publicacion/:id', actualizarPublicacion)

router.delete('/publicacion/:id', eliminarPublicacion)


module.exports = router;