import { Router } from "express";

import * as handlers from "./handlers.js";

const route = Router();

route.get("/", handlers.list);

route.get("/:product_id", handlers.single);

route.put("/:product_id", handlers.update);

route.delete("/:product_id", handlers.deleteProduct);

route.post("/", handlers.create);

export default route;