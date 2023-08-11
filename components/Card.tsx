import { useEffect } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { Image } from 'expo-image'
import * as Speech from 'expo-speech';
import { ICard } from "../data/cards";
import { View } from "react-native";

interface CardProps {
	card: ICard
	speak?: number
	index?: number
}

const width = Dimensions.get('window').width - 64 // padding
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	image: {
		width,
		height: width * 1.5
	}
})

export function Card({ card, speak, index }: CardProps) {
	useEffect(() => {
		if (speak != null) {
			const rate = speak >= 1500 ? 1 : 1500 / speak
			Speech.stop().then(() => Speech.speak(card.name, { rate }))
		}
	}, [card])


	return (
		<View style={styles.container}>
			<Image style={styles.image} source={card.img} contentFit="contain" />
			{index != null && <Text>{index + 1}</Text>}
		</View>
	)
}