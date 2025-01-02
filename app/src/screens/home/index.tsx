import { Alert, FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/button";
import { useState } from "react";
import Input from "../../components/input";
import { Task } from "../../models/task.model";
import { TaskCard } from "../../components/taskCard";
import { Info } from "../../components/info";
import { EmptyList } from "../../components/emptyList";

export default function Home() {

    const [listOfTasks, setListOfTasks] = useState<Task[]>([])

    const [taskDescription, setTaskDescription] = useState<string>('')

    function handleTaskAdd() {
        const newTask: Task = { isCompleted: false, description: taskDescription }
        setListOfTasks(previousState => [...previousState, newTask])
        setTaskDescription('')
    }

    function handleTaskToggle(index: number) {
        let task = listOfTasks.at(index)
        if (task === null) {
            return
        }
        task = { description: task?.description ?? '', isCompleted: !task?.isCompleted }
        listOfTasks[index] = task

        setListOfTasks(previousState => [...previousState])

    }

    function handleDeleteTask(index: number, name: string) {
        Alert.alert(
            'Apagar Tarefa',
            `Apagar tarefa ${name}`,
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        setListOfTasks(listOfTasks.filter((_, i) => i !== index))
                    }

                },
                {
                    text: 'Não',
                    style: 'cancel'

                },

            ],
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/Logo.png')}
                    style={{ width: 110, height: 32 }}
                    resizeMode="contain"
                />
            </View>
            
            <View style={styles.form}>
                <Input
                    value={taskDescription}
                    onChangeText={(text) => setTaskDescription(text)}
                />
                <Button
                    onPress={handleTaskAdd}
                />

            </View>
            <Info
                done={listOfTasks.filter(task => task.isCompleted).length}
                create={listOfTasks.length}
            />
            <FlatList
                data={listOfTasks}
                renderItem={({ item, index }) => (
                    <TaskCard
                        task={item}
                        onCompleted={() => handleTaskToggle(index)}
                        onDelete={() => handleDeleteTask(index, item.description)}
                    />)}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={<EmptyList />}
            />
        </View>
    )
}