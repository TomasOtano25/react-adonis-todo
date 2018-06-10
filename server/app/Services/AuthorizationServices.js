const InvalidAccessException = use("App/Exceptions/InvalidAccessException");
const ResourceNotExistException = use(
  "App/Exceptions/ResourceNotExistException"
);

class AuthorizationServices {
  verifyPermission(resource, user) {
    if (!resource) {
      throw new ResourceNotExistException();
    }
    if (resource.user_id !== user.id) {
      throw new InvalidAccessException(); //todo: invalidAccess exception;
    }
  }
}

module.exports = new AuthorizationServices();
