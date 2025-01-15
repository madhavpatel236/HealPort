// Multer is a popular middleware for handling multipart/form-data, primarily used for uploading files in Node.js applications. Since forms that upload files require encoding in multipart/form-data, Multer makes it easy to parse this type of data and store uploaded files on the server.

// Key Features:
// File Handling:
// Multer allows you to handle multiple types of file uploads, including images, videos, and documents.

// Disk and Memory Storage:
// It provides two types of storage:

// DiskStorage: Files are directly written to a specified directory.
// MemoryStorage: Files are kept in memory as buffer objects, useful for temporary storage or when further processing is needed before saving.
// File Filtering:
// Multer lets you filter files by type, size, or other criteria using custom logic.

const multar = require('multer')

//The code creates a storage object using multar.diskStorage(), which tells Multar to save files to the computer's disk (like a hard drive) rather than keeping them temporarily in memory. 
const storage = multar.diskStorage({
  filename: function (req, file, callback) { // req: Information about the upload request, file: Details about the file being uploaded ,callback: A function to tell Multar what name to use
    callback(null, file.originalname);  // When someone uploads a file, this code simply keeps the original filename by using file.originalname. For example, if someone uploads "profile-picture.jpg", it will be saved with exactly that name. The callback(null, file.originalname) tells Multar "use this original name and there were no errors" (that's what the null parameter means).
  },
})

// The logic flow is straightforward:
//1. User uploads a file
//2. Multar receives the file
//3. The filename function runs
//4. The original filename is preserved
//5. The file gets saved to disk with its original name

const upload = multar({storage})

module.exports = upload;
