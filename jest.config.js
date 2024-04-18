module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Add this line for Babel support
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@jest/globals|other-module)', // Add any other modules you want to transform
    ],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Add this line if you encounter CSS import issues
    },
    resolver: undefined,
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    globals: {
      'babel-jest': {
        // Add this block for Babel support
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  };