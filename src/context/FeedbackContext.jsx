import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from "../data/FeedbackData";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete!')) {
        setFeedback(feedback.filter((item) => item.id !==id))
        }
    }

    const addFeedback = (newFeedbacks) => {
        newFeedbacks.id = uuidv4()
        setFeedback([newFeedbacks, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = ((id, updItem) => {
        setFeedback(feedback.map((item) => ( item.id === id ? {...item, ...updItem} : item )))
    })

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
        
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext