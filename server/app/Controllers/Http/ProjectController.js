"use strict";

const Project = use("App/Models/Project");

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
    return user;
  }
}

module.exports = ProjectController;
