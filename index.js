import express from 'express';
import mongoose from 'mongoose';

const app = express()

app.use(express.json())

app.listen(3000, () => console.log("Server Running At http://localhost:3000"))