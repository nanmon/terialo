import { useEffect } from "react";
import { Text, View } from "react-native";
import * as Speech from 'expo-speech';
import { ICard } from "../data/cards";

interface CardProps {
	card: ICard
	speak?: number
	index?: number
}

export function Card({ card, speak, index }: CardProps) {
	useEffect(() => {
		if (speak != null) {
			const rate = speak >= 1500 ? 1 : 1500/speak
			Speech.stop().then(() => Speech.speak(card.name, { rate }))
		}
	}, [card])


	return (
		<View>
			<Text>{index != null && `${index + 1}. `}{card.name}</Text>
		</View>
	)
}