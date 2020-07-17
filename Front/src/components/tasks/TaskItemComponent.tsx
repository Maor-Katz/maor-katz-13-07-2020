import * as React from 'react';
import Moment from 'react-moment';

interface SpecificTask {
    t: any,
    deleteSpecificTask: any,
    editTask: any,
    userDetails: any
}

const TaskItemComponent: React.FC<SpecificTask> = ({t, editTask, deleteSpecificTask, userDetails}) => {

    return (
        <div className="taskLine">
            <div className="detailTask usernameTask"><input type="checkbox"/>{t.username}</div>
            <div className="detailTask phoneTask">{t.phone}</div>
            <div className="detailTask emailTask hr-display">{t.email}</div>
            <div className="detailTask dateTask hr-display"><Moment
                format="YYYY/MM/DD HH:mm">{(t.date)}</Moment></div>
            {userDetails.isAdmin || t.user_id === +localStorage.user ? <div className="detailTask operations">
                        <span className="operation"><span><i className="far fa-eye operationSymbol"
                                                             onClick={() => editTask(t, false)}></i></span><span
                            className="operationType">צפייה</span></span>
                <span className="operation"><span><i className="fas fa-pencil operationSymbol"
                                                     onClick={() => editTask(t, true)}></i></span><span
                    className="operationType">עריכה</span></span>
                <span className="operation"><span><i
                    className="fal fa-trash-alt operationSymbol"
                    onClick={() => deleteSpecificTask(t.task_id)}></i></span><span
                    className="operationType">מחיקה</span></span>
            </div> : <div className="detailTask operations"></div>}
        </div>

    );
};

export default TaskItemComponent;