import React from "react"
import Bloglist from "./Components/Bloglist"
import Createmenu from "./Components/Createmenu"
import Editmenu from "./Components/Editmenu"

function App() {

  const [bloglist, setBloglist] = React.useState([])
  const [editCount, setEditCount] = React.useState(0)
  const [inCreateMenu, setInCreateMenu] = React.useState(false)

  React.useEffect(() => {

    fetch("http://localhost:5000/blog")
    .then(res => res.json())
    .then(posts => setBloglist(posts.rows))

  }, [editCount])

  const handleDelete = async (pid) => {
    
    await fetch(`http://localhost:5000/blog/${pid}`, {
      method: "DELETE"
    })

    setEditCount((prevCount) => {
      let newCount = prevCount
      newCount++
      return newCount
    })

  }

  console.log(inCreateMenu)

  return (
    <div className="central-container">
          <h1>Prototype Blog</h1>
          {inCreateMenu === false ? <><button style={{marginTop: "50px", width: "150px", height: "50px", fontSize: "18px"}} onClick={() => setInCreateMenu(true)}>Add new post</button>
          <Bloglist bloglist = {bloglist} handleDelete = {handleDelete}/></> : <Createmenu />}
    </div>
  );
}

export default App;
