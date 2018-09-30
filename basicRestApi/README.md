# nodepills.js/basicRestApi

Simple ***Http REST Api*** done as homework 1 of the course [The Node.js Master Class](https://pirple.thinkific.com/courses/the-nodejs-master-class).


## Description
***Homework Assignment #1***

The server listens on the port ***3000*** and when someone posts anything to the route ***/hello***, it returns a welcome message, in JSON format.

## Release notes
Minor changes to the code seen during the course.


## Prerequisites:
1. ***Node.js*** installed on the PC. You can download it [here]( https://nodejs.org).
2. Download the ***nodepills.js*** scripts collections from GitHub. You can find it [here](https://github.com/ioclaudio/nodepills.js).

## How to run the script?
1. Enter in the directory basicHttpServer:
    ```
        cd basicRestApi
    ```
3. Execute the script:
    ```
        node index.js
    ```
4. Open a Json Rest client such as [Postman](https://www.getpostman.com/) or [Advanced Rest Client](https://chrome.google.com/webstore/detail/advanced-rest-client).
 
5. Configure the client to send a GET request to this url:
    ```
        http://localhost:3000/hello
    ```

The message ***Json*** response:

    ```
        {
        'status': '0',
        'data':'Hi bro, you are welcome.'
        }
    ```
should be visible in the Rest client.

That's it.
