// test("2 + 2 should equal to 4", () => {
//     expect(2+2).toBe(4);
// });

const request = require('supertest');
const app = require('./app'); // Import the app from app.js

describe("GET /api/quote", () => {

  test("should return status 200", async () => {

    const res = await request(app).get("/api/quote");

    expect(res.statusCode).toBe(200);

  });
    test("quotes array exists", () => {
    const quotes = require("./quotes");

    expect(quotes.length).toBeGreaterThan(0);
    });
});