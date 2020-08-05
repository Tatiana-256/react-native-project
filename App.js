import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavBar} from "./components/Header";
import {AddToDo} from "./components/AddToDo";
import {Task} from "./components/Tasks";

export default function App() {
    const [toDo, setToDo] = useState([{id: '212', task: 'sd'}])

    const addTask = (task) => {
        const newTask = {
            id: Date.now().toString(),
            task
        }
        setToDo([...toDo, newTask])
    }

    return (
        <View style={styles.container}>
            <NavBar text={"First App!"}/>
            <AddToDo onSubmit={addTask}/>
            <Text
                style={styles.text}
            >
                Hello world!
            </Text>
            {toDo.map(
                task => <Task
                    key={task.id}
                    task={task.task}
                />
            )}
            <StatusBar style="auto"/>
        </View>
    );
}

// ____________ styles for App component_____________

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        color: "#069",
        fontSize: 20,
    }
});
