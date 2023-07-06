const bodyParser = require('body-parser')
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/api/mock/db.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(bodyParser.json());

// Обработчик PUT /claim/:id/assign с body {assignee:""}
//assignee - username пользователя,примитивноЮ на пойдет пока бэка нет, пока не совсем как надо работает, да и не сильно понятно что необходимо сделать, исправлю, методы будут_)
server.put('/claim/:id/assign', (req, res) => {
    const claimId = parseInt(req.params.id);
    const db = router.db;
    const claim = db.get('claim').find({ id: claimId }).value();
//add
    if (claim) {
        const assignee = req.body?.assignee;
        let c  = db.get('claim').find({ id: claimId });
        if(!assignee || assignee === ""){
            c.assign({state: "IN_PROGRESS"})
        }else{
            c.assign({ assignee }).write();
        }

        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
//запуск - node .\src\api\mock\mockServer.ts, пока прототип