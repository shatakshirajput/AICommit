const fs = require("fs").promises;
const path = require("path");
const { s3, S3_BUCKET } = require("../config/aws-config");

async function pullRepo() {
  const repoPath = path.resolve(process.cwd(), ".AICommitHiddenFolder");
  const commitsPath = path.join(repoPath, "commits");

  try {
    const data = await s3
      .listObjectsV2({
        Bucket: S3_BUCKET,
        Prefix: "commits/",
      })
      .promise();

    const objects = data.Contents;

    for (const object of objects) {
      const key = object.Key;

      const commitDir = path.join(
        commitsPath,
        path.dirname(key).split("/").pop()
      );

      await fs.mkdir(commitDir, { recursive: true });

      const localFilePath = path.join(repoPath, key);

      const fileContent = await s3
        .getObject({
          Bucket: S3_BUCKET,
          Key: key,
        })
        .promise();

      console.log("Writing to:", localFilePath);
      await fs.writeFile(localFilePath, fileContent.Body);

      console.log(`Pulled: ${key}`);
    }

    console.log("All commits pulled from S3.");
  } catch (err) {
    console.error("Unable to pull:", err);
  }
}

module.exports = { pullRepo };
