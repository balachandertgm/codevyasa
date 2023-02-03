let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index")

chai.should();

chai.use(chaiHttp);

describe('Test APIS', () => {
    /**
     * Test info API
     */
    describe("GET /info ", () => {
        it("It Should return the information details", (done) => {
            chai.request(server).get("/info").end((error, response) => {
                response.should.have.status(200);
                done()
            })
        })

        it("It Should return 404 error", (done) => {
            chai.request(server).get("/infos").end((error, response) => {
                response.should.have.status(404);
                done()
            })
        })
    })

    describe("GET Authors", () => {
        it("Should return 403 error with send token details", (done) => {
            chai.request(server).get("/author").end((error, response) => {
                response.should.have.status(403);
                done()
            })
        })
        it("Should return 200 status while send with token", (done) => {
            let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhleUBrbGFpbS5haSIsIm5hbWUiOiJBbGV4ZXkgS29ybmlsb3YiLCJpYXQiOjE2NzQ5MTYxNjV9.DKmveqUOdXdPdbNZKRZbES6kYQ3RJygD-EV3hMd6o9c";
            chai.request(server).get("/author?token=" + token).end((error, response) => {
                response.should.have.status(200);
                done()
            })
        })
    })

    describe("GET quote", () => {
        it("Should return 403 error with send token details", (done) => {
            chai.request(server).get("/quote").end((error, response) => {
                response.should.have.status(403);
                done()
            })
        })
        it("Should return 200 status while send with token", (done) => {
            let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhleUBrbGFpbS5haSIsIm5hbWUiOiJBbGV4ZXkgS29ybmlsb3YiLCJpYXQiOjE2NzQ5MTYxNjV9.DKmveqUOdXdPdbNZKRZbES6kYQ3RJygD-EV3hMd6o9c";
            chai.request(server).get("/quote?authorId=1&token=" + token).end((error, response) => {
                response.should.have.status(200);
                done()
            })
        })
    })

    describe("GET logout", () => {
        it("Should return 403 error with send token details", (done) => {
            chai.request(server).delete("/logout").end((error, response) => {
                response.should.have.status(403);
                done()
            })
        })
        it("Should return 200 status while send with token", (done) => {
            let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXhleUBrbGFpbS5haSIsIm5hbWUiOiJBbGV4ZXkgS29ybmlsb3YiLCJpYXQiOjE2NzQ5MTYxNjV9.DKmveqUOdXdPdbNZKRZbES6kYQ3RJygD-EV3hMd6o9c";
            chai.request(server).delete("/logout?token=" + token).end((error, response) => {
                response.should.have.status(200);
                done()
            })
        })
    })
})