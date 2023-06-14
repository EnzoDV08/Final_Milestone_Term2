// cart = () => {
//     let cartTotal = JSON.parse(localStorage.getItem('key'))
//     console.log(cartTotal.length);
//     let totalOrder = document.getElementById ("totalOrder");
//     totalOrder.innerHTML += `
        
//         <div class="card">
//             ${cartTotal.length}
//         </div>`
// }

bun1 = () => {   
    let subOrder = [
        {subName: 'Twins', subSize: 'bigg', subBase: 'bread', subPrice: 46, subToppings:['meat', 'letace' ]}
    ]

    let oldArray = JSON.parse(localStorage.getItem('subOrders'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('subOrders', JSON.stringify(subOrder))
    } else {
        let newArray = subOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray))
    }

}

bun2 = () => {   
    let subOrder = [
        {subName: 'Sloppy Jo', subSize: 'bigg', subBase: 'asd', subPrice: 50, subToppings:['chillies' , 'tamato' , ' cucumber']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('subOrders'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('subOrders', JSON.stringify(subOrder))
    } else {
        let newArray = subOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray))
    }
    //localStorage.clear();
}

bun3 = () => {   
    let subOrder = [
        {subName: 'Tamato Feast', subSize: 'bigg', subBase: 'asd', subPrice: 49, subToppings:['chillies' , 'tamato' , ' letace']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('subOrders'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('subOrders', JSON.stringify(subOrder))
    } else {
        let newArray = subOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray))
    }
    //localStorage.clear();
}

bun4 = () => {   
    let subOrder = [
        {subName: 'Onion Meat', subSize: 'bigg', subBase: 'asd', subPrice: 34, subToppings:['chillies' , 'tamato' , ' cucumber']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('subOrders'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('subOrders', JSON.stringify(subOrder))
    } else {
        let newArray = subOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray))
    }
    //localStorage.clear();
}

bun5 = () => {   
    let subOrder = [
        {subName: 'Just Meat', subSize: 'bigg', subBase: 'asd', subPrice: 25, subToppings:['chillies' , 'tamato' , ' cucumber']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('subOrders'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('subOrders', JSON.stringify(subOrder))
    } else {
        let newArray = subOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray))
    }
    //localStorage.clear();
}

bun6 = () => {   
    let subOrder = [
        {subName: 'Something Meaty', subSize: 'bigg', subBase: 'asd', subPrice: 40, subToppings:['chillies' , 'tamato' , ' cucumber']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('subOrders'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('subOrders', JSON.stringify(subOrder))
    } else {
        let newArray = subOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray))
    }
    //localStorage.clear();
}

bun7 = () => {   
    let subOrder = [
        {subName: 'Meat Splitter', subSize: 'bigg', subBase: 'asd', subPrice: 42, subToppings:['chillies' , 'tamato' , ' cucumber']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('subOrders'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('subOrders', JSON.stringify(subOrder))
    } else {
        let newArray = subOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray))
    }
    //localStorage.clear();
}

bun8 = () => {   
    let subOrder = [
        {subName: 'Breakfast Feast', subSize: 'bigg', subBase: 'asd', subPrice: 30, subToppings:['chillies' , 'tamato' , ' cucumber']}
    ]

    let oldArray = JSON.parse(localStorage.getItem('subOrders'))
    // console.log(oldArray);

    if(oldArray === null){
       console.log('error');
       localStorage.setItem('subOrders', JSON.stringify(subOrder))
    } else {
        let newArray = subOrder.concat(oldArray);
        console.log(newArray);
        localStorage.setItem('subOrders', JSON.stringify(newArray))
    }
    //localStorage.clear();
}
