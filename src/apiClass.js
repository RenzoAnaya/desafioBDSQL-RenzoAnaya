import knex from "knex";

console.log('munianio')
console.log(productos)


class Api {
    constructor(options, table){
        this.kanex = kanex(options)
        this.table = table
    };


async findAll(){
    try{
      const todos = await this.kanex.from(this.table).select("*")
      return todos;
    } catch(error){
        throw new Error(`Error: ${error}`);
    }
}

async findById(id){

    try{
        const elemento = await this.knex.from(this.table).select("*").where('id',id);
        return elemento
    }catch(error){
        throw new Error(`Error: ${error}`)
    }

}

async create(obj){
    try{
        const nuevoElemento = await this.knex.from(this.table).insert(obj)
        return nuevoElemento
    }catch(error){
        throw new Error(`Error al guardar : ${error}`)
    }
}




async deleteById(id){
    try {
        const elementoBorrado = await this.knex.from(this.table).where('id',id).del()
        const index = todos.findIndex(e => e.id == id)
        if(index<0){
            return false
        }
        todos.splice(index, 1);
        await fs.promises.writeFile(this.rutaBD, JSON.stringify(todos))
        
        return id

    } catch (error) {
        throw new Error(`Error al borrar : ${error} `)
        
    }
}




// async agregarAlCarrito(obj,id){
//     try{
//         const todos = await this.findAll()

//         const index = todos.findIndex(e=> e.id == id)
//         todos[index].productos.push(obj);
        

//         await fs.promises.writeFile(this.rutaBD, JSON.stringify(todos))

//         return id
//     }catch(error){
//         throw new Error(`Error al guardar : ${error}`)
//         console.log(error)
//     }
// }



// async deleteByProduct(id, id_prod){
//     try {
//         const todos = await this.findAll()
//         const index = todos.findIndex(e => e.id == id)
//         const indexProduct = todos[index].productos.findIndex(a => a.id == id_prod)
//         if(indexProduct < 0){
//             return false
//         }
//         todos[index].productos.splice(indexProduct, 1);
//         await fs.promises.writeFile(this.rutaBD, JSON.stringify(todos))

//         return id_prod

//     } catch (error) {
//         throw new Error(`Error al borrar : ${error} `)
        
//     }
// }



// async updateProduct(id, product){
//     console.log('Actualizando...', product);
//     const todos = await this.findAll();
//     const index = todos.findIndex(e => e.id == id)
//     todos[index] = product;
//     await fs.promises.writeFile(this.rutaBD, JSON.stringify(todos))
//     console.log('Actualizado');
    
// }


}

module.exports = Api;