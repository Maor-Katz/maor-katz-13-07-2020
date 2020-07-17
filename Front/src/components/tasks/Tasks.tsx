import {useEffect, useState} from 'react';
import * as React from 'react';
import {Link, Redirect} from 'react-router-dom'
import {deleteTask, getAllTask, getUserDetails, updateTask} from '../../services/service';
import Modal from 'react-modal';
import {TaskItem} from '../../interfaces/task.interface'
import TaskItemComponent from "./TaskItemComponent";
import Loader from "../loader/Loader";

const Tasks: React.FC = () => {

    const [tasksList, setTasksLists] = useState<TaskItem[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [editTaskFlag, setEditTask] = useState<boolean>(false);
    const [specificTask, setSpecificTask] = useState({username: '', email: '', title: '', description: ''});
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);


    const getTasks = async () => {
        let tasks = await getAllTask();
        setTasksLists(tasks);
    };
    const getUser = async () => {
        let user = await getUserDetails();
        setUserDetails(user);
    };

    useEffect(() => {
        (async function () {
            if (localStorage.user) {
                await getUser();
            }
            await getTasks();
            setLoading(!loading);
        })()
    }, []);

    const handleChange = (e: any) => {
        setSpecificTask({...specificTask, [e.target.name]: e.target.value})
    };

    const updateSpecifcTask = async (task: any, e: any) => {
        e.preventDefault();
        await updateTask(task);
        setEditTask(false);
        setModalIsOpen(!modalIsOpen);
        await getTasks();
    };

    const closeModal = () => {
        setSpecificTask({username: '', email: '', title: '', description: ''});
        setEditTask(false);
        setModalIsOpen(!modalIsOpen);
    }

    const editTask = (task: any, edit: boolean) => {
        if (edit) {
            setEditTask(true);
        }

        setSpecificTask(task);
        setModalIsOpen(!modalIsOpen);
    }

    const deleteSpecificTask = async (id: number) => {
        await deleteTask(id);
        await getTasks();
    }

    const sortByField = (field: string) => {
        // @ts-ignore
        let newArr = tasksList.slice().sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0))
        setTasksLists(newArr);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: "#20232a",
            color: "#fff"
        }
    };
    if (!localStorage.token) {
        return <Redirect to="/login"/>
    }
    if (loading) {
        return <Loader/>
    }

    return (
        <div className="Tasks">
            <div className="upperContainer">
                <div>
                    <Link to="/add">
                        <button className="propItBtn">משימה חדשה</button>
                    </Link>
                </div>
                <div className="listCostumers">({tasksList.length})רשימת הלקוחות שלך</div>
            </div>
            <div className="titleLine">
                <div className="specificTitle">פעולות</div>
                <div className="specificTitle hr-display"><i className="fas fa-sort"
                                                             onClick={() => sortByField('date')}></i><span>תאריך יצירת המשימה</span>
                </div>
                <div className="specificTitle hr-display">מייל</div>
                <div className="specificTitle">טלפון</div>
                <div className="specificTitle usernameTitle"><i className="fas fa-sort"
                                                                onClick={() => sortByField('username')}></i><span>שם משתמש</span><input
                    type="checkbox"/></div>
            </div>
            <div className="tasksList">
                {tasksList.length > 0 && tasksList.map((t, index) => (
                    <TaskItemComponent t={t} deleteSpecificTask={deleteSpecificTask} editTask={editTask} key={index}
                                       userDetails={userDetails}/>))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <i className="fas fa-times-square" onClick={() => closeModal()}></i>
                <div className="modalTitle">Task</div>
                <form id="formModal" onSubmit={(e) => updateSpecifcTask(specificTask, e)}>
                    <div>TITLE</div>
                    <input
                        name="title"
                        type="text"
                        value={specificTask.title}
                        onChange={(e) => handleChange(e)}
                        id="title"
                        placeholder="TYPE TITLE"
                        className="minWidth"
                    />
                    <div>DESCRIPTION</div>
                    <textarea
                        id="message"
                        onChange={(e) => handleChange(e)}
                        name="description"
                        value={specificTask.description}
                        placeholder="TYPE YOUR MESSAGE"
                        style={{height: "240px"}}
                        className="minWidth"
                    />
                    {editTaskFlag && <div className="saveBtnWrapper">
                        <input type="submit" className="propItBtn" value="Save"/>
                    </div>

                    }
                </form>
            </Modal>
        </div>
    );
};

export default Tasks;