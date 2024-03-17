import aluminumRouter from "./aluminumRouter.js";
import express from "express"

const routes = (app) => {
    app.use("/stock", aluminumRouter);
  };

  export default routes
  