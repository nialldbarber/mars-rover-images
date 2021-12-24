export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'test/(.*)': '<rootDir>/test/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
