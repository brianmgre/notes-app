const request = require("supertest");
const server = require("../../api/server");

describe("router.js", () => {
  describe("get / route", () => {
    it("returns status code 201", async () => {
      let response = await request(server).get("/api/");
      expect(response.status).toBe(201);
    });

    it("returns up", async () => {
      let response = await request(server).get("/api/");
      expect(response.body).toBe("up");
    });
  });

  describe("get /notes route", () => {
    it("Get all notes- status code 201", async () => {
      let response = await request(server).get("/api/notes");
      expect(response.status).toBe(201);
    }, 30000);
  });

  describe("get /notes/add route", () => {
    it("returns status code 501", async () => {
      const newNote = { title: "test" };
      let response = await request(server).post("/api/notes/add", newNote);
      expect(response.status).toBe(501);
    });

    it("Post: empty string should return status code 501", async () => {
      const newNote = { title: "", body: "" };
      let response = await request(server).post("/api/notes/add", newNote);
      expect(response.status).toBe(501);
    });
  });

  describe("Edit note (Put) /notes/:id route", () => {
    it("returns status code 500", async () => {
      const newNote = { title: "test" };
      let response = await request(server).put("/api/notes/1", newNote);
      expect(response.status).toBe(500);
    });

    it("Put: empty string should return status code 500", async () => {
      const newNote = { title: "", body: "" };
      let response = await request(server).put("/api/notes/1", newNote);
      expect(response.status).toBe(500);
    });
  });

  describe("Delete note /notes/:id route", () => {
    it("returns status code 501", async () => {
      let response = await request(server).delete("/api/notes/:id");
      expect(response.status).toBe(501);
    });
  });
});
