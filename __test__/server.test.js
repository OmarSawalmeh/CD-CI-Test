'use strict';

const server = require('../src/server');

const supertest = require('supertest');
const request = supertest(server.app);


describe("API Server", ()=>{
    test("Getting data from home route /", async ()=>{
        const response = await request.get("/");
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("YNWA ");
    });

    test("Getting data from /data route", async ()=>{
        const response = await request.get("/data");
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual("object");
    });

    test("Handller not found page", async ()=>{
        const response = await request.get("/ynwa");
        expect(response.status).toEqual(404);
    });

    test("Handle server internal errors", async ()=>{
        const response = await request.get("/bad");
        expect(response.status).toEqual(500);
    })
})