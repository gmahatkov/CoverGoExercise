class AppError extends Error {}
class ValidityError extends AppError {}
class InvalidAgeError extends ValidityError {
  constructor() {
    super();
    this.message = 'Your age is over our accepted limit.\nWe are sorry but we canot insure you now.';
  }
}

export default {
  AppError,
  ValidityError,
  InvalidAgeError,
};
