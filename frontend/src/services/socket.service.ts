// import io from 'socket.io-client';

// const baseUrl = process.env.NODE_ENV === 'production' ? '' : '//localhost:3030';

// interface SocketService {
//   setup: () => void;
//   on: (eventName: string, cb: (...args: any[]) => void) => void;
//   off: (eventName: string, cb?: (...args: any[]) => void | null) => void;
//   emit: (eventName: string, data: any) => void;
//   login: (eventName: string, userId: any) => void;
//   logout: (eventName: string) => void;
//   terminate: () => void;
// }

// export const socketService: SocketService = createSocketService();

// // For debugging from console
// (window as any).socketService = socketService;

// socketService.setup();

// function createSocketService(): SocketService {
//   let socket: SocketIOClient.Socket | null = null;

//   const socketService: SocketService = {
//     setup() {
//       socket = io(baseUrl);
//     },
//     on(eventName, cb) {
//       if (socket) socket.on(eventName, cb);
//     },
//     off(eventName, cb = null) {
//       if (!socket) return;
//       if (!cb) socket.removeAllListeners(eventName);
//       else socket.off(eventName, cb);
//     },
//     emit(eventName, data) {
//       if (socket) socket.emit(eventName, data);
//     },
//     login(eventName, userId) {
//       if (socket) socket.emit(eventName, userId);
//     },
//     logout(eventName) {
//       if (socket) socket.emit(eventName);
//     },
//     terminate() {
//       socket = null;
//     },
//   };

//   return socketService;
// }