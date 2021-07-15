<template>
    <div class="numberPad">
        <div class="output">金额</div>
        <label class="wrapperInput" >
            <input type="number"   autofocus placeholder="请输入金额￥" @input="onValueChange($event.target.value)" >
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        output = '0';
        inputContent(event:MouseEvent){
            if(this.output.length >=16){
                return
            }
            const button = event.target as HTMLButtonElement;
            const input = button.textContent as string;
            if(this.output ==='0'){
                if('0123456789'.indexOf(input)>=0){
                    this.output = input
                    return
                }
            }
            if(this.output.indexOf('.')>=0){
                if(input === '.'){
                    return
                }
            }
            this.output += input
        }
        remove(){
            if(this.output.length === 1){
                this.output = '0'
            }else{
                this.output = this.output.slice(0,-1)
            }
        }
        clear(){
            this.output = '0'
        }
        ok(){
            this.$emit('update:value',this.output)
            this.$emit('submit',this.output)
            this.output = '0'
        }
        onValueChange(value:string){
            this.$emit('update:value',value)
        }
    }
</script>

// <style scoped lang="scss">
    @import '~@/assets/styles/hepler.scss';
   .numberPad{
       display:flex;
       justify-content: space-between;
       align-items: center;
       padding: 16px;
       /*box-shadow: 0 2px 3px rgba(0,0,0,0.2);*/
       border-bottom: 1px solid #dddada;
       > .output{}
       >.wrapperInput{
           > input{
               background:transparent;
               border:none;
               color:red;
               &:focus{
                   outline: none;
               }
               &[placeholder]{
                   text-align: right;
               }
           }
       }
   }
</style>