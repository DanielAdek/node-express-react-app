import express from 'express';
import todos from '../server/controllers/todoController';

const router = express.Router();

router.post('/api/v1/todo/create', todos.create);
router.get('/api/v1/todos', todos.findAll);
router.get('/api/v1/todo/:todoId', todos.findOne);
router.put('/api/v1/todo/:todoId', todos.modify);
router.delete('/api/v1/todo/:todoId', todos.destroy);

export default router;
