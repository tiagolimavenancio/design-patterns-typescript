import { RealSubject } from "./class/RealSubject";
import { LoggingProxy } from "./class/LoggingProxy";
import { AccessProxy } from "./class/AccessProxy";
import { LazyProxy } from "./class/LazyProxy";
import { RemoteProxy } from "./class/RemoteProxy";
import { CacheProxy } from "./class/CacheProxy";
import { RealSubjectCache } from "./class/RealSubjectCache";

function loggingProxyDemo() {
  console.log("----------------");
  console.log("Client: Executing the client code with logging proxy:");
  console.log("----------------");

  const realSubject = new RealSubject();
  const loggingProxy = new LoggingProxy(realSubject);
  loggingProxy.operation();

  console.log("");
}

function accessProxyDemo() {
  console.log("----------------");
  console.log("Client: Executing the client code with access proxy using an admin user:");
  console.log("----------------");

  const adminRealSubject = new RealSubject();
  const adminProxy = new AccessProxy(adminRealSubject, "admin");
  adminProxy.operation();

  console.log("");

  console.log("Client: Executing the client code with access proxy using a guest user:");

  const guestRealSubject = new RealSubject();
  const guestProxy = new AccessProxy(guestRealSubject, "guest");
  guestProxy.operation();

  console.log("");
}

function lazyProxyDemo() {
  console.log("----------------");
  console.log("Client: Executing the client code with lazy proxy :");
  console.log("----------------");

  const lazyProxy = new LazyProxy();
  lazyProxy.operation(); // RealSubject will be created here
  lazyProxy.operation(); // RealSubject already created, no initialization message

  console.log("");
}

function remoteProxyDemo() {
  console.log("----------------");
  console.log("Client: Executing the client code with remote proxy :");
  console.log("----------------");

  const remoteProxy = new RemoteProxy();
  remoteProxy.operation(); // Connection to remote server happens here
  remoteProxy.operation(); // Reuses the existing connection

  console.log("");
}

function cacheProxyDemo() {
  console.log("----------------");
  console.log("Client: Executing the client code with cache proxy:");
  console.log("----------------");

  const realSubjectCache = new RealSubjectCache();
  const cacheProxy = new CacheProxy(realSubjectCache);

  // First request
  cacheProxy.request("example.com/data"); // RealSubject fetches data from example.com
  cacheProxy.request("example.com/data"); // CacheProxy retrieves data from cache

  // Second request
  cacheProxy.request("example.com/another-data"); // RealSubject fetches data from example.com/another-data
  cacheProxy.request("example.com/another-data"); // CacheProxy retrieves data from cache
}

(function main() {
  loggingProxyDemo();
  accessProxyDemo();
  lazyProxyDemo();
  remoteProxyDemo();
  cacheProxyDemo();
})();
