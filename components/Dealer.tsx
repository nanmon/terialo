import { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ICard, cards } from "../data/cards";
import { Card } from "./Card";

interface DealerProps {
	speed: number
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

interface CardListProps {
	cards: ICard[]
}
function CardList({ cards }: CardListProps) {
	return (
		<FlatList
			data={cards}
			horizontal
			contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
			renderItem={({ item, index }) => <Card card={item} index={index} />}
			keyExtractor={card => card.name}
		/>
	)
}

const useCurrentCard = (deck: ICard[], speed: number) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const isFinished = currentIndex >= deck.length
	useEffect(() => {
		if (isFinished) return
		const intervalId = setInterval(() => {
			setCurrentIndex(index => index + 1)
		}, speed)
		return () => clearInterval(intervalId)
	}, [isFinished, speed])

	return deck.at(currentIndex)
}

export function Dealer({ speed }: DealerProps) {
	const deck = useMemo(() => {
		return [...cards].sort(() => Math.random() - 0.5)
	}, [])
	const currentCard = useCurrentCard(deck, speed)

	return (
		<View style={styles.container}>
			{currentCard
				? <Card card={currentCard} speak={speed} />
				: <CardList cards={deck} />
			}
		</View>
	)
}