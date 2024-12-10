[video](https://www.youtube.com/watch?v=Q-BpqyOT3a8)

# what is an API

- API --> application program interface

is in general so it stands for application program interface and that's a very broad term there's all kinds of apis uh but we're specifically talking about web apis um there's apis in your computer operating system in your smartphone and even in some refrigerators and so on so um this is very generalized but it's essentially a contract provided by one piece of software to another piece of software uh it usually consists of a structured request and then a structured response so one piece of software says give me this information formatted in this way and I'll give you this data or this function or whatever that response may be. 

## what is a REST 

- rest --> representational State transfer

so it stands for representational State transfer and it's an architecture style for Designing networked applications it works on relying on a stateless client server communication protocol and in almost all cases this is going to be HTTP all right you guys know what HTTP is it's basically the the foundation of the communication of the internet of the web uh every time you load a web page in your browser it's making an HTTP request to a server somewhere um it is possible to use other prot calls with rest but HTTP is by far the most used um because in order to use real world rest you need the delivery methods that HTTP offers um rest was made to treat objects on the server side as resources that can be created updated and destroyed or deleted um an example of a serers side object would be a blog post in a database or something like that okay um we can have we can create these posts with uh a post request um a delete with a delete request and so on all right and what makes rest so awesome is that uh it operates using just HTTP uh and usually some kind of standard like Json so it can be used by virtually any programming language uh because most of the the good languages can make HTTP requests in some way whether it's PHP JavaScript rails Java python all of these languages are perfectly capable of working with restful interfaces all right so hopefully I haven't lost you yet just remember an API is is the messenger and rest lets us use HTTP requests to format those messages um you you may also hear the term restful API and that just refers to um conforming to the rest constraints so rest API and restful API are essentially the same thing.

### the specific methods and requests that can be made to a server through HTTP:
1. GET -> get request --> get data or retrieve data from a specified resource.
2. POST -> post request --> submit data to be processed to a specified resource.
3. PUT -> put request --> update a specified resource (usually you would have to send a request to an endpoint which is a URI with some kind of ID (the server needs to know which one you want to update))
4. DELETE -> delete request --> delete a specified resource (on a server and again you have to let the server know what you're deleting so you want to send an ID along with that).

- there are other types of requests but they're very rarely used 
    - HEAD -> a head request --> is the same as get except it doesn't return a body in the response it'll only return the head info. 
    - OPTIONS -> Returns the supported HTTP methods (options can be used to see the supported methods of a server).
    - PATCH -> patch is for partial resources updating partial resources.

*endpoints* -> are the URI or the URL that our HTTP requests are sent to.

- [GitHub REST API documentation](https://docs.github.com/en/rest?apiVersion=2022-11-28)
    - [user REST API](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28)
    - [GitHub API](https://www.youtube.com/watch?v=Q-BpqyOT3a8&t=696s)
    - [What is an API?](https://www.youtube.com/watch?v=s7wmiS2mSXY&t=129s)
    - > API is the messenger that takes requests and tells a system what you want to do and then returns the response back to you. 
    - > to give you a familiar example think of an API as a we're in a restaurant imagine you're sitting at the table with a menu of choices to order from in the kitchen is the part of the system which will prepare your order what's missing is the critical link to communicate your order to the kitchen and deliver your food back to your table that's where the waiter or API comes in M the waiter is the messenger that takes your request or order and tells the system in this case the kitchen what to do and then delivers the response back to you in this case food now that we've whetted your appetite.
    - > now you can see that it's API is that make it possible for us all to use travel sites the same goes for all interactions between applications data and devices they all have api's that allow computers to operate them and that's what ultimately creates connectivity so whenever you think of an API just think of it as your waiter running back and forth between applications databases and devices to deliver data and create the connectivity that puts the world at our fingertips and whenever you think of creating an API think mule soft.
***
