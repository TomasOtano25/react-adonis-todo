"use strict";

const Project = use("App/Models/Project");

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();
    //console.log(user.username);
    //return user;
    return user.projects().fetch();
  }
}

module.exports = ProjectController;
