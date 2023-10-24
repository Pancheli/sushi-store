const request = require('supertest');
const server = require('../app');

describe("CRUD Operations on products", () => {
    it("GET /products - should return all the products", async () => {
        let response = await request(server).get("/api/sushi-store/products").send();
        expect(response.statusCode).toBe(200);
    });

    it("Getting a 404 status code by deleting a product with a non-existin ID", async () => {
        const productIdToDelete = 100;
        const res = await request(server)
            .delete(`/api/sushi-store/products/${productIdToDelete}`)
            .send();
        const status = res.statusCode;
        expect(status).toBe(404);
    })
})