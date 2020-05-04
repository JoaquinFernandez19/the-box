import React, {useState} from 'react';
import {connect} from 'react-redux';
import { createTodo, cancelCreatingTodo } from '../actions';
import '../styles/todoForm.scss';



const TodoForm  =  (props) => {

    const [inputValue,setInputValue] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(inputValue !== ''){
            props.createTodo(inputValue);
            setInputValue('');
        }
    }

    const closeForm = () => {
        props.cancelCreatingTodo();
        setInputValue('');  
    }


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    if(props.creatingTodo){
        return <div className='todo-form-div'>
            <form onSubmit={handleFormSubmit} className='todo-form'>
                <textarea type="text" value={inputValue} onChange={handleInputChange} autoFocus/>
                <div className='btns-container'>
                <button type='submit' className='confirm-btn'>Confirm</button>
                <button type='cancel' onClick={closeForm} className='cancel-btn'>Cancel</button>
                </div>
                
            </form>

        </div>
    }


    return null
}

const mapStateToProps = (state) => {
    return {
        creatingTodo: state.creatingTodo,
    }
}


export default connect(mapStateToProps, {createTodo,cancelCreatingTodo})(TodoForm);