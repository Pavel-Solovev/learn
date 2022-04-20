import React, {useCallback, useState} from "react";
import {Input} from "./Input";
import {UniButton} from "./UniButton";
import s from "../ToDoList.module.css";

type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm: React.FC<AddItemFormType> = React.memo((props) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState(false)

    const addItem = useCallback(() => {
        if (title.trim() !== '') {
            props.addItem(title.trim());
            if (title !== '')setTitle("");
            if (error) setError(false)
        } else {
            if (!error) setError(true)
        }
    }, [title])
        return (<div>
                <Input
                    error={error}
                    id={"standard-error-helper-text"}
                    label={error ? 'Error' : 'Required'}
                    helperText={error ? 'Title is required' : 'Input title'}
                    title={title}
                    setError={setError}
                    setTitle={setTitle}
                    callBackHandlerForAddTask={addItem}/>
                <UniButton name={'+'} callBackHandlerForAddTask={addItem}/>
                </div>
        )



})
