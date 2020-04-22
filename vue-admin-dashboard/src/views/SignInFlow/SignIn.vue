<template>
    <div class="container">
        <div class="request">Don't have an account?
        <router-link to="/request">Request an account</router-link>
        </div>
        <div class="login">
            <img src="../../assets/DCHQ.svg" alt="">
            <h4>Sign into Design + Code HQ</h4>
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <button>Sign In</button>
            <router-link to="/recover">Forgot the password?</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn"
    }
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .login {
        width: 400px;
    }
    .request {
        position: absolute;
        top: 40px;
        right: 40px;
        color: rgba(255, 255, 255, 0.3);

        a {
            color: white;
        }
    }
    h4 {
        margin: 0;
        font-weight: bold;
        font-size: 24px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
    input {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        border-radius: 4px;
        height: 60px;
        width: 100%;
        padding-left: 20px;
        margin-top: 20px;
        font-size: 20px;
        color: white;

        &::placeholder {
            color: rgba(255, 255, 255, 0.3);
        }
    }
    button {
        background: #56CCF2;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        border: none;

        height: 60px;
        width: 100%;
        font-size: 20px;
        color: white;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    a {
        text-decoration: none;
        line-height: 25px;
        /* identical to box height */
        text-align: center;
        color: rgba(255, 255, 255, 0.3);
    }
</style>
