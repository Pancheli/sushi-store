const request = require('supertest');
const server = require('../app');

describe("CRUD Operations on users", () => {
    it("GET /users - should return all the users", async () => {
        const {statusCode: status, body: users } = await request(server).get('/users').send();
        expect(status).toBe(200);
        expect(users).toBeInstanceOf(Array)
        });

    it("Getting a 404 status code by deleting a user with a non-existing id DELETE/users/:id", async () => {
        const userIdToDelete = 100;
        const res = await request(server)
            .delete(`/users/${userIdToDelete}`)
            .send();
        const status = res.statusCode;
        expect(status).toBe(404);
    })

})