const ToDo = () => {
  // ...

  return (
    <div className="flex flex-col gap-2  rounded-lg ">
      <div className="flex gap-2 items-center justify-between ">
        <div className="flex gap-2 items-center">
          <p className="text-blue-600 text-lg ">To Do</p>
          <p className="text-purple-500">
            {tasks.filter((task) => task.status === "to do").length + 1}
          </p>
        </div>
        <div className="flex gap-4 text-blue-600 ">
          <FaPlus onClick={handleOpenForm} />
          <HiDotsVertical />
        </div>
      </div>
      {DoingData.map((item) => (
        <Card
          key={item.id}
          className="section border-slate-800 rounded-lg p-2 cursor-pointer hover:border-slate-600 transition "
        >
          <CardContent className="flex items-center p-2 gap-2">
            <p className=" text-lg">{item.icon1}</p>
            <p className="text-base text-blue-600">{item.text}</p>
          </CardContent>
          <CardContent className="space-y-2 p-2">
            <div className="flex gap-2">
              <p className="rounded-full text-black text-xs px-3 py-0.5 items-center justify-center flex bg-pink-500">
                Medium
              </p>
              <p className="rounded-full text-black text-xs px-3 py-0.5 items-center justify-center flex bg-teal-400">
                At risk
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <p className=" text-2xl text-purple-500">{item.icon2}</p>
              <p className=" text-purple-500">{item.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
      {tasks
        .filter((task) => task.status === "to do")
        .map((task, index) => (
          <Card
            key={index}
            className="section border-slate-800 rounded-lg p-2 cursor-pointer hover:border-slate-600 transition"
            onClick={() => handleEditTask(task.id)}
          >
            <CardContent className="flex items-center p-2 gap-2">
              <CiCircleCheck size={20} />
              <p className="text-lg">{task.title}</p>
            </CardContent>
            <CardContent className="space-y-2 p-2">
              <p className="text-base text-blue-600">{task.description}</p>
              <div className="flex items-center justify-start gap-4 text-purple-500">
                <RiContactsLine size={20} />
                <p>{task.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      <p
        className="text-center font-semibold text-purple-500 cursor-pointer"
        onClick={handleOpenForm}
      >
        + Add task
      </p>
    </div>
  );
};

export default ToDo;
