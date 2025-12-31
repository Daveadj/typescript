//tuples -> fixed length and fixed types

const userEntry : [string, number]= ['dave', 2];

type ResponseRow = [status: number, message?: string]

const response: ResponseRow = [200, 'OK']

const corners: readonly [number, number] = [10,20];