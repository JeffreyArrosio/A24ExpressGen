/**
 * @swagger
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       required:
 *         - id
 *         - color
 *         - modelo
 *         - ubicacion
 *       properties:
 *         id:
 *           type: integer
 *           description: id de la bici
 *         color:
 *           type: string
 *           description: Color de la bici
 *         modelo:
 *           type: string
 *           description: Modelo de la bici
 *         longitud:
 *           type: double
 *           description: longitud
 *         latitud:
 *           type: double
 *           description: latitud
 *       example:
 *         id: 1
 *         color: rojo
 *         modelo: Duccati
 *         longitud: 10.23213
 *         latitud: 12.3422
 */

/**
 * @swagger
 * tags:
 *   name: Bicicletas
 *   description: The Bici managing API
 * /api/bicicletas:
 *   get:
 *     summary: Lists all the Bicicletas
 *     tags: [Bicicleta]
 *     responses:
 *       200:
 *         description: The list of the Bicicletas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicicleta'
 * /api/bicicletas/create:
 *   post:
 *     summary: Create a new Bicicleta
 *     tags: [Bicicleta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: The created Bicicleta.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Some server error
 * /api/bicicletas/update/{id}:
 *   put:
 *    summary: Update the Bicicleta by the id
 *    tags: [Bicicleta]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The Bicicleta id
 *    requestBody:
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Bicicleta'
 *    responses:
 *      200:
 *        description: The Bicicleta was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Bicicleta'
 *      404:
 *        description: The Bicicleta was not found
 *      500:
 *        description: Some error happened
 * /api/bicicletas/delete:
 *   delete:
 *     summary: Remove the Bicicleta by id
 *     tags: [Bicicleta]
 *     requestBody:
 *       required: false
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: The Bicicleta was deleted
 *       404:
 *         description: The Bicicleta was not found
 */


let express = require('express')
let router = express.Router()
let BicicletaControllerAPI = require("../../controllers/api/BicicletaControllerAPI")

router.get("/", BicicletaControllerAPI.bicicleta_list)
router.post("/create", BicicletaControllerAPI.bicicleta_create)
router.delete("/delete", BicicletaControllerAPI.bicicleta_delete)
router.put("/update/:id", BicicletaControllerAPI.bicicleta_update)

module.exports = router;