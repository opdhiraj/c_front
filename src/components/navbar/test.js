const app=express();
app.get("/error,(req,res))=>{
    throw new Error("Test Error");}