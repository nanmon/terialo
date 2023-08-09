import { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { cards } from "../data/cards";
import { Card } from "./Card";

export function Dealer() {
	const deck = useMemo(() => {
		return [...cards].sort(() => Math.random() - 0.5)
	}, [])

	const [currentIndex, setCurrentIndex] = useState(0)
	const currentCard = deck.at(currentIndex)

	const isFinished = currentIndex >= deck.length
	useEffect(() => {
		if (isFinished) return
		const intervalId = setInterval(() => {
			setCurrentIndex(index => index + 1)
		}, 2000)
		return () => clearInterval(intervalId)
	}, [isFinished])

	return (
		<View>
			{currentCard
				? <Card card={currentCard} speak />
				: deck.map((card, index) => (
					<Card key={card.name} card={card} index={index} />
				))
			}
		</View>
	)
}