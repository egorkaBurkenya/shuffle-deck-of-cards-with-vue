const Card = {
    props: ["props"],
    template: `
    <div class="card">
        <div class="icon1">
        <img :src="'../icons/' + icons[this.props.type]">
        </div>
        <h1 class="number">{{this.props.number}}</h1>
        <div class="icon2">
        <img :src="'../icons/' + icons[this.props.type]">
        </div>
    </div>
    `,
    data() {
        return {
            icons: {
                "черви": "черви.png",
                "буби": "буби.svg",
                "крести": "крести.png",
                "пики": "пики.png",
                "джокер": "джокер.png"
            },
        }
    },
}

export {Card}