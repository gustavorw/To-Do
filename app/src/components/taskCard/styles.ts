import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.gray500,
        flex: 1,
        height: 64,
        flexDirection: 'row',
        marginHorizontal: 24,
        borderRadius: 8,
        marginVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
    },

    description: {
        color: Colors.gray100,
        fontSize: 14,
        flex: 1,
        marginRight: 8,
    },
    descriptionDone: {
        color: Colors.gray300,
        fontSize: 14,
        flex: 1,
        marginRight: 8,
        textDecorationLine: 'line-through',
        
    },
    delete: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 12,
        borderColor: Colors.blue,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    }

})