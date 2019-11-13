import Router from 'koa-router';
import * as commonCtrl from 'apis/common.ctrl';
import * as archiveCtrl from './archive.ctrl';

const archive = new Router();

/**
 * @swagger
 * definitions:
 *  archive:
 *      type: object
 *      required:
 *          - title
 *      properties:
 *          title:
 *              type: string
 */

/**
 * @swagger
 * /api/archives:
 *  get:
 *      tags:
 *          - Archives
 *      summary: Archive 목록 조회
 *      description: Archive 목록 조회
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: query
 *            name: page
 *            description: page number
 *            type: string
 *            example: 1
 *      responses:
 *          200:
 *              description: Successful operation
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/archive'
 */
archive.get('/', archiveCtrl.getArchives);

/**
 * @swagger
 * /api/archives/{id}:
 *  get:
 *      tags:
 *          - Archives
 *      summary: Archive 조회
 *      description: Archive 조회
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            description: archive id
 *            required: true
 *            type: string
 *            example: ''
 *      responses:
 *          200:
 *              description: Successful operation
 *              schema:
 *                  $ref: '#/definitions/archive'
 */
archive.get('/:id', commonCtrl.checkObjectId, archiveCtrl.getArchive);

/**
 * @swagger
 * /api/archives:
 *  post:
 *      tags:
 *          - Archives
 *      summary: Archive 추가
 *      description: Archive 추가
 *      consumes:
 *          - application/json
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: body
 *            description: archive parameters
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *      responses:
 *          200:
 *              description: Successful operation
 *              schema:
 *                  $ref: '#/definitions/archive'
 */
archive.post('/', archiveCtrl.createArchive);

/**
 * @swagger
 * /api/archives/{id}:
 *  delete:
 *      tags:
 *          - Archives
 *      summary: Archive 삭제
 *      description: Archive 삭제
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            description: archive id
 *            required: true
 *            type: string
 *            example: ''
 *      responses:
 *          200:
 *              description: Successful operation
 */
archive.delete('/:id', commonCtrl.checkObjectId, archiveCtrl.deleteArchive);

export default archive;
