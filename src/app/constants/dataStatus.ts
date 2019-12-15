const DATA_STATUS = {
  NOT_TOUCHED: 'NOT_TOUCHED',
  REQUESTED: 'REQUESTED',
  SUCCEEDED: 'SUCCEEDED',
  ERROR: 'ERROR'
}

enum DataStatusType {
  NOT_TOUCHED = 'NOT_TOUCHED',
  REQUESTED = 'REQUESTED',
  SUCCEEDED = 'SUCCEEDED',
  ERROR = 'ERROR'
}

const isNotTouchedStatus = (status) => status === DATA_STATUS.NOT_TOUCHED
const isRequestedStatus = (status) => status === DATA_STATUS.REQUESTED
const isSucceededStatus = (status) => status === DATA_STATUS.SUCCEEDED
const isErrorStatus = (status) => status === DATA_STATUS.ERROR

export {
  DataStatusType,
  DATA_STATUS,
  isNotTouchedStatus,
  isRequestedStatus,
  isSucceededStatus,
  isErrorStatus
}
