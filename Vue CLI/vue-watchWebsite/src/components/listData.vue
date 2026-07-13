<script setup>
    import { itemList, total } from './store';
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody v-for="(item, i) in itemList" :key="i">
            <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>$ {{ item.price }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">Total</td>
                <td>$ {{ total }}</td>
            </tr>
        </tfoot>

    </table>
</template>

<style scoped>
table {
    min-width: 700px;
    width: 70%;
    margin: auto;
    margin-top: 9px;
    border-collapse: collapse;
}

table tr th {
    padding: 7px;
    border: 1px solid #ccc;
}

table tr td {
    padding: 7px;
    border: 1px solid #ccc;
}
</style>