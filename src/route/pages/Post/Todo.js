import React, { Component } from 'react';
import Header from '../../../components/Header/Header';
import {title, headerColor} from '../headerSetting/headerSetting';
import TodoList from '../../../components/TodoList/TodoList';
import Form from '../../../components/TodoList/Form';
import TodoItemList from '../../../components/TodoList/TodoItemList';
const headerTitle = [
  'TODO',
  'POST',
]
class Todo extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 포스트', checked: false },
      { id: 1, text: ' TODO앱', checked: true },
      { id: 2, text: ' REACT', checked: false }
    ]
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }
  
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
      const { todos } = this.state;
      const index = todos.findIndex(todo => todo.id === id);
  
      const selected = todos[index];
  
      this.setState({
        todos: [
          ...todos.slice(0, index),
          {
            ...selected,
            checked: !selected.checked
          },
          ...todos.slice(index + 1, todos.length)
        ]
      });
    }
    render() {
      const { input, todos } = this.state;
      const {
        handleChange,
        handleCreate,
        handleKeyPress,
        handleToggle,
        handleRemove
      } = this; //원래 this.handleChange이런식으로 하는데 미리 this를 붙여준것!
        return(
            <div>
              <Header headerTitle={headerTitle[0]} title={title} headerColor={headerColor[2]}/>
              <TodoList form={(
                <Form 
                  value={input}
                  onKeyPress={handleKeyPress}
                  onChange={handleChange}
                  onCreate={handleCreate}
                />
              )}>
                <TodoItemList todos= {todos} onToggle={handleToggle} onRemove={handleRemove}/>
              </TodoList>
            </div>
        );
    }
}
export default Todo;