const InvalidAccessException = use("App/Exceptions/InvalidAccessException");

class AuthorizationServices {
  verifyPermission(resource, user) {
    if (resource.user_id !== user.id) {
      throw new InvalidAccessException(); //todo: invalidAccess exception;
    }
  }
}

module.exports = new AuthorizationServices();
