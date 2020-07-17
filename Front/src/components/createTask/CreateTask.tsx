import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {addTask} from "../../services/service";
import {useHistory} from 'react-router-dom';

const CreateTask: React.FC = (props: any) => {
    const {register, handleSubmit, errors} = useForm();
    const [formData, setFormData] = useState({title: '', username: "", phone: '', description: ""});
    let history = useHistory()
    // @ts-ignore
    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const addTaskToList = async (e: any) => {
        await addTask(formData);
        history.push("/")
    }


    return (
        <div className="contactForm">
            <div className="addTaskTitle">Add Task</div>
            <form id="myForm" onSubmit={handleSubmit(addTaskToList)}>
                <div className="inputLabel">TITLE</div>
                <input
                    name="title"
                    type="text"
                    id="title"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby="error-name-required error-name-maxLength"
                    ref={register({required: true})}
                    placeholder="TYPE YOUR TITLE"
                    className="oneInput"
                    onChange={(e) => handleChange(e)}
                    style={{width: "100%"}}
                />
                <div>
                    <div className="twoInputs">
                        <div className="inputAndLabel">
                            <span className="inputLabel">PHONE</span>
                            <input
                                name="phone"
                                type="text"
                                onChange={(e) => handleChange(e)}
                                id="phone"
                                aria-invalid={errors.phone ? "true" : "false"}
                                aria-describedby="error-phone-required"
                                ref={register({required: true})}
                                placeholder="TYPE PHONE NUMBER"
                                className="oneInput phoneInput"
                            />
                        </div>
                        <div className="inputAndLabel">
                            <span className="inputLabel">EMAIL</span>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby="error-name-required"
                                ref={register({required: true})}
                                placeholder="TYPE YOUR EMAIL"
                                className="oneInput emailInput"
                            />
                        </div>

                    </div>
                </div>
                <div className="inputLabel">DESCRIPTION</div>
                <textarea
                    id="description"
                    onChange={(e) => handleChange(e)}
                    name="description"
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby="error-name-required"
                    ref={register({required: true})}
                    placeholder="TYPE YOUR DESCRIPTION"
                    className="oneInput"
                    style={{height: "240px", width: "100%"}}
                />
                {errors.title && <p className="errorMsg">*Title requiered</p>}
                {errors.phone && <p className="errorMsg">*Phone requiered</p>}
                {errors.email && <p className="errorMsg">*Email requiered</p>}
                {errors.description && <p className="errorMsg">*Description requiered</p>}
                <div className="submitWrapper"><input type="submit" value="Submit" className="propItBtn"/></div>
            </form>
        </div>
    );
}
export default CreateTask;