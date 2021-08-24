import { Router } from "express";

import productsRoutes from "./authors/routes.js";

import reviewsRoutes from "./blogs/routes.js";

const route = Router();

route.use("/products", productsRoutes);

route.use("/reviews", reviewsRoutes);

export default route;