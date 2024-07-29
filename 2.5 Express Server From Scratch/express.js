import events from "events";
import http from "http";

const EventEmitter = events.EventEmitter();

function express() {
  const app = function (req, res) {
    app.handle(req, res);
  };

  Object.assign(app, proto);
  return app;
}

const proto = Object.create(events.EventEmitter.prototype);

proto.listen = function (port, callback) {
  const server = http.createServer(this);
  return server.listen(port, callback);
};

export { express };
