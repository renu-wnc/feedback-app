import { useState, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "../context/FeedbackContext"
import { useContext } from "react"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
     
    const handleTextChange = (e) => {
        if(text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Please enter review more then 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setText(feedbackEdit.item.text)
            setBtnDisabled(false)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text, rating
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText('')
        }
        
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" onChange={handleTextChange} placeholder="Write a review" value={text}/>
                <Button type="submit" isdisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm