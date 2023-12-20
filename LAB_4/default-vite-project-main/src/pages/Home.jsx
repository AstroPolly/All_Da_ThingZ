import React, { useState } from 'react'
import {
    chakra, Button, List, ListItem, Heading, Flex, Text,
} from '@chakra-ui/react'

export const Home = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const [file, setFile] = useState();

    const createTodoHandler = (text) => {
        setTodos((prevState) => [...prevState, { id: Date.now(), text }])
        setText('')
    }

    const removeTodoHandler = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }

    return (
        <Flex
            flexDirection="column"
            h="100vh"
            w="100vw"
            m="1rem"
            gap="1rem"
            alignItems="center"
        >
            <Heading 
            textTransform="uppercase"
            fontFamily="sword"
            fontsize= "34pt">Todo List</Heading>
            <List
                h="60vh"
                w="70vw"
                display="flex"
                flexDirection="column"
                overflowY="scroll"
                border="2px solid black"
                borderRadius="md"
                p="10px"
            >
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom="1px solid gray"
                        py="8px"
                    >
                        <Text>{todo.text}</Text>
                        <Button
                            onClick={() => removeTodoHandler(todo.id)}
                            background="pink.500"
                            color="white"
                            _hover={{
                                background: 'pink.600',
                            }}
                        >
                            Удалить
                        </Button>
                    </ListItem>
                ))}
            </List>
            <chakra.form
                onSubmit={(e) => {
                    e.preventDefault()
                    createTodoHandler(text)
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="20px"
            >
                <Input
                    placeholder="Напишите задачу..."
                    maxLength={80}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    w="300px"
                    h="32px"
                />
                <Button
                    isDisabled={!text.trim().length}
                    type="submit"
                    w="fit-content"
                    background="purple.500"
                    color="white"
                    _hover={{
                        background: 'purple.600',
                    }}
                >
                    Добавить задачу
                </Button>
            </chakra.form>
            <Flex
                gap="30px"
            >
                <Button
                    onClick={() => {
                        setTodos([...todos].sort((a, b) => a.id - b.id))
                    }}
                >
                    Сортировать по дате создания
                    
                </Button>
                <Button
                    onClick={() => {
                        setTodos([...todos].sort((a, b) => a.text.localeCompare(b.text)))
                    }}
                >
                    Сортировать по имени
                </Button>
            </Flex>
            <chakra.form
                onSubmit={(u) => {
                    u.preventDefault()
                    loadTodosFromFile()
                }}
                display="flex"
                marginTop="15px"
                flexDirection="column"
                alignItems="center"
            >
            </chakra.form>
        </Flex>
    )
}