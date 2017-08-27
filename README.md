Client of test project
======================

Simple js application which allow us to search base country information by query string.
Application contains search box and information panel which occurs if any country was selected.
The search starts only if we have at least three chars typed.


IMPORTANT!
----------

Start client only if you have server already started.
You can find server repository here: ```https://github.com/pptp/test20170821```


Install
-------

1. Confirm you have ```npm``` installed

2. Create and open folder you want to use for tis repo:
```
mkdir client
cd ./client
```

3. Clone this repository:
```
git clone https://github.com/pptp/test20170822.git .
```

4. Install ```npm``` dependencies:
```
npm install
```

5. Conigurate project.

Copy configuration file from example:

```
cp src/config.dist.js src/config.js
```

and type there the server api url.
The ```localhost:8080``` is set as default. If you have not changed anything in server and started it on your local machine - you need not change anything there


6. Start client:
```
npm start
```
