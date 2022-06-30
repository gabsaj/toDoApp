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
        theme: "colored",
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
        getTasks();
        toast.success("Task created", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2500,
          theme: "colored",
          transition: Flip,
        });
      }
    } catch (error) {
      toast.error("Failed to create a task.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        theme: "colored",
        transition: Flip,
      });
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      await taskService.deleteTask(taskId);
      toast.success("Task deleted", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        transition: Flip,
        theme: "colored",
      });
      getTasks();
    } catch (error) {
      toast.error("Failed to delete a task.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2500,
        theme: "colored",
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
            <i className="icon icon--base icon--search icon--blue"></i>
          </div>
          <div className="input__container input--primary mt--32">
            <input
              maxLength={30}
              onChange={(e) => setTaskName(e.target.value)}
              className="input"
              placeholder="Add task"
            ></input>
            <button
              onClick={() => handleSubmit()}
              className="btn btn--primary btn--m"
            >
              Add task
              <i className="icon icon--base icon--plus icon--blue ml--8"></i>
            </button>
          </div>
          <div className="task__container mt--64 mb--80 ">
            {tasksList.length > 0 ? (
              <>
                {tasksList.map((task) => (
                  <div key={task.id} className="task mt--24">
                    <div>{task.name}</div>
                    <div className="task__wrapper">
                      <i
                        onClick={() => handleDelete(task.id)}
                        className="icon icon--base icon--delete icon--blue ml--8"
                      ></i>
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
