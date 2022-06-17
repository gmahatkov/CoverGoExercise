class ValidityError extends Error {}
class InvalidAgeError extends ValidityError {}

export default {
  ValidityError,
  InvalidAgeError,
};
