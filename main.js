const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con vue',
        frutas: [
            { nombre: 'Pera', cantidad: 10 },
            { nombre: 'Manzana', cantidad: 0 },
            { nombre: 'Mango', cantidad: 11 },
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFruta: function () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
        }
    }
});