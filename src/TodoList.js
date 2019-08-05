import React, { Component } from 'react';
import { connect } from 'react-redux';

// 无状态组件
const TodoList = (props) => {
    
    //结构化赋值
    const { inputValue, changeInputValue, handleClick, list, handleDelete } = props;

    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={handleClick}>Submit</button>
            </div>
            <ul>
                {
                    list.map((item,index) => {
                        return <li onClick={() => {handleDelete(index)}}  key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )

}


//参数state指的是store里面的数据，然后 state里面的inputValue，把它映射到Props里面
const mapStateTpProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick(){
            const action = {
                type: 'add_item',
            }
            dispatch(action);
        },
        handleDelete(index){
            const action = {
                type: 'delete_item',
                index
            }   
            dispatch(action);
        }
    }
}

//connect 返回的内容实际上就是一个容器组件了
export default connect(mapStateTpProps, mapDispatchToProps)(TodoList);