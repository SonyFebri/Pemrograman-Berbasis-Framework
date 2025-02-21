import React, { useState } from "react";

// Fungsi untuk Komponen Anak Menampilkan Tugas
function TodoItem({ task, onDelete }) {
  return (
    <tr>
      <td>{task}</td>
      <td>
        <button onClick={onDelete}>Hapus</button>
      </td>
    </tr>
  );
}

// Fungsi untuk Komponen Utama TodoList
function TodoList(props) {
  const [tasks, setTasks] = useState(props.tasks || []);
  const [newTask, setNewTask] = useState("");

  // Fungsi untuk Menambah Tugas Baru
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Fungsi untuk Menghapus Tugas
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Daftar Tugas</h1>

      {/* Form untuk Menambah Tugas Baru */}
      <div>
        <input
          type="text"
          placeholder="Tulis tugas baru..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Tambah</button>
      </div>

      {/* Daftar Tugas */}
      <table border="1" style={{ marginTop: "20px", width: "40%", minWidth: "300px" }}>
        <thead>
          <tr>
            <th>Tugas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;