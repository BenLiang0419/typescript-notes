
// 题目
/**

    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type TodoPreview = MyPick<Todo, 'title' | 'completed'>

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }

 */

interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

// 实现MyPick
type MyPick<T, U extends keyof T> = {
     [key in U]: T[key]
} 
