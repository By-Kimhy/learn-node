<template>
    <div class="menu-bar">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.menu-bar {
    width: 81%;
    display: flex;
    margin: auto;
    background-color: salmon;
}

.menu-bar ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.menu-bar ul li a {
    display: block;
    padding: 15px;
    font-size: 18px;
    text-decoration: none;
    color: white;
}

.menu-bar ul li a:hover {
    background-color: saddlebrown; 
}
.menu-bar ul li a.router-link-active{
    background-color: saddlebrown;
}
</style>