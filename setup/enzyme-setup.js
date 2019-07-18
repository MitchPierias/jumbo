const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

/**
 * Configures the React16 adapter for Enzyme
 */
Enzyme.configure({ adapter: new Adapter() });