class DatabaseError extends Error {
  constructor(message = "Database error", errors = [], stack = "") {
    super(message);
    this.data = null;
    this.errors = errors;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { DatabaseError };
