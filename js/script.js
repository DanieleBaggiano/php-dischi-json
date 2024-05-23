const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Brani Spotify",
            items: []
        }
    },
    created() {
        axios
            .get("http://localhost/boolean/php-dischi-json/server.php")
            .then((resp) => {
                console.log(resp);
                this.items = resp.data.results;
            });
    },
}).mount("#app");