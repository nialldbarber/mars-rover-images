export const numberTuple = <T extends number[]>(...args: T) => args
export const HEADER_LIST = numberTuple(1, 2, 3, 4, 5)
