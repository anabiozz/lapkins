
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
          LjQ0OTIxOC0xNC4yNjU2MjYtMzkuMzQzNzUtMjEuNS02Mi4wOTc2NTYtMjEuNXptMCAwIi8+PC9zdmc+`
}