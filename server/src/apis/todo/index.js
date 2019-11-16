import Router from 'koa-router';
import * as commonCtrl from 'apis/common.ctrl';
import * as todoCtrl from './todo.ctrl';

const todo = new Router();

/**
 * @swagger
 * definitions:
 *  todo:
 *      type: object
 *      required:
 *          - text
 *          - tags
 *      properties:
 *          text:
 *              type: string
 *          tags:
 *              type: array
 *              items:
 *                  type: string
 *          effStaDt:
 *              type: string
 *              format: date-time
 *          effEndDt:
 *              type: string
 *              format: date-time
 *          isDone:
 *              type: boolean
 */

/**
 * @swagger
 * /api/todos:
 *  get:
 *      tags:
 *          - Todos
 *      summary: 할 일 목록
 *      description: 할 일 목록
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Successful operation
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/todo'
 */
todo.get('/', todoCtrl.getTodos);

/**
 * @swagger
 * /api/todos/{id}:
 *  get:
 *      tags:
 *          - Todos
 *      summary: 할 일 조회
 *      description: 할 일 조회
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            description: todo id
 *            required: true
 *            type: string
 *            example: ''
 *      responses:
 *          200:
 *              description: Successful operation
 *              schema:
 *                  $ref: '#/definitions/todo'
 */
todo.get('/:id', commonCtrl.checkObjectId, todoCtrl.getTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *  post:
 *      tags:
 *          - Todos
 *      summary: 할 일 추가
 *      description: 할 일 추가
 *      consumes:
 *          - application/json
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            description: archive id
 *            required: true
 *            type: string
 *            example: ''
 *          - in: body
 *            name: body
 *            description: todo parameters
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  text:
 *                      type: string
 *                      example: 'Todo-list 앱 만들기'
 *                  tags:
 *                      type: array
 *                      example: ['Typpscript', '타입스크립트']
 *                      items:
 *                          type: string
 *      responses:
 *          200:
 *              description: Successful operation
 *              schema:
 *                  $ref: '#/definitions/todo'
 */
todo.post('/:id', commonCtrl.checkObjectId, todoCtrl.addTodo);

export default todo;
