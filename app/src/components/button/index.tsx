import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    onPress: () => void,
}

export default function Button({ onPress }: Props) {

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.container}>
                <AntDesign name="pluscircleo" size={16} color="white" />
            </View>
        </TouchableOpacity>
    )
}