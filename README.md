# request

Класс request предостовляет потроение цепочки запросов `get(url, options, onResolve, onReject)` 

-`url` 
    - url запроса
-`options` 
    - параметры запроса
-`onResolve`
    - обработкик успешного запроса. Может принимать 2 аркумента, где первый это данные текущго запроса, а второй - данные предыдущего запроса
-`onReject` 
    - обработчик ошибки при запросе
