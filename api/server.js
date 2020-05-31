const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')


const items = [{id:1,link:'#',code:34534345,imgUrl:'product.jpg',availability:true,title:'Canon PowerShot SX400 IS с улучшенной матрицей и объективом',params:[{name:'Физический размер',value:'23.2 x 15.2 мм'},{name:'Диафрагма',value:'CMOS'},{name:'Формат записи',value:'RAW, JPEG, MP4 и другие'},{name:'Фокусное расстояние',value:'18-55 мм'}],inFav:true,inComparsion:false}, {id:2,link:'#',code:34534345,imgUrl:'product.jpg',availability:true,title:'Nikon PowerShot SX400 IS с улучшенной матрицей и объективом',params:[{name:'Физический размер',value:'23.2 x 15.2 мм'},{name:'Диафрагма',value:'CMOS'},{name:'Формат записи',value:'RAW, JPEG, MP4 и другие'},{name:'Фокусное расстояние',value:'18-55 мм'}],inFav:true,inComparsion:false}, {id:3,link:'#',code:34534345,imgUrl:'product.jpg',availability:true,title:'Leika с улучшенной матрицей и объективом',params:[{name:'Физический размер',value:'23.2 x 15.2 мм'},{name:'Диафрагма',value:'CMOS'},{name:'Формат записи',value:'RAW, JPEG, MP4 и другие'},{name:'Фокусное расстояние',value:'18-55 мм'}],inFav:true,inComparsion:false}]

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',  (req, res) => {
    res.json(items)
})

// Добавить в избранное
app.post('/favorit',  (req, res) => {
    const itemId =  req.body.id
    const current = items.find(item => item.id === itemId)
    current.inFav = !current.inFav
    let map = new Map()
    map.set(itemId, current.inFav)
    res.json(Array.from(map))
})

//Фильтры
app.post('/filter',  (req, res) => {
    const filters = req.body
    if (filters.length) {
        let filteredItems = [];
        items.forEach(item => {
            for (let i = 0; i < filters.length; i++){
                if (item.title.indexOf(filters[i]) > -1) {
                    filteredItems.push(item)
                }
            }
        })
        res.json(filteredItems)
    } else {
        res.json(items)
    }
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})
