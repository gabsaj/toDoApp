import Sidebar from "../components/Sidebar";
import Task from "../components/Task";

const TasksPage = () => {
  return (
    <div>
      <div className="layout">
        <Sidebar />
        <div className="layout__main">
          <div>
            <input placeholder="Search..."></input>
            <i className="icon icon--base icon--search"></i>
          </div>
          <div>
            <input placeholder="add task"></input>
            <button>
              Add task<i className="icon icon--base icon--plus"></i>
            </button>
          </div>
          <div className="task__container mt--64 ">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
