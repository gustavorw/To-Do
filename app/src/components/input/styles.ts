import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 54,
        width: '100%',
        marginRight: 4,
    },
    input: {
        height: 54,
        width: '100%',
        borderRadius: 5,
        backgroundColor: Colors.gray500,
        marginRight: 4,
        padding: 16,
        fontSize: 16,
        borderWidth: 1,
        color: Colors.gray100
    },
    enable: {
        borderColor: Colors.purpleDark,
    },
    disable: {
        borderColor: Colors.gray700,
    }
})