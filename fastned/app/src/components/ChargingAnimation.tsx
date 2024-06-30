import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BAR_BODY, BAR_SHINE, BAR_THUNDER, BAR_TOP, FULLY_CHARGED } from '@/assets';
import { normalize } from '@/utils';
import { colors, shadow, spacing } from '@/theme';
import LottieView from 'lottie-react-native';
import { CHARGING_KWH, CHARGING_PERCENTAGES, CHARGING_SPEED } from '@/constants';
import { strings } from '@/localization';

const styles = StyleSheet.create({
	container: {
		height: normalize(170),
		alignSelf: 'center',
		marginTop: spacing.m,
	},
	animationContainer: {
		position: 'absolute',
		zIndex: 1,
	},
	animation: {
		width: normalize(300),
		height: normalize(100),
		zIndex: 2,
	},
	shadow: {
		...shadow.primary,
		position: 'absolute',
		top: normalize(50),
		width: normalize(300),
		height: normalize(5),
	},
	detailsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: spacing.xs,
	},
	percentage: {
		fontSize: spacing.l,
		fontWeight: '500',
		color: colors.green,
	},
	title: {
		color: colors.gray600,
		fontWeight: 'bold',
	},
	text: {
		color: colors.gray600,
		fontWeight: '300',
	},
	alignRight: {
		textAlign: 'right',
	},
});

type ChargingAnimationProps = {
	animationSpeed: number;
	animationStart: boolean;
	onFullyCharged: () => void;
	fullyCharged: boolean;
	testID?: string;
};

export const ChargingAnimation: React.FC<ChargingAnimationProps> = ({
	animationSpeed,
	animationStart,
	onFullyCharged,
	fullyCharged,
	testID,
}) => {
	const [isLoopEnabled, setIsLoopEnabled] = useState<boolean>(true);
	const [index, setIndex] = useState<number>(0);
	const [kwh, setKwh] = useState<number>(CHARGING_KWH[0]);
	const [speed, setSpeed] = useState<number>(CHARGING_SPEED[0]);

	const onAnimationFinish = () => {
		setIsLoopEnabled(false);
		onFullyCharged();
	};

	useEffect(() => {
		if (index !== CHARGING_PERCENTAGES.length - 1 && animationStart) {
			setTimeout(function () {
				setIndex((currentIndex) => currentIndex + 1);
				setKwh(CHARGING_KWH[Math.floor(Math.random() * CHARGING_KWH.length)]);
				setSpeed(CHARGING_SPEED[Math.floor(Math.random() * CHARGING_SPEED.length)]);
			}, 1650);
		}
	}, [index, animationStart]);

	return (
		<View style={styles.container} testID={testID}>
			{fullyCharged ? (
				<LottieView
					source={FULLY_CHARGED}
					style={[styles.animation, { marginTop: spacing.xl }]}
					loop={false}
					autoPlay
					resizeMode="contain"
					testID="success-charging-animation"
				/>
			) : (
				<>
					<View style={styles.animationContainer}>
						<LottieView
							source={BAR_TOP}
							style={styles.animation}
							speed={animationSpeed}
							autoPlay={animationStart}
							loop={false}
							resizeMode="contain"
						/>
					</View>
					<View style={styles.animationContainer}>
						<LottieView
							testID="charging-animation"
							source={BAR_BODY}
							style={styles.animation}
							speed={animationSpeed}
							autoPlay={animationStart}
							loop={false}
							resizeMode="contain"
							onAnimationFinish={onAnimationFinish}
						/>
					</View>
					<View style={styles.animationContainer}>
						<LottieView
							source={BAR_SHINE}
							style={styles.animation}
							autoPlay={animationStart}
							loop={isLoopEnabled}
							resizeMode="contain"
						/>
					</View>
					<LottieView
						source={BAR_THUNDER}
						style={styles.animation}
						autoPlay={animationStart}
						loop={isLoopEnabled}
						resizeMode="contain"
					/>
					<View style={styles.shadow} />
				</>
			)}
			{!fullyCharged && animationStart && (
				<>
					<View style={styles.detailsContainer}>
						<View>
							<Text style={styles.title}>{strings.charging.animation.kwh}</Text>
							<Text style={styles.text}>{kwh}</Text>
						</View>
						<Text style={styles.percentage}>
							{CHARGING_PERCENTAGES[index]}
							{strings.charging.animation.percentage}
						</Text>
						<View>
							<Text style={[styles.title, styles.alignRight]}>
								{strings.charging.animation.speed}
							</Text>
							<Text style={[styles.text, styles.alignRight]}>
								{speed}
								{strings.charging.animation.kw}
							</Text>
						</View>
					</View>
				</>
			)}
		</View>
	);
};
