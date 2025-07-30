const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

async function commitRepo(message) {
    const repoPath = path.resolve(process.cwd(), ".AICommitHiddenFolder");
    const stagingPath = path.join(repoPath, "staging");
    const commitPath = path.join(repoPath, "commits");

    try {
        const commitID = uuidv4();
        const commitDir = path.join(commitPath, commitID);
        await fs.mkdir(commitDir, { recursive: true });

        const files = await fs.readdir(stagingPath);
        for (const file of files) {
            const src = path.join(stagingPath, file);
            const dest = path.join(commitDir, file);
            await fs.copyFile(src, dest);
        }

        await fs.writeFile(
            path.join(commitDir, "commit.json"),
            JSON.stringify({ message, date: new Date().toISOString() }, null, 2)
        );

        console.log(`Commit ${commitID} created with message: "${message}"`);
    } catch (err) {
        console.error("Error committing a file:", err);
    }
}

module.exports = { commitRepo };