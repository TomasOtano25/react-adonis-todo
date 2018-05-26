"use strict";

const Route = use("Route");

/* Route.get("/", ({ request }) => {
  return { greeting: "Hello world in JSON" };
}); */

/* Route.post("auth/register", ({ request }) => {
  return { message: "Hello World" };
}); */

// Route.post("api/auth/register", "UserController.register");

Route.group(() => {
  Route.post("auth/register", "UserController.register");
  Route.post("auth/login", "UserController.login");

  Route.get("projects", "ProjectController.index").middleware("auth");
}).prefix("api");
