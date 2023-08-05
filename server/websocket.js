import WebSocket from "ws";
import Message from "../models/message";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", async (message) => {
    try {
      const { sender, receiver, content } = JSON.parse(message);

      // Save the message to MongoDB
      const newMessage = await Message.create({ sender, receiver, content });

      // Broadcast the message to the recipient's WebSocket connections
      wss.clients.forEach((client) => {
        if (client !== ws && client.user === receiver) {
          client.send(JSON.stringify(newMessage));
        }
      });
    } catch (error) {
      console.error("Error handling WebSocket message:", error);
    }
  });

  ws.on("close", () => {
    // Handle WebSocket connection closure
    console.log("WebSocket connection closed");
  });
});
