"use strict";

const Task = use("App/Models/Task");
const Project = use("App/Models/Project");
const AuthorizationServices = use("App/Services/AuthorizationServices");

class TaskController {
  async index({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AuthorizationServices.verifyPermission(project, user);
    return await project.tasks().fetch();
  }

  async create({ auth, request, params }) {
    const user = await auth.getUser();
    const { description } = request.all();
    const { id } = params;
    const project = await Project.find(id);
    AuthorizationServices.verifyPermission(project, user);
    const task = new Task();
    task.fill({
      description
    });
    await project.tasks().save(task);
    return task;
  }

  async destroy({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);
    const project = await task.project().fetch();
    AuthorizationServices.verifyPermission(project, user);
    await task.delete();
    return task;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const task = await Task.find(id);
    const project = await task.project().fetch();
    AuthorizationServices.verifyPermission(project, user);
    task.merge(request.only(["description", "completed"]));
    await task.save();
    return task;
  }
}

module.exports = TaskController;
