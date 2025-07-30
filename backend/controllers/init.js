const fs = require("fs").promises;
const path = require("path");

async function initRepo(){
    const repoPath = path.resolve(process.cwd(),".AICommitHiddenFolder");
    const commitsPath = path.join(repoPath,"commits");

    try{
        await fs.mkdir(repoPath,{recursive : true});
        await fs.mkdir(commitsPath,{recursive : true});
        await fs.writeFile(
            path.join(repoPath,"config.json"),
            JSON.stringify({bucket:"s3 bucket"})
        );
        console.log("repo initialised");
    }catch(err){
        console.err("Error initialising repository",err);
    }
}

module.exports = { initRepo};