document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.querySelector('#newTodo');
    const addBtn = document.querySelector('#addBtn');
    const addTodoList = document.querySelector('#TodoList');

    let cnt = 0;
    //핸들러함수
    const addTodo = function()
    {
        if(input.value.trim() === '')
        {
            alert('할일을 입력하시오');
            return;
        }

        //동적으로 추가할 엘리먼트 생성
        const newDiv = document.createElement('div');
        const checkBox = document.createElement('input');
        const todo = document.createElement('span');
        const btn = document.createElement('button');


        const key = cnt++;

        newDiv.setAttribute('datakey',key)

        //TodoList에 새로운 div 추가
        addTodoList.appendChild(newDiv);
        newDiv.appendChild(checkBox);
        newDiv.appendChild(todo);
        newDiv.appendChild(btn);

        checkBox.type = 'checkbox';
        todo.textContent = input.value;
        btn.textContent = '제거';

        //이벤트 적용
        checkBox.addEventListener('change', (event) => {

            todo.style.textDecoration = event.target.checked ? 'line-through' : '';

        })

        btn.addEventListener('click',() => {

            removeTodo(key);
        })

        input.value = '';
    };
    const removeTodo = function(key)
    {
        const deleteElement = document.querySelector(`div[datakey = "${key}"]`)
        addTodoList.removeChiled(deleteElement);
    };

    //이벤트 연결
    addBtn.addEventListener('click', addTodo);
})