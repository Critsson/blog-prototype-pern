const express = require("express");
const cors = require("cors");
const pool = require("./db.js")
const app = express();

//MIDDLEWARE
app.use(cors())
app.use(express.json())

//ROUTES
app.get("/", (req, res) => {
    res.send("Homepage")
})

//Create blog post
app.post("/blog", async(req, res) => {
    try {
        const {info} = req.body
        const postBlog = await pool.query("INSERT INTO posts_json (info) VALUES($1) RETURNING *;", [info])
    
        res.json(postBlog)
    } catch (error) {
        console.error(error)
    }


})

//Get all blog posts
app.get("/blog", async(req, res) => {
    try {
        const getAllBlogs = await pool.query("SELECT * FROM posts;")

        res.json(getAllBlogs)
    } catch (error) {
        console.error(error)
    }

})

//Get specific blog post
app.get("/blog/:id", async(req, res) => {
    try {
        const {id} = req.params
        const getBlog = await pool.query("SELECT * FROM posts WHERE pid = $1;", [id])

        res.json(getBlog)
    } catch (error) {
        console.error(error)
    }
})

//Delete blog post
app.delete("/blog/:id", async(req, res) => {
    try {
       const {id} = req.params
       const deleteBlog = await pool.query("DELETE FROM posts WHERE pid = $1 RETURNING *;", [id])
       
       res.json(deleteBlog)
    } catch (error) {
        console.error(error)
    }
})

//Edit blog post name
app.put("/blog/:id/name", async(req, res) => {
    try {
        const {name} = req.body
        const {id} = req.params
        const editBlogName = await pool.query("UPDATE posts SET name = $1 WHERE pid = $2 RETURNING *;", [name, id])

        res.json(editBlogName)
    } catch (error) {
        console.error(error)
    }
})

//Edit blog post description
app.put("/blog/:id/description", async(req, res) => {
    try {
        const {description} = req.body
        const {id} = req.params
        const editBlogDescription = await pool.query("UPDATE posts SET description = $1 WHERE pid = $2 RETURNING *;", [description, id])

        res.json(editBlogDescription)
    } catch (error) {
        console.error(error)
    }
})


app.listen(5000, () => {
    console.log("Listening on port 5000...")
})
