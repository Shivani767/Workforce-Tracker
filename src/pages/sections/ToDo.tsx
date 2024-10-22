// import { todoData } from "@/data/index";
import { Card, CardContent } from "@/components/ui/card";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { DoingData } from "@/data/index";
import { useTasks } from "@/context/AppContext";
import { CiCircleCheck } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";

const ToDo = () => {
  const { tasks, handleOpenForm, handleEditTask } = useTasks();
  console.log(tasks, "Shivani");
  return (
    <div className="flex flex-col gap-2  rounded-lg ">
      <div className="flex gap-2 items-center justify-between ">
        <div className="flex gap-2 items-center">
          <p className="text-white text-lg ">To Do</p>
          <p className="text-gray-400">
            {tasks.filter((task) => task.status === "to do").length + 1}
          </p>
        </div>
        <div className="flex gap-4 text-white ">
          <FaPlus onClick={handleOpenForm} />
          <HiDotsVertical />
        </div>
      </div>
      {DoingData.map((item) => (
        <Card
          key={item.id}
          className=" section border-zinc-700 rounded-lg p-2 cursor-pointer hover:border-zinc-500 transition "
        >
          <CardContent className="flex items-center p-2 gap-2">
            <p className=" text-lg">{item.icon1}</p>
            <p className="text-base text-white">{item.text}</p>
          </CardContent>
          <CardContent className="space-y-2 p-2">
            <div className="flex gap-2">
              <p className="rounded-full text-black text-xs px-3 py-0.5 items-center justify-center flex bg-orange-400">
                NormaI
              </p>
              <p className="rounded-full text-black text-xs px-3 py-0.5 items-center justify-center flex bg-yellow-400">
                At risk
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <p className=" text-2xl text-gray-400">{item.icon2}</p>
              <p className=" text-gray-400">{item.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
      {tasks
        .filter((task) => task.status === "to do")
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
      <p
        className="text-center font-semibold text-gray-400 cursor-pointer"
        onClick={handleOpenForm}
      >
        + Add task
      </p>
    </div>
  );
};

export default ToDo;
