const db = require("../tasks");
const Task = db.tasks;


exports.create = async (req, res) => {

    if (!req.body.title) {
        res.status(400).send({ message: "title can not be empty!" });
        return;
    }

    const task = new Task({
        title: req.body.title,
        content: req.body.content

    });

    task.save(task).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error ."
            });
        });
};





exports.findAll = (req, res) => {
    Task.find().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " error "
            });
        });


};

exports.show = (req, res) => {
    Task.findOne({ _id: req.params.id }).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " error "
            });
        });
}






exports.update = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Task.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: ` Task was not found!`
                });
            } else res.send({ message: "Task was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Task with id=" + id
            });
        });


};


exports.delete = (req, res) => {
    const id = req.params.id;

    Task.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: ` Maybe Task was not found!`
                });
            } else {
                res.send({
                    message: "Task was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Task with id=" + id
            });
        });
};

