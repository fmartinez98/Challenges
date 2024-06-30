import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { strings } from '@/localization';
import { colors, spacing } from '@/theme';

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: spacing.m,
	},
	title: {
		fontSize: spacing.m,
		fontWeight: '800',
		marginVertical: spacing.s,
	},
	input: {
		marginTop: spacing.xs,
		marginBottom: spacing.m,
		height: spacing.xl,
		borderWidth: 0.2,
		borderRadius: 10,
		padding: spacing.s,
		color: colors.gray700,
	},
});

type FilterHeaderProps = {
	model: string;
	setModel: Dispatch<SetStateAction<string>>;
	testID?: string;
};

export const FilterHeader: React.FC<FilterHeaderProps> = ({ model, setModel, testID }) => {
	return (
		<View style={styles.container} testID={testID}>
			<Text style={styles.title}>{strings.filter.title}</Text>
			<TextInput
				testID={`${testID}-input`}
				style={styles.input}
				onChangeText={setModel}
				value={model}
				placeholder={strings.filter.placeholder}
			/>
		</View>
	);
};
