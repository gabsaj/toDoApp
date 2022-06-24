import { useEffect, useState } from "react";
import { Flip, toast } from "react-toastify";
import TaskService from "../../services/taskService";
import { Task } from "../../types/Task";
import Sidebar from "../components/Sidebar";
import { v4 as id } from "uuid";

const TasksPage = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  const taskService = new TaskService();

  const getTasks = async () => {
    try {
      const response = await taskService.getTask();
      setTasksList(response);
    } catch (error) {
      toast.error("Failed to fetch tasks", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        transition: Flip,
        theme: "dark",
      });
    }
  };
  console.log(taskName);

  const handleSubmit = async () => {
    try {
      if (taskName !== "") {
        await taskService.createTask({
          name: taskName,
          id: id(),
        });
        toast.success("Task created", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2500,
          theme: "dark",
          transition: Flip,
        });
      }
    } catch (error) {
      toast.error("Failed to create a task.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        theme: "dark",
        transition: Flip,
      });
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <div className="layout">
        <Sidebar />
        <div className="layout__main">
          <div className="input__container input--primary mt--80">
            <input className="input" placeholder="Search..."></input>
            <i className="icon icon--base icon--search"></i>
          </div>
          <div className="input__container input--primary mt--32">
            <input
              onChange={(e) => setTaskName(e.target.value)}
              className="input"
              placeholder="add task"
            ></input>
            <button
              onClick={() => handleSubmit()}
              className="btn btn--primary py--8"
            >
              Add task<i className="icon icon--base icon--plus"></i>
            </button>
          </div>
          <div className="task__container mt--64 ">
            {tasksList.length > 0 ? (
              <>
                {tasksList.map((task) => (
                  <div key={task.id} className="task mt--24">
                    <div>{task.name}</div>
                    <div className="task__wrapper">
                      <i className="icon icon--base icon--edit"></i>
                      <i className="icon icon--base icon--delete ml--8"></i>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="task__empty">No tasks to show</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
