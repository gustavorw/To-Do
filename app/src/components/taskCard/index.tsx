import { View, Text, TouchableOpacity } from "react-native"
import { Task } from "../../models/task.model"
import { styles } from "./styles"
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Colors } from "../../constants/colors";
import Checkbox from "expo-checkbox";

type Props = {
    task: Task,
    onCompleted: () => void,
    onDelete: () => void,
}

export function TaskCard({ task, onDelete, onCompleted }: Props) {

    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={task.isCompleted}
                onValueChange={() => onCompleted()}
                color={task.isCompleted ? '#4630EB' : undefined}
            />
            <Text style={task.isCompleted ? styles.descriptionDone : styles.description}>
                {task.description}
            </Text>
            <TouchableOpacity
                style={styles.delete}
                onPress={onDelete}
            >
                <EvilIcons name="trash" size={28} color={Colors.gray300} />
            </TouchableOpacity>
        </View>
    )
}