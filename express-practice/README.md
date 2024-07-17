# HTTP Vocabulary

1. `GET` - request resource from the server
2. `POST` - send resource to the server

`PUT and Patch are update methods` (Amazon analogy)

3. `PUT` - replace resource
4. `PATCH` - patch up a resource
5. `DELETE` - delete a resource in the server or database (made by the client)

# Middleware

1. Middleware works as something in between client and server, that can actually go ahead and changed the aspects of the request or perform various functions on that request before it goes to its final routing.

2. Middleware can be used for logging the requests. So how long it took the request to come through, what type of request GET, PUT, POST, etc.

3. We can also use Middeware for Authentication. So before we let the request through to our backend handlers, we can see if that request actually came from a client that is authourized to make the request.

4. It helps to allow us to process any errors in the request, and handle those errors before they go through to the handlers as well.

5. Therefore, a number of functions can be performed basically before we allow the request through.

6. Node.js body parsing middleware
