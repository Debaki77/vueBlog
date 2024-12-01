<template>
    <div class="places-container">
        <b-card v-for="place in places" :key="place.index" :title="place.title" :img-src="place.image" img-alt="Image"
            img-top tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
                {{ place.description }}
            </b-card-text>
            <b-card-text>
                <strong>Address:</strong> {{ place.address }}
            </b-card-text>
            <b-button variant="primary">View More</b-button>
        </b-card>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "UserPlace",
    data() {
        return {
            userId: "",
            places: [
                // {
                //     index: "1",
                //     title: "Splitsvilla",
                //     description: "A beautiful villa with breathtaking sunset views.",
                //     address: "Sukute",
                //     image: "https://via.placeholder.com/300x200",
                // },
                // {
                //     index: "2",
                //     title: "Lakeside",
                //     description: "Peaceful cabin near the lake for a perfect getaway.",
                //     address: "Pokhara",
                //     image: "https://via.placeholder.com/300x200",
                // },
            ],
        };
    },
    computed: {
        token() {
            return this.$store.getters.token;
        },
    },
    methods: {
        getUserPlace() {
            const url = `http://localhost:90/api/places/user/${this.userId}`;
            const token = `Bearer ${this.token}`;
            axios.get(url, {
                headers: {
                    Authorization: token,
                },
            })
                .then((response) => {
                    this.places = response.data.places
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
    created() {
        this.userId = this.$route.params.id;
        this.getUserPlace();
    },
};
</script>

<style>
/* Container Styling */
.places-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    background-color: #f4f4f9;
}

/* Card Styling */
.place-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.place-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Button Styling */
.details-button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.details-button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}
</style>
