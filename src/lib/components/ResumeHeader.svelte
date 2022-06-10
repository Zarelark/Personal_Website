<script>
    import { resumeInfo } from '$lib/stores/resumeInfo';
</script>

<h1 class=name>{$resumeInfo.basics.name.toUpperCase()}</h1>
<h2 class=label>{$resumeInfo.basics.label}</h2>

<style lang="scss">
    @use "./src/lib/styles/vars.scss";

    .name{
        margin-bottom: 0;
        padding-bottom: 0;
        font-size: 45px;
    }

    .label{
        margin-top: 0;
        font-weight: 200;
        font-size: 20px;        
    }
</style>