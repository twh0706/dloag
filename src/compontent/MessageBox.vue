<!--组件模板-->
<template>
    <div class="message-box">
        <div class="content">
            <div class="title">{{title}}</div>
            <div class="btns">
                <div @click="$emit('cancel')">取消</div>
                <div @click="$emit('confirm')">确定</div>
            </div>
        </div>
    </div>
</template>

<!--组件业务逻辑-->
<script type="text/babel">
    export default {
        props:['title']
    }
</script>

<!--组件样式-->
<style>
    .message-box{
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .message-box .content{
        background-color: white;
        padding: 50px;
        line-height: 50px;
    }
    .message-box .content .title{
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }
    .message-box .content .btns{
        display: flex;
        align-items: center;
    }
    .message-box .content .btns div{
        flex: 1;
        text-align: center;
    }
    .message-box .content .btns div:last-child{
        color: red;
    }


</style>