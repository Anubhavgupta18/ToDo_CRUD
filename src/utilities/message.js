const HttpStatus = require('http-status-codes');

module.exports = {
	dataFound: {
		name: 'Data found',
		message: 'Data fetched',
		code: HttpStatus.StatusCodes.OK
	},
	badRequest: {
		name: 'Bad Request',
		message: 'Some Error Occurred!',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	dataCreated:{
		message: 'Data created successfully',
		code: HttpStatus.StatusCodes.OK
	},
	dataSaved: {
		message: 'Data saved successfully',
		code: HttpStatus.StatusCodes.OK
	},
	dataDeleted: {
		message: 'Data deleted successfully',
		code: HttpStatus.StatusCodes.OK
	},
	dataFetchingError: {
		name: 'Error while data fetching',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	},
	dataSavingError: {
		name: 'Error while saving data',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	},
	dataDeletionError: {
		name: 'Error while deleting data',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	},
	internalServerError: {
		name: 'Internal server error',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	}
}