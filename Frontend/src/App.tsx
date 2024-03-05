import { useState } from 'react'
import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Blog } from './pages/blog'

import {Blogs} from './pages/Blogs'
import { Publish } from './pages/publish'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin></Signin>}></Route>
          <Route path='/blog/:id' element={<Blog></Blog>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/publish' element={<Publish></Publish>}></Route>

        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
