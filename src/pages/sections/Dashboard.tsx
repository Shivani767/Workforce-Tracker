import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { useTasks } from "@/context/AppContext";
import { Card, CardContent } from "../../components/ui/card";
import { CiCircleCheck } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";

const Dashboard: React.FC = () => {
  const { tasks, handleOpenForm, handleEditTask } = useTasks();

  return (
    <div className="flex flex-col gap-6 rounded-lg">
      {/* Header Section */}
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-white text-xl cursor-pointer" onClick={handleOpenForm}>
            Dashboard
          </p>
          <p className="text-gray-400">{tasks.length}</p>
        </div>
        <div className="flex gap-4 text-white">
          <FaPlus className="cursor-pointer" onClick={handleOpenForm} />
          <HiDotsVertical />
        </div>
      </div>

      {/* Task Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* In Progress */}
        <div className="flex flex-col gap-2 rounded-lg">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <p className="text-white text-lg cursor-pointer" onClick={handleOpenForm}>
                In Progress
              </p>
              <p className="text-gray-400">
                {tasks.filter((task) => task.status === "in-progress").length}
              </p>
            </div>
            <div className="flex gap-4 text-white">
              <FaPlus className="cursor-pointer" onClick={handleOpenForm} />
              <HiDotsVertical />
            </div>
          </div>
          {tasks
            .filter((task) => task.status === "in-progress")
            .map((task, index) => (
              <Card
                key={index}
                className="section border-zinc-700 rounded-lg p-2 cursor-pointer hover:border-zinc-500 transition"
                onClick={() => handleEditTask(task.id)}
              >
                <CardContent className="flex items-center p-2 gap-2">
                  <CiCircleCheck size={20} />
                  <p className="text-lg">{task.title}</p>
                </CardContent>
                <CardContent className="space-y-2 p-2">
                  <p className="text-base text-white">{task.description}</p>
                  <div className="flex items-center justify-start gap-4 text-gray-400">
                    <RiContactsLine size={20} />
                    <p>{task.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          <div
            className={`${
              tasks.filter((task) => task.status === "in-progress").length > 0
                ? ""
                : "section"
            } rounded-lg h-full`}
          >
            <p
              className="text-center font-semibold text-gray-400 p-4 cursor-pointer"
              onClick={handleOpenForm}
            >
              + Add task
            </p>
          </div>
        </div>

        {/* On Hold */}
        <div className="flex flex-col gap-2 rounded-lg">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <p className="text-white text-lg cursor-pointer" onClick={handleOpenForm}>
                On Hold
              </p>
              <p className="text-gray-400">
                {tasks.filter((task) => task.status === "hold").length}
              </p>
            </div>
            <div className="flex gap-4 text-white">
              <FaPlus className="cursor-pointer" onClick={handleOpenForm} />
              <HiDotsVertical />
            </div>
          </div>
          {tasks
            .filter((task) => task.status === "hold")
            .map((task, index) => (
              <Card
                key={index}
                className="section border-zinc-700 rounded-lg p-2 cursor-pointer hover:border-zinc-500 transition"
                onClick={() => handleEditTask(task.id)}
              >
                <CardContent className="flex items-center p-2 gap-2">
                  <CiCircleCheck size={20} />
                  <p className="text-lg">{task.title}</p>
                </CardContent>
                <CardContent className="space-y-2 p-2">
                  <p className="text-base text-white">{task.description}</p>
                  <div className="flex items-center justify-start gap-4 text-gray-400">
                    <RiContactsLine size={20} />
                    <p>{task.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          <div
            className={`${
              tasks.filter((task) => task.status === "hold").length > 0
                ? ""
                : "section"
            } rounded-lg h-full`}
          >
            <p
              className="text-center font-semibold text-gray-400 p-4 cursor-pointer"
              onClick={handleOpenForm}
            >
              + Add task
            </p>
          </div>
        </div>

        {/* Completed */}
        <div className="flex flex-col gap-2 rounded-lg">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <p className="text-white text-lg cursor-pointer" onClick={handleOpenForm}>
                Completed
              </p>
              <p className="text-gray-400">
                {tasks.filter((task) => task.status === "completed").length}
              </p>
            </div>
            <div className="flex gap-4 text-white">
              <FaPlus className="cursor-pointer" onClick={handleOpenForm} />
              <HiDotsVertical />
            </div>
          </div>
          {tasks
            .filter((task) => task.status === "completed")
            .map((task, index) => (
              <Card
                key={index}
                className="section border-zinc-700 rounded-lg p-2 cursor-pointer hover:border-zinc-500 transition"
                onClick={() => handleEditTask(task.id)}
              >
                <CardContent className="flex items-center p-2 gap-2">
                  <CiCircleCheck size={20} />
                  <p className="text-lg">{task.title}</p>
                </CardContent>
                <CardContent className="space-y-2 p-2">
                  <p className="text-base text-white">{task.description}</p>
                  <div className="flex items-center justify-start gap-4 text-gray-400">
                    <RiContactsLine size={20} />
                    <p>{task.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          <div
            className={`${
              tasks.filter((task) => task.status === "completed").length > 0
                ? ""
                : "section"
            } rounded-lg h-full`}
          >
            <p
              className="text-center font-semibold text-gray-400 p-4 cursor-pointer"
              onClick={handleOpenForm}
            >
              + Add task
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
