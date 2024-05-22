export type ReadMessage = {
  type: "memory-read";
  address: number;
  response: (value: number) => void;
};

export type WriteMessage = {
  type: "memory-write";
  value: number;
  address: number;
  response: (wasOK: boolean) => void;
};

export type CPUMemoryMessages = ReadMessage | WriteMessage;
