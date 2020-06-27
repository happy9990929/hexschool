import '../css/index.sass';

const axios = require('axios');

class Item {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.category = data.category;
        this.content = data.content;
		this.description = data.discription || null;
        this.enabled = data.enabled;
        this.imageUrl = data.imageUrl;
        this.origin_price = data.origin_price;
        this.price = data.price;
        this.unit = data.unit;
    }
}


let token = 'TDfKnFfn2By6EGVp8c7mRAeFIt8DlwpnzkBjMeje2vY9nMFiCjYyqqYcgsrT'
axios.defaults.headers['Authorization'] = `Bearer ${ token }`;
let shopitems = {
    data: [],
    api: {
        base: 'https://course-ec-api.hexschool.io/api/',
        uuid: 'dd62b88f-6f23-42a4-8551-b1cb4552bb3e',
        getAllData: '/admin/ec/products',
        createData: '/admin/ec/product',
        update: '/admin/ec/product/',
        deleteData: '/admin/ec/product/',
    },
	getData: function() {
		let vm = this
		axios.get(`${ vm.api.base }${ vm.api.uuid }${ vm.api.getAllData }`)
			.then( (resp) => resp.data )
			.then((data) => {
				data.data.forEach((el) => {
					this.data.push(new Item(el))
				})
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => vm.renderView())
    },
    /* 渲染畫面 */
	renderView: function() {
        let vm = this;
		let item = '';
		this.data.forEach((el, index) => {
			item += `
				<div class="item" data-id=${ el.id }>
					<div class="pic">
						<img src="${ el.imageUrl }" alt="" srcset="">
					</div>
					<div class="detail">
                        <div class="cat">${ el.category }</div>
                        <div class="title">
                            ${ el.title }
                        </div>
						<div class="descript">${ el.content }</div>
					</div>
					<div class="price-block">
						<span class="price">NT$${ el.price }</span>
						<span class="origin-price strike">NT$${ el.origin_price }</span>
                    </div>
                    <div class="btn">
                        <!--<button class="addCart">加入購物車</button>-->
                        <button class="updatePage" data-index=${index}>更新</button>
                        <button class="delete">刪除</button>
                    </div>
				</div>
			`
		})
        document.querySelector('#item-list').innerHTML = item
        let descript = document.querySelectorAll('.descript');
        descript.forEach((item) => {
            let text = item.innerText;
            if (text.length > 30) {
                item.innerText = text.substring(0, 29) + '...';
            }
        })
        document.querySelectorAll('.updatePage').forEach((item) => {
            console.log('1')
            item.addEventListener('click', vm.updateItem, false);
        })
        document.querySelectorAll('.delete').forEach((item) => {
            item.addEventListener('click', vm.deleteItem);
        })
    },
    /* 更新商品 */
    updateItem (e) {
        let vm = shopitems;
        let index = e.target.dataset.index;
        let itemObj = vm.data[index];
        document.querySelector('#newDataPage #title').value = itemObj.title;
		document.querySelector('#newDataPage #category').value = itemObj.category;
		document.querySelector('#newDataPage #content').value = itemObj.content;
		document.querySelector('#newDataPage #description').value = itemObj.description;
		document.querySelector('#newDataPage #origin_price').value = itemObj.origin_price;
		document.querySelector('#newDataPage #price').value = itemObj.price
		document.querySelector('#newDataPage #imageUrl').value = itemObj.imageUrl;
        document.querySelector('#newDataPage #enable').checked = itemObj.enable;
        document.querySelector('#newDataPage').classList.toggle('hide');
        document.querySelector('#newDataPage #update').classList = ''
        document.querySelector('#newDataPage #update').dataset.id = itemObj.id;
        document.querySelector('#newDataPage .page-title span').innerHTML= '更新'
        if(!document.querySelector('#newDataPage #create').classList.value) {
            document.querySelector('#newDataPage #create').classList.toggle('hide');
        }
        
    },
    /* 刪除商品 */
    deleteItem (e) {
        let vm = shopitems;
        console.log(vm)
        let id = e.target.parentNode.dataset.id || e.target.parentNode.parentNode.dataset.id
        axios.delete(`${ vm.api.base }${ vm.api.uuid }${ vm.api.deleteData }${ id }`)
            .then((resp) => resp.message)
            .then((msg) => {
                console.log(msg)
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

window.addEventListener('click', function(e) {
    if(e.target.id == 'addField' || e.target.classList.value == 'updatePage'){}
    else{
        if (!document.querySelector('#newDataPage').classList.value) {
            document.querySelector('#newDataPage').classList.toggle('hide');
        }
    }
})
/* add new field page */
document.querySelector('#newDataPage').addEventListener('click', function(e) {
    e.stopPropagation();
})
document.querySelector('#addField').addEventListener('click', function() {
    document.querySelector('#newDataPage').classList.toggle('hide');
    document.querySelector('#newDataPage .page-title span').innerHTML= '新增'
    document.querySelector('#newDataPage #create').classList = ''
    if(!document.querySelector('#newDataPage #update').classList.value) {
        document.querySelector('#newDataPage #update').classList.toggle('hide');
    }
})
document.querySelector('#imageUrl').addEventListener('change', function() {
	document.querySelector('#preview').src = document.querySelector('#imageUrl').value
})
/* end */

document.querySelector('#newDataPage').addEventListener('click', function(e) {
    let action = e.target.dataset.action;
    let id = e.target.dataset.id 
    switch (action) {
        case 'create':
            createData();
            break;
        case 'update':
            updateData(id);
            break;
    }
})
document.querySelectorAll('#newDataPage .required').forEach((item) => {
    item.addEventListener('blur', function(e) {
        console.log(e)
        if (e.target.value) {
            removeWarning(e.target);
        } else {
            addWarning(e.target);
        }
    })
})

const createData = () => {
    if (!document.querySelector('#newDataPage #title').value) {
        document.querySelector('#newDataPage #title').focus();
        addWarning(document.querySelector('#newDataPage #title'));
        return false;
    }
    if (!document.querySelector('#newDataPage #category').value) {
        document.querySelector('#newDataPage #category').focus();
        addWarning(document.querySelector('#newDataPage #category'));
        return false;

    }
    if (!document.querySelector('#newDataPage #content').value) {
        document.querySelector('#newDataPage #content').focus();
        addWarning(document.querySelector('#newDataPage #content'));
        return false;
    }
    if (!document.querySelector('#newDataPage #description').value) {
        document.querySelector('#newDataPage #description').focus();
        addWarning(document.querySelector('#newDataPage #description'));
        return false;
    }
    let data = {
        title: document.querySelector('#newDataPage #title').value,
        category: document.querySelector('#newDataPage #category').value,
        content: document.querySelector('#newDataPage #content').value,
        description: document.querySelector('#newDataPage #description').value,
        origin_price: document.querySelector('#newDataPage #origin_price').value,
        price: document.querySelector('#newDataPage #price').value,
        imageUrl: [
            document.querySelector('#newDataPage #imageUrl').value
        ],
        enable: document.querySelector('#newDataPage #enable').checked
    }
    axios.post(`${ shopitems.api.base }${ shopitems.api.uuid }${ shopitems.api.createData}`, data)
        .then((resp) => resp)
        .then((data) => {
            console.log(data);
            document.querySelector('#newDataPage').classList.toggle('hide');
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => shopitems.getData())
}

const updateData = (id) => {
    let data = {}
    let title = document.querySelector('#newDataPage #title').value;
	let category = document.querySelector('#newDataPage #category').value;
	let content = document.querySelector('#newDataPage #content').value;
	let description = document.querySelector('#newDataPage #description').value;
	let origin_price = document.querySelector('#newDataPage #origin_price').value;
	let price = document.querySelector('#newDataPage #price').value;
    let imageUrl = []
    imageUrl.push(document.querySelector('#newDataPage #imageUrl').value);
    let enable = document.querySelector('#newDataPage #enable').checke;
    if (title) data['title'] = title;
    if (category) data['category'] = category;
    if (content) data['content'] = content;
    if (description) data['description'] = description;
    if (origin_price) data['origin_price'] = origin_price;
    if (price) data['price'] = price;
    if (imageUrl) data['imageUrl'] = imageUrl;
    axios.patch(`${ shopitems.api.base}${shopitems.api.uuid}${ shopitems.api.update}${id}`, data)
        .then((resp) => resp)
        .then((data) => {
            console.log(data);
            document.querySelector('#newDataPage').classList.toggle('hide');
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(()=> shopitems.getData());
}
const addWarning = (item) => {
    let nodeCollection = [...item.parentNode.children];
    if (!nodeCollection.filter((el) => el.id == 'warning').length) {
        let span = document.createElement('span');
        span.id = 'warning';
        span.style= 'color: red';
        span.innerHTML = 'required!';
        item.parentNode.appendChild(span);
    }
}
const removeWarning = (item) => {
    let nodeCollection = [...item.parentNode.children];
    if (nodeCollection.filter((el) => el.id == 'warning').length>0) {
        item.parentNode.removeChild(document.querySelector('#warning'));
    }
}
shopitems.getData();