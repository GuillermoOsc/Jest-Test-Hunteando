import app from '../src/app'
import request from 'supertest'

describe('comprobar si existe ruta GET /tasks', () =>{

    test('Debe responder con un código de estado 200', async ()=> {
      const response = await request(app).get('/tasks').send();
      expect(response.statusCode).toBe(200); 
    }); 

    test('Debe responder cun arreglo', async ()=> {
      const response = await request(app).get('/tasks').send()
      expect(response.body).toBeInstanceOf(Array)
   })
});