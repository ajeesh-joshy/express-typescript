import supertest from 'supertest';

import { createServer } from "./server";

const app = createServer();

test("GET /", async () => {
    await supertest(app)
        .get('/')
        .expect(200)
        .then((response) => {
            expect(response.text).toEqual("Hello World");
        })
})