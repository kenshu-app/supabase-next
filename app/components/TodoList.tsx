import React from 'react'

const TodoList = () => {
  return (
    <div>
      <ul className="mx-auto">
        <div className="flex bg-gray-100 rounded-sm mt-2 mb-2 p-2 justify-between text-gray-900">
          <li className="font-medium">✅ 読書</li>
          <span className="cursor-pointer">✖</span>
        </div>
        <div className="flex bg-gray-100 rounded-sm mt-2 mb-2 p-2 justify-between text-gray-900">
          <li className="font-medium">✅ 散歩</li>
          <span className="cursor-pointer">✖</span>
        </div>
        <div className="flex bg-gray-100 rounded-sm mt-2 mb-2 p-2 justify-between text-gray-900">
          <li className="font-medium">✅ プログラミング</li>
          <span className="cursor-pointer">✖</span>
        </div>
      </ul>
    </div>
  )
}

export default TodoList
