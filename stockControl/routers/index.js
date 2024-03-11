import aluminumRouter from "./aluminumRouter.js";

const routes = (app) => {
    app.use("/stock", aluminumRouter);
  };

  export default routes
  