In the [roadmap.sh](https://roadmap.sh) Node.js learning path, **Streams** is a key topic under Node.js, representing a powerful way to handle data efficiently. Below is a concise note explaining Streams and its child nodes—Readable, Writable, Duplex, and Transform—tailored for a junior software engineer, with definitions, purposes, and brief examples.

### Streams in Node.js

**Streams**: A mechanism in Node.js for processing data in chunks rather than loading it all into memory, ideal for handling large or continuous data (e.g., files, network requests).

- **Purpose**: Efficiently manage large datasets, reduce memory usage, and enable real-time data processing.
- **When to Use**: Reading/writing large files, handling HTTP requests, or processing data incrementally.

#### 1. Readable Stream
- **Definition**: A stream that provides data to be read (e.g., from a file or network).
- **Purpose**: Read data in chunks from a source, like a file or HTTP response.
- **Example**:
  ```javascript
  const fs = require("fs");
  const readable = fs.createReadStream("input.txt");
  readable.on("data", (chunk) => console.log(`Read: ${chunk}`));
  ```
  **Use Case**: Reading large files or streaming API responses.

#### 2. Writable Stream
- **Definition**: A stream that accepts data to be written (e.g., to a file or response).
- **Purpose**: Write data in chunks to a destination, like a file or HTTP response.
- **Example**:
  ```javascript
  const fs = require("fs");
  const writable = fs.createWriteStream("output.txt");
  writable.write("Hello, World!");
  writable.end();
  ```
  **Use Case**: Writing logs or saving streamed data to a file.

#### 3. Duplex Stream
- **Definition**: A stream that is both Readable and Writable, allowing simultaneous reading and writing.
- **Purpose**: Handle scenarios where data is read and written in the same stream, like network sockets.
- **Example**:
  ```javascript
  const { Duplex } = require("stream");
  const duplex = new Duplex({
    read() {},
    write(chunk, encoding, callback) {
      console.log(`Received: ${chunk}`);
      callback();
    },
  });
  duplex.write("Data");
  ```
  **Use Case**: WebSockets or TCP connections.

#### 4. Transform Stream
- **Definition**: A Duplex stream that modifies or transforms data as it is read or written.
- **Purpose**: Process data (e.g., compress, encrypt) while streaming, without storing it all in memory.
- **Example**:
  ```javascript
  const { Transform } = require("stream");
  const upperCase = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      callback();
    },
  });
  process.stdin.pipe(upperCase).pipe(process.stdout);
  ```
  **Use Case**: Data compression, encryption, or formatting during streaming.

### Differentiation Table


# Streams in Node.js

**Streams**: Process data in chunks for efficiency, ideal for large or continuous data (files, network).

## Readable Stream
- **Definition**: Reads data in chunks from a source.  
- **Purpose**: Stream data from files, HTTP responses.  
- **Use Case**: Reading large files or API data.  
- **Code**:
  ```javascript
  const fs = require("fs");
  fs.createReadStream("input.txt").on("data", (chunk) => console.log(`Read: ${chunk}`));
  ```

## Writable Stream
- **Definition**: Writes data in chunks to a destination.  
- **Purpose**: Save data to files, responses.  
- **Use Case**: Writing logs or streamed data.  
- **Code**:
  ```javascript
  const fs = require("fs");
  const writable = fs.createWriteStream("output.txt");
  writable.write("Hello, World!");
  ```

## Duplex Stream
- **Definition**: Reads and writes data simultaneously.  
- **Purpose**: Handle bidirectional data (e.g., sockets).  
- **Use Case**: WebSockets, TCP connections.  
- **Code**:
  ```javascript
  const { Duplex } = require("stream");
  const duplex = new Duplex({ write(chunk, enc, cb) { console.log(`Received: ${chunk}`); cb(); } });
  duplex.write("Data");
  ```

## Transform Stream
- **Definition**: Modifies data while streaming.  
- **Purpose**: Transform data (e.g., compress, encrypt).  
- **Use Case**: Data formatting, compression.  
- **Code**:
  ```javascript
  const { Transform } = require("stream");
  const upperCase = new Transform({ transform(chunk, enc, cb) { this.push(chunk.toString().toUpperCase()); cb(); } });
  process.stdin.pipe(upperCase).pipe(process.stdout);
  ```

## Differences
| Stream Type | Definition | Purpose | Use Case |
|-------------|------------|---------|----------|
| **Readable** | Reads data from source | Stream input data | Large file reading, API responses |
| **Writable** | Writes data to destination | Save streamed data | Log writing, file saving |
| **Duplex** | Reads and writes data | Bidirectional data flow | WebSockets, TCP sockets |
| **Transform** | Modifies data while streaming | Process data on-the-fly | Compression, encryption |

