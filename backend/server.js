// app config
const app = express()
const port = process.env.PORT || 4000   // ✅ FIX

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// test route
app.get("/", (req, res) => {
    res.send("API working")
})

// start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`)   // ✅ FIX
})