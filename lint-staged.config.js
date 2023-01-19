/* eslint-disable import/no-anonymous-default-export */
module.exports = {
	'**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'prettier -w -u'],
	'**/*.{css,scss}': ['stylelint --fix', 'prettier -w -u'],
	'**/*.{json,md}': ['prettier -w -u'],
	'**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit --incremental false',
};
