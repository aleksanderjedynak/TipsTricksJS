/**
 *
 * etykietowanie petli 
 *
 */

(function () {
    console.group('EX5 - etykietowanie petli ');
    const data = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "numbers": [1, 7, 70, 36, 8, 3, 15, 6442],
            "website": "hildegard.org",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "numbers": [10, 92, 6, 0, 59, 30, 9125],
            "website": "anastasia.net",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "numbers": [1, 46, 3, 123, 4447],
            "website": "ramiro.info",
        }
    ];

    mainloop: for (let i = 0; i < data.length; i++){
        let num = data[i].numbers;
        for(let j = 0; j < num.length; j++){
            if (num[j] == 0){
                console.log(data[i].id, num);
                break mainloop;
            }
        }
    }

    console.groupEnd('EX5 - etykietowanie petli ')
})();