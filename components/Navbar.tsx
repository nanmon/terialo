import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NavbarProps {
    speed: number,
    onRestart: () => void
    onSpeed: () => void
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 24,
        height: 64,
    },
    buttonText: {
        fontSize: 24,
    },
})

export function Navbar({ speed, onRestart, onSpeed }: NavbarProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onRestart}>
                <Text style={styles.buttonText}>🔀</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSpeed}>
                <Text style={styles.buttonText}>{speed / 1000}s</Text>
            </TouchableOpacity>
            <View/>
        </View>
    )
}