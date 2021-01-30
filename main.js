const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con vue',
        frutas: [
            { nombre: 'Pera', cantidad: 10 },
            { nombre: 'Manzana', cantidad: 0 },
            { nombre: 'Mango', cantidad: 11 },
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta: function () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: this.numeroFruta
            })
            this.nuevaFruta = ''
            this.numeroFruta = ''
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (const fruta of this.frutas) {
                this.total = this.total + fruta.cantidad
            }
            return this.total
        }
    }
});