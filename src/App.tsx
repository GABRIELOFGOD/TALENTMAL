import { RouterProvider } from 'react-router-dom'
import routes from '../utils'

const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App