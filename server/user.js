// import { Router } from 'express';
const db = require("./database");

// const router = Router();

const userData = db.user_info.findMany({});

export default userData;
