const alias = { '^@/(.+)': './src/\\1' }; // @/folder will be an alias to <root>/src/folder
const extensions = ['.android.ts', '.ios.ts', '.ts', '.json', '.native'];

module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [['module-resolver', { alias, extensions }]],
};
