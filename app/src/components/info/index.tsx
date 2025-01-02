import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    done: number,
    create: number,
}

export function Info({done = 0, create = 0}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.count}>
                <Text style={styles.create}>Criadas</Text>
                <View style={styles.circle}>
                    <Text style={styles.countText}>{create}</Text>
                </View>
            </View>
            <View style={styles.count}>
                <Text style={styles.done} >Concluídas</Text>
                <View style={styles.circle}>
                    <Text style={styles.countText}>{done}</Text>
                </View>
            </View>
        </View>
    )
}