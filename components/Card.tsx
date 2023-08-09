import { useEffect } from "react";
import { Text, View } from "react-native";
import * as Speech from 'expo-speech';
import { ICard } from "../data/cards";

interface CardProps {
	card: ICard
	speak?: boolean
	index?: number
}

export function Card({ card, speak = false, index }: CardProps) {
	useEffect(() => {
		if (speak) Speech.speak(card.name, { rate: 1 })
	}, [card])


	return (
		<View>
			<Text>{index && `${index + 1}. `}{card.name}</Text>
		</View>
	)
}