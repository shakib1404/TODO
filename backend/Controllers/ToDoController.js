const ToDoModel=require("../models/todomodel")

module.exports.getToDos=async(req,res)=>
{
    const {email}= req.body
    const toDos= await ToDoModel.find({email});
    res.send(toDos);


}

module.exports.saveToDo =(req,res)=>
{
    const{toDo,email}=req.body

    ToDoModel.create({toDo,email}).then((data)=>{
        console.log("SAved.....");
        res.status(201).send(data);
    }).catch((err)=>{
    console.log(err);
res.send({error: err, msg: "Something went wrong!"});
});
}

module.exports.deleteToDo =(req,res)=>
    {
        const{id}=req.params
    
        ToDoModel.findByIdAndDelete(id).then(()=>{
            console.log("deleted.....");
            res.send("deleted");
        }).catch((err)=>{
        console.log(err);
    res.send({error: err, msg: "Something went wrong!"});
    });
    }
