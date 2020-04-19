<template>
    <div>
        <el-container style="height: 100%; width: 100%; border: 1px solid blue">
            <el-header></el-header>
            <el-aside>

            </el-aside>
            <el-main></el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Container",
        mounted() {
            console.log(document.documentElement.clientWidth);
            console.log(document.documentElement.clientHeight);
        }
    }
</script>

<style scoped>

</style>
