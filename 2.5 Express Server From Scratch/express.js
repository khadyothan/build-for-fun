import events from "events";
import http from "http";

const EventEmitter = events.EventEmitter();

function express() {
  const app = function () {};
  Object.assign(app, proto);
  return app;
}

const proto = {
  listen: function (port, callback) {
    const server = http.createServer(this);
    return server.listen(port, callback);
  },
};

export { express };
