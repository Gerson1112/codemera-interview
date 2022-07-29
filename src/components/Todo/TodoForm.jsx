import React, { useContext, useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import TodoDispatch from '../../context/TodoDispatch';
import { add } from '../../actions/todoActions';

const TodoForm = () => {
    const dispatch = useContext(TodoDispatch);
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);  
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(add(value));
        setValue('');
    }
    return (    
        <Row>
            <Col span={ 24 }>
                <Input value={ value } onChange={ handleChange } style={ { width: "80%"}} />
                <Button type="primary" onPress={handleSubmit}>Add</Button>
            </Col>
        </Row>
    )
}

export default TodoForm;