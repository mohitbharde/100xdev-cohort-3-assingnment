import { prisma } from "@repo/database/client";
interface messageQueueInterface {
  roomId: number;
  userId: number;
  message: string;
}

const messageQueue: messageQueueInterface[] = [];

async function dbprocess() {
  try {
    if (messageQueue.length > 0) {
      await prisma.chat.createMany({
        data: messageQueue,
      });
      messageQueue.length = 0;
    }
  } catch (error) {
    console.log(
      "error encounter while submitting the message to database : ",
      error
    );
  }
}

function startdbProcess() {
  console.log(
    "started the background process for storing the message in database."
  );
  setInterval(dbprocess, 3 * 60 * 1000);
}

export { messageQueue, startdbProcess };
