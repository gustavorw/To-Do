import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
    return (<View style={styles.container}>
        <View style={styles.line} ></View>
        <Image
            source={require('../../../assets/empty.png')}
            style={{ width: 56, height: 56, marginTop: 42 , marginBottom: 16}}
            resizeMode="contain"
        />
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>)
}