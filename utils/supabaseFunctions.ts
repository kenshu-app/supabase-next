import { supabase } from './supabase'

export const getAllTodos = async () => {
  const todos = await supabase.from('todo').select('*')
  console.log(todos)
  return todos.data
}