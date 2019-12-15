const unauthorizedCode = 401

const isUnauthorized = (statusCode) => statusCode === unauthorizedCode

export {
  unauthorizedCode,
  isUnauthorized
}
