module.exports = app => {
    const tasks = require("../controllers/task.controller");

    var router = require("express").Router();


    router.post("/", tasks.create);


    router.get("/", tasks.findAll);

    router.get("/:id", tasks.show);



    router.put("/:id", tasks.update);


    router.delete("/:id", tasks.delete);


    app.use('/api/tasks', router);
};