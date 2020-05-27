const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')


const items = [{id:1,link:'#',code:34534345,imgUrl:'product.jpg',availability:true,title:'Canon PowerShot SX400 IS с улучшенной матрицей и объективом',params:[{name:'Физический размер',value:'23.2 x 15.2 мм'},{name:'Диафрагма',value:'CMOS'},{name:'Формат записи',value:'RAW, JPEG, MP4 и другие'},{name:'Фокусное расстояние',value:'18-55 мм'}],inFav:true,inComparsion:false}, {id:2,link:'#',code:34534345,imgUrl:'product.jpg',availability:true,title:'Nikon PowerShot SX400 IS с улучшенной матрицей и объективом',params:[{name:'Физический размер',value:'23.2 x 15.2 мм'},{name:'Диафрагма',value:'CMOS'},{name:'Формат записи',value:'RAW, JPEG, MP4 и другие'},{name:'Фокусное расстояние',value:'18-55 мм'}],inFav:true,inComparsion:false}, {id:3,link:'#',code:34534345,imgUrl:'product.jpg',availability:true,title:'Leika с улучшенной матрицей и объективом',params:[{name:'Физический размер',value:'23.2 x 15.2 мм'},{name:'Диафрагма',value:'CMOS'},{name:'Формат записи',value:'RAW, JPEG, MP4 и другие'},{name:'Фокусное расстояние',value:'18-55 мм'}],inFav:true,inComparsion:false}]

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', async (req, res) => {
    // console.log(items.filter(item=>item.title.indexOf('Canon') > -1))
    res.json(items)
})

// Добавить в избранное
app.post('/favorit', async (req, res) => {
    const favorite = await req.body.id
    const current = items.find(item => item.id === favorite)
    current.inFav = !current.inFav
    res.json(current)
})

//Фильтры
app.post('/filter', async (req, res) => {
    const favorite = await req.body
    let filteredItems = [];
    items.forEach(item => {
        for (let i = 0; i < favorite.length; i++){
            if (item.title.indexOf(favorite[i]) > -1) {
                filteredItems.push(item)
            }
        }
    })
    res.json(filteredItems)
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})
