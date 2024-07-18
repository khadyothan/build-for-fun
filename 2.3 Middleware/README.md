# Middleware

1. Middleware works as something in between client and server, that can actually go ahead and changed the aspects of the request or perform various functions on that request before it goes to its final routing.

2. Middleware can be used for logging the requests. So how long it took the request to come through, what type of request GET, PUT, POST, etc.

3. We can also use Middeware for Authentication. So before we let the request through to our backend handlers, we can see if that request actually came from a client that is authourized to make the request.

4. It helps to allow us to process any errors in the request, and handle those errors before they go through to the handlers as well.

5. Therefore, a number of functions can be performed basically before we allow the request through.

6. Node.js body parsing middleware

# Body Parser

1. It belongs to pre-processing category of middlewares.

# Morgan

1. It belongs to logging category of middlewares.

# Custom or DIY Middlewares

1. The order of middlewares is important for next() method to know which middleware to proceed with next

2. 
