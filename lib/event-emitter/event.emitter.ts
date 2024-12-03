export class EventEmitter {
  private events: Record<string, ((data: unknown) => void)[]> = {};

  on(event: string, cb: (data: unknown) => void) {
    const events = this.events[event];
    if (events) {
      events.push(cb);
    } else {
      this.events[event] = [cb];
    }
    return () => this.off(event, cb);
  }

  off(event: string, cb: (data: unknown) => void) {
    const handlers = this.events[event];
    if (!handlers) {
      return;
    }
    this.events[event] = handlers.filter((handler) => handler !== cb);
  }

  emit(event: string, data: unknown) {
    const handlers = this.events[event] || [];
    handlers.forEach((handler) => handler(data));
  }

  once(event: string, cb: (data: unknown) => void) {
    const onceCb: typeof cb = (data) => {
      this.off(event, onceCb);
      cb(data);
    };
    return this.on(event, onceCb);
  }

  offAll() {
    this.events = {};
  }
}
