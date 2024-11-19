import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainAll from './components/Main/MainAll'
import YouTubeVideos from './components/YouTubeVideos'
import { Route,Routes } from 'react-router-dom'
import Iphone from './components/Iphone'
import Four04 from './components/Four04'
import CommentLayout from './components/CommentLayout'
import SingleAppleProduct from './components/SingleAppleProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Routes>
        <Route path="/" element={<CommentLayout/>}>
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/" element={<MainAll />} />
          <Route path="*" element={<Four04 />} />
          <Route path="/iphone/:productID" element={<SingleAppleProduct/>}/>

        </Route>
      </Routes>
      {/* <MainAll/> */}
      {/* <YouTubeVideos/> */}
     
    </>
  );
}

export default App;
