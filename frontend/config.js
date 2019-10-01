
export default {
  baseDomain: "http://127.0.0.1:8080",
  apiDomain: "http://127.0.0.1:8081",
  imagePath: {
    "full": process.env.HOME + "/images/full/",
    "preview": process.env.HOME + "/images/preview/",
    "dev_path_preview": "/static/images/preview/",
    "dev_path_full": "/static/images/full/",
  },
  data: [
    {
      "id": 1, 
      "name": "1", 
      "ext": ".jpg", 
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription": "Enim duis ad excepteur ut cillum nisi consectetur esse velit aute cillum tempor eu.", 
      "price": 50
    },
    {
      "id": 2, 
      "name": "2", 
      "ext": ".jpg", 
      "categories": 
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription": "Ex cillum cupidatat sit cupidatat excepteur sit deserunt pariatur veniam velit.", 
      "price": 50,
    },
    {  
      "id":3,
      "name":"3",
      "ext":".jpg",
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription":"Veniam minim tempor magna minim ea.",
      "price":50
   },
   {  
      "id":4,
      "name":"4",
      "ext":".jpg",
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription":"Labore deserunt do quis aute elit amet sunt.",
      "price":50
   },
   {  
      "id":5,
      "name":"5",
      "ext":".jpg",
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription":"dasdwdqQuis voluptate consectetur reprehenderit excepteur irure exercitation exercitation veniam et nisi Lorem consequat.wdq",
      "price":50
   },
   {  
      "id":6,
      "name":"6",
      "ext":".jpg",
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription":"Ut sunt aute enim occaecat excepteur.",
      "price":50
   },
   {  
      "id":7,
      "name":"7",
      "ext":".jpg",
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription":"Aliqua voluptate eu eiusmod cillum fugiat id aute.",
      "price":50
   },
   {  
      "id":8,
      "name":"8",
      "ext":".jpg",
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription":"Ut laborum deserunt enim culpa nostrud id reprehenderit veniam elit ad qui aliqua nisi.",
      "price":50
   },
   {  
      "id":9,
      "name":"9",
      "ext":".jpg",
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription":"Sint qui voluptate tempor pariatur id quis esse ipsum irure.",
      "price":50
   },
   {  
      "id":10,
      "name":"10",
      "ext":".jpg",
      "categories":
      {
        "authors":["lapkins", "zhopkins"],
        "material": "240 g/m² pure white paper",
        "finish": "Semi-gloss",
        "print type": "12-colour digital printing",
      }, 
      "decription":"Qui non cupidatat anim dolor sunt et eu reprehenderit.",
      "price":50
   }
  ],
  productTypes: {
    "wallart": 1,
    "stationary": 2,
    "gifts": 3, 
    "wraps": 4,
    "posters": 5,
    "framed-posters": 6,
    "framed-posters-wood": 7,
  },
  heart: `PHN2ZyB2aWV3Qm94PSIwIC0yOCA1MTIuMDAxIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBk
          PSJtMjU2IDQ1NS41MTU2MjVjLTcuMjg5MDYyIDAtMTQuMzE2NDA2LTIuNjQwNjI1LTE5Ljc5Mjk2OS03LjQzNzUtMjAuNjgzNTkz
          LTE4LjA4NTkzNy00MC42MjUtMzUuMDgyMDMxLTU4LjIxODc1LTUwLjA3NDIxOWwtLjA4OTg0My0uMDc4MTI1Yy01MS41ODIwMzIt
          NDMuOTU3MDMxLTk2LjEyNS04MS45MTc5NjktMTI3LjExNzE4OC0xMTkuMzEyNS0zNC42NDQ1MzEtNDEuODA0Njg3LTUwLjc4MTI1
          LTgxLjQ0MTQwNi01MC43ODEyNS0xMjQuNzQyMTg3IDAtNDIuMDcwMzEzIDE0LjQyNTc4MS04MC44ODI4MTMgNDAuNjE3MTg4LTEw
          OS4yOTI5NjkgMjYuNTAzOTA2LTI4Ljc0NjA5NCA2Mi44NzEwOTMtNDQuNTc4MTI1IDEwMi40MTQwNjItNDQuNTc4MTI1IDI5LjU1
          NDY4OCAwIDU2LjYyMTA5NCA5LjM0Mzc1IDgwLjQ0NTMxMiAyNy43Njk1MzEgMTIuMDIzNDM4IDkuMzAwNzgxIDIyLjkyMTg3NiAy
          MC42ODM1OTQgMzIuNTIzNDM4IDMzLjk2MDkzOCA5LjYwNTQ2OS0xMy4yNzczNDQgMjAuNS0yNC42NjAxNTcgMzIuNTI3MzQ0LTMz
          Ljk2MDkzOCAyMy44MjQyMTgtMTguNDI1NzgxIDUwLjg5MDYyNS0yNy43Njk1MzEgODAuNDQ1MzEyLTI3Ljc2OTUzMSAzOS41Mzkw
          NjMgMCA3NS45MTAxNTYgMTUuODMyMDMxIDEwMi40MTQwNjMgNDQuNTc4MTI1IDI2LjE5MTQwNiAyOC40MTAxNTYgNDAuNjEzMjgx
          IDY3LjIyMjY1NiA0MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MS0xNi4xMzI4MTIgODIuOTM3NS01MC43NzczNDQgMTI0
          LjczODI4MS0zMC45OTIxODcgMzcuMzk4NDM3LTc1LjUzMTI1IDc1LjM1NTQ2OS0xMjcuMTA1NDY4IDExOS4zMDg1OTQtMTcuNjI1
          IDE1LjAxNTYyNS0zNy41OTc2NTcgMzIuMDM5MDYyLTU4LjMyODEyNiA1MC4xNjc5NjktNS40NzI2NTYgNC43ODkwNjItMTIuNTAz
          OTA2IDcuNDI5Njg3LTE5Ljc4OTA2MiA3LjQyOTY4N3ptLTExMi45Njg3NS00MjUuNTIzNDM3Yy0zMS4wNjY0MDYgMC01OS42MDU0
          NjkgMTIuMzk4NDM3LTgwLjM2NzE4OCAzNC45MTQwNjItMjEuMDcwMzEyIDIyLjg1NTQ2OS0zMi42NzU3ODEgNTQuNDQ5MjE5LTMy
          LjY3NTc4MSA4OC45NjQ4NDQgMCAzNi40MTc5NjggMTMuNTM1MTU3IDY4Ljk4ODI4MSA0My44ODI4MTMgMTA1LjYwNTQ2OCAyOS4z
          MzIwMzEgMzUuMzk0NTMyIDcyLjk2MDkzNyA3Mi41NzQyMTkgMTIzLjQ3NjU2MiAxMTUuNjI1bC4wOTM3NS4wNzgxMjZjMTcuNjYw
          MTU2IDE1LjA1MDc4MSAzNy42Nzk2ODggMzIuMTEzMjgxIDU4LjUxNTYyNSA1MC4zMzIwMzEgMjAuOTYwOTM4LTE4LjI1MzkwNyA0
          MS4wMTE3MTktMzUuMzQzNzUgNTguNzA3MDMxLTUwLjQxNzk2OSA1MC41MTE3MTktNDMuMDUwNzgxIDk0LjEzNjcxOS04MC4yMjI2
          NTYgMTIzLjQ2ODc1LTExNS42MTcxODggMzAuMzQzNzUtMzYuNjE3MTg3IDQzLjg3ODkwNy02OS4xODc1IDQzLjg3ODkwNy0xMDUu
          NjA1NDY4IDAtMzQuNTE1NjI1LTExLjYwNTQ2OS02Ni4xMDkzNzUtMzIuNjc1NzgxLTg4Ljk2NDg0NC0yMC43NTc4MTMtMjIuNTE1
          NjI1LTQ5LjMwMDc4Mi0zNC45MTQwNjItODAuMzYzMjgyLTM0LjkxNDA2Mi0yMi43NTc4MTIgMC00My42NTIzNDQgNy4yMzQzNzQt
          NjIuMTAxNTYyIDIxLjUtMTYuNDQxNDA2IDEyLjcxODc1LTI3Ljg5NDUzMiAyOC43OTY4NzQtMzQuNjA5Mzc1IDQwLjA0Njg3NC0z
          LjQ1MzEyNSA1Ljc4NTE1Ny05LjUzMTI1IDkuMjM4MjgyLTE2LjI2MTcxOSA5LjIzODI4MnMtMTIuODA4NTk0LTMuNDUzMTI1LTE2
          LjI2MTcxOS05LjIzODI4MmMtNi43MTA5MzctMTEuMjUtMTguMTY0MDYyLTI3LjMyODEyNC0zNC42MDkzNzUtNDAuMDQ2ODc0LTE4
          LjQ0OTIxOC0xNC4yNjU2MjYtMzkuMzQzNzUtMjEuNS02Mi4wOTc2NTYtMjEuNXptMCAwIi8+PC9zdmc+`,
  cart: `PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhd
         G9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW
         9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly9
         3d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzguMTMzIDM4LjEzMyIgc3R5bGU9
         ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzguMTMzIDM4LjEzMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhd
         Gggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0zNS40NTksOS4wMTVoLTguMTQ4VjEuMjUzYzAtMC4zNDUtMC4yOC0wLjYyNS0wLj
         YyNS0wLjYyNWgtMTUuMjRjLTAuMzQ1LDAtMC42MjUsMC4yOC0wLjYyNSwwLjYyNQ0KCQl2Ny43NjJIMi42NzRjLTAuMzI1LDAtMC4
         1OTksMC4yNTQtMC42MjMsMC41NzhMMC4wMDIsMzYuODM0Yy0wLjAxMywwLjE3MywwLjA0NywwLjM0NSwwLjE2NCwwLjQ3DQoJCWMw
         LjExNywwLjEyOCwwLjI4NCwwLjIwMSwwLjQ1OSwwLjIwMWgzNi44ODRjMC4xNzUsMCwwLjM0Mi0wLjA3MywwLjQ1OC0wLjJjMC4xM
         TgtMC4xMjYsMC4xNzgtMC4yOTgsMC4xNjUtMC40NzJsLTIuMDQ5LTI3LjI0DQoJCUMzNi4wNTksOS4yNjksMzUuNzg1LDkuMDE1LD
         M1LjQ1OSw5LjAxNXogTTI2LjY4NiwxMi45NzZjMC4zMTYsMCwwLjU3MywwLjI1NiwwLjU3MywwLjU3YzAsMC4zMTUtMC4yNTcsMC4
         1NzItMC41NzMsMC41NzINCgkJcy0wLjU3My0wLjI1Ny0wLjU3My0wLjU3MkMyNi4xMTMsMTMuMjMyLDI2LjM3LDEyLjk3NiwyNi42
         ODYsMTIuOTc2eiBNMTIuMDcxLDEuODc5aDEzLjk5djcuMTM3aC0xMy45OVYxLjg3OXogTTExLjQ0NiwxMi45NzYNCgkJYzAuMzE2L
         DAsMC41NzMsMC4yNTYsMC41NzMsMC41N2MwLDAuMzE1LTAuMjU3LDAuNTcyLTAuNTczLDAuNTcycy0wLjU3My0wLjI1Ny0wLjU3My
         0wLjU3Mg0KCQlDMTAuODczLDEzLjIzMiwxMS4xMywxMi45NzYsMTEuNDQ2LDEyLjk3NnogTTEuMjk4LDM2LjI1NmwxLjk1NS0yNS4
         5OWg3LjU2OHYxLjU3OGMtMC42OTcsMC4yNTYtMS4xOTgsMC45Mi0xLjE5OCwxLjcwMw0KCQljMCwxLjAwNSwwLjgxOCwxLjgyMiwx
         LjgyMywxLjgyMnMxLjgyMy0wLjgxNywxLjgyMy0xLjgyMmMwLTAuNzgzLTAuNTAxLTEuNDQ3LTEuMTk4LTEuNzAzdi0xLjU3OGgxM
         y45OXYxLjU3OA0KCQljLTAuNjk3LDAuMjU2LTEuMTk4LDAuOTItMS4xOTgsMS43MDNjMCwxLjAwNSwwLjgxOCwxLjgyMiwxLjgyMy
         wxLjgyMmMxLjAwNSwwLDEuODIzLTAuODE3LDEuODIzLTEuODIyDQoJCWMwLTAuNzgzLTAuNTAxLTEuNDQ3LTEuMTk4LTEuNzAzdi0
         xLjU3OGg3LjU2OWwxLjk1NSwyNS45OUgxLjI5OHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn
         Pg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KP
         Gc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K`,
  search: `PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJ
           hdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZX
           JzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0d
           HA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEuOTk3IDUxLjk5NyIg
           c3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEuOTk3IDUxLjk5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc
           +DQoJPHBhdGggZD0iTTUxLjkxMSwxNi4yNDJDNTEuMTUyLDcuODg4LDQ1LjIzOSwxLjgyNywzNy44MzksMS44MjdjLTQuOTMsMC
           05LjQ0NCwyLjY1My0xMS45ODQsNi45MDUNCgkJYy0yLjUxNy00LjMwNy02Ljg0Ni02LjkwNi0xMS42OTctNi45MDZjLTcuMzk5L
           DAtMTMuMzEzLDYuMDYxLTE0LjA3MSwxNC40MTVjLTAuMDYsMC4zNjktMC4zMDYsMi4zMTEsMC40NDIsNS40NzgNCgkJYzEuMDc4
           LDQuNTY4LDMuNTY4LDguNzIzLDcuMTk5LDEyLjAxM2wxOC4xMTUsMTYuNDM5bDE4LjQyNi0xNi40MzhjMy42MzEtMy4yOTEsNi4
           xMjEtNy40NDUsNy4xOTktMTIuMDE0DQoJCUM1Mi4yMTYsMTguNTUzLDUxLjk3LDE2LjYxMSw1MS45MTEsMTYuMjQyeiBNNDkuNT
           IxLDIxLjI2MWMtMC45ODQsNC4xNzItMy4yNjUsNy45NzMtNi41OSwxMC45ODVMMjUuODU1LDQ3LjQ4MUw5LjA3MiwzMi4yNQ0KC
           QljLTMuMzMxLTMuMDE4LTUuNjExLTYuODE4LTYuNTk2LTEwLjk5Yy0wLjcwOC0yLjk5Ny0wLjQxNy00LjY5LTAuNDE2LTQuNzAx
           bDAuMDE1LTAuMTAxQzIuNzI1LDkuMTM5LDcuODA2LDMuODI2LDE0LjE1OCwzLjgyNg0KCQljNC42ODcsMCw4LjgxMywyLjg4LDE
           wLjc3MSw3LjUxNWwwLjkyMSwyLjE4M2wwLjkyMS0yLjE4M2MxLjkyNy00LjU2NCw2LjI3MS03LjUxNCwxMS4wNjktNy41MTQNCg
           kJYzYuMzUxLDAsMTEuNDMzLDUuMzEzLDEyLjA5NiwxMi43MjdDNDkuOTM4LDE2LjU3LDUwLjIyOSwxOC4yNjQsNDkuNTIxLDIxL
           jI2MXoiLz4NCgk8cGF0aCBkPSJNMTUuOTk5LDcuOTA0Yy01LjUxNCwwLTEwLDQuNDg2LTEwLDEwYzAsMC41NTMsMC40NDcsMSwx
           LDFzMS0wLjQ0NywxLTFjMC00LjQxMSwzLjU4OS04LDgtOGMwLjU1MywwLDEtMC40NDcsMS0xDQoJCVMxNi41NTEsNy45MDQsMTU
           uOTk5LDcuOTA0eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz
           4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KP
           C9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=`,
  user: `PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhd
         G9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW
         9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly9
         3d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUt
         YmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNDguMDE0LDQyLjg4OWwtO
         S41NTMtNC43NzZDMzcuNTYsMzcuNjYyLDM3LDM2Ljc1NiwzNywzNS43NDh2LTMuMzgxYzAuMjI5LTAuMjgsMC40Ny0wLjU5OSwwLj
         cxOS0wLjk1MQ0KCWMxLjIzOS0xLjc1LDIuMjMyLTMuNjk4LDIuOTU0LTUuNzk5QzQyLjA4NCwyNC45Nyw0MywyMy41NzUsNDMsMjJ
         2LTRjMC0wLjk2My0wLjM2LTEuODk2LTEtMi42MjV2LTUuMzE5DQoJYzAuMDU2LTAuNTUsMC4yNzYtMy44MjQtMi4wOTItNi41MjVD
         MzcuODU0LDEuMTg4LDM0LjUyMSwwLDMwLDBzLTcuODU0LDEuMTg4LTkuOTA4LDMuNTNDMTcuNzI0LDYuMjMxLDE3Ljk0NCw5LjUwN
         iwxOCwxMC4wNTYNCgl2NS4zMTljLTAuNjQsMC43MjktMSwxLjY2Mi0xLDIuNjI1djRjMCwxLjIxNywwLjU1MywyLjM1MiwxLjQ5Ny
         wzLjEwOWMwLjkxNiwzLjYyNywyLjgzMyw2LjM2LDMuNTAzLDcuMjM3djMuMzA5DQoJYzAsMC45NjgtMC41MjgsMS44NTYtMS4zNzc
         sMi4zMmwtOC45MjEsNC44NjZDOC44MDEsNDQuNDI0LDcsNDcuNDU4LDcsNTAuNzYyVjU0YzAsNC43NDYsMTUuMDQ1LDYsMjMsNnMy
         My0xLjI1NCwyMy02di0zLjA0Mw0KCUM1Myw0Ny41MTksNTEuMDg5LDQ0LjQyNyw0OC4wMTQsNDIuODg5eiBNNTEsNTRjMCwxLjM1N
         y03LjQxMiw0LTIxLDRTOSw1NS4zNTcsOSw1NHYtMy4yMzhjMC0yLjU3MSwxLjQwMi00LjkzNCwzLjY1OS02LjE2NA0KCWw4LjkyMS
         00Ljg2NkMyMy4wNzMsMzguOTE3LDI0LDM3LjM1NCwyNCwzNS42NTV2LTQuMDE5bC0wLjIzMy0wLjI3OGMtMC4wMjQtMC4wMjktMi4
         0NzUtMi45OTQtMy40MS03LjA2NWwtMC4wOTEtMC4zOTZsLTAuMzQxLTAuMjINCglDMTkuMzQ2LDIzLjMwMywxOSwyMi42NzYsMTks
         MjJ2LTRjMC0wLjU2MSwwLjIzOC0xLjA4NCwwLjY3LTEuNDc1TDIwLDE2LjIyOFYxMGwtMC4wMDktMC4xMzFjLTAuMDAzLTAuMDI3L
         TAuMzQzLTIuNzk5LDEuNjA1LTUuMDIxDQoJQzIzLjI1MywyLjk1OCwyNi4wODEsMiwzMCwyYzMuOTA1LDAsNi43MjcsMC45NTEsOC
         4zODYsMi44MjhjMS45NDcsMi4yMDEsMS42MjUsNS4wMTcsMS42MjMsNS4wNDFMNDAsMTYuMjI4bDAuMzMsMC4yOTgNCglDNDAuNzY
         yLDE2LjkxNiw0MSwxNy40MzksNDEsMTh2NGMwLDAuODczLTAuNTcyLDEuNjM3LTEuNDIyLDEuODk5bC0wLjQ5OCwwLjE1M2wtMC4x
         NiwwLjQ5NWMtMC42NjksMi4wODEtMS42MjIsNC4wMDMtMi44MzQsNS43MTMNCgljLTAuMjk3LDAuNDIxLTAuNTg2LDAuNzk0LTAuO
         DM3LDEuMDc5TDM1LDMxLjYyM3Y0LjEyNWMwLDEuNzcsMC45ODMsMy4zNjEsMi41NjYsNC4xNTNsOS41NTMsNC43NzYNCglDNDkuNT
         EzLDQ1Ljg3NCw1MSw0OC4yOCw1MSw1MC45NTdWNTR6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjw
         vZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0K
         PC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==`
}