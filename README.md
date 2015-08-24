This project can be used for Interaction Connect addin development.  It will create a locally running web server that can proxy to a production or centrally
 located dev version of Interaction Connect, but still let you run your addin locally to test changes.  This has the advantage that you don't need to
 also run Interaction Connect locally or copy addin files to a remote server to test.

 This node server will setup proxies in this order

 http://localhost:8080/addins -> local src directory
 http://localhost:8080/config/addins.json -> local config/addins.json
 http://localhost:8080/api/ -> Proxy to ICWS on the CIC server
 Anything else -> proxied on to the configured Interaction Connect url


#Getting started
- Clone or copy the source locally.
- Copy development_config_temp.json to development_config.json
- Edit the value of 'connecturl' in development_config.json to the url of the Interaction Connect client you want to use
- To create a new addin, create a new subfolder under /src
- edit config/addins.json to specify your new addin, an example addin has been created at /src/angular_demo_addin

##Running the local server
- make sure nodejs and npm are installed https://nodejs.org/
- from the root directory, run `npm install`
- start the server with `npm start`
- browse to http://localhost:8080, Interaction Connect should load from here.
