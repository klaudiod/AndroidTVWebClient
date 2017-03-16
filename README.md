# AndroidTVWebClient
Administration Site

Author: Klaudio Dervishaj

Developed using:

  IDE: IntelliJ 2016.3,
  
  SDK: 1.8,
  
  Application Server: Apache Tomcat 7 or 8,
  
  Application Context: /AndroidTVWebClient,
  
  Frameworks:  
  
   -Spring 4 MVC
   
   -Maven build automation tool to import dependencies (see pom file)
   
   -Jersey 2 RESTful Web Services
 
AndroidTVWebClient connects to AndroidTVServer application to consume Rest API. See hosts.properties:

Use this url to connect to rest services in your dev env (localhost):
url=http://localhost:8080/AndroidTVServer/rest/

Use this url to connect to rest services in server:
url=http://38.98.131.162:58443/AndroidTVServer/rest/

Login using username/password located under user.properties.
