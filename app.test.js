const request = require('supertest');
const app = require('./app');

describe('Node.js App Advanced Tests', () => {
    beforeAll(() => {
        process.env.APP_MESSAGE = "Testing Mode";
    });

    it('should use environment variables', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe("Testing Mode");
        expect(res.body).toHaveProperty('hostname');
    });

    it('health check should be OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
    });
});
