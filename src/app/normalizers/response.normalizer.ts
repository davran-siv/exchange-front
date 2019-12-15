const getFirstError = (req) => {
  try {
    req.error[0].message
  } catch (e) {
    return null
  }
}

export {
  getFirstError
}
