interface ListenerFunction {
    (data: any): void;
}

interface EventEmitter {
    on(evName: string, listener: ListenerFunction): () => void;
    emit(evName: string, data: any): void;
}

function createEventEmitter(): EventEmitter {
    const listenersMap: { [evName: string]: ListenerFunction[] } = {};
    // Trick for DEBUG
    (window as any).mapmap = listenersMap;

    return {
        on(evName, listener) {
            listenersMap[evName] = listenersMap[evName] ? [...listenersMap[evName], listener] : [listener];
            return () => {
                listenersMap[evName] = listenersMap[evName].filter(func => func !== listener);
            };
        },
        emit(evName, data) {
            if (!listenersMap[evName]) return;
            listenersMap[evName].forEach(listener => listener(data));
        }
    };
}

export const eventBusService: EventEmitter = createEventEmitter();

export function showUserMsg(msg: any, styles: Record<string, any> = {}) {
    eventBusService.emit('show-user-msg', { ...msg, styles });
}

export function showSuccessMsg(msg: any, styles: Record<string, any> = {}) {
    showUserMsg({ ...msg, type: 'success' }, styles);
}

export function showErrorMsg(msg: any, styles: Record<string, any> = {}) {
    showUserMsg({ ...msg, type: 'error' }, styles);
}
