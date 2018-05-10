import db from '../models/index';

const { Todo } = db;

/**
 * @class Todo
 */
export default class Todos {
    /**
     * @param {object} req express request object
     * @param {object} res express response object
     * @return {object} json
     */
    static findAll(req, res) {
        Todo.findAll().then(todos => {
            return res.status(200).json({
                todos
            })
        })
    }

    /**
     * @param {object} req express request object
     * @param {object} res express response object
     * @return {object} json
     */
    static findOne(req, res) {
        Todo.findOne({
            where: {
                id: req.params.todoId
            }
        })
        .then(todo => {
            return res.status(200).json({ todo });
        })
        .catch(err => res.send(err.message));
    }

    /**
     * @param {object} req express request object
     * @param {object} res express response object
     * @return {object} json
     */
    static create(req, res) {
        const todo = req.body;
        Todo.create(todo)
        .then(newTodo => {
            return res.status(201).json({ newTodo });
        })
        .catch(err => res.send(err.message));
    }

    /**
     * @param {object} req express request object
     * @param {object} res express response object
     * @return {object} json
     */
    static modify(req, res) {
        Todo.findOne({
            where:{
                id: req.params.todoId
            }
            })
        .then(todo => {
            const { items, completed } = req.body;
            return todo.update({ items, completed }).then((newTodo) => res.status(200).json({
                message: 'successfully updated',
                newTodo
            }))
        })
    }
    
    /**
     * @param {object} req express request object
     * @param {object} res express response object
     * @return {object} json
     */
    static destroy(req, res) {
        Todo.findOne({
            where: { id: req.params.todoId }
            })
        .then(todo => {
            return todo.destroy().then(() => res.status(200).send('todo deleted'))
        })
    }
}