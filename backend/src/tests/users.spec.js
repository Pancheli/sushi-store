const request = require('supertest');
const server = require('../app');

describe("CRUD Operations on users", () => {
    it("GET /users - should return all the users", async () => {
        const {statusCode: status, body: users } = await request(server).get('/users').send();
        expect(status).toBe(200);
        expect(users).toBeInstanceOf(Array)
        });

})