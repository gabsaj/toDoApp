import { Routes, Route } from "react-router-dom";
import TasksPage from "./app/features/pages/TasksPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
    </Routes>
  );
};

export default MainRouter;
