import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        height: 52,
        width: 52,
        backgroundColor: Colors.blueDark,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 54,
        borderRadius: 5,
        backgroundColor: Colors.gray600
    }
})