document.addEventListener('DOMContentLoaded',() => {
    const userId = document.querySelector('#userID')
    const pw = document.querySelector('#pw')
    const repw = document.querySelector('#repw')
    const userName = document.querySelector('#userName')
    const submit = document.querySelector('#Submit')

    let index = 0;

    

    userId.addEventListener('change',() => 
    {
        if(!/[a-zA-Z0-9]/.test(userId.value))
        {
            alert('영문 대소문자, 숫자만 사용하시오')
        }
    })
    pw.addEventListener('change',() => 
    {
        if(!/[a-zA-Z0-9]/.test(pw.value))
        {
            alert('영문 대소문자, 숫자만 사용하시오')
        }
    })
    repw.addEventListener('change',() => 
    {
        if(!/[a-zA-Z0-9]/.test(repw.value))
        {
            alert('영문 대소문자, 숫자만 사용하시오')
        }
    })
    userName.addEventListener('change',() => {
        if(!/[a-zA-Z0-9]/.test(userName.value))
        {
            alert('영문 대소문자, 숫자만 사용하시오')
        }
    })

    submit.addEventListener('click',(event) => 
    {
        event.preventDefault()
        if(pw.value === repw.value)
        {
            const User = new Object();

            User.name = userName.value;
            User.id = userId.value;
            User.password = pw.value;
            User.RewindPassword = repw.value;
            User.index = index;

            console.log(User);

            localStorage.setItem(index,JSON.stringify(User));

            
            const addlist = document.querySelector('#list');

            const newtr = document.createElement('tr');
            const newIndex = document.createElement('td');
            const newId = document.createElement('td');
            const newName = document.createElement('td');
            const newPassword = document.createElement('td');
            const newOption = document.createElement('td');

            addlist.appendChild(newtr);
            newtr.appendChild(newIndex);
            newtr.appendChild(newId);
            newtr.appendChild(newPassword);
            newtr.appendChild(newName);
            newtr.appendChild(newOption);

            let newUser = JSON.parse(localStorage.getItem(index++));


            newIndex.textContent = newUser.index;
            newId.textContent = newUser.id;
            newPassword.textContent = newUser.password;
            newName.textContent = newUser.name;
            newOption.innerHTML = '<a href = "#">수정</a><a href = "#" id = "userDelete">삭제</a>';
            
            newOption.addEventListener('click',() => {
                event.preventDefault();
            })
        }
    })

})

function editMemberClose()
{

}

function userDelete()
{
    localStorage.removeItem();
}

function removeCheck()
{
    if(confirm(""))
        userDelete();

    else

    return false;
}