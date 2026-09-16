// src/handlers/hello.ts
var handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "TaskPulse API is running!"
    })
  };
};
export {
  handler
};
//# sourceMappingURL=hello.js.map
