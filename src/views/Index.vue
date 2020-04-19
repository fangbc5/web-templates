<template>
    <div id="wrap">
        <el-button type="primary" @click="msg">主要按钮</el-button>
    </div>
</template>

<script>
    import { getUser } from '@/api/user';
    export default {
        name: "Index",
        mounted() {
        },
        methods: {
            msg() {
                getUser().then(res => {
                    this.$message(res.data);
                }).catch(aaa=> {
                    this.$message(aaa);
                })
            }
        }
    }
</script>

<style scoped>

</style>
