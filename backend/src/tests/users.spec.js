const request = require('supertest');
const server = require('../app');

describe("CRUD Operations on users", () => {
    it("GET /users - should return all the users", async () => {
        const response = await request(server).get('/api/sushi-store/users');
        const { statusCode, body } = response;
        expect(statusCode).toBe(200);
        expect(body).toBeInstanceOf(Array)
        });

    it("Getting a 404 status code by deleting a user with a non-existing id DELETE/users/:id", async () => {
        const userIdToDelete = 100;
        const res = await request(server)
            .delete(`/api/sushi-store/users/${userIdToDelete}`)
            .send();
        const status = res.statusCode;
        expect(status).toBe(404);
    })

})