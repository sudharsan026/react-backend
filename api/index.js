import express from "express"
import { users } from "./users.js";
import cors from "cors"
const app = express();
app.use(cors())
app.get("/", (req, res) => {
	const { query } = req.query
	const keys = ["first_name", "last_name", "email"];
	const searchData = (data) => {
		return data.filter((item) =>
			keys.some((key) => item[key].toLowerCase().includes(query))
		);
	};
	res.json(searchData(users).splice(0, 10));
})
app.listen(5000, () => {
	console.log("server running at 5000")
})