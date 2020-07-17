const api = '';

export const deleteTask = async (taskId: any) => {

    try {
        let response = await fetch(`${api}/tasks/${taskId}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
    } catch (e) {
        console.log(e);
    }
};

export const addTask = async (task: any) => {
    try {
        let response = await fetch(`${api}/tasks`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: task.description, title: task.title, user_id: localStorage.user})
        })
        let data = await response.json()
    } catch (e) {
        console.log(e);
    }
};

export const updateTask = async (task: any) => {
    try {
        let response = await fetch(`${api}/tasks/${task.task_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        let data = await response.json()
    } catch (e) {
        console.log(e);
    }
};

export const getAllTask = async () => {
    let response = await fetch(`${api}/tasks`)
    let data = await response.json()
    return data
};

export const login = async (email: string, password: string, history: any) => {
    try {
        let response = await fetch(`${api}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        let data = await response.json();
        let user = {token: data.token, userid: data.userid};
        if (data.message === 'user is not exists') {
            alert(data.message)
        } else {
            localStorage.token = JSON.stringify(user.token);
            localStorage.user = JSON.stringify(user.userid);
        }

        history.push('/');
    } catch (e) {
        console.log(e)
    }

};

export const register = async (firstname: string, lastname: string, username: string, email: string, password: string, city: string, phone: string, history: any) => {
    try {
        let response = await fetch(`${api}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstname, lastname, username, email, password, city, phone})
        })
        let data = await response.json();
        let user = {token: data.token, userid: data.userid};
        localStorage.token = JSON.stringify(user.token);
        localStorage.user = JSON.stringify(user.userid);
    } catch (e) {
        console.log(e)
    }

};

export const getUserDetails = async () => {
    try {
        let response = await fetch(`${api}/auth/user/${localStorage.user}`)
        let data = await response.json();
        return data[0];
    } catch (e) {
        console.log(e)
    }

};
